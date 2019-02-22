var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DICOM.jl-1",
    "page": "Readme",
    "title": "DICOM.jl",
    "category": "section",
    "text": "Julia interface for parsing/writing DICOM files(Image: Build Status) (Image: Code Coverage)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Installation To install the package:julia> using Pkg\njulia> Pkg.add(\"DICOM\")Load the package byjulia> using DICOMReading DataRead a DICOM file byjulia> dcmData = dcm_parse(\"path/to/dicom/file\")The data in dcmData is structured as a dictionary, and individual DICOM elements can be accessed by their hex tag.  For example, the hex tag of \"Pixel Data\" is 7FE0,0010, and it can be accessed in Julia by dcmData[(0x7FE0,0x0010)] or by dcmData[tag\"Pixel Data\"]. Writing DataData can be written to a DICOM file byjulia> dcm_write(\"path/to/output/file\", dcmData)Additional NotesDICOM files use either explicit or implicit value representation (VR). For implicit files, DICOM.jl will use a lookup table to guess the VR from the DICOM element\'s hex tag. For explicit files, DICOM.jl will read the VRs from the file.  A user-defined dictionary can be supplied to override the default lookup table   For example, the \"Instance Number\" - tag (0x0020,0x0013) - is an integer (default VR = \"IS\"). We can read this as a float by setting the VR to \"DS\" by:   myVR = Dict( (0x0020,0x0013) => \"DS\" )   dcmData = dcm_parse(\"path/to/dicom/file\", dVR = myVR)   Now dcmData[(0x0020,0x0013)] will return a float instead of an integer.\nIt is possible to skip an element by setting its VR to \"\".    For example, we can skip reading the Instance Number by   myVR = Dict( (0x0020,0x0013) => \"\" )   dcmData = dcm_parse(\"path/to/dicom/file\", dVR = myVR)   and now dcmData[(0x0020,0x0013)] will return an error because the key (0x0020,0x0013) doesn\'t exist - it was skipped during reading.\nThe user-supplied VR can contain a master VR with the tag (0x0000,0x0000) which will be used whenever DICOM.jl is unable to guess the VR on its own. This is convenient for reading older dicom files and skipping retired elements - i.e. where the VR lookup fails - by:   myVR = Dict( (0x0000,0x0000) => \"\" )   dcmData = dcm_parse(\"path/to/dicom/file\", dVR = myVR)\nA user-supplied VR can also be supplied during writing, e.g.:   ```\nNote that dcmwrite doesn\'t use a named input, unlike dcmparse with \"dVR =\"\njulia> dcm_write(\"path/to/output/file\", dcmData, dcmVR)   ``wheredcmVR` is a dictionary which maps the hex tag to the VR.\nA dictionary of VRs can be obtained by passing true as a 2nd argument to dcm_parse(), e.g.:   julia> (dcmData, dcmVR) = dcm_parse(\"path/to/dicom/file\", true)   and dcmVR will contain a dictionary of VRs for all of the elements in dcmData"
},

{
    "location": "autodocs/#DICOM.@tag_str",
    "page": "Docstrings",
    "title": "DICOM.@tag_str",
    "category": "macro",
    "text": "@tag_str(s)\n\nReturn the dicom tag, corresponding to the string s.\n\njulia> using DICOM\n\njulia> tag\"ROI Mean\"\n(0x6000, 0x1302)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DICOM.dcm_parse",
    "page": "Docstrings",
    "title": "DICOM.dcm_parse",
    "category": "function",
    "text": "dcm_parse(fn::AbstractString)\n\nReads file fn and returns a Dict \n\n\n\n\n\n"
},

{
    "location": "autodocs/#DICOM.lookup_vr",
    "page": "Docstrings",
    "title": "DICOM.lookup_vr",
    "category": "function",
    "text": "lookup_vr(tag::Tuple{Integer,Integer})\n\nReturn VR value for tag from DICOM dictionary\n\nExample\n\njulia> lookup_vr((0x0028,0x0004))\n\"CS\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DICOM.@tag_strDICOM.DICOMDICOM.VR_namesDICOM._dcmdict_data_DICOM.always_implicitDICOM.dcm_dictDICOM.dcm_initDICOM.dcm_parseDICOM.dcm_storeDICOM.dcm_writeDICOM.elementDICOM.element_writeDICOM.emptyDcmDictDICOM.emptyTagDICOM.emptyVRDICOM.emptyVR_lookupDICOM.evalDICOM.fieldname_dictDICOM.fieldname_initDICOM.includeDICOM.lookupDICOM.lookup_vrDICOM.meta_uidsDICOM.numeric_parseDICOM.pixeldata_parseDICOM.pixeldata_writeDICOM.sequence_itemDICOM.sequence_item_writeDICOM.sequence_parseDICOM.sequence_writeDICOM.skip_spacesDICOM.string_parseDICOM.string_writeDICOM.undefined_length"
},

]}
