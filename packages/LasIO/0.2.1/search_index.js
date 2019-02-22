var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LasIO-1",
    "page": "Readme",
    "title": "LasIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Julia package for reading and writing the LAS lidar format.This is a pure Julia alternative to LibLAS.jl or Laszip.jl. Currently only LAS versions 1.1 - 1.3 and point formats 0 - 3 are supported. For LAZ support see below.If the file fits into memory, it can be loaded usingusing FileIO, LasIO\nheader, points = load(\"test.las\")where header is of type LasHeader, and, if it is point format 3, points is a Vector{LasPoint3}. LasPoint3 is an immutable that directly corresponds to the binary data in the LAS file. Use functions like xcoord(p::LasPoint, header::LasHeader) to take out the desired items in the point.If the file does not fit into memory, it can be memory mapped usingusing FileIO, LasIO\nheader, points = load(\"test.las\", mmap=true)where points is now a memory mapped PointVector{LasPoint3} which behaves in the same way as the Vector{LasPoint3}, but reads the points on the fly from disk when indexed, not allocating the complete vector beforehand.See test/runtests.jl for other usages."
},

{
    "location": "#LAZ-support-1",
    "page": "Readme",
    "title": "LAZ support",
    "category": "section",
    "text": "The compressed LAZ format is supported, but requires the user to make sure the laszip executable can be found in the PATH. LAZ files are piped through laszip to provide reading and writing capability. laszip is not distributed with this package. One way to get it is to download LAStools from https://rapidlasso.com/. The LAStools ZIP file already contains laszip.exe for Windows, for Linux or Mac it needs to be compiled first. When this is done this should work just like with LAS:using FileIO, LasIO\nheader, points = load(\"test.laz\")Besides piping through laszip, more complete LAZ support is in the works at https://github.com/evetion/LazIO.jl."
},

{
    "location": "autodocs/#LasIO.@gen_io",
    "page": "Docstrings",
    "title": "LasIO.@gen_io",
    "category": "macro",
    "text": "Generate IO expressions macro.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.GeoKeys",
    "page": "Docstrings",
    "title": "LasIO.GeoKeys",
    "category": "type",
    "text": "Create GeoKeys from EPSG code. Assumes CRS is projected and in meters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint",
    "page": "Docstrings",
    "title": "LasIO.LasPoint",
    "category": "type",
    "text": "Abstract type for ASPRS LAS point data record formats 0 - 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint0",
    "page": "Docstrings",
    "title": "LasIO.LasPoint0",
    "category": "type",
    "text": "ASPRS LAS point data record format 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint1",
    "page": "Docstrings",
    "title": "LasIO.LasPoint1",
    "category": "type",
    "text": "ASPRS LAS point data record format 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint2",
    "page": "Docstrings",
    "title": "LasIO.LasPoint2",
    "category": "type",
    "text": "ASPRS LAS point data record format 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint3",
    "page": "Docstrings",
    "title": "LasIO.LasPoint3",
    "category": "type",
    "text": "ASPRS LAS point data record format 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasVariableLengthRecord",
    "page": "Docstrings",
    "title": "LasIO.LasVariableLengthRecord",
    "category": "type",
    "text": "A LAS \"variable length record\" - the generic way to store extra user or organization defined binary metadata in LAS files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.PointVector",
    "page": "Docstrings",
    "title": "LasIO.PointVector",
    "category": "type",
    "text": "Custom PointVector struct for memory mapped LasPoints. Inspiration taken from UnalignedVector.jl and extended it with custom indexing and packing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.RGB",
    "page": "Docstrings",
    "title": "ColorTypes.RGB",
    "category": "type",
    "text": "The RGB color associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.blue",
    "page": "Docstrings",
    "title": "ColorTypes.blue",
    "category": "function",
    "text": "The blue image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.classification",
    "page": "Docstrings",
    "title": "LasIO.classification",
    "category": "function",
    "text": "Classification value as defined in the ASPRS classification table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.edge_of_flight_line",
    "page": "Docstrings",
    "title": "LasIO.edge_of_flight_line",
    "category": "function",
    "text": "If true, it is the last point before the scanner changes direction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.epsg_code",
    "page": "Docstrings",
    "title": "LasIO.epsg_code",
    "category": "function",
    "text": "Get the EPSG code of the projection in the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.epsg_code!",
    "page": "Docstrings",
    "title": "LasIO.epsg_code!",
    "category": "function",
    "text": "Set the projection in the header, without altering the points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.flag_byte",
    "page": "Docstrings",
    "title": "LasIO.flag_byte",
    "category": "function",
    "text": "Flag byte, contains return number, number of returns, scan direction flag and edge of flight line\n\n\n\n\n\nFlag byte, as represented in the point data, built up from components\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.generate_read",
    "page": "Docstrings",
    "title": "LasIO.generate_read",
    "category": "function",
    "text": "Generate read (unpack) method for structs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.generate_write",
    "page": "Docstrings",
    "title": "LasIO.generate_write",
    "category": "function",
    "text": "Generate write (pack) method for structs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.gps_time",
    "page": "Docstrings",
    "title": "LasIO.gps_time",
    "category": "function",
    "text": "Time tag value at which the point was aquired, a Float64; see is_standard_gps for what it represents\n\n\n\n\n\nConvert DateTime to GPS Float64, as represented in the point data, assumes time is recorded in Adjusted Standard GPS Time; see is_standard_gps\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.green",
    "page": "Docstrings",
    "title": "ColorTypes.green",
    "category": "function",
    "text": "The green image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.intensity",
    "page": "Docstrings",
    "title": "LasIO.intensity",
    "category": "function",
    "text": "Integer representation of the pulse return magnitude.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.is_srs",
    "page": "Docstrings",
    "title": "LasIO.is_srs",
    "category": "function",
    "text": "test whether a vlr is a GeoKeyDirectoryTag, GeoDoubleParamsTag or GeoAsciiParamsTag\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.is_standard_gps",
    "page": "Docstrings",
    "title": "LasIO.is_standard_gps",
    "category": "function",
    "text": "If true, GPS Time is standard GPS Time (satellite GPS Time) minus 1e9. If false, GPS Time is GPS Week Time.\n\nNote that not all software sets this encoding correctly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.is_wkt",
    "page": "Docstrings",
    "title": "LasIO.is_wkt",
    "category": "function",
    "text": "Check if the projection information is in WKT format (true) or GeoTIFF (false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.key_point",
    "page": "Docstrings",
    "title": "LasIO.key_point",
    "category": "function",
    "text": "If true, this point is considered to be a model key-point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.number_of_returns",
    "page": "Docstrings",
    "title": "LasIO.number_of_returns",
    "category": "function",
    "text": "The total number of returns for a given pulse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.pt_src_id",
    "page": "Docstrings",
    "title": "LasIO.pt_src_id",
    "category": "function",
    "text": "This value indicates the file from which this point originated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.raw_classification",
    "page": "Docstrings",
    "title": "LasIO.raw_classification",
    "category": "function",
    "text": "Raw classification byte, contains classification, synthetic, key point and withheld\n\n\n\n\n\nRaw classification byte, as represented in the point data, built up from components\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.red",
    "page": "Docstrings",
    "title": "ColorTypes.red",
    "category": "function",
    "text": "The red image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.return_number",
    "page": "Docstrings",
    "title": "LasIO.return_number",
    "category": "function",
    "text": "The pulse return number for a given output pulse, starting at one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.scan_angle",
    "page": "Docstrings",
    "title": "LasIO.scan_angle",
    "category": "function",
    "text": "Angle at which the laser point was output, including the roll of the aircraft.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.scan_direction",
    "page": "Docstrings",
    "title": "LasIO.scan_direction",
    "category": "function",
    "text": "If true, the scanner mirror was traveling from left to right at the time of the output pulse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.synthetic",
    "page": "Docstrings",
    "title": "LasIO.synthetic",
    "category": "function",
    "text": "If true, the point was not created from lidar collection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.update!",
    "page": "Docstrings",
    "title": "LasIO.update!",
    "category": "function",
    "text": "Update the header bounding box and count based on point data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.user_data",
    "page": "Docstrings",
    "title": "LasIO.user_data",
    "category": "function",
    "text": "This field may be used at the user’s discretion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.withheld",
    "page": "Docstrings",
    "title": "LasIO.withheld",
    "category": "function",
    "text": "If true, this point should not be included in processing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.xcoord",
    "page": "Docstrings",
    "title": "LasIO.xcoord",
    "category": "function",
    "text": "X coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\nX value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.ycoord",
    "page": "Docstrings",
    "title": "LasIO.ycoord",
    "category": "function",
    "text": "Y coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\nY value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.zcoord",
    "page": "Docstrings",
    "title": "LasIO.zcoord",
    "category": "function",
    "text": "Z coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\nZ value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LasIO.@gen_ioLasIO.GeoAsciiParamsTagLasIO.GeoDoubleParamsTagLasIO.GeoKeysLasIO.KeyEntryLasIO.LasHeaderLasIO.LasIOLasIO.LasPointLasIO.LasPoint0LasIO.LasPoint1LasIO.LasPoint2LasIO.LasPoint3LasIO.LasPointColorLasIO.LasPointTimeLasIO.LasVariableLengthRecordLasIO.PointVectorLasIO.RGBLasIO.SRIDLasIO.__init__LasIO.blueLasIO.classificationLasIO.edge_of_flight_lineLasIO.epsg_codeLasIO.epsg_code!LasIO.evalLasIO.flag_byteLasIO.generate_ioLasIO.generate_readLasIO.generate_writeLasIO.gps_timeLasIO.greenLasIO.id_geoasciiparamstagLasIO.id_geodoubleparamstagLasIO.id_geokeydirectorytagLasIO.includeLasIO.intensityLasIO.is_srsLasIO.is_standard_gpsLasIO.is_wktLasIO.key_pointLasIO.loadLasIO.number_of_returnsLasIO.pointformatLasIO.pt_src_idLasIO.raw_classificationLasIO.read_headerLasIO.read_vlr_dataLasIO.readstringLasIO.redLasIO.return_numberLasIO.saveLasIO.savebufLasIO.scan_angleLasIO.scan_directionLasIO.skiplasfLasIO.syntheticLasIO.update!LasIO.user_dataLasIO.withheldLasIO.write_key_entryLasIO.writestringLasIO.xcoordLasIO.ycoordLasIO.zcoord"
},

]}
