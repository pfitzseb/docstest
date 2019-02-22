var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NRRD-1",
    "page": "Readme",
    "title": "NRRD",
    "category": "section",
    "text": "(Image: NRRD) (Image: NRRD) (Image: Build Status) (Image: codecov.io)Package for reading NRRD files. Implements the  FileIO interface.Originally located in Images.jl"
},

{
    "location": "#Writing-plain-NRRD-headers-1",
    "page": "Readme",
    "title": "Writing plain NRRD headers",
    "category": "section",
    "text": "Normal usage is as easy asimg = load(\"myfile.nrrd\")\nimg = load(\"myfile.nhdr\")\nsave(\"myotherfile.nrrd\", img)However, if you already have a raw binary representing the \"data file\", the FileIO interface isn\'t sufficently flexible for writing just the header. Assuming you want to save \"rich\" axis information, a low-level approach using AxisArrays is the following:using NRRD, FileIO, FixedPointNumbers, AxisArrays, Unitful\nusing Unitful: μm, s\n\n# For a 480x640x200 image with time as the third axis,\n# assuming a pixel spacing of 0.25μm and a framerate of 8fps\naxy = Axis{:y}((1:480)*0.25μm)\naxx = Axis{:x}((1:640)*0.25μm)\naxt = Axis{:time}((1:200)*0.125s)\n\nheader = NRRD.headerinfo(N0f16, (axy, axx, axt))  # assuming N0f16 data\nheader[\"datafile\"] = \"mydata.raw\"\n\nopen(\"mydata.nhdr\", \"w\") do io\n    write(io, magic(format\"NRRD\"))\n    NRRD.write_header(io, \"0004\", header)\nend"
},

{
    "location": "autodocs/#NRRD.UnknownColor",
    "page": "Docstrings",
    "title": "NRRD.UnknownColor",
    "category": "type",
    "text": "UnknownColor{T,N}\n\nAn unknown Color. This type gets returned when one of the \"kind\" settings is \"3-color\" or \"4-color\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.arraytype",
    "page": "Docstrings",
    "title": "NRRD.arraytype",
    "category": "function",
    "text": "arraytype(filename)\n\nParse NRRD header and calls arraytype!(header, version). See arraytype! for information about the return values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.arraytype!",
    "page": "Docstrings",
    "title": "NRRD.arraytype!",
    "category": "function",
    "text": "arraytype!(header, version) -> T, axs, perm, need_bswap\n\nAnalyze the header dictionary to extract the element-type T, size or axes information axs, the permutation perm (if any) that julia should use for \"wrapping\" the read data, and a boolean need_bswap indicating whether the data need to be byte-swapped (to account for differences in endianness). T includes any color information (in which case a dimension of the array will be \"consumed\"). axs will be a Dims-tuple in simple cases, or an Axes tuple (from AxisArrays.jl) if dimensions are labeled or have their spatial information (pixelspacing, spacedirections, etc) specified. perm is the permutation needed to move the color data to the first dimension, or an empty tuple if no permutation is required.\n\nThis function may modify the header dictionary (the reason for the ! in the name), so make a copy first if necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.colorant_eltype",
    "page": "Docstrings",
    "title": "NRRD.colorant_eltype",
    "category": "function",
    "text": "colorant_eltype(C, T) -> Tc\n\nReturn a valid \"inner\" element type Tc for colorant type C. When T != Tc, values must be \"converted\" before they can be interpreted as type C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.fixedtype",
    "page": "Docstrings",
    "title": "NRRD.fixedtype",
    "category": "function",
    "text": "fixedtype(Traw, header) -> Tu\n\nAttempt to interpret type Traw in terms of FixedPoint numbers. The interpretation depends on whether header has a \"sample units\" field of the form:\n\nsample units: <colorspace> <whitepoint>\n\nThere must be a space between colorspace and whitepoint, and colorspace must be one of \"gray\", \"rgb\", \"rgba\", \"hsv\", \"xyz\", or their uppercase variants.  (Other than \"gray\", all of these are supported \"kinds\" values. \"gray\" does not typically correspond to an axis, which is why it isn\'t encoded in \"kinds\".) The presence of any of these words indicates that the data represent an image rather than some other kind of array.\n\nAny other choices are ignored, as \"sample units\" can also be an arbitrary string.\n\nExamples:\n\n# conventional uint8 grayscale\nsample units: gray 255\n\n# a 14-bit grayscale camera (numbers can be represented in hex format)\nsample units: gray 0x3fff\n\n# RGB encoded with float or double\nsample units: rgb (1.0,1.0,1.0)\n\n# RGB encoded with float or double, but using the scaling of uint8\nsample units: rgb (255.0,255.0,255.0)\n\n# conventional XYZ\nsample units: xyz (95.047,100.000,108.883)\n\n# HSV, hue measured in degrees\nsample units: hsv (360, 0, 1)\n\n# HSV, hue normalized to [0, 1]\nsample units: hsv (1, 0, 1)\n\nIf Traw cannot be interpreted as Normed, Tu = Traw.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.outer_eltype!",
    "page": "Docstrings",
    "title": "NRRD.outer_eltype!",
    "category": "function",
    "text": "outer_eltype!(header, Traw) -> T, nd, perm\n\nExtract the julia array eltype T, the number of dimensions nd excluding color/complex/vector/matrix element data, and any permutation needed to put the eltype dimension first. Any dimensions in the header corresponding to color (or if \"kind\" is set to one of the vector types) will be \"consumed\" upon exit. Traw is the element type as determined by raw_eltype.\n\nSee also: raw_eltype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.parse_header",
    "page": "Docstrings",
    "title": "NRRD.parse_header",
    "category": "function",
    "text": "parse_header(io) -> version, header, keyvals, comments\n\nParse the NRRD header (the top of the .nrrd or the separate .nhdr file). io should be positioned just after the initial \"NRRD\" in the file. This reads up to and including the first blank line of the file, so at the end (if this is a properly-formatted NRRD file) io is positioned at the first byte of the data (if present).\n\nOutputs:\n\nversion is a 4-character string, e.g., \"0002\", giving the NRRD version of the header.\nheader is a Dict{String,Any} of field=>setting pairs (the settings are parsed, they are not necessarily strings)\nkeyvals is a Dict{String,String} containing key=>value pairs (NRRD0002 or higher, lines like key:=value; many NRRD files do not contain any of these)\ncomments is an array containing lines of the header that began with # (but with the # and leading whitespace stripped out)\n\nSee also: write_header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.raw_eltype",
    "page": "Docstrings",
    "title": "NRRD.raw_eltype",
    "category": "function",
    "text": "raw_eltype(header) -> Traw, need_bswap\nraw_eltype(::Type{T}) -> Traw\n\nGet the \"basic\" element type of the data, e.g., UInt16 or Float32.\n\nThis function does not try to determine whether the image is color (Traw does not contain any color information), nor does it try to interpret Traw as a Normed type.\n\nSee also: outer_eltype!, fixedtype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NRRD.write_header",
    "page": "Docstrings",
    "title": "NRRD.write_header",
    "category": "function",
    "text": "write_header(io, version, header, [keyvals, [comments]])\n\nWrite an NRRD header, as the top of the .nrrd or the separate .nhdr file. io should be positioned just after the initial \"NRRD\" in the file. This writes the header and a blank line, so that at the end io is positioned at the first byte of the data (if present).\n\nNote that if you\'re writing a header for a \"detached\" data file (separate .nhdr and .raw files), header should contain a \"data file\" or \"datafile\" field storing the name of the .raw file.\n\nInputs:\n\nversion is a 4-character string, e.g., \"0002\", giving the NRRD version of the header, or a integer corresponding to a recognized NRRD header version number\nheader is a Dict{String,Any} of field=>setting pairs (as returned by parse_header)\nkeyvals is a Dict{String,String} containing key=>value pairs (NRRD0002 or higher, lines like key:=value; many NRRD files do not contain any of these)\ncomments is an array containing lines of the header that began with # (but with the # and leading whitespace stripped out)\n\nSee also: parse_header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NRRD.IntFloatNRRD.NRRDNRRD.PTupleNRRD.QStringNRRD.StringPTupleNRRD.UnknownColorNRRD.VTupleNRRD._header_eltype!NRRD.alloctypeNRRD.arraytypeNRRD.arraytype!NRRD.axes2spaceNRRD.axisinfoNRRD.checked_sizeNRRD.chksizeNRRD.colorant_eltypeNRRD.copy_not_nan!NRRD.copy_space!NRRD.evalNRRD.fieldorderNRRD.find_datafileNRRD.fixedtypeNRRD.fixedtype_maxNRRD.get_axesNRRD.get_sizeNRRD.header_eltype!NRRD.headerinfoNRRD.includeNRRD.isdefaultnameNRRD.loadNRRD.myendianNRRD.nrrd_formatNRRD.nrrd_parseNRRD.nrrd_writeNRRD.nrrd_write_eltyNRRD.numberparseNRRD.outer_eltype!NRRD.parse_headerNRRD.parse_typeNRRD.per_axisNRRD.per_spacedimNRRD.raw_eltypeNRRD.safelengthNRRD.saveNRRD.space2axesNRRD.spacingsNRRD.startsteplenNRRD.startstepstopNRRD.startstoplenNRRD.startstopsteplenNRRD.stream2nameNRRD.string2typeNRRD.type2stringNRRD.unit_string_dictNRRD.versionNRRD.version_reqsNRRD.write_headerNRRD.writeversionstr"
},

]}
