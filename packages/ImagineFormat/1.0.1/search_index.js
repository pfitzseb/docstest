var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImagineFormat-1",
    "page": "Readme",
    "title": "ImagineFormat",
    "category": "section",
    "text": "(Image: Build Status)Imagine is an acquisition program for light sheet microscopy written by Zhongsheng Guo in Tim Holy\'s lab. This package implements a loader for the file format for the Julia programming language. Each Imagine \"file\" consists of two parts (as two separate files): a *.imagine file which contains the (ASCII) header, and a *.cam file which contains the camera data.  The *.cam file is a raw byte dump, and is compatible with the NRRD \"raw\" file."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Read Imagine files like this:using Images\nimg = load(\"filename\")"
},

{
    "location": "#Converting-to-NRRD-1",
    "page": "Readme",
    "title": "Converting to NRRD",
    "category": "section",
    "text": "You can write an NRRD header (*.nhdr) from an Imagine header as follows:h = ImagineFormat.parse_header(filename)  # the .imagine file name\nimagine2nrrd(nrrdname, h, datafilename)where datafilename is the name of the *.cam file. It is required by the *.nhdr file to point to the actual data."
},

{
    "location": "#Writing-Imagine-headers-1",
    "page": "Readme",
    "title": "Writing Imagine headers",
    "category": "section",
    "text": "You can use the non-exported function ImagineFormat.save_header:save_header(destname, srcname, img, [T])destname is the output *.imagine file; srcname is the name of the \"template\" file.  Certain header values (e.g., size information) are updated by reference to img.  The optional argument T allows you to specify a different element type than possessed by img."
},

{
    "location": "autodocs/#ImagineFormat.save_header",
    "page": "Docstrings",
    "title": "ImagineFormat.save_header",
    "category": "function",
    "text": "save_header(filename, header) writes a header dictionary in Imagine format.\n\nsave_header(destname, srcname, img::AbstractArray, [T::Type = eltype(img)]) writes a .imagine file with name destname, using the .imagine file srcname as a template. Size and element type fields are updated from img and T, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImagineFormat.BidiImageArrayImagineFormat.BigEndianImagineFormat.EndianImagineFormat.ImagineFormatImagineFormat.LittleEndianImagineFormat.MHzImagineFormat.__init__ImagineFormat._unit_string_dictImagineFormat.bitname_dictImagineFormat.compound_fieldsImagineFormat.endian_dictImagineFormat.evalImagineFormat.field_key_dictImagineFormat.fillsize!ImagineFormat.float64_or_emptyImagineFormat.imagine2nrrdImagineFormat.includeImagineFormat.loadImagineFormat.nrrd_endian_dictImagineFormat.parse_bittypenameImagineFormat.parse_endianImagineFormat.parse_headerImagineFormat.parse_quantityImagineFormat.parse_quantity_or_emptyImagineFormat.parse_vector_intImagineFormat.sImagineFormat.save_headerImagineFormat.writeMHzImagineFormat.write_dictImagineFormat.writefieldImagineFormat.writekvImagineFormat.writeumImagineFormat.writeusImagineFormat.μmImagineFormat.μs"
},

]}
