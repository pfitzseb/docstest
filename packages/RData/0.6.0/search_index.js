var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RData.jl-1",
    "page": "Readme",
    "title": "RData.jl",
    "category": "section",
    "text": "(Image: Julia 0.6 Status) (Image: Julia 0.7 Status) (Image: Julia 1.0 Status)(Image: Coverage Status) (Image: Build Status) (Image: Build status)Read R data files (.rda, .RData) and optionally convert the contents into Julia equivalents.Can read any R data archive, although not all R types could be converted into Julia.For running R code from Julia see RCall.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "From Julia REPL:Pkg.add(\"RData\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To read R objects from \"example.rda\" file:using RData\n\nobjs = load(\"path_to/example.rda\")The result is a dictionary (Dict{String, Any}) of all R objects stored in \"example.rda\".If convert=true keyword option is specified, load() will try to automatically convert R objects into Julia equivalents:| R object     | Julia object           |  | |–––––––|––––––––––––|–| | named vector, list | DictoVec | DictoVec allows indexing both by element index and by its name, just as R vectors and lists | | vector    | Vector{T} | T is the appropriate Julia type. If R vector contains NA values, they are converted to missing, and the elements type of the resulting Vector is Union{T, Missing}. | factor     | CategoricalArray | CategoricalArrays.jl | | Date     | Dates.Date | | | POSIXct date time | ZonedDateTime | TimeZones.jl | | data frame | DataFrame | DataFrames.jl |If conversion to the Julia type is not supported (e.g. R closure or language expression), load() will return the internal RData representation of the object (RSEXPREC subtype)."
},

{
    "location": "autodocs/#RData.ASCIIIO",
    "page": "Docstrings",
    "title": "RData.ASCIIIO",
    "category": "type",
    "text": "ASCII RData format IO stream wrapper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.BytecodeContext",
    "page": "Docstrings",
    "title": "RData.BytecodeContext",
    "category": "type",
    "text": "Context for reading R bytecode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.DictoVec",
    "page": "Docstrings",
    "title": "RData.DictoVec",
    "category": "type",
    "text": "Container that mimics R vector behaviour. Elements could be accessed either by indices as a normal vector, or (optionally) by string keys as a dictionary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.NativeIO",
    "page": "Docstrings",
    "title": "RData.NativeIO",
    "category": "type",
    "text": "Native binary RData format IO stream wrapper.\n\nTODO write readers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RComplexVector",
    "page": "Docstrings",
    "title": "RData.RComplexVector",
    "category": "type",
    "text": "R vector object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RDAContext",
    "page": "Docstrings",
    "title": "RData.RDAContext",
    "category": "type",
    "text": "RDA (R data archive) reading context.\n\nStores flags that define how R objects are read and converted into Julia objects.\nMaintains the list of R objects that could be referenced later in the RDA stream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RDAIO",
    "page": "Docstrings",
    "title": "RData.RDAIO",
    "category": "type",
    "text": "Abstract RDA format IO stream wrapper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RIntegerVector",
    "page": "Docstrings",
    "title": "RData.RIntegerVector",
    "category": "type",
    "text": "R vector object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RList",
    "page": "Docstrings",
    "title": "RData.RList",
    "category": "type",
    "text": "R vector object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RLogicalVector",
    "page": "Docstrings",
    "title": "RData.RLogicalVector",
    "category": "type",
    "text": "R vector object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RNullableVector",
    "page": "Docstrings",
    "title": "RData.RNullableVector",
    "category": "type",
    "text": "R vector object with explicit NA values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RNumericVector",
    "page": "Docstrings",
    "title": "RData.RNumericVector",
    "category": "type",
    "text": "R vector object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.ROBJ",
    "page": "Docstrings",
    "title": "RData.ROBJ",
    "category": "type",
    "text": "Base class for all R types (objects) that can have attributes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RPairList",
    "page": "Docstrings",
    "title": "RData.RPairList",
    "category": "type",
    "text": "Representation of R\'s paired list-like structures (LISTSXP, LANGSXP). Unlike R which represents these as singly-linked list, RPairList uses vector representation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RSEXPREC",
    "page": "Docstrings",
    "title": "RData.RSEXPREC",
    "category": "type",
    "text": "Base class for RData internal representation of all R types. SEXPREC stands for S (R predecessor) expression record.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RStringVector",
    "page": "Docstrings",
    "title": "RData.RStringVector",
    "category": "type",
    "text": "R vector object with explicit NA values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RSymbol",
    "page": "Docstrings",
    "title": "RData.RSymbol",
    "category": "type",
    "text": "R symbol. Not quite the same as a Julia symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RVEC",
    "page": "Docstrings",
    "title": "RData.RVEC",
    "category": "type",
    "text": "Base class for all R vector-like objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.RVector",
    "page": "Docstrings",
    "title": "RData.RVector",
    "category": "type",
    "text": "R vector object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.R_NA_FLOAT64_LOW",
    "page": "Docstrings",
    "title": "RData.R_NA_FLOAT64_LOW",
    "category": "constant",
    "text": "Non-standard addition to NaN bit pattern to discriminate NA from NaN. 0x000007a2 == UInt32(1954) (I assume 1954 is the year of Ross\'s birth or something like that.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.SXTypeInfo",
    "page": "Docstrings",
    "title": "RData.SXTypeInfo",
    "category": "type",
    "text": "Definition of R type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.SXTypes",
    "page": "Docstrings",
    "title": "RData.SXTypes",
    "category": "constant",
    "text": "Maps R type id (SXType) to its SXTypeInfo.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.XDRIO",
    "page": "Docstrings",
    "title": "RData.XDRIO",
    "category": "type",
    "text": "XDR (machine-independent binary) RData format IO stream wrapper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.rdaio",
    "page": "Docstrings",
    "title": "RData.rdaio",
    "category": "function",
    "text": "Creates RDAIO wrapper for io stream depending on its format specified by formatcode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RData.registerref!",
    "page": "Docstrings",
    "title": "RData.registerref!",
    "category": "function",
    "text": "Register R object, so that it could be referenced later (by its index in the reference table).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RData.ANYSXPRData.ASCIIIORData.ATTRLANGSXPRData.ATTRLISTSXPRData.BASEENV_SXPRData.BASENAMESPACE_SXPRData.BCODESXPRData.BCREPDEFRData.BCREPREFRData.BUILTINSXPRData.BYTECODELANG_TypesRData.BytecodeContextRData.CHARSXPRData.CHARSXPropsRData.CLASSREFSXPRData.CLOSXPRData.CPLXSXPRData.DOTSXPRData.DictoVecRData.EMPTYENV_SXPRData.ENVSXPRData.EXPRSXPRData.EXTPTRSXPRData.FREESXPRData.FUNSXPRData.GENERICREFSXPRData.GLOBALENV_SXPRData.HashRData.INTSXPRData.LANGSXPRData.LGLSXPRData.LISTSXPRData.LONG_VECTOR_SUPPORTRData.MISSINGARG_SXPRData.NAMESPACESXPRData.NEWSXPRData.NILSXPRData.NILVALUE_SXPRData.NativeIORData.PACKAGESXPRData.PERSISTSXPRData.PROMSXPRData.RAWSXPRData.RBuiltinRData.RBytecodeRData.RClosureRData.RComplexVectorRData.RDAContextRData.RDAIORData.RDATagRData.RDataRData.RDummyRData.REALSXPRData.REFSXPRData.REnvironmentRData.RExtPtrRData.RIntegerVectorRData.RListRData.RLogicalVectorRData.RNamespaceRData.RNullableVectorRData.RNumericVectorRData.ROBJRData.RPackageRData.RPairListRData.RPromiseRData.RRawRData.RS4ObjRData.RSEXPRECRData.RStringRData.RStringVectorRData.RSymbolRData.RVECRData.RVecLengthRData.RVectorRData.R_Date_ClassRData.R_NA_FLOAT64RData.R_NA_FLOAT64_LOWRData.R_NA_INT32RData.R_NA_STRINGRData.R_POSIXct_ClassRData.S4SXPRData.SPECIALSXPRData.STRSXPRData.SXTypeRData.SXTypeInfoRData.SXTypesRData.SYMSXPRData.UNBOUNDVALUE_SXPRData.VECSXPRData.WEAKREFSXPRData.XDRIORData._unix2zdtRData.classRData.decompressRData.emptyhashRData.emptyhashkeyRData.emptystrvecRData.evalRData.fileio_loadRData.getattrRData.getjuliatzRData.hasattrRData.hasdimRData.hasdimnamesRData.hasnamesRData.hastagRData.includeRData.inheritsRData.int2verRData.isdataframeRData.isfactorRData.isnaRData.isna_float64RData.isobjRData.jlvecRData.loadRData.na2zeroRData.name2indexRData.r2juliatzRData.rdaioRData.rdays2dateRData.readS4RData.readattrsRData.readbuiltinRData.readbytecodeRData.readbytecodeconstsRData.readbytecodecontentsRData.readbytecodelangRData.readcharacterRData.readcharsxpropsRData.readclosureRData.readcomplexRData.readdummyRData.readenvRData.readextptrRData.readfloat64RData.readfloatorNARData.readfloatorNA!RData.readint32RData.readintegerRData.readintorNARData.readitemRData.readlangRData.readlengthRData.readlistRData.readlogicalRData.readnameRData.readnamespaceRData.readncharsRData.readnilRData.readnumericRData.readpackageRData.readpairedobjectsRData.readpairlistRData.readpromiseRData.readrawRData.readrefRData.readstringRData.readsymbolRData.readuint32RData.readuint8RData.readunsupportedRData.registerref!RData.row_namesRData.sexp2juliaRData.sxtype"
},

]}
