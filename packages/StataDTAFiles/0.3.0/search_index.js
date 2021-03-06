var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StataDTAFiles-1",
    "page": "Readme",
    "title": "StataDTAFiles",
    "category": "section",
    "text": "(Image: Lifecycle) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Read DTA files from Stata.This package provides low-level functions for reading (and in the future, writing) the DTA format that Stata uses for data files, written in native Julia, with no external dependencies.You can use this package directly, or as a basis for implementing high-level routines that read to DataFrames, etc."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The primary entry point/recommended usage is isopen(DTAFile, ...) do dta\n    ...\nendwhere the method for open would open the DTA file, read some metadata (byte order, layout, etc), and provide an iterator for the rows.Date conversion is provided by elapsed_days.See the unit tests for examples."
},

{
    "location": "#Caveats-1",
    "page": "Readme",
    "title": "Caveats",
    "category": "section",
    "text": "work in progress, API is subject to change,\nvariable-length strings (StrL) not yet supported,\ncurrently format 118 is supported, 119 is planned,\ntest coverage is incomplete,\nsome metadata reading is WIP."
},

{
    "location": "#Documentation-of-Stata-DTA-format-1",
    "page": "Readme",
    "title": "Documentation of Stata DTA format",
    "category": "section",
    "text": "Stata 15 help\nLibrary of Congress on Stata Data Format (.dta), Version 118"
},

{
    "location": "autodocs/#StataDTAFiles.DATANUMTYPES",
    "page": "Docstrings",
    "title": "StataDTAFiles.DATANUMTYPES",
    "category": "constant",
    "text": "Number types is Stata that correspond to native Julia types, and are denoted by the latter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.DTAFile",
    "page": "Docstrings",
    "title": "StataDTAFiles.DTAFile",
    "category": "type",
    "text": "struct DTAFile{T<:NamedTuple, B<:StataDTAFiles.ByteOrderIO}\n\nRepresentation of a Stata DTA file for which everything except the data itself has been read.\n\nThe data (rows) can be read as NamedTuples, using the iteration interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.DTAHeader",
    "page": "Docstrings",
    "title": "StataDTAFiles.DTAHeader",
    "category": "type",
    "text": "struct DTAHeader\n\nDTA file header (without the byte order, which is encoded in the corresponding ByteOrderIO.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.EPOCH",
    "page": "Docstrings",
    "title": "StataDTAFiles.EPOCH",
    "category": "constant",
    "text": "Start of the epoch, ie \"day 0\" for most date handling functions in Stata.\n\nnote: Note\nDon\'t use directly, see elapsed_days.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.EXTRANUMTYPES",
    "page": "Docstrings",
    "title": "StataDTAFiles.EXTRANUMTYPES",
    "category": "constant",
    "text": "Number types which are read by readnum, in addition to DATANUMTYPES.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.READNUMTYPES",
    "page": "Docstrings",
    "title": "StataDTAFiles.READNUMTYPES",
    "category": "constant",
    "text": "All number types read by readnum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.STRFSMAXLEN",
    "page": "Docstrings",
    "title": "StataDTAFiles.STRFSMAXLEN",
    "category": "constant",
    "text": "Maximum length of str# (aka strfs) strings in Stata DTA files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.TIMESTAMPFMT",
    "page": "Docstrings",
    "title": "StataDTAFiles.TIMESTAMPFMT",
    "category": "constant",
    "text": "Date format of Stata file timestamps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.decode_variable_type",
    "page": "Docstrings",
    "title": "StataDTAFiles.decode_variable_type",
    "category": "function",
    "text": "decode_variable_type(code)\n\n\nMap the numerical type code in a DTA file to a Julia type.\n\nNote that numeric types use a sentinel for missing values, and thus are decoded as Union{Missing, T} for the corresponding type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.elapsed_days",
    "page": "Docstrings",
    "title": "StataDTAFiles.elapsed_days",
    "category": "function",
    "text": "elapsed_days(Δ)\n\n\nConvert a Stata \"elapsed date\" representation into Date.\n\nCorresponds to the %td format in Stata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.read_formats",
    "page": "Docstrings",
    "title": "StataDTAFiles.read_formats",
    "category": "function",
    "text": "read_formats(boio, header, map)\n\n\nRead the format strings, returning a Vector{String}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.read_sortlist",
    "page": "Docstrings",
    "title": "StataDTAFiles.read_sortlist",
    "category": "function",
    "text": "read_sortlist(boio, header, map)\n\n\nRead the sortlist, a vector if integers which contains column indexes for nested sorting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.read_variable_names",
    "page": "Docstrings",
    "title": "StataDTAFiles.read_variable_names",
    "category": "function",
    "text": "read_variable_names(boio, header, map)\n\n\nRead variable names, returning a tuple of Symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.read_variable_types",
    "page": "Docstrings",
    "title": "StataDTAFiles.read_variable_types",
    "category": "function",
    "text": "read_variable_types(boio, header, map)\n\n\nRead variable types from a DTA file. Return a tuple of Julia types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StataDTAFiles.readchompedstring",
    "page": "Docstrings",
    "title": "StataDTAFiles.readchompedstring",
    "category": "function",
    "text": "readchompedstring(boio, len)\n\n\nRead chars into a buffer of length len, find the terminating \" \" (if any) and truncate, returning a string.\n\n\n\n\n\nreadchompedstring(boio, T)\n\n\nRead length (of type T), then read and chomp the string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StataDTAFiles.ByteOrderStataDTAFiles.ByteOrderIOStataDTAFiles.DATANUMTYPESStataDTAFiles.DTAFileStataDTAFiles.DTAHeaderStataDTAFiles.DTAMapStataDTAFiles.EPOCHStataDTAFiles.EXTRANUMTYPESStataDTAFiles.LSFStataDTAFiles.MAXFLOAT32StataDTAFiles.MAXFLOAT64StataDTAFiles.MAXINT16StataDTAFiles.MAXINT32StataDTAFiles.MAXINT8StataDTAFiles.MSFStataDTAFiles.READNUMTYPESStataDTAFiles.STRFSMAXLENStataDTAFiles.StataDTAFilesStataDTAFiles.TIMESTAMPFMTStataDTAFiles._readrowStataDTAFiles.decode_missingStataDTAFiles.decode_variable_typeStataDTAFiles.elapsed_daysStataDTAFiles.evalStataDTAFiles.includeStataDTAFiles.read_formatsStataDTAFiles.read_headerStataDTAFiles.read_mapStataDTAFiles.read_sortlistStataDTAFiles.read_variable_namesStataDTAFiles.read_variable_typesStataDTAFiles.readbyteorderStataDTAFiles.readchompedstringStataDTAFiles.readfieldStataDTAFiles.readfixedstringStataDTAFiles.readnumStataDTAFiles.readrowStataDTAFiles.verifytag"
},

]}
