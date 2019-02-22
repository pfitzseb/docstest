var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Proj4-1",
    "page": "Readme",
    "title": "Proj4",
    "category": "section",
    "text": "(Image: Build status) (Image: Build status)A simple wrapper around the Proj.4 cartographic projections library.Basic example:using Proj4\n\nwgs84 = Projection(\"+proj=longlat +datum=WGS84 +no_defs\")\nutm56 = Projection(\"+proj=utm +zone=56 +south +datum=WGS84 +units=m +no_defs\")\n\ntransform(wgs84, utm56, [150 -27 0])\n# Should result in [202273.913 7010024.033 0.0]API documentation for the underlying C API may be found here: https://github.com/OSGeo/proj.4/wiki/ProjAPI"
},

{
    "location": "autodocs/#Proj4.Projection",
    "page": "Docstrings",
    "title": "Proj4.Projection",
    "category": "type",
    "text": "Cartographic projection type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._compare_datums",
    "page": "Docstrings",
    "title": "Proj4._compare_datums",
    "category": "function",
    "text": "Returns true if the two datums are identical, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._errno",
    "page": "Docstrings",
    "title": "Proj4._errno",
    "category": "function",
    "text": "Get error number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._free",
    "page": "Docstrings",
    "title": "Proj4._free",
    "category": "function",
    "text": "Free C datastructure associated with a projection. For internal use!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._fwd!",
    "page": "Docstrings",
    "title": "Proj4._fwd!",
    "category": "function",
    "text": "forward projection from Lat/Lon to X/Y (only supports 2 dimensions)\n\n\n\n\n\nRow-wise projection from Lat/Lon to X/Y (only supports 2 dimensions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._geod_direct!",
    "page": "Docstrings",
    "title": "Proj4._geod_direct!",
    "category": "function",
    "text": "Solve the direct geodesic problem.\n\nArgs:\n\ng        - the geod_geodesic object specifying the ellipsoid.\nlonlat   - where lat ∈ [-90, 90], lon ∈ [-540, 540), modified in-place to [dest] (described below)\nazimuth  - azimuth (degrees) ∈ [-540, 540)\ndistance - distance (metres) to move from (lon,lat); can be negative\n\nReturns:\n\ndest     - destination after moving for [distance] metres in [azimuth] direction.\nazi      - forward azimuth (degrees) at destination [dest].\n\nRemarks:\n\nIf either point is at a pole, the azimuth is defined by keeping the longitude fixed,\nwriting lat = 90 +/- eps, and taking the limit as eps -> 0+. An arc length greater than 180deg\nsignifies a geodesic which is not a shortest path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._geod_inverse",
    "page": "Docstrings",
    "title": "Proj4._geod_inverse",
    "category": "function",
    "text": "Solve the inverse geodesic problem.\n\nArgs:\n\ng       - the geod_geodesic object specifying the ellipsoid.\nlonlat1 - point 1 (degrees), where lat ∈ [-90, 90], lon ∈ [-540, 540) \nlonlat2 - point 2 (degrees), where lat ∈ [-90, 90], lon ∈ [-540, 540)\n\nReturns:\n\ndist    - distance between point 1 and point 2 (meters).\nazi1    - azimuth at point 1 (degrees) ∈ [-180, 180)\nazi2    - (forward) azimuth at point 2 (degrees) ∈ [-180, 180)\n\nRemarks:\n\nIf either point is at a pole, the azimuth is defined by keeping the longitude fixed,\nwriting lat = 90 +/- eps, and taking the limit as eps -> 0+.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._get_def",
    "page": "Docstrings",
    "title": "Proj4._get_def",
    "category": "function",
    "text": "Get projection definition string in the proj.4 plus format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._get_release",
    "page": "Docstrings",
    "title": "Proj4._get_release",
    "category": "function",
    "text": "Get a string describing the underlying version of libproj in use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._get_spheroid_defn",
    "page": "Docstrings",
    "title": "Proj4._get_spheroid_defn",
    "category": "function",
    "text": "Fetch the internal definition of the spheroid as a tuple (a, es), where\n\na = major_axis\nes = eccentricity squared\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._inv!",
    "page": "Docstrings",
    "title": "Proj4._inv!",
    "category": "function",
    "text": "inverse projection from X/Y to Lat/Lon (only supports 2 dimensions)\n\n\n\n\n\nRow-wise projection from X/Y to Lat/Lon (only supports 2 dimensions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._strerrno",
    "page": "Docstrings",
    "title": "Proj4._strerrno",
    "category": "function",
    "text": "Get human readable error string from proj.4 error code\n\n\n\n\n\nGet global errno string in human readable form\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4._transform!",
    "page": "Docstrings",
    "title": "Proj4._transform!",
    "category": "function",
    "text": "Low level interface to libproj transform, C_NULL can be passed in for z, if it\'s 2-dimensional\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.compare_datums",
    "page": "Docstrings",
    "title": "Proj4.compare_datums",
    "category": "function",
    "text": "Returns true if the datums for the two projections are identical\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.error_message",
    "page": "Docstrings",
    "title": "Proj4.error_message",
    "category": "function",
    "text": "Get a global error string in human readable form\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.geod_geodesic",
    "page": "Docstrings",
    "title": "Proj4.geod_geodesic",
    "category": "type",
    "text": "Construct an ellipsoid of revolution with\n\nequatorial radius a,\nflattening f,\n\nRemark, we construct it when constructing a [Projection] using the formulas:\n\nf = (a − b)/a = 1 − sqrt(1-es)\nn = (a − b)/(a + b) = f /(2 − f)\nes = (a^2 − b^2)/a^2 = f(2 − f)\n\nReference: equations (1)-(3) of      Algorithms for geodesics (arXiv:1109.4448v2 [physics.geo-ph] 28 Mar 2012)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.is_geocent",
    "page": "Docstrings",
    "title": "Proj4.is_geocent",
    "category": "function",
    "text": "Return true if the projection is a geocentric coordinate system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.is_latlong",
    "page": "Docstrings",
    "title": "Proj4.is_latlong",
    "category": "function",
    "text": "Return true if the projection is a geographic coordinate system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.lonlat2xy",
    "page": "Docstrings",
    "title": "Proj4.lonlat2xy",
    "category": "function",
    "text": "Returns the forward projection from LonLat to XY in the given projection (only supports 2 dimensions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.lonlat2xy!",
    "page": "Docstrings",
    "title": "Proj4.lonlat2xy!",
    "category": "function",
    "text": "Returns the forward projection from LatLon to XY in the given projection, modifying the input lonlat inplace (only supports 2 dimensions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.spheroid_params",
    "page": "Docstrings",
    "title": "Proj4.spheroid_params",
    "category": "function",
    "text": "Return the definition of the spheroid as a tuple (a, es), where\n\na = major_axis\nes = eccentricity squared\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.transform",
    "page": "Docstrings",
    "title": "Proj4.transform",
    "category": "function",
    "text": "transform(src_projection, dest_projection, position [, radians=false])\n\nTransform between geographic or projected coordinate systems, returning the transformed points in a Float64 array the same shape as position.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.transform!",
    "page": "Docstrings",
    "title": "Proj4.transform!",
    "category": "function",
    "text": "transform!(src_projection, dest_projection, position [, radians=false])\n\nTransform between geographic or projected coordinate systems, modifying position in place.\n\nArgs:\n\nsrc      - Source coordinate system definition\ndest     - Destination coordinate system definition\nposition - An array of coordinates to be transformed in place.  If `position` is a\n           Vector of length 2 or 3 it\'s treated as a single point.  For\n           geographic coordinate systems, the first two columns are the\n           *longitude* and *latitude*, in that order.  To transform an\n           array of points, a matrix of shape Nx2 or Nx3 may be used.\nradians  - If true, treat geographic lon,lat coordinates as radians on\n           input and output.\n\nReturns:\n\nposition - Transformed position\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.version",
    "page": "Docstrings",
    "title": "Proj4.version",
    "category": "constant",
    "text": "Parsed version number for the underlying version of libproj\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.xy2lonlat",
    "page": "Docstrings",
    "title": "Proj4.xy2lonlat",
    "category": "function",
    "text": "Returns the inverse projection from XY to LatLon in the given projection (only supports 2 dimensions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Proj4.xy2lonlat!",
    "page": "Docstrings",
    "title": "Proj4.xy2lonlat!",
    "category": "function",
    "text": "Returns the inverse projection from XY to LonLat in the given projection, modifying the input xy inplace (only supports 2 dimensions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Proj4.Cdouble15Proj4.Cdouble21Proj4.Cdouble6Proj4.Proj4Proj4.ProjUVProj4.ProjectionProj4.__init__Proj4._compare_datumsProj4._errnoProj4._freeProj4._fwd!Proj4._geodProj4._geod_direct!Proj4._geod_inverseProj4._geodesicProj4._get_defProj4._get_releaseProj4._get_spheroid_defnProj4._init_plusProj4._inv!Proj4._is_geocentProj4._is_latlongProj4._strerrnoProj4._transform!Proj4._versionProj4.ch_pathProj4.check_depsProj4.compare_datumsProj4.depsjl_pathProj4.epsgProj4.epsg_pathProj4.error_messageProj4.esriProj4.esri_extra_pathProj4.esri_pathProj4.evalProj4.freeProjectionProj4.geod_destinationProj4.geod_destination!Proj4.geod_directProj4.geod_direct!Proj4.geod_distanceProj4.geod_geodesicProj4.geod_inverseProj4.gl27_pathProj4.has_geodesic_supportProj4.ignf_pathProj4.includeProj4.is_geocentProj4.is_latlongProj4.libprojProj4.lonlat2xyProj4.lonlat2xy!Proj4.nad27_pathProj4.nad83_pathProj4.nad_lst_pathProj4.null_geodesicProj4.other_extra_pathProj4.proj_def_dat_pathProj4.spheroid_paramsProj4.transformProj4.transform!Proj4.versionProj4.world_pathProj4.xy2lonlatProj4.xy2lonlat!"
},

]}
