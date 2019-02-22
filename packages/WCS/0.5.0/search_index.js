var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WCS.jl-1",
    "page": "Readme",
    "title": "WCS.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Astronomical World Coordinate System library for Julia.This package wraps the WCSLIB C library."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using WCS\n\n# create a transformation from scratch\njulia> wcs = WCSTransform(2;\n                          cdelt = [-0.066667, 0.066667],\n                          ctype = [\"RA---AIR\", \"DEC--AIR\"],\n                          crpix = [-234.75, 8.3393],\n                          crval = [0., -90],\n                          pv    = [(2, 1, 45.0)])\nWCSTransform(naxis=2)\n\n# ... or from a FITS header\njulia> wcs_array = WCS.from_header(header)\n\njulia> wcs = wcs_array[1]\n\n\n# convert pixel -> world coordinates\njulia> pixcoords = [0.0  24.0  45.0;  # x coordinates\n                    0.0  38.0  98.0]  # y coordinates\n\njulia> worldcoords = pix_to_world(wcs, pixcoords)\n2x3 Array{Float64,2}:\n 267.965   276.539   287.771 \n -73.7366  -71.9741  -69.6781\n\n\n# convert world -> pixel coordinates\njulia> pixcoords = world_to_pix(wcs, worldcoords)\n2x3 Array{Float64,2}:\n  1.16529e-12  24.0  45.0\n -7.10543e-14  38.0  98.0\n\n\n# convert a WCSTransform to a FITS header\nheader = WCS.to_header(wcs)\n\n# check what underlying C library version is being used.\njulia> WCS.wcslib_version()\nv\"5.20.0\""
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The Julia code in this repository is distributed under the MIT license. Note that WCS.jl wraps the WCSLIB C library, which is released under the LGPL license."
},

{
    "location": "autodocs/#WCS.WCSTransform",
    "page": "Docstrings",
    "title": "WCS.WCSTransform",
    "category": "type",
    "text": "WCSTransform(naxis; kvs...)\n\nConstruct a WCS transformation with the given number of axes naxis. Keyword arguments can be passed to set various attributes of the transform. Specifying keyword arguments is equivalent to setting them after construction:\n\njulia> wcs = WCSTransform(2; crpix=[1000., 1000.])\n\nis equilvalent to:\n\njulia> wcs = WCSTransform(2)\n\njulia> wcs.crpix = [1000., 1000.]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WCS.from_header",
    "page": "Docstrings",
    "title": "WCS.from_header",
    "category": "function",
    "text": "fromheader(header[; relax=WCS.HDRALL, ctrl=0, ignore_rejected=false, table=false])\n\nParse the FITS image header in the String header, returning a Vector{WCSTransform} giving all the transforms defined in the header. The relax determines the treatment of non-standard keywords. The default is to accept all known non-standard keywords. Use relax=WCS.HDR_NONE to ignore all non-standard keywords. Use, e.g., relax=(WCS.HDR_RADECSYS & WCS.HDR_CROTAia) to only accept selected non-standard keywords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WCS.pix_to_world",
    "page": "Docstrings",
    "title": "WCS.pix_to_world",
    "category": "function",
    "text": "pixtoworld(wcs, pixcoords)\n\nConvert the array of pixel coordinates pixcoords to world coordinates according to the WCSTransform wcs. pixcoords should be a 2-d array where \"pixcoords[:, i]\" is the i-th set of coordinates, or a 1-d array representing a single set of coordinates.\n\nThe return value is the same shape as pixcoords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WCS.pix_to_world!",
    "page": "Docstrings",
    "title": "WCS.pix_to_world!",
    "category": "function",
    "text": "pixtoworld!(wcs, pixcoords, worldcoords[; stat=, imcoords=, phi=, theta=])\n\nConvert the array of pixel coordinates pixcoords to world coordinates according to the WCSTransform wcs, storing the result in the worldcoords and stat arrays. pixcoords should be a 2-d array where \"pixcoords[:, i]\" is the i-th set of coordinates, or a 1-d array representing a single set of coordinates. worldcoords must be the same size and type as pixcoords.\n\nIf given, the arrays stat, imcoords, phi, theta will be used to store intermediate results. Their sizes and types must all match pixcoords, except for stat which should be the same size but of type Cint (typically Int32).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WCS.to_header",
    "page": "Docstrings",
    "title": "WCS.to_header",
    "category": "function",
    "text": "toheader(wcs[; relax=WCS.HDRNONE])\n\nEncode the WCSTransform wcs as a FITS header string. The relax keyword controls how non-standard extensions to the WCS standard are handled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WCS.world_to_pix",
    "page": "Docstrings",
    "title": "WCS.world_to_pix",
    "category": "function",
    "text": "worldtopix(wcs, worldcoords)\n\nConvert the array of world coordinates worldcoords to pixel coordinates according to the WCSTransform wcs. worldcoords is a 2-d array where \"worldcoords[:, i]\" is the i-th set of coordinates, or a 1-d array representing a single set of coordinates.\n\nThe return value is the same size as worldcoords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WCS.world_to_pix!",
    "page": "Docstrings",
    "title": "WCS.world_to_pix!",
    "category": "function",
    "text": "worldtopix!(wcs, worldcoords, pixcoords[; stat=, phi=, theta=, imcoords=])\n\nConvert the array of pixel coordinates worldcoords to pixel coordinates according to the WCSTransform wcs, storing the result in the pixcoords array. worldcoords should be a 2-d array where \"worldcoords[:, i]\" is the i-th set of coordinates, or a 1-d array representing a single set of coordinates. pixcoords must be the same size and type as worldcoords.\n\nIf given, the arrays stat, imcoords, phi, theta will be used to store intermediate results. Their sizes and types must all match worldcoords, except for stat which should be the same size but of type Cint (typically Int32).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WCS.@check_propWCS.@check_typeWCS.@same_sizeWCS.HDR_ALLWCS.HDR_ALLIMGWCS.HDR_AUXIMGWCS.HDR_BIMGARRWCS.HDR_CD00i00jWCS.HDR_CD0i_0jaWCS.HDR_CNAMnWCS.HDR_CROTAiaWCS.HDR_DOBSnWCS.HDR_EPOCHaWCS.HDR_IMGHEADWCS.HDR_LONGKEYWCS.HDR_NONEWCS.HDR_PC00i00jWCS.HDR_PC0i_0jaWCS.HDR_PIXLISTWCS.HDR_PROJPnWCS.HDR_PS0i_0maWCS.HDR_PV0i_0maWCS.HDR_RADECSYSWCS.HDR_REJECTWCS.HDR_STRICTWCS.HDR_VELREFaWCS.HDR_VSOURCEWCS.PSCardWCS.PVCardWCS.WCSWCS.WCSErrWCS.WCSTransformWCS.assert_okWCS.celprmWCS.check_depsWCS.convert_stringWCS.evalWCS.free!WCS.from_headerWCS.get_error_messageWCS.includeWCS.libwcsWCS.linprmWCS.pix_to_worldWCS.pix_to_world!WCS.prjprmWCS.spcprmWCS.to_headerWCS.unsafe_store_vec!WCS.wcs_lockWCS.wcslib_versionWCS.world_to_pixWCS.world_to_pix!"
},

]}
