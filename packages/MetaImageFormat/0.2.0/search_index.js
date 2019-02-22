var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MetaImageFormat-1",
    "page": "Readme",
    "title": "MetaImageFormat",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This package supports the MetaImage file format for the Julia language.  You can read \"*.mhd\" files usingusing FileIO\nimg = load(\"myimage.mhd\")This package is a work-in-progress, and writing is not yet supported.This implementation was started by copying the NRRD package and was based purely on existing documentation on the MetaImage format. Documentation on the format\'s definition seems somewhat sparse (e.g., which fields are required and which are optional? In what order should they appear in the header? Are certain redundant combinations allowed and other disallowed? ...).  In practice, the format appears to be largely defined by the IO capabilities of ITK and Fiji/ImageJ. In cases where there might be disagreements, one should check the source code of these other projects."
},

{
    "location": "autodocs/#MetaImageFormat.UnknownColor",
    "page": "Docstrings",
    "title": "MetaImageFormat.UnknownColor",
    "category": "type",
    "text": "UnknownColor{T,N}\n\nAn unknown Color. This type gets returned when one of the \"kind\" settings is \"3-color\" or \"4-color\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.arraytype",
    "page": "Docstrings",
    "title": "MetaImageFormat.arraytype",
    "category": "function",
    "text": "arraytype(filename)\n\nParse MetaImage header and call arraytype!(header). See arraytype! for information about the return values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.arraytype!",
    "page": "Docstrings",
    "title": "MetaImageFormat.arraytype!",
    "category": "function",
    "text": "arraytype!(header) -> T, axs, perm, need_bswap\n\nAnalyze the header dictionary to extract the element-type T, size or axes information axs, the permutation perm (if any) that julia should use for \"wrapping\" the read data, and a boolean need_bswap indicating whether the data need to be byte-swapped (to account for differences in endianness). T includes any color information (in which case a dimension of the array will be \"consumed\"). axs will be a Dims-tuple in simple cases, or an Axes tuple (from AxisArrays.jl) if dimensions are labeled or have their spatial information (pixelspacing, spacedirections, etc) specified. perm is the permutation needed to move the color data to the first dimension, or an empty tuple if no permutation is required.\n\nThis function may modify the header dictionary (the reason for the ! in the name), so make a copy first if necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.colorant_eltype",
    "page": "Docstrings",
    "title": "MetaImageFormat.colorant_eltype",
    "category": "function",
    "text": "colorant_eltype(C, T) -> Tc\n\nReturn a valid \"inner\" element type Tc for colorant type C. When T != Tc, values must be \"converted\" before they can be interpreted as type C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.fixedtype",
    "page": "Docstrings",
    "title": "MetaImageFormat.fixedtype",
    "category": "function",
    "text": "fixedtype(Traw, header) -> Tu\n\nAttempt to interpret type Traw in terms of FixedPoint numbers. If Traw cannot be interpreted as Normed, Tu = Traw.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.outer_eltype!",
    "page": "Docstrings",
    "title": "MetaImageFormat.outer_eltype!",
    "category": "function",
    "text": "outer_eltype!(header, Traw) -> T, nd, perm\n\nExtract the julia array eltype T, the number of dimensions nd excluding color/complex/vector/matrix element data, and any permutation needed to put the eltype dimension first. Any dimensions in the header corresponding to color (or if \"kind\" is set to one of the vector types) will be \"consumed\" upon exit. Traw is the element type as determined by raw_eltype.\n\nSee also: raw_eltype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.parse_header",
    "page": "Docstrings",
    "title": "MetaImageFormat.parse_header",
    "category": "function",
    "text": "header = parse_header(io)\n\nParse the MetaImage header (an .mhd file). io should be positioned at the beginning of the header file.\n\nSee also: write_header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MetaImageFormat.raw_eltype",
    "page": "Docstrings",
    "title": "MetaImageFormat.raw_eltype",
    "category": "function",
    "text": "raw_eltype(header) -> Traw, need_bswap\nraw_eltype(::Type{T}) -> Traw\n\nGet the \"basic\" element type of the data, e.g., UInt16 or Float32.\n\nThis function does not try to determine whether the image is color (Traw does not contain any color information), nor does it try to interpret Traw as a Normed type.\n\nSee also: outer_eltype!, fixedtype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MetaImageFormat.MetaImageFormatMetaImageFormat.UnknownColorMetaImageFormat.VTupleMetaImageFormat.arraytypeMetaImageFormat.arraytype!MetaImageFormat.axes2spaceMetaImageFormat.checked_sizeMetaImageFormat.chksizeMetaImageFormat.colorant_eltypeMetaImageFormat.evalMetaImageFormat.find_datafileMetaImageFormat.fixedtypeMetaImageFormat.fixedtype_maxMetaImageFormat.get_axesMetaImageFormat.get_sizeMetaImageFormat.includeMetaImageFormat.loadMetaImageFormat.meta_formatMetaImageFormat.meta_parseMetaImageFormat.mymsbMetaImageFormat.outer_eltype!MetaImageFormat.parse_headerMetaImageFormat.parse_typeMetaImageFormat.raw_eltypeMetaImageFormat.space2axesMetaImageFormat.spacingsMetaImageFormat.stream2nameMetaImageFormat.string2typeMetaImageFormat.type2string"
},

]}
