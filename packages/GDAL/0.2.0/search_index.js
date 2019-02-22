var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GDAL.jl-1",
    "page": "Readme",
    "title": "GDAL.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Julia wrapper for GDAL - Geospatial Data Abstraction Library. This package is a binding to the C API of GDAL/OGR. It provides only a C style usage, where resources must be closed manually, and datasets are pointers. Note: this also means that before being able to use any drivers (for input/output of different formats), they must be registered first using GDAL.allregister().Other packages can build on top of this to provide a more Julian user experience. See for example ArchGDAL.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered, so add it using Pkg. This will also download GDAL binaries created by GDALBuilder.pkg> add GDALTo test if it is installed correctly, use:pkg> test GDAL"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Docstrings are automatically inserted from the GDAL documentation. Note that these are written for the C API, so function names and argument type names will differ.julia> using GDAL\n\nhelp?> GDAL.creategeometry\n  OGR_G_CreateGeometry(OGRwkbGeometryType eGeometryType) -> OGRGeometryH\n\n  Create an empty geometry of desired type.\n\n     Parameters\n    ––––––––––––\n\n    •  eGeometryType: the type code of the geometry to be created.\n\n     Returns\n    –––––––––\n\n  handle to the newly create geometry or NULL on failure. Should be freed with\n  OGR_G_DestroyGeometry() after use.Further usage documentation is not yet available, but the files test/tutorial_raster.jl and test/tutorial_vector.jl should provide a good hint based on the API tutorials from GDAL.org.The bulk of this package is generated automatically by the scripts under gen/. For developer documentation regarding this process see gen/README.md."
},

{
    "location": "#Low-level-and-mid-level-API-1",
    "page": "Readme",
    "title": "Low-level and mid-level API",
    "category": "section",
    "text": "Next to the functions available in the GDAL module, there is also a submodule GDAL.C available. GDAL.C is the low-level wrapping, without any error checking, function renaming or type wrapping. If you know what you are doing and don\'t want this package to get in your way, use this. Currently the GDAL.C module provides a more complete wrapping, though the intention is to make the complete user facing C API available in both modules."
},

{
    "location": "autodocs/#GDAL._cplassert",
    "page": "Docstrings",
    "title": "GDAL._cplassert",
    "category": "function",
    "text": "_CPLAssert(const char * pszExpression,\n           const char * pszFile,\n           int iLine) -> void\n\nReport failure of a logical assertion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addband",
    "page": "Docstrings",
    "title": "GDAL.addband",
    "category": "function",
    "text": "GDALAddBand(GDALDatasetH hDataset,\n            GDALDataType eType,\n            char ** papszOptions) -> CPLErr\n\nAdd a band to a dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addderivedbandpixelfunc",
    "page": "Docstrings",
    "title": "GDAL.addderivedbandpixelfunc",
    "category": "function",
    "text": "GDALAddDerivedBandPixelFunc(const char * pszName,\n                            GDALDerivedPixelFunc pfnPixelFunc) -> CPLErr\n\nThis adds a pixel function to the global list of available pixel functions for derived bands.\n\nParameters\n\npszFuncName: Name used to access pixel function\npfnNewFunction: Pixel function associated with name. An existing pixel function registered with the same name will be replaced with the new one.\n\nReturns\n\nCE_None, invalid (NULL) parameters are currently ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addfielddefn",
    "page": "Docstrings",
    "title": "GDAL.addfielddefn",
    "category": "function",
    "text": "OGR_FD_AddFieldDefn(OGRFeatureDefnH hDefn,\n                    OGRFieldDefnH hNewField) -> void\n\nAdd a new field definition to the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to add the field definition to.\nhNewField: handle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addgeometry",
    "page": "Docstrings",
    "title": "GDAL.addgeometry",
    "category": "function",
    "text": "OGR_G_AddGeometry(OGRGeometryH hGeom,\n                  OGRGeometryH hNewSubGeom) -> OGRErr\n\nAdd a geometry to a geometry container.\n\nParameters\n\nhGeom: existing geometry container.\nhNewSubGeom: geometry to add to the container.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the type of existing geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addgeometrydirectly",
    "page": "Docstrings",
    "title": "GDAL.addgeometrydirectly",
    "category": "function",
    "text": "OGR_G_AddGeometryDirectly(OGRGeometryH hGeom,\n                          OGRGeometryH hNewSubGeom) -> OGRErr\n\nAdd a geometry directly to an existing geometry container.\n\nParameters\n\nhGeom: existing geometry.\nhNewSubGeom: geometry to add to the existing geometry.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the type of geometry container.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addgeomfielddefn",
    "page": "Docstrings",
    "title": "GDAL.addgeomfielddefn",
    "category": "function",
    "text": "OGR_FD_AddGeomFieldDefn(OGRFeatureDefnH hDefn,\n                        OGRGeomFieldDefnH hNewGeomField) -> void\n\nAdd a new field definition to the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to add the geometry field definition to.\nhNewGeomField: handle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addpart",
    "page": "Docstrings",
    "title": "GDAL.addpart",
    "category": "function",
    "text": "OGR_SM_AddPart(OGRStyleMgrH hSM,\n               OGRStyleToolH hST) -> int\n\nAdd a part (style tool) to the current style.\n\nParameters\n\nhSM: handle to the style manager.\nhST: the style tool defining the part to add.\n\nReturns\n\nTRUE on success, FALSE on errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addpoint",
    "page": "Docstrings",
    "title": "GDAL.addpoint",
    "category": "function",
    "text": "OGR_G_AddPoint(OGRGeometryH hGeom,\n               double dfX,\n               double dfY,\n               double dfZ) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\ndfZ: z coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addpoint_2d",
    "page": "Docstrings",
    "title": "GDAL.addpoint_2d",
    "category": "function",
    "text": "OGR_G_AddPoint_2D(OGRGeometryH hGeom,\n                  double dfX,\n                  double dfY) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addpointm",
    "page": "Docstrings",
    "title": "GDAL.addpointm",
    "category": "function",
    "text": "OGR_G_AddPointM(OGRGeometryH hGeom,\n                double dfX,\n                double dfY,\n                double dfM) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\ndfM: m coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addpointzm",
    "page": "Docstrings",
    "title": "GDAL.addpointzm",
    "category": "function",
    "text": "OGR_G_AddPointZM(OGRGeometryH hGeom,\n                 double dfX,\n                 double dfY,\n                 double dfZ,\n                 double dfM) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\ndfZ: z coordinate of point to add.\ndfM: m coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.addstyle",
    "page": "Docstrings",
    "title": "GDAL.addstyle",
    "category": "function",
    "text": "OGR_SM_AddStyle(OGRStyleMgrH hSM,\n                const char * pszStyleName,\n                const char * pszStyleString) -> int\n\nAdd a style to the current style table.\n\nParameters\n\nhSM: handle to the style manager.\npszStyleName: the name of the style to add.\npszStyleString: the style string to use, or NULL to use the style stored in the manager.\n\nReturns\n\nTRUE on success, FALSE on errors.\n\n\n\n\n\nOGR_STBL_AddStyle(OGRStyleTableH hStyleTable,\n                  const char * pszName,\n                  const char * pszStyleString) -> int\n\nAdd a new style in the table.\n\nParameters\n\nhStyleTable: handle to the style table.\npszName: the name the style to add.\npszStyleString: the style string to add.\n\nReturns\n\nTRUE on success, FALSE on error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.adjustvaluetodatatype",
    "page": "Docstrings",
    "title": "GDAL.adjustvaluetodatatype",
    "category": "function",
    "text": "GDALAdjustValueToDataType(GDALDataType eDT,\n                          double dfValue,\n                          int * pbClamped,\n                          int * pbRounded) -> double\n\nAdjust a value to the output data type.\n\nParameters\n\neDT: target data type.\ndfValue: value to adjust.\npbClamped: pointer to a integer(boolean) to indicate if clamping has been made, or NULL\npbRounded: pointer to a integer(boolean) to indicate if rounding has been made, or NULL\n\nReturns\n\nadjusted value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.allregister",
    "page": "Docstrings",
    "title": "GDAL.allregister",
    "category": "function",
    "text": "GDALAllRegister() -> void\n\nRegister all known configured GDAL drivers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.alterfielddefn",
    "page": "Docstrings",
    "title": "GDAL.alterfielddefn",
    "category": "function",
    "text": "OGR_L_AlterFieldDefn(OGRLayerH,\n                     int iField,\n                     OGRFieldDefnH hNewFieldDefn,\n                     int nFlags) -> OGRErr\n\nAlter the definition of an existing field on a layer.\n\nParameters\n\nhLayer: handle to the layer.\niField: index of the field whose definition must be altered.\nhNewFieldDefn: new field definition\nnFlags: combination of ALTERNAMEFLAG, ALTERTYPEFLAG, ALTERWIDTHPRECISIONFLAG, ALTERNULLABLEFLAG and ALTERDEFAULT_FLAG to indicate which of the name and/or type and/or width and precision fields and/or nullability from the new field definition must be taken into account.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.applygeotransform",
    "page": "Docstrings",
    "title": "GDAL.applygeotransform",
    "category": "function",
    "text": "GDALApplyGeoTransform(double * padfGeoTransform,\n                      double dfPixel,\n                      double dfLine,\n                      double * pdfGeoX,\n                      double * pdfGeoY) -> void\n\nApply GeoTransform to x/y coordinate.\n\nParameters\n\npadfGeoTransform: Six coefficient GeoTransform to apply.\ndfPixel: Input pixel position.\ndfLine: Input line position.\npdfGeoX: output location where geo_x (easting/longitude) location is placed.\npdfGeoY: output location where geo_y (northing/latitude) location is placed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.applyverticalshiftgrid",
    "page": "Docstrings",
    "title": "GDAL.applyverticalshiftgrid",
    "category": "function",
    "text": "GDALApplyVerticalShiftGrid(GDALDatasetH hSrcDataset,\n                           GDALDatasetH hGridDataset,\n                           int bInverse,\n                           double dfSrcUnitToMeter,\n                           double dfDstUnitToMeter,\n                           const char *const * papszOptions) -> GDALDatasetH\n\nApply a vertical shift grid to a source (DEM typically) dataset.\n\nParameters\n\nhSrcDataset: source (DEM) dataset. Must not be NULL.\nhGridDataset: vertical grid shift dataset. Must not be NULL.\nbInverse: if set to FALSE, hGridDataset values will be added to hSrcDataset. If set to TRUE, they will be subtracted.\ndfSrcUnitToMeter: the factor to convert values from hSrcDataset to meters (1.0 if source values are in meter).\ndfDstUnitToMeter: the factor to convert shifted values from meter (1.0 if output values must be in meter).\npapszOptions: list of options, or NULL. Supported options are: \n\nRESAMPLING=NEAREST/BILINEAR/CUBIC. Defaults to BILINEAR. \n\nMAX_ERROR=val. Maximum error measured in input pixels that is allowed in approximating the transformation (0.0 for exact calculations). Defaults to 0.125 \n\nDATATYPE=Byte/UInt16/Int16/Float32/Float64. Output data type. If not specified will be the same as the one of hSrcDataset. \n\nERRORONMISSINGVERTSHIFT=YES/NO. Whether a missing/nodata value in hGridDataset should cause I/O requests to fail. Default is NO (in which case 0 will be used) \n\nSRCSRS=srsdef. Override projection on hSrcDataset;\n\nReturns\n\na new dataset corresponding to hSrcDataset adjusted with hGridDataset, or NULL. If not NULL, it must be closed with GDALClose().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.approximatearcangles",
    "page": "Docstrings",
    "title": "GDAL.approximatearcangles",
    "category": "function",
    "text": "OGR_G_ApproximateArcAngles(double dfCenterX,\n                           double dfCenterY,\n                           double dfZ,\n                           double dfPrimaryRadius,\n                           double dfSecondaryRadius,\n                           double dfRotation,\n                           double dfStartAngle,\n                           double dfEndAngle,\n                           double dfMaxAngleStepSizeDegrees) -> OGRGeometryH\n\nStroke arc to linestring.\n\nParameters\n\ndfCenterX: center X\ndfCenterY: center Y\ndfZ: center Z\ndfPrimaryRadius: X radius of ellipse.\ndfSecondaryRadius: Y radius of ellipse.\ndfRotation: rotation of the ellipse clockwise.\ndfStartAngle: angle to first point on arc (clockwise of X-positive)\ndfEndAngle: angle to last point on arc (clockwise of X-positive)\ndfMaxAngleStepSizeDegrees: the largest step in degrees along the arc, zero to use the default setting.\n\nReturns\n\nOGRLineString geometry representing an approximation of the arc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.approxtransform",
    "page": "Docstrings",
    "title": "GDAL.approxtransform",
    "category": "function",
    "text": "GDALApproxTransform(void * pCBData,\n                    int bDstToSrc,\n                    int nPoints,\n                    double * x,\n                    double * y,\n                    double * z,\n                    int * panSuccess) -> int\n\nPerform approximate transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.approxtransformerownssubtransformer",
    "page": "Docstrings",
    "title": "GDAL.approxtransformerownssubtransformer",
    "category": "function",
    "text": "GDALApproxTransformerOwnsSubtransformer(void * pCBData,\n                                        int bOwnFlag) -> void\n\nSet bOwnSubtransformer flag.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.area",
    "page": "Docstrings",
    "title": "GDAL.area",
    "category": "function",
    "text": "OGR_G_Area(OGRGeometryH hGeom) -> double\n\nCompute geometry area.\n\nParameters\n\nhGeom: the geometry to operate on.\n\nReturns\n\nthe area or 0.0 for unsupported geometry types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.aretypesubtypecompatible",
    "page": "Docstrings",
    "title": "GDAL.aretypesubtypecompatible",
    "category": "function",
    "text": "OGR_AreTypeSubTypeCompatible(OGRFieldType eType,\n                             OGRFieldSubType eSubType) -> int\n\nReturn if type and subtype are compatible.\n\nParameters\n\neType: the field type.\neSubType: the field subtype.\n\nReturns\n\nTRUE if type and subtype are compatible\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.argetnextupdatedregion",
    "page": "Docstrings",
    "title": "GDAL.argetnextupdatedregion",
    "category": "function",
    "text": "GDALARGetNextUpdatedRegion(GDALAsyncReaderH hARIO,\n                           double dfTimeout,\n                           int * pnBufXOff,\n                           int * pnBufYOff,\n                           int * pnBufXSize,\n                           int * pnBufYSize) -> GDALAsyncStatusType\n\nGet async IO update.\n\nParameters\n\nhARIO: handle to the async reader.\ndfTimeout: the number of seconds to wait for additional updates. Use -1 to wait indefinitely, or zero to not wait at all if there is no data available.\npnBufXOff: location to return the X offset of the area of the request buffer that has been updated.\npnBufYOff: location to return the Y offset of the area of the request buffer that has been updated.\npnBufXSize: location to return the X size of the area of the request buffer that has been updated.\npnBufYSize: location to return the Y size of the area of the request buffer that has been updated.\n\nReturns\n\nGARIO_ status, details described above.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.arlockbuffer",
    "page": "Docstrings",
    "title": "GDAL.arlockbuffer",
    "category": "function",
    "text": "GDALARLockBuffer(GDALAsyncReaderH hARIO,\n                 double dfTimeout) -> int\n\nLock image buffer.\n\nParameters\n\nhARIO: handle to async reader.\ndfTimeout: the time in seconds to wait attempting to lock the buffer. -1.0 to wait indefinitely and 0 to not wait at all if it can\'t be acquired immediately. Default is -1.0 (infinite wait).\n\nReturns\n\nTRUE if successful, or FALSE on an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.arunlockbuffer",
    "page": "Docstrings",
    "title": "GDAL.arunlockbuffer",
    "category": "function",
    "text": "GDALARUnlockBuffer(GDALAsyncReaderH hARIO) -> void\n\nUnlock image buffer.\n\nParameters\n\nhARIO: handle to async reader.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.assignspatialreference",
    "page": "Docstrings",
    "title": "GDAL.assignspatialreference",
    "category": "function",
    "text": "OGR_G_AssignSpatialReference(OGRGeometryH hGeom,\n                             OGRSpatialReferenceH hSRS) -> void\n\nAssign spatial reference to this object.\n\nParameters\n\nhGeom: handle on the geometry to apply the new spatial reference system.\nhSRS: handle on the new spatial reference system to apply.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.autoidentifyepsg",
    "page": "Docstrings",
    "title": "GDAL.autoidentifyepsg",
    "category": "function",
    "text": "OSRAutoIdentifyEPSG(OGRSpatialReferenceH hSRS) -> OGRErr\n\nSet EPSG authority info if possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.axisenumtoname",
    "page": "Docstrings",
    "title": "GDAL.axisenumtoname",
    "category": "function",
    "text": "OSRAxisEnumToName(OGRAxisOrientation eOrientation) -> const char *\n\nReturn the string representation for the OGRAxisOrientation enumeration.\n\nReturns\n\nan internal string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.beginasyncreader",
    "page": "Docstrings",
    "title": "GDAL.beginasyncreader",
    "category": "function",
    "text": "GDALBeginAsyncReader(GDALDatasetH hDS,\n                     int nXOff,\n                     int nYOff,\n                     int nXSize,\n                     int nYSize,\n                     void * pBuf,\n                     int nBufXSize,\n                     int nBufYSize,\n                     GDALDataType eBufType,\n                     int nBandCount,\n                     int * panBandMap,\n                     int nPixelSpace,\n                     int nLineSpace,\n                     int nBandSpace,\n                     char ** papszOptions) -> GDALAsyncReaderH\n\nSets up an asynchronous data request.\n\nParameters\n\nhDS: handle to the dataset object.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\npBuf: The buffer into which the data should be read. This buffer must contain at least nBufXSize * nBufYSize * nBandCount words of type eBufType. It is organized in left to right,top to bottom pixel order. Spacing is controlled by the nPixelSpace, and nLineSpace parameters.\nnBufXSize: the width of the buffer image into which the desired region is to be read, or from which it is to be written.\nnBufYSize: the height of the buffer image into which the desired region is to be read, or from which it is to be written.\neBufType: the type of the pixel values in the pData data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnBandCount: the number of bands being read or written.\npanBandMap: the list of nBandCount band numbers being read/written. Note band numbers are 1 based. This may be NULL to select the first nBandCount bands.\nnPixelSpace: The byte offset from the start of one pixel value in pData to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in pData to the start of the next. If defaulted the size of the datatype eBufType * nBufXSize is used.\nnBandSpace: the byte offset from the start of one bands data to the start of the next. If defaulted (zero) the value will be nLineSpace * nBufYSize implying band sequential organization of the data buffer.\npapszOptions: Driver specific control options in a string list or NULL. Consult driver documentation for options supported.\n\nReturns\n\nhandle representing the request.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.boundary",
    "page": "Docstrings",
    "title": "GDAL.boundary",
    "category": "function",
    "text": "OGR_G_Boundary(OGRGeometryH hTarget) -> OGRGeometryH\n\nCompute boundary.\n\nParameters\n\nhTarget: The Geometry to calculate the boundary of.\n\nReturns\n\na handle to a newly allocated geometry now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buffer",
    "page": "Docstrings",
    "title": "GDAL.buffer",
    "category": "function",
    "text": "OGR_G_Buffer(OGRGeometryH hTarget,\n             double dfDist,\n             int nQuadSegs) -> OGRGeometryH\n\nCompute buffer of geometry.\n\nParameters\n\nhTarget: the geometry.\ndfDist: the buffer distance to be applied. Should be expressed into the same unit as the coordinates of the geometry.\nnQuadSegs: the number of segments used to approximate a 90 degree (quadrant) of curvature.\n\nReturns\n\nthe newly created geometry, or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buildoverviews",
    "page": "Docstrings",
    "title": "GDAL.buildoverviews",
    "category": "function",
    "text": "GDALBuildOverviews(GDALDatasetH hDataset,\n                   const char * pszResampling,\n                   int nOverviews,\n                   int * panOverviewList,\n                   int nListBands,\n                   int * panBandList,\n                   GDALProgressFunc pfnProgress,\n                   void * pProgressData) -> CPLErr\n\nBuild raster overview(s)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buildpolygonfromedges",
    "page": "Docstrings",
    "title": "GDAL.buildpolygonfromedges",
    "category": "function",
    "text": "OGRBuildPolygonFromEdges(OGRGeometryH hLines,\n                         int bBestEffort,\n                         int bAutoClose,\n                         double dfTolerance,\n                         OGRErr * peErr) -> OGRGeometryH\n\nBuild a ring from a bunch of arcs.\n\nParameters\n\nhLines: handle to an OGRGeometryCollection (or OGRMultiLineString) containing the line string geometries to be built into rings.\nbBestEffort: not yet implemented???.\nbAutoClose: indicates if the ring should be close when first and last points of the ring are the same.\ndfTolerance: tolerance into which two arcs are considered close enough to be joined.\npeErr: OGRERRNONE on success, or OGRERRFAILURE on failure.\n\nReturns\n\nan handle to the new geometry, a polygon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buildvrt",
    "page": "Docstrings",
    "title": "GDAL.buildvrt",
    "category": "function",
    "text": "GDALBuildVRT(const char * pszDest,\n             int nSrcCount,\n             GDALDatasetH * pahSrcDS,\n             const char *const * papszSrcDSNames,\n             const GDALBuildVRTOptions * psOptionsIn,\n             int * pbUsageError) -> GDALDatasetH\n\nBuild a VRT from a list of datasets.\n\nParameters\n\npszDest: the destination dataset path.\nnSrcCount: the number of input datasets.\npahSrcDS: the list of input datasets (or NULL, exclusive with papszSrcDSNames)\npapszSrcDSNames: the list of input dataset names (or NULL, exclusive with pahSrcDS)\npsOptionsIn: the options struct returned by GDALBuildVRTOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buildvrtoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.buildvrtoptionsfree",
    "category": "function",
    "text": "GDALBuildVRTOptionsFree(GDALBuildVRTOptions * psOptions) -> void\n\nFrees the GDALBuildVRTOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALBuildVRT().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buildvrtoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.buildvrtoptionsnew",
    "category": "function",
    "text": "GDALBuildVRTOptionsNew(char ** papszArgv,\n                       GDALBuildVRTOptionsForBinary * psOptionsForBinary) -> GDALBuildVRTOptions *\n\nAllocates a GDALBuildVRTOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdalbuildvrt utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALBuildVRTOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALBuildVRTOptions struct. Must be freed with GDALBuildVRTOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.buildvrtoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.buildvrtoptionssetprogress",
    "category": "function",
    "text": "GDALBuildVRTOptionsSetProgress(GDALBuildVRTOptions * psOptions,\n                               GDALProgressFunc pfnProgress,\n                               void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALBuildVRT().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.calcinvflattening",
    "page": "Docstrings",
    "title": "GDAL.calcinvflattening",
    "category": "function",
    "text": "OSRCalcInvFlattening(double dfSemiMajor,\n                     double dfSemiMinor) -> double\n\nCompute inverse flattening from semi-major and semi-minor axis.\n\nParameters\n\ndfSemiMajor: Semi-major axis length.\ndfSemiMinor: Semi-minor axis length.\n\nReturns\n\ninverse flattening, or 0 if both axis are equal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.calcsemiminorfrominvflattening",
    "page": "Docstrings",
    "title": "GDAL.calcsemiminorfrominvflattening",
    "category": "function",
    "text": "OSRCalcSemiMinorFromInvFlattening(double dfSemiMajor,\n                                  double dfInvFlattening) -> double\n\nCompute semi-minor axis from semi-major axis and inverse flattening.\n\nParameters\n\ndfSemiMajor: Semi-major axis length.\ndfInvFlattening: Inverse flattening or 0 for sphere.\n\nReturns\n\nsemi-minor axis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.centroid",
    "page": "Docstrings",
    "title": "GDAL.centroid",
    "category": "function",
    "text": "OGR_G_Centroid(OGRGeometryH hGeom,\n               OGRGeometryH hCentroidPoint) -> int\n\nCompute the geometry centroid.\n\nReturns\n\nOGRERRNONE on success or OGRERRFAILURE on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.cg_create",
    "page": "Docstrings",
    "title": "GDAL.cg_create",
    "category": "function",
    "text": "GDAL_CG_Create(int nWidth,\n               int nHeight,\n               int bNoDataSet,\n               double dfNoDataValue,\n               double dfContourInterval,\n               double dfContourBase,\n               GDALContourWriter pfnWriter,\n               void * pCBData) -> GDALContourGeneratorH\n\nCreate contour generator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.checksumimage",
    "page": "Docstrings",
    "title": "GDAL.checksumimage",
    "category": "function",
    "text": "GDALChecksumImage(GDALRasterBandH hBand,\n                  int nXOff,\n                  int nYOff,\n                  int nXSize,\n                  int nYSize) -> int\n\nCompute checksum for image region.\n\nParameters\n\nhBand: the raster band to read from.\nnXOff: pixel offset of window to read.\nnYOff: line offset of window to read.\nnXSize: pixel size of window to read.\nnYSize: line size of window to read.\n\nReturns\n\nChecksum value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.cleanup",
    "page": "Docstrings",
    "title": "GDAL.cleanup",
    "category": "function",
    "text": "OSRCleanup(void) -> void\n\nCleanup cached SRS related memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.cleanupall",
    "page": "Docstrings",
    "title": "GDAL.cleanupall",
    "category": "function",
    "text": "OGRCleanupAll(void) -> void\n\nClean-up all drivers (including raster ones starting with GDAL 2.0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.cleanuperrormutex",
    "page": "Docstrings",
    "title": "GDAL.cleanuperrormutex",
    "category": "function",
    "text": "CPLCleanupErrorMutex() -> void\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.clip",
    "page": "Docstrings",
    "title": "GDAL.clip",
    "category": "function",
    "text": "OGR_L_Clip(OGRLayerH pLayerInput,\n           OGRLayerH pLayerMethod,\n           OGRLayerH pLayerResult,\n           char ** papszOptions,\n           GDALProgressFunc pfnProgress,\n           void * pProgressArg) -> OGRErr\n\nClip off areas that are not covered by the method layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.clone",
    "page": "Docstrings",
    "title": "GDAL.clone",
    "category": "function",
    "text": "OGR_G_Clone(OGRGeometryH hGeom) -> OGRGeometryH\n\nMake a copy of this object.\n\nParameters\n\nhGeom: handle on the geometry to clone from.\n\nReturns\n\nan handle on the copy of the geometry with the spatial reference system as the original.\n\n\n\n\n\nOGR_F_Clone(OGRFeatureH hFeat) -> OGRFeatureH\n\nDuplicate feature.\n\nParameters\n\nhFeat: handle to the feature to clone.\n\nReturns\n\nan handle to the new feature, exactly matching this feature.\n\n\n\n\n\nOSRClone(OGRSpatialReferenceH hSRS) -> OGRSpatialReferenceH\n\nMake a duplicate of this OGRSpatialReference.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.clonecolortable",
    "page": "Docstrings",
    "title": "GDAL.clonecolortable",
    "category": "function",
    "text": "GDALCloneColorTable(GDALColorTableH hTable) -> GDALColorTableH\n\nMake a copy of a color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.clonegeogcs",
    "page": "Docstrings",
    "title": "GDAL.clonegeogcs",
    "category": "function",
    "text": "OSRCloneGeogCS(OGRSpatialReferenceH hSource) -> OGRSpatialReferenceH\n\nMake a duplicate of the GEOGCS node of this OGRSpatialReference object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.close",
    "page": "Docstrings",
    "title": "GDAL.close",
    "category": "function",
    "text": "GDALClose(GDALDatasetH hDS) -> friend void\n\nClose GDAL dataset.\n\nParameters\n\nhDS: The dataset to close. May be cast from a \"GDALDataset *\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.closerings",
    "page": "Docstrings",
    "title": "GDAL.closerings",
    "category": "function",
    "text": "OGR_G_CloseRings(OGRGeometryH hGeom) -> void\n\nForce rings to be closed.\n\nParameters\n\nhGeom: handle to the geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.committransaction",
    "page": "Docstrings",
    "title": "GDAL.committransaction",
    "category": "function",
    "text": "OGR_L_CommitTransaction(OGRLayerH) -> OGRErr\n\nFor datasources which support transactions, CommitTransaction commits a transaction.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.composegeotransforms",
    "page": "Docstrings",
    "title": "GDAL.composegeotransforms",
    "category": "function",
    "text": "GDALComposeGeoTransforms(const double * padfGeoTransform1,\n                         const double * padfGeoTransform2,\n                         double * padfGeoTransformOut) -> void\n\nCompose two geotransforms.\n\nParameters\n\npadfGT1: the first geotransform, six values.\npadfGT2: the second geotransform, six values.\npadfGTOut: the output geotransform, six values, may safely be the same array as padfGT1 or padfGT2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.computebandstats",
    "page": "Docstrings",
    "title": "GDAL.computebandstats",
    "category": "function",
    "text": "GDALComputeBandStats(GDALRasterBandH hBand,\n                     int nSampleStep,\n                     double * pdfMean,\n                     double * pdfStdDev,\n                     GDALProgressFunc pfnProgress,\n                     void * pProgressData) -> CPLErr\n\nUndocumented.\n\nParameters\n\nhSrcBand: undocumented.\nnSampleStep: undocumented.\npdfMean: undocumented.\npdfStdDev: undocumented.\npfnProgress: undocumented.\npProgressData: undocumented.\n\nReturns\n\nundocumented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.computematchingpoints",
    "page": "Docstrings",
    "title": "GDAL.computematchingpoints",
    "category": "function",
    "text": "GDALComputeMatchingPoints(GDALDatasetH hFirstImage,\n                          GDALDatasetH hSecondImage,\n                          char ** papszOptions,\n                          int * pnGCPCount) -> GDAL_GCP *\n\nGDALComputeMatchingPoints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.computemediancutpct",
    "page": "Docstrings",
    "title": "GDAL.computemediancutpct",
    "category": "function",
    "text": "GDALComputeMedianCutPCT(GDALRasterBandH hRed,\n                        GDALRasterBandH hGreen,\n                        GDALRasterBandH hBlue,\n                        int(*)(int, int, void *) pfnIncludePixel,\n                        int nColors,\n                        GDALColorTableH hColorTable,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressArg) -> int\n\nCompute optimal PCT for RGB image.\n\nParameters\n\nhRed: Red input band.\nhGreen: Green input band.\nhBlue: Blue input band.\npfnIncludePixel: function used to test which pixels should be included in the analysis. At this time this argument is ignored and all pixels are utilized. This should normally be NULL.\nnColors: the desired number of colors to be returned (2-256).\nhColorTable: the colors will be returned in this color table object.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nreturns CENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.computeproximity",
    "page": "Docstrings",
    "title": "GDAL.computeproximity",
    "category": "function",
    "text": "GDALComputeProximity(GDALRasterBandH hSrcBand,\n                     GDALRasterBandH hProximityBand,\n                     char ** papszOptions,\n                     GDALProgressFunc pfnProgress,\n                     void * pProgressArg) -> CPLErr\n\nCompute the proximity of all pixels in the image to a set of pixels in the source image.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.computerasterminmax",
    "page": "Docstrings",
    "title": "GDAL.computerasterminmax",
    "category": "function",
    "text": "GDALComputeRasterMinMax(GDALRasterBandH hBand,\n                        int bApproxOK,\n                        double adfMinMax) -> void\n\nCompute the min/max values for a band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.computerasterstatistics",
    "page": "Docstrings",
    "title": "GDAL.computerasterstatistics",
    "category": "function",
    "text": "GDALComputeRasterStatistics(GDALRasterBandH hBand,\n                            int bApproxOK,\n                            double * pdfMin,\n                            double * pdfMax,\n                            double * pdfMean,\n                            double * pdfStdDev,\n                            GDALProgressFunc pfnProgress,\n                            void * pProgressData) -> CPLErr\n\nCompute image statistics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.contains",
    "page": "Docstrings",
    "title": "GDAL.contains",
    "category": "function",
    "text": "OGR_G_Contains(OGRGeometryH hThis,\n               OGRGeometryH hOther) -> int\n\nTest for containment.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if hThis contains hOther geometry, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.contourgenerate",
    "page": "Docstrings",
    "title": "GDAL.contourgenerate",
    "category": "function",
    "text": "GDALContourGenerate(GDALRasterBandH hBand,\n                    double dfContourInterval,\n                    double dfContourBase,\n                    int nFixedLevelCount,\n                    double * padfFixedLevels,\n                    int bUseNoData,\n                    double dfNoDataValue,\n                    void * hLayer,\n                    int iIDField,\n                    int iElevField,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg) -> CPLErr\n\nCreate vector contours from raster DEM.\n\nParameters\n\nhBand: The band to read raster data from. The whole band will be processed.\ndfContourInterval: The elevation interval between contours generated.\ndfContourBase: The \"base\" relative to which contour intervals are applied. This is normally zero, but could be different. To generate 10m contours at 5, 15, 25, ... the ContourBase would be 5.\nnFixedLevelCount: The number of fixed levels. If this is greater than zero, then fixed levels will be used, and ContourInterval and ContourBase are ignored.\npadfFixedLevels: The list of fixed contour levels at which contours should be generated. It will contain FixedLevelCount entries, and may be NULL if fixed levels are disabled (FixedLevelCount = 0).\nbUseNoData: If TRUE the dfNoDataValue will be used.\ndfNoDataValue: The value to use as a \"nodata\" value. That is, a pixel value which should be ignored in generating contours as if the value of the pixel were not known.\nhLayer: The layer to which new contour vectors will be written. Each contour will have a LINESTRING geometry attached to it. This is really of type OGRLayerH, but void * is used to avoid pulling the ogr_api.h file in here.\niIDField: If not -1 this will be used as a field index to indicate where a unique id should be written for each feature (contour) written.\niElevField: If not -1 this will be used as a field index to indicate where the elevation value of the contour should be written.\npfnProgress: A GDALProgressFunc that may be used to report progress to the user, or to interrupt the algorithm. May be NULL if not required.\npProgressArg: The callback data for the pfnProgress function.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.contourwriter",
    "page": "Docstrings",
    "title": "GDAL.contourwriter",
    "category": "function",
    "text": "OGRContourWriter(double dfLevel,\n                 int nPoints,\n                 double * padfX,\n                 double * padfY,\n                 void * pInfo) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.convexhull",
    "page": "Docstrings",
    "title": "GDAL.convexhull",
    "category": "function",
    "text": "OGR_G_ConvexHull(OGRGeometryH hTarget) -> OGRGeometryH\n\nCompute convex hull.\n\nParameters\n\nhTarget: The Geometry to calculate the convex hull of.\n\nReturns\n\na handle to a newly allocated geometry now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.coordinatedimension",
    "page": "Docstrings",
    "title": "GDAL.coordinatedimension",
    "category": "function",
    "text": "OGR_G_CoordinateDimension(OGRGeometryH hGeom) -> int\n\nGet the dimension of the coordinates in this geometry.\n\nParameters\n\nhGeom: handle on the geometry to get the dimension of the coordinates from.\n\nReturns\n\nthis will return 2 for XY, 3 for XYZ and XYM, and 4 for XYZM data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.copybits",
    "page": "Docstrings",
    "title": "GDAL.copybits",
    "category": "function",
    "text": "GDALCopyBits(const GByte * pabySrcData,\n             int nSrcOffset,\n             int nSrcStep,\n             GByte * pabyDstData,\n             int nDstOffset,\n             int nDstStep,\n             int nBitCount,\n             int nStepCount) -> void\n\nBitwise word copying.\n\nParameters\n\npabySrcData: the source data buffer.\nnSrcOffset: the offset (in bits) in pabySrcData to the start of the first word to copy.\nnSrcStep: the offset in bits from the start one source word to the start of the next.\npabyDstData: the destination data buffer.\nnDstOffset: the offset (in bits) in pabyDstData to the start of the first word to copy over.\nnDstStep: the offset in bits from the start one word to the start of the next.\nnBitCount: the number of bits in a word to be copied.\nnStepCount: the number of words to copy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.copydatasetfiles",
    "page": "Docstrings",
    "title": "GDAL.copydatasetfiles",
    "category": "function",
    "text": "GDALCopyDatasetFiles(GDALDriverH hDriver,\n                     const char * pszNewName,\n                     const char * pszOldName) -> CPLErr\n\nCopy the files of a dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.copydatasource",
    "page": "Docstrings",
    "title": "GDAL.copydatasource",
    "category": "function",
    "text": "OGR_Dr_CopyDataSource(OGRSFDriverH,\n                      OGRDataSourceH,\n                      const char *,\n                      char **) -> OGRDataSourceH\n\nThis function creates a new datasource by copying all the layers from the source datasource.\n\nParameters\n\nhDriver: handle to the driver on which data source creation is based.\nhSrcDS: source datasource\npszNewName: the name for the new data source.\npapszOptions: a StringList of name=value options. Options are driver specific, and driver information can be found at the following url: http://www.gdal.org/ogr_formats.html\n\nReturns\n\nNULL is returned on failure, or a new OGRDataSource handle on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.copygeogcsfrom",
    "page": "Docstrings",
    "title": "GDAL.copygeogcsfrom",
    "category": "function",
    "text": "OSRCopyGeogCSFrom(OGRSpatialReferenceH hSRS,\n                  const OGRSpatialReferenceH hSrcSRS) -> OGRErr\n\nCopy GEOGCS from another OGRSpatialReference.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.copylayer",
    "page": "Docstrings",
    "title": "GDAL.copylayer",
    "category": "function",
    "text": "OGR_DS_CopyLayer(OGRDataSourceH,\n                 OGRLayerH,\n                 const char *,\n                 char **) -> OGRLayerH\n\nDuplicate an existing layer.\n\nParameters\n\nhDS: handle to the data source where to create the new layer\nhSrcLayer: handle to the source layer.\npszNewName: the name of the layer to create.\npapszOptions: a StringList of name=value options. Options are driver specific.\n\nReturns\n\nan handle to the layer, or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.copywords",
    "page": "Docstrings",
    "title": "GDAL.copywords",
    "category": "function",
    "text": "GDALCopyWords(const void *CPL_RESTRICT pSrcData,\n              GDALDataType eSrcType,\n              int nSrcPixelOffset,\n              void *CPL_RESTRICT pDstData,\n              GDALDataType eDstType,\n              int nDstPixelOffset,\n              int nWordCount) -> void\n\nCopy pixel words from buffer to buffer.\n\nParameters\n\npSrcData: Pointer to source data to be converted.\neSrcType: the source data type (see GDALDataType enum)\nnSrcPixelStride: Source pixel stride (i.e. distance between 2 words), in bytes\npDstData: Pointer to buffer where destination data should go\neDstType: the destination data type (see GDALDataType enum)\nnDstPixelStride: Destination pixel stride (i.e. distance between 2 words), in bytes\nnWordCount: number of words to be copied\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.create",
    "page": "Docstrings",
    "title": "GDAL.create",
    "category": "function",
    "text": "GDALCreate(GDALDriverH hDriver,\n           const char * pszFilename,\n           int nXSize,\n           int nYSize,\n           int nBands,\n           GDALDataType eBandType,\n           char ** papszOptions) -> GDALDatasetH\n\nCreate a new dataset with this driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createapproxtransformer",
    "page": "Docstrings",
    "title": "GDAL.createapproxtransformer",
    "category": "function",
    "text": "GDALCreateApproxTransformer(GDALTransformerFunc pfnBaseTransformer,\n                            void * pBaseTransformArg,\n                            double dfMaxError) -> void *\n\nCreate an approximating transformer.\n\nParameters\n\npfnBaseTransformer: the high precision transformer which should be approximated.\npBaseTransformArg: the callback argument for the high precision transformer.\ndfMaxError: the maximum cartesian error in the \"output\" space that is to be accepted in the linear approximation.\n\nReturns\n\ncallback pointer suitable for use with GDALApproxTransform(). It should be deallocated with GDALDestroyApproxTransformer().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createcolorramp",
    "page": "Docstrings",
    "title": "GDAL.createcolorramp",
    "category": "function",
    "text": "GDALCreateColorRamp(GDALColorTableH hTable,\n                    int nStartIndex,\n                    const GDALColorEntry * psStartColor,\n                    int nEndIndex,\n                    const GDALColorEntry * psEndColor) -> void\n\nCreate color ramp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createcolortable",
    "page": "Docstrings",
    "title": "GDAL.createcolortable",
    "category": "function",
    "text": "GDALCreateColorTable(GDALPaletteInterp eInterp) -> GDALColorTableH\n\nConstruct a new color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createcopy",
    "page": "Docstrings",
    "title": "GDAL.createcopy",
    "category": "function",
    "text": "GDALCreateCopy(GDALDriverH hDriver,\n               const char * pszFilename,\n               GDALDatasetH hSrcDS,\n               int bStrict,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressData) -> GDALDatasetH\n\nCreate a copy of a dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createdatasetmaskband",
    "page": "Docstrings",
    "title": "GDAL.createdatasetmaskband",
    "category": "function",
    "text": "GDALCreateDatasetMaskBand(GDALDatasetH hDS,\n                          int nFlags) -> CPLErr\n\nAdds a mask band to the dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createdatasource",
    "page": "Docstrings",
    "title": "GDAL.createdatasource",
    "category": "function",
    "text": "OGR_Dr_CreateDataSource(OGRSFDriverH,\n                        const char *,\n                        char **) -> OGRDataSourceH\n\nThis function attempts to create a new data source based on the passed driver.\n\nParameters\n\nhDriver: handle to the driver on which data source creation is based.\npszName: the name for the new data source. UTF-8 encoded.\npapszOptions: a StringList of name=value options. Options are driver specific, and driver information can be found at the following url: http://www.gdal.org/ogr_formats.html\n\nReturns\n\nNULL is returned on failure, or a new OGRDataSource handle on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfeature",
    "page": "Docstrings",
    "title": "GDAL.createfeature",
    "category": "function",
    "text": "OGR_L_CreateFeature(OGRLayerH,\n                    OGRFeatureH) -> OGRErr\n\nCreate and write a new feature within a layer.\n\nParameters\n\nhLayer: handle to the layer to write the feature to.\nhFeat: the handle of the feature to write to disk.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfield",
    "page": "Docstrings",
    "title": "GDAL.createfield",
    "category": "function",
    "text": "OGR_L_CreateField(OGRLayerH,\n                  OGRFieldDefnH,\n                  int) -> OGRErr\n\nCreate a new field on a layer.\n\nParameters\n\nhLayer: handle to the layer to write the field definition.\nhField: handle of the field definition to write to disk.\nbApproxOK: If TRUE, the field may be created in a slightly different form depending on the limitations of the format driver.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfromfgf",
    "page": "Docstrings",
    "title": "GDAL.createfromfgf",
    "category": "function",
    "text": "OGR_G_CreateFromFgf(unsigned char * pabyData,\n                    OGRSpatialReferenceH hSRS,\n                    OGRGeometryH * phGeometry,\n                    int nBytes,\n                    int * pnBytesConsumed) -> OGRErr\n\nCreate a geometry object of the appropriate type from it\'s FGF (FDO Geometry Format) binary representation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfromgml",
    "page": "Docstrings",
    "title": "GDAL.createfromgml",
    "category": "function",
    "text": "OGR_G_CreateFromGML(const char * pszGML) -> OGRGeometryH\n\nCreate geometry from GML.\n\nParameters\n\npszGML: The GML fragment for the geometry.\n\nReturns\n\na geometry on success, or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfromgmltree",
    "page": "Docstrings",
    "title": "GDAL.createfromgmltree",
    "category": "function",
    "text": "OGR_G_CreateFromGMLTree(const CPLXMLNode * psTree) -> OGRGeometryH\n\nCreate geometry from GML.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfromwkb",
    "page": "Docstrings",
    "title": "GDAL.createfromwkb",
    "category": "function",
    "text": "OGR_G_CreateFromWkb(unsigned char * pabyData,\n                    OGRSpatialReferenceH hSRS,\n                    OGRGeometryH * phGeometry,\n                    int nBytes) -> OGRErr\n\nCreate a geometry object of the appropriate type from it\'s well known binary representation.\n\nParameters\n\npabyData: pointer to the input BLOB data.\nhSRS: handle to the spatial reference to be assigned to the created geometry object. This may be NULL.\nphGeometry: the newly created geometry object will be assigned to the indicated handle on return. This will be NULL in case of failure. If not NULL, *phGeometry should be freed with OGRGDestroyGeometry() after use.\nnBytes: the number of bytes of data available in pabyData, or -1 if it is not known, but assumed to be sufficient.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createfromwkt",
    "page": "Docstrings",
    "title": "GDAL.createfromwkt",
    "category": "function",
    "text": "OGR_G_CreateFromWkt(char ** ppszData,\n                    OGRSpatialReferenceH hSRS,\n                    OGRGeometryH * phGeometry) -> OGRErr\n\nCreate a geometry object of the appropriate type from it\'s well known text representation.\n\nParameters\n\nppszData: input zero terminated string containing well known text representation of the geometry to be created. The pointer is updated to point just beyond that last character consumed.\nhSRS: handle to the spatial reference to be assigned to the created geometry object. This may be NULL.\nphGeometry: the newly created geometry object will be assigned to the indicated handle on return. This will be NULL if the method fails. If not NULL, *phGeometry should be freed with OGRGDestroyGeometry() after use.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategcprefinetransformer",
    "page": "Docstrings",
    "title": "GDAL.creategcprefinetransformer",
    "category": "function",
    "text": "GDALCreateGCPRefineTransformer(int nGCPCount,\n                               const GDAL_GCP * pasGCPList,\n                               int nReqOrder,\n                               int bReversed,\n                               double tolerance,\n                               int minimumGcps) -> void *\n\nCreate GCP based polynomial transformer, with a tolerance threshold to discard GCPs that transform badly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategcptransformer",
    "page": "Docstrings",
    "title": "GDAL.creategcptransformer",
    "category": "function",
    "text": "GDALCreateGCPTransformer(int nGCPCount,\n                         const GDAL_GCP * pasGCPList,\n                         int nReqOrder,\n                         int bReversed) -> void *\n\nCreate GCP based polynomial transformer.\n\nParameters\n\nnGCPCount: the number of GCPs in pasGCPList.\npasGCPList: an array of GCPs to be used as input.\nnReqOrder: the requested polynomial order. It should be 1, 2 or 3.\nnGCPCount: the number of GCPs in pasGCPList.\npasGCPList: an array of GCPs to be used as input.\nnReqOrder: the requested polynomial order. It should be 1, 2 or 3.\nbReversed: set it to TRUE to compute the reversed transformation.\n\nReturns\n\nthe transform argument or NULL if creation fails.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategenimgprojtransformer",
    "page": "Docstrings",
    "title": "GDAL.creategenimgprojtransformer",
    "category": "function",
    "text": "GDALCreateGenImgProjTransformer(GDALDatasetH hSrcDS,\n                                const char * pszSrcWKT,\n                                GDALDatasetH hDstDS,\n                                const char * pszDstWKT,\n                                int bGCPUseOK,\n                                double dfGCPErrorThreshold,\n                                int nOrder) -> void *\n\nCreate image to image transformer.\n\nParameters\n\nhSrcDS: source dataset, or NULL.\npszSrcWKT: the coordinate system for the source dataset. If NULL, it will be read from the dataset itself.\nhDstDS: destination dataset (or NULL).\npszDstWKT: the coordinate system for the destination dataset. If NULL, and hDstDS not NULL, it will be read from the destination dataset.\nbGCPUseOK: TRUE if GCPs should be used if the geotransform is not available on the source dataset (not destination).\ndfGCPErrorThreshold: ignored/deprecated.\nnOrder: the maximum order to use for GCP derived polynomials if possible. Use 0 to autoselect, or -1 for thin plate splines.\n\nReturns\n\nhandle suitable for use GDALGenImgProjTransform(), and to be deallocated with GDALDestroyGenImgProjTransformer().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategenimgprojtransformer2",
    "page": "Docstrings",
    "title": "GDAL.creategenimgprojtransformer2",
    "category": "function",
    "text": "GDALCreateGenImgProjTransformer2(GDALDatasetH hSrcDS,\n                                 GDALDatasetH hDstDS,\n                                 char ** papszOptions) -> void *\n\nCreate image to image transformer.\n\nParameters\n\nhSrcDS: source dataset, or NULL.\nhDstDS: destination dataset (or NULL).\npapszOptions: NULL-terminated list of string options (or NULL).\n\nReturns\n\nhandle suitable for use GDALGenImgProjTransform(), and to be deallocated with GDALDestroyGenImgProjTransformer() or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategenimgprojtransformer3",
    "page": "Docstrings",
    "title": "GDAL.creategenimgprojtransformer3",
    "category": "function",
    "text": "GDALCreateGenImgProjTransformer3(const char * pszSrcWKT,\n                                 const double * padfSrcGeoTransform,\n                                 const char * pszDstWKT,\n                                 const double * padfDstGeoTransform) -> void *\n\nCreate image to image transformer.\n\nParameters\n\npszSrcWKT: source WKT (or NULL).\npadfSrcGeoTransform: source geotransform (or NULL).\npszDstWKT: destination WKT (or NULL).\npadfDstGeoTransform: destination geotransform (or NULL).\n\nReturns\n\nhandle suitable for use GDALGenImgProjTransform(), and to be deallocated with GDALDestroyGenImgProjTransformer() or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategeoloctransformer",
    "page": "Docstrings",
    "title": "GDAL.creategeoloctransformer",
    "category": "function",
    "text": "GDALCreateGeoLocTransformer(GDALDatasetH hBaseDS,\n                            char ** papszGeolocationInfo,\n                            int bReversed) -> void *\n\nCreate GeoLocation transformer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategeometry",
    "page": "Docstrings",
    "title": "GDAL.creategeometry",
    "category": "function",
    "text": "OGR_G_CreateGeometry(OGRwkbGeometryType eGeometryType) -> OGRGeometryH\n\nCreate an empty geometry of desired type.\n\nParameters\n\neGeometryType: the type code of the geometry to be created.\n\nReturns\n\nhandle to the newly create geometry or NULL on failure. Should be freed with OGRGDestroyGeometry() after use.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategeometryfromjson",
    "page": "Docstrings",
    "title": "GDAL.creategeometryfromjson",
    "category": "function",
    "text": "OGR_G_CreateGeometryFromJson(const char *) -> OGRGeometryH\n\nCreate a OGR geometry from a GeoJSON geometry object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.creategeomfield",
    "page": "Docstrings",
    "title": "GDAL.creategeomfield",
    "category": "function",
    "text": "OGR_L_CreateGeomField(OGRLayerH hLayer,\n                      OGRGeomFieldDefnH hFieldDefn,\n                      int bForce) -> OGRErr\n\nCreate a new geometry field on a layer.\n\nParameters\n\nhLayer: handle to the layer to write the field definition.\nhField: handle of the geometry field definition to write to disk.\nbApproxOK: If TRUE, the field may be created in a slightly different form depending on the limitations of the format driver.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createlayer",
    "page": "Docstrings",
    "title": "GDAL.createlayer",
    "category": "function",
    "text": "OGR_DS_CreateLayer(OGRDataSourceH,\n                   const char *,\n                   OGRSpatialReferenceH,\n                   OGRwkbGeometryType,\n                   char **) -> OGRLayerH\n\nThis function attempts to create a new layer on the data source with the indicated name, coordinate system, geometry type.\n\nParameters\n\nhDS: The dataset handle.\npszName: the name for the new layer. This should ideally not match any existing layer on the datasource.\nhSpatialRef: handle to the coordinate system to use for the new layer, or NULL if no coordinate system is available.\neType: the geometry type for the layer. Use wkbUnknown if there are no constraints on the types geometry to be written.\npapszOptions: a StringList of name=value options. Options are driver specific, and driver information can be found at the following url: http://www.gdal.org/ogr_formats.html\n\nReturns\n\nNULL is returned on failure, or a new OGRLayer handle on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createmaskband",
    "page": "Docstrings",
    "title": "GDAL.createmaskband",
    "category": "function",
    "text": "GDALCreateMaskBand(GDALRasterBandH hBand,\n                   int nFlags) -> CPLErr\n\nAdds a mask band to the current band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createpansharpenedvrt",
    "page": "Docstrings",
    "title": "GDAL.createpansharpenedvrt",
    "category": "function",
    "text": "GDALCreatePansharpenedVRT(const char * pszXML,\n                          GDALRasterBandH hPanchroBand,\n                          int nInputSpectralBands,\n                          GDALRasterBandH * pahInputSpectralBands) -> GDALDatasetH\n\nCreate a virtual pansharpened dataset.\n\nParameters\n\npszXML: Pansharpened VRT XML where <SpectralBand> elements have no explicit SourceFilename and SourceBand. The spectral bands in the XML will be assigned the successive values of the pahInputSpectralBands array. Must not be NULL.\nhPanchroBand: Panchromatic band. Must not be NULL.\nnInputSpectralBands: Number of input spectral bands. Must be greater than zero.\npahInputSpectralBands: Array of nInputSpectralBands spectral bands.\n\nReturns\n\nNULL on failure, or a new virtual dataset handle on success to be closed with GDALClose().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createrasterattributetable",
    "page": "Docstrings",
    "title": "GDAL.createrasterattributetable",
    "category": "function",
    "text": "GDALCreateRasterAttributeTable(void) -> GDALRasterAttributeTableH\n\nConstruct empty table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createreprojectiontransformer",
    "page": "Docstrings",
    "title": "GDAL.createreprojectiontransformer",
    "category": "function",
    "text": "GDALCreateReprojectionTransformer(const char * pszSrcWKT,\n                                  const char * pszDstWKT) -> void *\n\nCreate reprojection transformer.\n\nParameters\n\npszSrcWKT: the coordinate system for the source coordinate system.\npszDstWKT: the coordinate system for the destination coordinate system.\n\nReturns\n\nHandle for use with GDALReprojectionTransform(), or NULL if the system fails to initialize the reprojection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createrpctransformer",
    "page": "Docstrings",
    "title": "GDAL.createrpctransformer",
    "category": "function",
    "text": "GDALCreateRPCTransformer(GDALRPCInfo * psRPC,\n                         int bReversed,\n                         double dfPixErrThreshold,\n                         char ** papszOptions) -> void *\n\nCreate an RPC based transformer.\n\nParameters\n\npsRPCInfo: Definition of the RPC parameters.\nbReversed: If true \"forward\" transformation will be lat/long to pixel/line instead of the normal pixel/line to lat/long.\ndfPixErrThreshold: the error (measured in pixels) allowed in the iterative solution of pixel/line to lat/long computations (the other way is always exact given the equations). Starting with GDAL 2.1, this may also be set through the RPCPIXELERROR_THRESHOLD transformer option. If a negative or null value is provided, then this defaults to 0.1 pixel.\npapszOptions: Other transformer options (i.e. RPC_HEIGHT=z).\n\nReturns\n\ntransformer callback data (deallocate with GDALDestroyTransformer()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createsimilartransformer",
    "page": "Docstrings",
    "title": "GDAL.createsimilartransformer",
    "category": "function",
    "text": "GDALCreateSimilarTransformer(void * pTransformArg,\n                             double dfRatioX,\n                             double dfRatioY) -> void *\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.createtpstransformer",
    "page": "Docstrings",
    "title": "GDAL.createtpstransformer",
    "category": "function",
    "text": "GDALCreateTPSTransformer(int nGCPCount,\n                         const GDAL_GCP * pasGCPList,\n                         int bReversed) -> void *\n\nCreate Thin Plate Spline transformer from GCPs.\n\nParameters\n\nnGCPCount: the number of GCPs in pasGCPList.\npasGCPList: an array of GCPs to be used as input.\nbReversed: set it to TRUE to compute the reversed transformation.\n\nReturns\n\nthe transform argument or NULL if creation fails.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.crosses",
    "page": "Docstrings",
    "title": "GDAL.crosses",
    "category": "function",
    "text": "OGR_G_Crosses(OGRGeometryH hThis,\n              OGRGeometryH hOther) -> int\n\nTest for crossing.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are crossing, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetadviseread",
    "page": "Docstrings",
    "title": "GDAL.datasetadviseread",
    "category": "function",
    "text": "GDALDatasetAdviseRead(GDALDatasetH hDS,\n                      int nXOff,\n                      int nYOff,\n                      int nXSize,\n                      int nYSize,\n                      int nBufXSize,\n                      int nBufYSize,\n                      GDALDataType eDT,\n                      int nBandCount,\n                      int * panBandMap,\n                      char ** papszOptions) -> CPLErr\n\nAdvise driver of upcoming read requests.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetcommittransaction",
    "page": "Docstrings",
    "title": "GDAL.datasetcommittransaction",
    "category": "function",
    "text": "GDALDatasetCommitTransaction(GDALDatasetH hDS) -> OGRErr\n\nFor datasources which support transactions, CommitTransaction commits a transaction.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetcopylayer",
    "page": "Docstrings",
    "title": "GDAL.datasetcopylayer",
    "category": "function",
    "text": "GDALDatasetCopyLayer(GDALDatasetH hDS,\n                     OGRLayerH hSrcLayer,\n                     const char * pszNewName,\n                     char ** papszOptions) -> OGRLayerH\n\nDuplicate an existing layer.\n\nParameters\n\nhDS: the dataset handle.\nhSrcLayer: source layer.\npszNewName: the name of the layer to create.\npapszOptions: a StringList of name=value options. Options are driver specific.\n\nReturns\n\nan handle to the layer, or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetcopywholeraster",
    "page": "Docstrings",
    "title": "GDAL.datasetcopywholeraster",
    "category": "function",
    "text": "GDALDatasetCopyWholeRaster(GDALDatasetH hSrcDS,\n                           GDALDatasetH hDstDS,\n                           char ** papszOptions,\n                           GDALProgressFunc pfnProgress,\n                           void * pProgressData) -> CPLErr\n\nCopy all dataset raster data.\n\nParameters\n\nhSrcDS: the source dataset\nhDstDS: the destination dataset\npapszOptions: transfer hints in \"StringList\" Name=Value format.\npfnProgress: progress reporting function.\npProgressData: callback data for progress function.\n\nReturns\n\nCENone on success, or CEFailure on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetcreatelayer",
    "page": "Docstrings",
    "title": "GDAL.datasetcreatelayer",
    "category": "function",
    "text": "GDALDatasetCreateLayer(GDALDatasetH hDS,\n                       const char * pszName,\n                       OGRSpatialReferenceH hSpatialRef,\n                       OGRwkbGeometryType eGType,\n                       char ** papszOptions) -> OGRLayerH\n\nThis function attempts to create a new layer on the dataset with the indicated name, coordinate system, geometry type.\n\nParameters\n\nhDS: the dataset handle\npszName: the name for the new layer. This should ideally not match any existing layer on the datasource.\nhSpatialRef: the coordinate system to use for the new layer, or NULL if no coordinate system is available.\neGType: the geometry type for the layer. Use wkbUnknown if there are no constraints on the types geometry to be written.\npapszOptions: a StringList of name=value options. Options are driver specific.\n\nReturns\n\nNULL is returned on failure, or a new OGRLayer handle on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetdeletelayer",
    "page": "Docstrings",
    "title": "GDAL.datasetdeletelayer",
    "category": "function",
    "text": "GDALDatasetDeleteLayer(GDALDatasetH hDS,\n                       int iLayer) -> OGRErr\n\nDelete the indicated layer from the datasource.\n\nParameters\n\nhDS: the dataset handle.\niLayer: the index of the layer to delete.\n\nReturns\n\nOGRERRNONE on success, or OGRERRUNSUPPORTED_OPERATION if deleting layers is not supported for this datasource.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetexecutesql",
    "page": "Docstrings",
    "title": "GDAL.datasetexecutesql",
    "category": "function",
    "text": "GDALDatasetExecuteSQL(GDALDatasetH hDS,\n                      const char * pszStatement,\n                      OGRGeometryH hSpatialFilter,\n                      const char * pszDialect) -> OGRLayerH\n\nExecute an SQL statement against the data store.\n\nParameters\n\nhDS: the dataset handle.\npszStatement: the SQL statement to execute.\nhSpatialFilter: geometry which represents a spatial filter. Can be NULL.\npszDialect: allows control of the statement dialect. If set to NULL, the OGR SQL engine will be used, except for RDBMS drivers that will use their dedicated SQL engine, unless OGRSQL is explicitly passed as the dialect. Starting with OGR 1.10, the SQLITE dialect can also be used.\n\nReturns\n\nan OGRLayer containing the results of the query. Deallocate with ReleaseResultSet().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgetlayer",
    "page": "Docstrings",
    "title": "GDAL.datasetgetlayer",
    "category": "function",
    "text": "GDALDatasetGetLayer(GDALDatasetH hDS,\n                    int iLayer) -> OGRLayerH\n\nFetch a layer by index.\n\nParameters\n\nhDS: the dataset handle.\niLayer: a layer number between 0 and GetLayerCount()-1.\n\nReturns\n\nthe layer, or NULL if iLayer is out of range or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgetlayerbyname",
    "page": "Docstrings",
    "title": "GDAL.datasetgetlayerbyname",
    "category": "function",
    "text": "GDALDatasetGetLayerByName(GDALDatasetH hDS,\n                          const char * pszName) -> OGRLayerH\n\nFetch a layer by name.\n\nParameters\n\nhDS: the dataset handle.\npszName: the layer name of the layer to fetch.\n\nReturns\n\nthe layer, or NULL if Layer is not found or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgetlayercount",
    "page": "Docstrings",
    "title": "GDAL.datasetgetlayercount",
    "category": "function",
    "text": "GDALDatasetGetLayerCount(GDALDatasetH hDS) -> int\n\nGet the number of layers in this dataset.\n\nParameters\n\nhDS: the dataset handle.\n\nReturns\n\nlayer count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgetnextfeature",
    "page": "Docstrings",
    "title": "GDAL.datasetgetnextfeature",
    "category": "function",
    "text": "GDALDatasetGetNextFeature(GDALDatasetH hDS,\n                          OGRLayerH * phBelongingLayer,\n                          double * pdfProgressPct,\n                          GDALProgressFunc pfnProgress,\n                          void * pProgressData) -> OGRFeatureH\n\nFetch the next available feature from this dataset.\n\nParameters\n\nhDS: dataset handle.\nphBelongingLayer: a pointer to a OGRLayer* variable to receive the layer to which the object belongs to, or NULL. It is possible that the output of *ppoBelongingLayer to be NULL despite the feature not being NULL.\npdfProgressPct: a pointer to a double variable to receive the percentage progress (in [0,1] range), or NULL. On return, the pointed value might be negative if determining the progress is not possible.\npfnProgress: a progress callback to report progress (for GetNextFeature() calls that might have a long duration) and offer cancellation possibility, or NULL\npProgressData: user data provided to pfnProgress, or NULL\n\nReturns\n\na feature, or NULL if no more features are available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgetstyletable",
    "page": "Docstrings",
    "title": "GDAL.datasetgetstyletable",
    "category": "function",
    "text": "GDALDatasetGetStyleTable(GDALDatasetH hDS) -> OGRStyleTableH\n\nReturns dataset style table.\n\nParameters\n\nhDS: the dataset handle\n\nReturns\n\nhandle to a style table which should not be modified or freed by the caller.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgettiledvirtualmem",
    "page": "Docstrings",
    "title": "GDAL.datasetgettiledvirtualmem",
    "category": "function",
    "text": "GDALDatasetGetTiledVirtualMem(GDALDatasetH hDS,\n                              GDALRWFlag eRWFlag,\n                              int nXOff,\n                              int nYOff,\n                              int nXSize,\n                              int nYSize,\n                              int nTileXSize,\n                              int nTileYSize,\n                              GDALDataType eBufType,\n                              int nBandCount,\n                              int * panBandMap,\n                              GDALTileOrganization eTileOrganization,\n                              size_t nCacheSize,\n                              int bSingleThreadUsage,\n                              char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL dataset object, with tiling organization.\n\nParameters\n\nhDS: Dataset object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnTileXSize: the width of the tiles.\nnTileYSize: the height of the tiles.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnBandCount: the number of bands being read or written.\npanBandMap: the list of nBandCount band numbers being read/written. Note band numbers are 1 based. This may be NULL to select the first nBandCount bands.\neTileOrganization: tile organization.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetgetvirtualmem",
    "page": "Docstrings",
    "title": "GDAL.datasetgetvirtualmem",
    "category": "function",
    "text": "GDALDatasetGetVirtualMem(GDALDatasetH hDS,\n                         GDALRWFlag eRWFlag,\n                         int nXOff,\n                         int nYOff,\n                         int nXSize,\n                         int nYSize,\n                         int nBufXSize,\n                         int nBufYSize,\n                         GDALDataType eBufType,\n                         int nBandCount,\n                         int * panBandMap,\n                         int nPixelSpace,\n                         GIntBig nLineSpace,\n                         GIntBig nBandSpace,\n                         size_t nCacheSize,\n                         size_t nPageSizeHint,\n                         int bSingleThreadUsage,\n                         char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL dataset object.\n\nParameters\n\nhDS: Dataset object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnBufXSize: the width of the buffer image into which the desired region is to be read, or from which it is to be written.\nnBufYSize: the height of the buffer image into which the desired region is to be read, or from which it is to be written.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnBandCount: the number of bands being read or written.\npanBandMap: the list of nBandCount band numbers being read/written. Note band numbers are 1 based. This may be NULL to select the first nBandCount bands.\nnPixelSpace: The byte offset from the start of one pixel value in the buffer to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in the buffer to the start of the next. If defaulted (0) the size of the datatype eBufType * nBufXSize is used.\nnBandSpace: the byte offset from the start of one bands data to the start of the next. If defaulted (0) the value will be nLineSpace * nBufYSize implying band sequential organization of the data buffer.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nnPageSizeHint: hint for the page size. Must be a multiple of the system page size, returned by CPLGetPageSize(). Minimum value is generally 4096. Might be set to 0 to let the function determine a default page size.\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetrasterio",
    "page": "Docstrings",
    "title": "GDAL.datasetrasterio",
    "category": "function",
    "text": "GDALDatasetRasterIO(GDALDatasetH hDS,\n                    GDALRWFlag eRWFlag,\n                    int nXOff,\n                    int nYOff,\n                    int nXSize,\n                    int nYSize,\n                    void * pData,\n                    int nBufXSize,\n                    int nBufYSize,\n                    GDALDataType eBufType,\n                    int nBandCount,\n                    int * panBandMap,\n                    int nPixelSpace,\n                    int nLineSpace,\n                    int nBandSpace) -> CPLErr\n\nRead/write a region of image data from multiple bands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetrasterioex",
    "page": "Docstrings",
    "title": "GDAL.datasetrasterioex",
    "category": "function",
    "text": "GDALDatasetRasterIOEx(GDALDatasetH hDS,\n                      GDALRWFlag eRWFlag,\n                      int nXOff,\n                      int nYOff,\n                      int nXSize,\n                      int nYSize,\n                      void * pData,\n                      int nBufXSize,\n                      int nBufYSize,\n                      GDALDataType eBufType,\n                      int nBandCount,\n                      int * panBandMap,\n                      GSpacing nPixelSpace,\n                      GSpacing nLineSpace,\n                      GSpacing nBandSpace,\n                      GDALRasterIOExtraArg * psExtraArg) -> CPLErr\n\nRead/write a region of image data from multiple bands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetreleaseresultset",
    "page": "Docstrings",
    "title": "GDAL.datasetreleaseresultset",
    "category": "function",
    "text": "GDALDatasetReleaseResultSet(GDALDatasetH hDS,\n                            OGRLayerH hLayer) -> void\n\nRelease results of ExecuteSQL().\n\nParameters\n\nhDS: the dataset handle.\nhLayer: the result of a previous ExecuteSQL() call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetresetreading",
    "page": "Docstrings",
    "title": "GDAL.datasetresetreading",
    "category": "function",
    "text": "GDALDatasetResetReading(GDALDatasetH hDS) -> void\n\nReset feature reading to start on the first feature.\n\nParameters\n\nhDS: dataset handle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetrollbacktransaction",
    "page": "Docstrings",
    "title": "GDAL.datasetrollbacktransaction",
    "category": "function",
    "text": "GDALDatasetRollbackTransaction(GDALDatasetH hDS) -> OGRErr\n\nFor datasources which support transactions, RollbackTransaction will roll back a datasource to its state before the start of the current transaction.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetsetstyletable",
    "page": "Docstrings",
    "title": "GDAL.datasetsetstyletable",
    "category": "function",
    "text": "GDALDatasetSetStyleTable(GDALDatasetH hDS,\n                         OGRStyleTableH hStyleTable) -> void\n\nSet dataset style table.\n\nParameters\n\nhDS: the dataset handle\nhStyleTable: style table handle to set\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetsetstyletabledirectly",
    "page": "Docstrings",
    "title": "GDAL.datasetsetstyletabledirectly",
    "category": "function",
    "text": "GDALDatasetSetStyleTableDirectly(GDALDatasetH hDS,\n                                 OGRStyleTableH hStyleTable) -> void\n\nSet dataset style table.\n\nParameters\n\nhDS: the dataset handle\nhStyleTable: style table handle to set\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasetstarttransaction",
    "page": "Docstrings",
    "title": "GDAL.datasetstarttransaction",
    "category": "function",
    "text": "GDALDatasetStartTransaction(GDALDatasetH hDS,\n                            int bForce) -> OGRErr\n\nFor datasources which support transactions, StartTransaction creates a transaction.\n\nParameters\n\nhDS: the dataset handle.\nbForce: can be set to TRUE if an emulation, possibly slow, of a transaction mechanism is acceptable.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datasettestcapability",
    "page": "Docstrings",
    "title": "GDAL.datasettestcapability",
    "category": "function",
    "text": "GDALDatasetTestCapability(GDALDatasetH hDS,\n                          const char * pszCap) -> int\n\nTest if capability is available.\n\nParameters\n\nhDS: the dataset handle.\npszCap: the capability to test.\n\nReturns\n\nTRUE if capability available otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datatypeiscomplex",
    "page": "Docstrings",
    "title": "GDAL.datatypeiscomplex",
    "category": "function",
    "text": "GDALDataTypeIsComplex(GDALDataType) -> int\n\nIs data type complex?\n\nReturns\n\nTRUE if the passed type is complex (one of GDTCInt16, GDTCInt32, GDTCFloat32 or GDTCFloat64), that is it consists of a real and imaginary component.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.datatypeunion",
    "page": "Docstrings",
    "title": "GDAL.datatypeunion",
    "category": "function",
    "text": "GDALDataTypeUnion(GDALDataType,\n                  GDALDataType) -> GDALDataType\n\nReturn the smallest data type that can fully express both input data types.\n\nParameters\n\neType1: first data type.\neType2: second data type.\n\nReturns\n\na data type able to express eType1 and eType2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.dectodms",
    "page": "Docstrings",
    "title": "GDAL.dectodms",
    "category": "function",
    "text": "GDALDecToDMS(double,\n             const char *,\n             int) -> const char *\n\nTranslate a decimal degrees value to a DMS string with hemisphere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.dectopackeddms",
    "page": "Docstrings",
    "title": "GDAL.dectopackeddms",
    "category": "function",
    "text": "GDALDecToPackedDMS(double) -> double\n\nConvert decimal degrees into packed DMS value (DDDMMMSSS.SS).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.defaulterrorhandler",
    "page": "Docstrings",
    "title": "GDAL.defaulterrorhandler",
    "category": "function",
    "text": "CPLDefaultErrorHandler(CPLErr eErrClass,\n                       CPLErrorNum nError,\n                       const char * pszErrorMsg) -> void\n\nDefault error handler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deinitgcps",
    "page": "Docstrings",
    "title": "GDAL.deinitgcps",
    "category": "function",
    "text": "GDALDeinitGCPs(int,\n               GDAL_GCP *) -> void\n\nDe-initialize an array of GCPs (initialized with GDALInitGCPs())\n\nParameters\n\nnCount: number of GCPs in psGCP\npsGCP: array of GCPs of size nCount.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.delaunaytriangulation",
    "page": "Docstrings",
    "title": "GDAL.delaunaytriangulation",
    "category": "function",
    "text": "OGR_G_DelaunayTriangulation(OGRGeometryH hThis,\n                            double dfTolerance,\n                            int bOnlyEdges) -> OGRGeometryH\n\nReturn a Delaunay triangulation of the vertices of the geometry.\n\nParameters\n\nhThis: the geometry.\ndfTolerance: optional snapping tolerance to use for improved robustness\nbOnlyEdges: if TRUE, will return a MULTILINESTRING, otherwise it will return a GEOMETRYCOLLECTION containing triangular POLYGONs.\n\nReturns\n\nthe geometry resulting from the Delaunay triangulation or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletedataset",
    "page": "Docstrings",
    "title": "GDAL.deletedataset",
    "category": "function",
    "text": "GDALDeleteDataset(GDALDriverH hDriver,\n                  const char * pszFilename) -> CPLErr\n\nDelete named dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletedatasource",
    "page": "Docstrings",
    "title": "GDAL.deletedatasource",
    "category": "function",
    "text": "OGR_Dr_DeleteDataSource(OGRSFDriverH,\n                        const char *) -> OGRErr\n\nDelete a datasource.\n\nParameters\n\nhDriver: handle to the driver on which data source deletion is based.\npszDataSource: the name of the datasource to delete.\n\nReturns\n\nOGRERRNONE on success, and OGRERRUNSUPPORTED_OPERATION if this is not supported by this driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletefeature",
    "page": "Docstrings",
    "title": "GDAL.deletefeature",
    "category": "function",
    "text": "OGR_L_DeleteFeature(OGRLayerH,\n                    GIntBig) -> OGRErr\n\nDelete feature from layer.\n\nParameters\n\nhLayer: handle to the layer\nnFID: the feature id to be deleted from the layer\n\nReturns\n\nOGRERRNONE if the operation works, otherwise an appropriate error code (e.g OGRERRNONEXISTINGFEATURE if the feature does not exist).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletefield",
    "page": "Docstrings",
    "title": "GDAL.deletefield",
    "category": "function",
    "text": "OGR_L_DeleteField(OGRLayerH,\n                  int iField) -> OGRErr\n\nDelete an existing field on a layer.\n\nParameters\n\nhLayer: handle to the layer.\niField: index of the field to delete.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletefielddefn",
    "page": "Docstrings",
    "title": "GDAL.deletefielddefn",
    "category": "function",
    "text": "OGR_FD_DeleteFieldDefn(OGRFeatureDefnH hDefn,\n                       int iField) -> OGRErr\n\nDelete an existing field definition.\n\nParameters\n\nhDefn: handle to the feature definition.\niField: the index of the field definition.\n\nReturns\n\nOGRERR_NONE in case of success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletegeomfielddefn",
    "page": "Docstrings",
    "title": "GDAL.deletegeomfielddefn",
    "category": "function",
    "text": "OGR_FD_DeleteGeomFieldDefn(OGRFeatureDefnH hDefn,\n                           int iGeomField) -> OGRErr\n\nDelete an existing geometry field definition.\n\nParameters\n\nhDefn: handle to the feature definition.\niGeomField: the index of the geometry field definition.\n\nReturns\n\nOGRERR_NONE in case of success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deletelayer",
    "page": "Docstrings",
    "title": "GDAL.deletelayer",
    "category": "function",
    "text": "OGR_DS_DeleteLayer(OGRDataSourceH,\n                   int) -> OGRErr\n\nDelete the indicated layer from the datasource.\n\nParameters\n\nhDS: handle to the datasource\niLayer: the index of the layer to delete.\n\nReturns\n\nOGRERRNONE on success, or OGRERRUNSUPPORTED_OPERATION if deleting layers is not supported for this datasource.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deleterasternodatavalue",
    "page": "Docstrings",
    "title": "GDAL.deleterasternodatavalue",
    "category": "function",
    "text": "GDALDeleteRasterNoDataValue(GDALRasterBandH hBand) -> CPLErr\n\nRemove the no data value for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.demprocessing",
    "page": "Docstrings",
    "title": "GDAL.demprocessing",
    "category": "function",
    "text": "GDALDEMProcessing(const char * pszDest,\n                  GDALDatasetH hSrcDataset,\n                  const char * pszProcessing,\n                  const char * pszColorFilename,\n                  const GDALDEMProcessingOptions * psOptionsIn,\n                  int * pbUsageError) -> GDALDatasetH\n\nApply a DEM processing.\n\nParameters\n\npszDest: the destination dataset path.\nhSrcDataset: the source dataset handle.\npszProcessing: the processing to apply (one of \"hillshade\", \"slope\", \"aspect\", \"color-relief\", \"TRI\", \"TPI\", \"Roughness\")\npszColorFilename: color file (mandatory for \"color-relief\" processing, should be NULL otherwise)\npsOptionsIn: the options struct returned by GDALDEMProcessingOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.demprocessingoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.demprocessingoptionsfree",
    "category": "function",
    "text": "GDALDEMProcessingOptionsFree(GDALDEMProcessingOptions * psOptions) -> void\n\nFrees the GDALDEMProcessingOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALDEMProcessing().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.demprocessingoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.demprocessingoptionsnew",
    "category": "function",
    "text": "GDALDEMProcessingOptionsNew(char ** papszArgv,\n                            GDALDEMProcessingOptionsForBinary * psOptionsForBinary) -> GDALDEMProcessingOptions *\n\nAllocates a GDALDEMProcessingOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdaldem utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALDEMProcessingOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALDEMProcessingOptions struct. Must be freed with GDALDEMProcessingOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.demprocessingoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.demprocessingoptionssetprogress",
    "category": "function",
    "text": "GDALDEMProcessingOptionsSetProgress(GDALDEMProcessingOptions * psOptions,\n                                    GDALProgressFunc pfnProgress,\n                                    void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALDEMProcessing().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.dereference",
    "page": "Docstrings",
    "title": "GDAL.dereference",
    "category": "function",
    "text": "OGR_FD_Dereference(OGRFeatureDefnH hDefn) -> int\n\nDecrements the reference count by one.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nthe updated reference count.\n\n\n\n\n\nOGR_L_Dereference(OGRLayerH hLayer) -> int\n\n\n\n\n\nOGR_DS_Dereference(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\nOSRDereference(OGRSpatialReferenceH hSRS) -> int\n\nDecrements the reference count by one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.dereferencedataset",
    "page": "Docstrings",
    "title": "GDAL.dereferencedataset",
    "category": "function",
    "text": "GDALDereferenceDataset(GDALDatasetH hDataset) -> int\n\nSubtract one from dataset reference count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deregisterdriver",
    "page": "Docstrings",
    "title": "GDAL.deregisterdriver",
    "category": "function",
    "text": "GDALDeregisterDriver(GDALDriverH hDriver) -> void\n\nDeregister the passed driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.deserializetransformer",
    "page": "Docstrings",
    "title": "GDAL.deserializetransformer",
    "category": "function",
    "text": "GDALDeserializeTransformer(CPLXMLNode * psTree,\n                           GDALTransformerFunc * ppfnFunc,\n                           void ** ppTransformArg) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroy",
    "page": "Docstrings",
    "title": "GDAL.destroy",
    "category": "function",
    "text": "GDALDestroy(void) -> void\n\n\n\n\n\nGDAL_CG_Destroy(GDALContourGeneratorH hCG) -> void\n\nDestroy contour generator.\n\n\n\n\n\nOGR_Fld_Destroy(OGRFieldDefnH hDefn) -> void\n\nDestroy a field definition.\n\nParameters\n\nhDefn: handle to the field definition to destroy.\n\n\n\n\n\nOGR_GFld_Destroy(OGRGeomFieldDefnH hDefn) -> void\n\nDestroy a geometry field definition.\n\nParameters\n\nhDefn: handle to the geometry field definition to destroy.\n\n\n\n\n\nOGR_FD_Destroy(OGRFeatureDefnH hDefn) -> void\n\nDestroy a feature definition object and release all memory associated with it.\n\nParameters\n\nhDefn: handle to the feature definition to be destroyed.\n\n\n\n\n\nOGR_F_Destroy(OGRFeatureH hFeat) -> void\n\nDestroy feature.\n\nParameters\n\nhFeat: handle to the feature to destroy.\n\n\n\n\n\nOGR_DS_Destroy(OGRDataSourceH) -> void\n\nCloses opened datasource and releases allocated resources.\n\nParameters\n\nhDataSource: handle to allocated datasource object.\n\n\n\n\n\nOGR_SM_Destroy(OGRStyleMgrH hSM) -> void\n\nDestroy Style Manager.\n\nParameters\n\nhSM: handle to the style manager to destroy.\n\n\n\n\n\nOGR_ST_Destroy(OGRStyleToolH hST) -> void\n\nDestroy Style Tool.\n\nParameters\n\nhST: handle to the style tool to destroy.\n\n\n\n\n\nOGR_STBL_Destroy(OGRStyleTableH hSTBL) -> void\n\nDestroy Style Table.\n\nParameters\n\nhSTBL: handle to the style table to destroy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroyapproxtransformer",
    "page": "Docstrings",
    "title": "GDAL.destroyapproxtransformer",
    "category": "function",
    "text": "GDALDestroyApproxTransformer(void * pCBData) -> void\n\nCleanup approximate transformer.\n\nParameters\n\npCBData: callback data originally returned by GDALCreateApproxTransformer().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroycolortable",
    "page": "Docstrings",
    "title": "GDAL.destroycolortable",
    "category": "function",
    "text": "GDALDestroyColorTable(GDALColorTableH hTable) -> void\n\nDestroys a color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroydriver",
    "page": "Docstrings",
    "title": "GDAL.destroydriver",
    "category": "function",
    "text": "GDALDestroyDriver(GDALDriverH hDriver) -> void\n\nDestroy a GDALDriver.\n\nParameters\n\nhDriver: the driver to destroy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroydrivermanager",
    "page": "Docstrings",
    "title": "GDAL.destroydrivermanager",
    "category": "function",
    "text": "GDALDestroyDriverManager(void) -> void\n\nDestroy the driver manager.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroygcptransformer",
    "page": "Docstrings",
    "title": "GDAL.destroygcptransformer",
    "category": "function",
    "text": "GDALDestroyGCPTransformer(void * pTransformArg) -> void\n\nDestroy GCP transformer.\n\nParameters\n\npTransformArg: the transform arg previously returned by GDALCreateGCPTransformer().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroygenimgprojtransformer",
    "page": "Docstrings",
    "title": "GDAL.destroygenimgprojtransformer",
    "category": "function",
    "text": "GDALDestroyGenImgProjTransformer(void * hTransformArg) -> void\n\nGenImgProjTransformer deallocator.\n\nParameters\n\nhTransformArg: the handle to deallocate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroygeoloctransformer",
    "page": "Docstrings",
    "title": "GDAL.destroygeoloctransformer",
    "category": "function",
    "text": "GDALDestroyGeoLocTransformer(void * pTransformAlg) -> void\n\nDestroy GeoLocation transformer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroygeometry",
    "page": "Docstrings",
    "title": "GDAL.destroygeometry",
    "category": "function",
    "text": "OGR_G_DestroyGeometry(OGRGeometryH hGeom) -> void\n\nDestroy geometry object.\n\nParameters\n\nhGeom: handle to the geometry to delete.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroyrasterattributetable",
    "page": "Docstrings",
    "title": "GDAL.destroyrasterattributetable",
    "category": "function",
    "text": "GDALDestroyRasterAttributeTable(GDALRasterAttributeTableH) -> void\n\nDestroys a RAT.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroyreprojectiontransformer",
    "page": "Docstrings",
    "title": "GDAL.destroyreprojectiontransformer",
    "category": "function",
    "text": "GDALDestroyReprojectionTransformer(void * pTransformArg) -> void\n\nDestroy reprojection transformation.\n\nParameters\n\npTransformArg: the transformation handle returned by GDALCreateReprojectionTransformer().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroyrpctransformer",
    "page": "Docstrings",
    "title": "GDAL.destroyrpctransformer",
    "category": "function",
    "text": "GDALDestroyRPCTransformer(void * pTransformArg) -> void\n\nDestroy RPC tranformer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroyspatialreference",
    "page": "Docstrings",
    "title": "GDAL.destroyspatialreference",
    "category": "function",
    "text": "OSRDestroySpatialReference(OGRSpatialReferenceH hSRS) -> void\n\nOGRSpatialReference destructor.\n\nParameters\n\nhSRS: the object to delete\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroytpstransformer",
    "page": "Docstrings",
    "title": "GDAL.destroytpstransformer",
    "category": "function",
    "text": "GDALDestroyTPSTransformer(void * pTransformArg) -> void\n\nDestroy TPS transformer.\n\nParameters\n\npTransformArg: the transform arg previously returned by GDALCreateTPSTransformer().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.destroytransformer",
    "page": "Docstrings",
    "title": "GDAL.destroytransformer",
    "category": "function",
    "text": "GDALDestroyTransformer(void * pTransformArg) -> void\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.difference",
    "page": "Docstrings",
    "title": "GDAL.difference",
    "category": "function",
    "text": "OGR_G_Difference(OGRGeometryH hThis,\n                 OGRGeometryH hOther) -> OGRGeometryH\n\nCompute difference.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the difference or NULL if the difference is empty or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.disjoint",
    "page": "Docstrings",
    "title": "GDAL.disjoint",
    "category": "function",
    "text": "OGR_G_Disjoint(OGRGeometryH hThis,\n               OGRGeometryH hOther) -> int\n\nTest for disjointness.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are disjoint, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.distance",
    "page": "Docstrings",
    "title": "GDAL.distance",
    "category": "function",
    "text": "OGR_G_Distance(OGRGeometryH hFirst,\n               OGRGeometryH hOther) -> double\n\nCompute distance between two geometries.\n\nParameters\n\nhFirst: the first geometry to compare against.\nhOther: the other geometry to compare against.\n\nReturns\n\nthe distance between the geometries or -1 if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.distance3d",
    "page": "Docstrings",
    "title": "GDAL.distance3d",
    "category": "function",
    "text": "OGR_G_Distance3D(OGRGeometryH hFirst,\n                 OGRGeometryH hOther) -> double\n\nReturns the 3D distance between two geometries.\n\nParameters\n\nhFirst: the first geometry to compare against.\nhOther: the other geometry to compare against.\n\nReturns\n\ndistance between the two geometries\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ditherrgb2pct",
    "page": "Docstrings",
    "title": "GDAL.ditherrgb2pct",
    "category": "function",
    "text": "GDALDitherRGB2PCT(GDALRasterBandH hRed,\n                  GDALRasterBandH hGreen,\n                  GDALRasterBandH hBlue,\n                  GDALRasterBandH hTarget,\n                  GDALColorTableH hColorTable,\n                  GDALProgressFunc pfnProgress,\n                  void * pProgressArg) -> int\n\n24bit to 8bit conversion with dithering.\n\nParameters\n\nhRed: Red input band.\nhGreen: Green input band.\nhBlue: Blue input band.\nhTarget: Output band.\nhColorTable: the color table to use with the output band.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.dumpopendatasets",
    "page": "Docstrings",
    "title": "GDAL.dumpopendatasets",
    "category": "function",
    "text": "GDALDumpOpenDatasets(FILE * fp) -> int\n\nList open datasets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.dumpreadable",
    "page": "Docstrings",
    "title": "GDAL.dumpreadable",
    "category": "function",
    "text": "OGR_G_DumpReadable(OGRGeometryH hGeom,\n                   FILE * fp,\n                   const char * pszPrefix) -> void\n\nDump geometry in well known text format to indicated output file.\n\nParameters\n\nhGeom: handle on the geometry to dump.\nfp: the text file to write the geometry to.\npszPrefix: the prefix to put on each line of output.\n\n\n\n\n\nOGR_F_DumpReadable(OGRFeatureH hFeat,\n                   FILE * fpOut) -> void\n\nDump this feature in a human readable form.\n\nParameters\n\nhFeat: handle to the feature to dump.\nfpOut: the stream to write to, such as strout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.duplicategcps",
    "page": "Docstrings",
    "title": "GDAL.duplicategcps",
    "category": "function",
    "text": "GDALDuplicateGCPs(int,\n                  const GDAL_GCP *) -> GDAL_GCP *\n\nDuplicate an array of GCPs.\n\nParameters\n\nnCount: number of GCPs in psGCP\npasGCPList: array of GCPs of size nCount.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.emergencyerror",
    "page": "Docstrings",
    "title": "GDAL.emergencyerror",
    "category": "function",
    "text": "CPLEmergencyError(const char * pszMessage) -> void\n\nFatal error when things are bad.\n\nParameters\n\npszMessage: the error message to report.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.empty",
    "page": "Docstrings",
    "title": "GDAL.empty",
    "category": "function",
    "text": "OGR_G_Empty(OGRGeometryH hGeom) -> void\n\nClear geometry information.\n\nParameters\n\nhGeom: handle on the geometry to empty.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.endasyncreader",
    "page": "Docstrings",
    "title": "GDAL.endasyncreader",
    "category": "function",
    "text": "GDALEndAsyncReader(GDALDatasetH hDS,\n                   GDALAsyncReaderH hAsyncReaderH) -> void\n\nEnd asynchronous request.\n\nParameters\n\nhDS: handle to the dataset object.\nhAsyncReaderH: handle returned by GDALBeginAsyncReader()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.epsgtreatsaslatlong",
    "page": "Docstrings",
    "title": "GDAL.epsgtreatsaslatlong",
    "category": "function",
    "text": "OSREPSGTreatsAsLatLong(OGRSpatialReferenceH hSRS) -> int\n\nThis function returns TRUE if EPSG feels this geographic coordinate system should be treated as having lat/long coordinate ordering.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.epsgtreatsasnorthingeasting",
    "page": "Docstrings",
    "title": "GDAL.epsgtreatsasnorthingeasting",
    "category": "function",
    "text": "OSREPSGTreatsAsNorthingEasting(OGRSpatialReferenceH hSRS) -> int\n\nThis function returns TRUE if EPSG feels this geographic coordinate system should be treated as having northing/easting coordinate ordering.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.equal",
    "page": "Docstrings",
    "title": "GDAL.equal",
    "category": "function",
    "text": "OGR_F_Equal(OGRFeatureH hFeat,\n            OGRFeatureH hOtherFeat) -> int\n\nTest if two features are the same.\n\nParameters\n\nhFeat: handle to one of the feature.\nhOtherFeat: handle to the other feature to test this one against.\n\nReturns\n\nTRUE if they are equal, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.equals",
    "page": "Docstrings",
    "title": "GDAL.equals",
    "category": "function",
    "text": "OGR_G_Equals(OGRGeometryH hGeom,\n             OGRGeometryH hOther) -> int\n\nReturns TRUE if two geometries are equivalent.\n\nParameters\n\nhGeom: handle on the first geometry.\nhOther: handle on the other geometry to test against.\n\nReturns\n\nTRUE if equivalent or FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.erase",
    "page": "Docstrings",
    "title": "GDAL.erase",
    "category": "function",
    "text": "OGR_L_Erase(OGRLayerH pLayerInput,\n            OGRLayerH pLayerMethod,\n            OGRLayerH pLayerResult,\n            char ** papszOptions,\n            GDALProgressFunc pfnProgress,\n            void * pProgressArg) -> OGRErr\n\nRemove areas that are covered by the method layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.errorreset",
    "page": "Docstrings",
    "title": "GDAL.errorreset",
    "category": "function",
    "text": "CPLErrorReset() -> void\n\nErase any traces of previous errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.errorsetstate",
    "page": "Docstrings",
    "title": "GDAL.errorsetstate",
    "category": "function",
    "text": "CPLErrorSetState(CPLErr eErrClass,\n                 CPLErrorNum err_no,\n                 const char * pszMsg) -> void\n\nRestore an error state, without emitting an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.executesql",
    "page": "Docstrings",
    "title": "GDAL.executesql",
    "category": "function",
    "text": "OGR_DS_ExecuteSQL(OGRDataSourceH,\n                  const char *,\n                  OGRGeometryH,\n                  const char *) -> OGRLayerH\n\nExecute an SQL statement against the data store.\n\nParameters\n\nhDS: handle to the data source on which the SQL query is executed.\npszSQLCommand: the SQL statement to execute.\nhSpatialFilter: handle to a geometry which represents a spatial filter. Can be NULL.\npszDialect: allows control of the statement dialect. If set to NULL, the OGR SQL engine will be used, except for RDBMS drivers that will use their dedicated SQL engine, unless OGRSQL is explicitly passed as the dialect. Starting with OGR 1.10, the SQLITE dialect can also be used.\n\nReturns\n\nan handle to a OGRLayer containing the results of the query. Deallocate with OGRDSReleaseResultSet().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exportenvelopetogmltree",
    "page": "Docstrings",
    "title": "GDAL.exportenvelopetogmltree",
    "category": "function",
    "text": "OGR_G_ExportEnvelopeToGMLTree(OGRGeometryH hGeometry) -> CPLXMLNode *\n\nExport the envelope of a geometry as a gml:Box.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttoerm",
    "page": "Docstrings",
    "title": "GDAL.exporttoerm",
    "category": "function",
    "text": "OSRExportToERM(OGRSpatialReferenceH,\n               char *,\n               char *,\n               char *) -> OGRErr\n\nConvert coordinate system to ERMapper format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttogml",
    "page": "Docstrings",
    "title": "GDAL.exporttogml",
    "category": "function",
    "text": "OGR_G_ExportToGML(OGRGeometryH hGeometry) -> char *\n\nConvert a geometry into GML format.\n\nParameters\n\nhGeometry: handle to the geometry.\n\nReturns\n\nA GML fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttogmlex",
    "page": "Docstrings",
    "title": "GDAL.exporttogmlex",
    "category": "function",
    "text": "OGR_G_ExportToGMLEx(OGRGeometryH hGeometry,\n                    char ** papszOptions) -> char *\n\nConvert a geometry into GML format.\n\nParameters\n\nhGeometry: handle to the geometry.\npapszOptions: NULL-terminated list of options.\n\nReturns\n\nA GML fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttogmltree",
    "page": "Docstrings",
    "title": "GDAL.exporttogmltree",
    "category": "function",
    "text": "OGR_G_ExportToGMLTree(OGRGeometryH hGeometry) -> CPLXMLNode *\n\nConvert a geometry into GML format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttoisowkb",
    "page": "Docstrings",
    "title": "GDAL.exporttoisowkb",
    "category": "function",
    "text": "OGR_G_ExportToIsoWkb(OGRGeometryH hGeom,\n                     OGRwkbByteOrder eOrder,\n                     unsigned char * pabyDstBuffer) -> OGRErr\n\nConvert a geometry into SFSQL 1.2 / ISO SQL/MM Part 3 well known binary format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a well know binary data from.\neOrder: One of wkbXDR or wkbNDR indicating MSB or LSB byte order respectively.\npabyDstBuffer: a buffer into which the binary representation is written. This buffer must be at least OGRGWkbSize() byte in size.\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttoisowkt",
    "page": "Docstrings",
    "title": "GDAL.exporttoisowkt",
    "category": "function",
    "text": "OGR_G_ExportToIsoWkt(OGRGeometryH hGeom,\n                     char ** ppszSrcText) -> OGRErr\n\nConvert a geometry into SFSQL 1.2 / ISO SQL/MM Part 3 well known text format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a text format from.\nppszSrcText: a text buffer is allocated by the program, and assigned to the passed pointer. After use, *ppszDstText should be freed with CPLFree().\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttojson",
    "page": "Docstrings",
    "title": "GDAL.exporttojson",
    "category": "function",
    "text": "OGR_G_ExportToJson(OGRGeometryH hGeometry) -> char *\n\nConvert a geometry into GeoJSON format.\n\nParameters\n\nhGeometry: handle to the geometry.\n\nReturns\n\nA GeoJSON fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttojsonex",
    "page": "Docstrings",
    "title": "GDAL.exporttojsonex",
    "category": "function",
    "text": "OGR_G_ExportToJsonEx(OGRGeometryH hGeometry,\n                     char ** papszOptions) -> char *\n\nConvert a geometry into GeoJSON format.\n\nParameters\n\nhGeometry: handle to the geometry.\npapszOptions: a null terminated list of options.\n\nReturns\n\nA GeoJSON fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttokml",
    "page": "Docstrings",
    "title": "GDAL.exporttokml",
    "category": "function",
    "text": "OGR_G_ExportToKML(OGRGeometryH hGeometry,\n                  const char * pszAltitudeMode) -> char *\n\nConvert a geometry into KML format.\n\nParameters\n\nhGeometry: handle to the geometry.\npszAltitudeMode: value to write in altitudeMode element, or NULL.\n\nReturns\n\nA KML fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttomicoordsys",
    "page": "Docstrings",
    "title": "GDAL.exporttomicoordsys",
    "category": "function",
    "text": "OSRExportToMICoordSys(OGRSpatialReferenceH hSRS,\n                      char ** ppszReturn) -> OGRErr\n\nExport coordinate system in Mapinfo style CoordSys format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttopanorama",
    "page": "Docstrings",
    "title": "GDAL.exporttopanorama",
    "category": "function",
    "text": "OSRExportToPanorama(OGRSpatialReferenceH,\n                    long *,\n                    long *,\n                    long *,\n                    long *,\n                    double *) -> OGRErr\n\nExport coordinate system in \"Panorama\" GIS projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttopci",
    "page": "Docstrings",
    "title": "GDAL.exporttopci",
    "category": "function",
    "text": "OSRExportToPCI(OGRSpatialReferenceH,\n               char **,\n               char **,\n               double **) -> OGRErr\n\nExport coordinate system in PCI projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttoprettywkt",
    "page": "Docstrings",
    "title": "GDAL.exporttoprettywkt",
    "category": "function",
    "text": "OSRExportToPrettyWkt(OGRSpatialReferenceH hSRS,\n                     char ** ppszReturn,\n                     int bSimplify) -> OGRErr\n\nConvert this SRS into a nicely formatted WKT string for display to a person.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttoproj4",
    "page": "Docstrings",
    "title": "GDAL.exporttoproj4",
    "category": "function",
    "text": "OSRExportToProj4(OGRSpatialReferenceH,\n                 char **) -> OGRErr\n\nExport coordinate system in PROJ.4 format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttousgs",
    "page": "Docstrings",
    "title": "GDAL.exporttousgs",
    "category": "function",
    "text": "OSRExportToUSGS(OGRSpatialReferenceH,\n                long *,\n                long *,\n                double **,\n                long *) -> OGRErr\n\nExport coordinate system in USGS GCTP projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttowkb",
    "page": "Docstrings",
    "title": "GDAL.exporttowkb",
    "category": "function",
    "text": "OGR_G_ExportToWkb(OGRGeometryH hGeom,\n                  OGRwkbByteOrder eOrder,\n                  unsigned char * pabyDstBuffer) -> OGRErr\n\nConvert a geometry well known binary format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a well know binary data from.\neOrder: One of wkbXDR or wkbNDR indicating MSB or LSB byte order respectively.\npabyDstBuffer: a buffer into which the binary representation is written. This buffer must be at least OGRGWkbSize() byte in size.\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttowkt",
    "page": "Docstrings",
    "title": "GDAL.exporttowkt",
    "category": "function",
    "text": "OGR_G_ExportToWkt(OGRGeometryH hGeom,\n                  char ** ppszSrcText) -> OGRErr\n\nConvert a geometry into well known text format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a text format from.\nppszSrcText: a text buffer is allocated by the program, and assigned to the passed pointer. After use, *ppszDstText should be freed with CPLFree().\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\nOSRExportToWkt(OGRSpatialReferenceH hSRS,\n               char ** ppszReturn) -> OGRErr\n\nConvert this SRS into WKT format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.exporttoxml",
    "page": "Docstrings",
    "title": "GDAL.exporttoxml",
    "category": "function",
    "text": "OSRExportToXML(OGRSpatialReferenceH,\n               char **,\n               const char *) -> OGRErr\n\nExport coordinate system in XML format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.extractrpcinfo",
    "page": "Docstrings",
    "title": "GDAL.extractrpcinfo",
    "category": "function",
    "text": "GDALExtractRPCInfo(char **,\n                   GDALRPCInfo *) -> int\n\nExtract RPC info from metadata, and apply to an RPCInfo structure.\n\nParameters\n\npapszMD: Dictionary of metadata representing RPC\npsRPC: (output) Pointer to structure to hold the RPC values.\n\nReturns\n\nTRUE in case of success. FALSE in case of failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.f_create",
    "page": "Docstrings",
    "title": "GDAL.f_create",
    "category": "function",
    "text": "OGR_F_Create(OGRFeatureDefnH hDefn) -> OGRFeatureH\n\nFeature factory.\n\nParameters\n\nhDefn: handle to the feature class (layer) definition to which the feature will adhere.\n\nReturns\n\nan handle to the new feature object with null fields and no geometry, or, starting with GDAL 2.1, NULL in case out of memory situation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.failsafe",
    "page": "Docstrings",
    "title": "GDAL.failsafe",
    "category": "function",
    "text": "Throw an error if a pointer is null and GDAL reports an error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fd_create",
    "page": "Docstrings",
    "title": "GDAL.fd_create",
    "category": "function",
    "text": "OGR_FD_Create(const char * pszName) -> OGRFeatureDefnH\n\nCreate a new feature definition object to hold the field definitions.\n\nParameters\n\npszName: the name to be assigned to this layer/class. It does not need to be unique.\n\nReturns\n\nhandle to the newly created feature definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.feedline",
    "page": "Docstrings",
    "title": "GDAL.feedline",
    "category": "function",
    "text": "GDAL_CG_FeedLine(GDALContourGeneratorH hCG,\n                 double * padfScanline) -> CPLErr\n\nFeed a line to the contour generator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fillnodata",
    "page": "Docstrings",
    "title": "GDAL.fillnodata",
    "category": "function",
    "text": "GDALFillNodata(GDALRasterBandH hTargetBand,\n               GDALRasterBandH hMaskBand,\n               double dfMaxSearchDist,\n               int bDeprecatedOption,\n               int nSmoothingIterations,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> CPLErr\n\nFill selected raster regions by interpolation from the edges.\n\nParameters\n\nhTargetBand: the raster band to be modified in place.\nhMaskBand: a mask band indicating pixels to be interpolated (zero valued).\ndfMaxSearchDist: the maximum number of pixels to search in all directions to find values to interpolate from.\nbDeprecatedOption: unused argument, should be zero.\nnSmoothingIterations: the number of 3x3 smoothing filter passes to run (0 or more).\npapszOptions: additional name=value options in a string list (the temporary file driver can be specified like TEMPFILEDRIVER=MEM).\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure if something goes wrong.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fillraster",
    "page": "Docstrings",
    "title": "GDAL.fillraster",
    "category": "function",
    "text": "GDALFillRaster(GDALRasterBandH hBand,\n               double dfRealValue,\n               double dfImaginaryValue) -> CPLErr\n\nFill this band with a constant value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fillunsetwithdefault",
    "page": "Docstrings",
    "title": "GDAL.fillunsetwithdefault",
    "category": "function",
    "text": "OGR_F_FillUnsetWithDefault(OGRFeatureH hFeat,\n                           int bNotNullableOnly,\n                           char ** papszOptions) -> void\n\nFill unset fields with default values that might be defined.\n\nParameters\n\nhFeat: handle to the feature.\nbNotNullableOnly: if we should fill only unset fields with a not-null constraint.\npapszOptions: unused currently. Must be set to NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.find",
    "page": "Docstrings",
    "title": "GDAL.find",
    "category": "function",
    "text": "OGR_STBL_Find(OGRStyleTableH hStyleTable,\n              const char * pszName) -> const char *\n\nGet a style string by name.\n\nParameters\n\nhStyleTable: handle to the style table.\npszName: the name of the style string to find.\n\nReturns\n\nthe style string matching the name or NULL if not found or error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.findfieldindex",
    "page": "Docstrings",
    "title": "GDAL.findfieldindex",
    "category": "function",
    "text": "OGR_L_FindFieldIndex(OGRLayerH,\n                     const char *,\n                     int bExactMatch) -> int\n\nFind the index of field in a layer.\n\nReturns\n\nfield index, or -1 if the field doesn\'t exist\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fixup",
    "page": "Docstrings",
    "title": "GDAL.fixup",
    "category": "function",
    "text": "OSRFixup(OGRSpatialReferenceH hSRS) -> OGRErr\n\nFixup as needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fixupordering",
    "page": "Docstrings",
    "title": "GDAL.fixupordering",
    "category": "function",
    "text": "OSRFixupOrdering(OGRSpatialReferenceH hSRS) -> OGRErr\n\nCorrect parameter ordering to match CT Specification.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.flattento2d",
    "page": "Docstrings",
    "title": "GDAL.flattento2d",
    "category": "function",
    "text": "OGR_G_FlattenTo2D(OGRGeometryH hGeom) -> void\n\nConvert geometry to strictly 2D.\n\nParameters\n\nhGeom: handle on the geometry to convert.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fld_create",
    "page": "Docstrings",
    "title": "GDAL.fld_create",
    "category": "function",
    "text": "OGR_Fld_Create(const char * pszName,\n               OGRFieldType eType) -> OGRFieldDefnH\n\nCreate a new field definition.\n\nParameters\n\npszName: the name of the new field definition.\neType: the type of the new field definition.\n\nReturns\n\nhandle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.flushcache",
    "page": "Docstrings",
    "title": "GDAL.flushcache",
    "category": "function",
    "text": "GDALFlushCache(GDALDatasetH hDS) -> void\n\nFlush all write cached data to disk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.flushcacheblock",
    "page": "Docstrings",
    "title": "GDAL.flushcacheblock",
    "category": "function",
    "text": "GDALFlushCacheBlock() -> int\n\nTry to flush one cached raster block.\n\nReturns\n\nTRUE if one block was flushed, FALSE if there are no cached blocks or if they are currently locked.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.flushrastercache",
    "page": "Docstrings",
    "title": "GDAL.flushrastercache",
    "category": "function",
    "text": "GDALFlushRasterCache(GDALRasterBandH hBand) -> CPLErr\n\nFlush raster data cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.forceto",
    "page": "Docstrings",
    "title": "GDAL.forceto",
    "category": "function",
    "text": "OGR_G_ForceTo(OGRGeometryH hGeom,\n              OGRwkbGeometryType eTargetType,\n              char ** papszOptions) -> OGRGeometryH\n\nConvert to another geometry type.\n\nParameters\n\nhGeom: the input geometry - ownership is passed to the method.\neTargetType: target output geometry type.\npapszOptions: options as a null-terminated list of strings or NULL.\n\nReturns\n\nnew geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.forcetolinestring",
    "page": "Docstrings",
    "title": "GDAL.forcetolinestring",
    "category": "function",
    "text": "OGR_G_ForceToLineString(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to line string.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.forcetomultilinestring",
    "page": "Docstrings",
    "title": "GDAL.forcetomultilinestring",
    "category": "function",
    "text": "OGR_G_ForceToMultiLineString(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to multilinestring.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.forcetomultipoint",
    "page": "Docstrings",
    "title": "GDAL.forcetomultipoint",
    "category": "function",
    "text": "OGR_G_ForceToMultiPoint(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to multipoint.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.forcetomultipolygon",
    "page": "Docstrings",
    "title": "GDAL.forcetomultipolygon",
    "category": "function",
    "text": "OGR_G_ForceToMultiPolygon(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to multipolygon.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.forcetopolygon",
    "page": "Docstrings",
    "title": "GDAL.forcetopolygon",
    "category": "function",
    "text": "OGR_G_ForceToPolygon(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to polygon.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.fpolygonize",
    "page": "Docstrings",
    "title": "GDAL.fpolygonize",
    "category": "function",
    "text": "GDALFPolygonize(GDALRasterBandH hSrcBand,\n                GDALRasterBandH hMaskBand,\n                OGRLayerH hOutLayer,\n                int iPixValField,\n                char ** papszOptions,\n                GDALProgressFunc pfnProgress,\n                void * pProgressArg) -> CPLErr\n\nCreate polygon coverage from raster data.\n\nParameters\n\nhSrcBand: the source raster band to be processed.\nhMaskBand: an optional mask band. All pixels in the mask band with a value other than zero will be considered suitable for collection as polygons.\nhOutLayer: the vector feature layer to which the polygons should be written.\niPixValField: the attribute field index indicating the feature attribute into which the pixel value of the polygon should be written.\npapszOptions: a name/value list of additional options \n\n\"8CONNECTED\": May be set to \"8\" to use 8 connectedness. Otherwise 4 connectedness will be applied to the algorithm\n\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure on a failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gcpstogeotransform",
    "page": "Docstrings",
    "title": "GDAL.gcpstogeotransform",
    "category": "function",
    "text": "GDALGCPsToGeoTransform(int nGCPCount,\n                       const GDAL_GCP * pasGCPs,\n                       double * padfGeoTransform,\n                       int bApproxOK) -> int\n\nGenerate Geotransform from GCPs.\n\nParameters\n\nnGCPCount: the number of GCPs being passed in.\npasGCPs: the list of GCP structures.\npadfGeoTransform: the six double array in which the affine geotransformation will be returned.\nbApproxOK: If FALSE the function will fail if the geotransform is not essentially an exact fit (within 0.25 pixel) for all GCPs.\n\nReturns\n\nTRUE on success or FALSE if there aren\'t enough points to prepare a geotransform, the pointers are ill-determined or if bApproxOK is FALSE and the fit is poor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gcptransform",
    "page": "Docstrings",
    "title": "GDAL.gcptransform",
    "category": "function",
    "text": "GDALGCPTransform(void * pTransformArg,\n                 int bDstToSrc,\n                 int nPointCount,\n                 double * x,\n                 double * y,\n                 double * z,\n                 int * panSuccess) -> int\n\nTransforms point based on GCP derived polynomial model.\n\nParameters\n\npTransformArg: return value from GDALCreateGCPTransformer().\nbDstToSrc: TRUE if transformation is from the destination (georeferenced) coordinates to pixel/line or FALSE when transforming from pixel/line to georeferenced coordinates.\nnPointCount: the number of values in the x, y and z arrays.\nx: array containing the X values to be transformed.\ny: array containing the Y values to be transformed.\nz: array containing the Z values to be transformed.\npanSuccess: array in which a flag indicating success (TRUE) or failure (FALSE) of the transformation are placed.\n\nReturns\n\nTRUE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.generalcmdlineprocessor",
    "page": "Docstrings",
    "title": "GDAL.generalcmdlineprocessor",
    "category": "function",
    "text": "GDALGeneralCmdLineProcessor(int nArgc,\n                            char *** ppapszArgv,\n                            int nOptions) -> int\n\nGeneral utility option processing.\n\nParameters\n\nnArgc: number of values in the argument list.\nppapszArgv: pointer to the argument list array (will be updated in place).\nnOptions: a or-able combination of GDALOFRASTER and GDALOFVECTOR to determine which drivers should be displayed by formats. If set to 0, GDALOFRASTER is assumed.\n\nReturns\n\nupdated nArgc argument count. Return of 0 requests terminate without error, return of -1 requests exit with error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.genimgprojtransform",
    "page": "Docstrings",
    "title": "GDAL.genimgprojtransform",
    "category": "function",
    "text": "GDALGenImgProjTransform(void * pTransformArgIn,\n                        int bDstToSrc,\n                        int nPointCount,\n                        double * padfX,\n                        double * padfY,\n                        double * padfZ,\n                        int * panSuccess) -> int\n\nPerform general image reprojection transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.geoloctransform",
    "page": "Docstrings",
    "title": "GDAL.geoloctransform",
    "category": "function",
    "text": "GDALGeoLocTransform(void * pTransformArg,\n                    int bDstToSrc,\n                    int nPointCount,\n                    double * padfX,\n                    double * padfY,\n                    double * padfZ,\n                    int * panSuccess) -> int\n\nUse GeoLocation transformer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getaccess",
    "page": "Docstrings",
    "title": "GDAL.getaccess",
    "category": "function",
    "text": "GDALGetAccess(GDALDatasetH hDS) -> int\n\nReturn access flag.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getactualblocksize",
    "page": "Docstrings",
    "title": "GDAL.getactualblocksize",
    "category": "function",
    "text": "GDALGetActualBlockSize(GDALRasterBandH hBand,\n                       int nXBlockOff,\n                       int nYBlockOff,\n                       int * pnXValid,\n                       int * pnYValid) -> CPLErr\n\nRetrieve the actual block size for a given block offset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getangularunits",
    "page": "Docstrings",
    "title": "GDAL.getangularunits",
    "category": "function",
    "text": "OSRGetAngularUnits(OGRSpatialReferenceH hSRS,\n                   char ** ppszName) -> double\n\nFetch angular geographic coordinate system units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getarea",
    "page": "Docstrings",
    "title": "GDAL.getarea",
    "category": "function",
    "text": "OGR_G_GetArea(OGRGeometryH hGeom) -> double\n\nCompute geometry area (deprecated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getasyncstatustypebyname",
    "page": "Docstrings",
    "title": "GDAL.getasyncstatustypebyname",
    "category": "function",
    "text": "GDALGetAsyncStatusTypeByName(const char *) -> GDALAsyncStatusType\n\nGet AsyncStatusType by symbolic name.\n\nParameters\n\npszName: string containing the symbolic name of the type.\n\nReturns\n\nGDAL AsyncStatus type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getasyncstatustypename",
    "page": "Docstrings",
    "title": "GDAL.getasyncstatustypename",
    "category": "function",
    "text": "GDALGetAsyncStatusTypeName(GDALAsyncStatusType) -> const char *\n\nGet name of AsyncStatus data type.\n\nParameters\n\neAsyncStatusType: type to get name of.\n\nReturns\n\nstring corresponding to type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getattrvalue",
    "page": "Docstrings",
    "title": "GDAL.getattrvalue",
    "category": "function",
    "text": "OSRGetAttrValue(OGRSpatialReferenceH hSRS,\n                const char * pszKey,\n                int iChild) -> const char *\n\nFetch indicated attribute of named node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getauthoritycode",
    "page": "Docstrings",
    "title": "GDAL.getauthoritycode",
    "category": "function",
    "text": "OSRGetAuthorityCode(OGRSpatialReferenceH hSRS,\n                    const char * pszTargetKey) -> const char *\n\nGet the authority code for a node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getauthorityname",
    "page": "Docstrings",
    "title": "GDAL.getauthorityname",
    "category": "function",
    "text": "OSRGetAuthorityName(OGRSpatialReferenceH hSRS,\n                    const char * pszTargetKey) -> const char *\n\nGet the authority name for a node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getaxis",
    "page": "Docstrings",
    "title": "GDAL.getaxis",
    "category": "function",
    "text": "OSRGetAxis(OGRSpatialReferenceH hSRS,\n           const char * pszTargetKey,\n           int iAxis,\n           OGRAxisOrientation * peOrientation) -> const char *\n\nFetch the orientation of one axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getbanddataset",
    "page": "Docstrings",
    "title": "GDAL.getbanddataset",
    "category": "function",
    "text": "GDALGetBandDataset(GDALRasterBandH hBand) -> GDALDatasetH\n\nFetch the owning dataset handle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getbandnumber",
    "page": "Docstrings",
    "title": "GDAL.getbandnumber",
    "category": "function",
    "text": "GDALGetBandNumber(GDALRasterBandH hBand) -> int\n\nFetch the band number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getblocksize",
    "page": "Docstrings",
    "title": "GDAL.getblocksize",
    "category": "function",
    "text": "GDALGetBlockSize(GDALRasterBandH hBand,\n                 int * pnXSize,\n                 int * pnYSize) -> void\n\nFetch the \"natural\" block size of this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getboundary",
    "page": "Docstrings",
    "title": "GDAL.getboundary",
    "category": "function",
    "text": "OGR_G_GetBoundary(OGRGeometryH hTarget) -> OGRGeometryH\n\nCompute boundary (deprecated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcachemax",
    "page": "Docstrings",
    "title": "GDAL.getcachemax",
    "category": "function",
    "text": "GDALGetCacheMax() -> int\n\nGet maximum cache memory.\n\nReturns\n\nmaximum in bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcachemax64",
    "page": "Docstrings",
    "title": "GDAL.getcachemax64",
    "category": "function",
    "text": "GDALGetCacheMax64() -> GIntBig\n\nGet maximum cache memory.\n\nReturns\n\nmaximum in bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcacheused",
    "page": "Docstrings",
    "title": "GDAL.getcacheused",
    "category": "function",
    "text": "GDALGetCacheUsed() -> int\n\nGet cache memory used.\n\nReturns\n\nthe number of bytes of memory currently in use by the GDALRasterBlock memory caching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcacheused64",
    "page": "Docstrings",
    "title": "GDAL.getcacheused64",
    "category": "function",
    "text": "GDALGetCacheUsed64() -> GIntBig\n\nGet cache memory used.\n\nReturns\n\nthe number of bytes of memory currently in use by the GDALRasterBlock memory caching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcolorentry",
    "page": "Docstrings",
    "title": "GDAL.getcolorentry",
    "category": "function",
    "text": "GDALGetColorEntry(GDALColorTableH hTable,\n                  int i) -> const GDALColorEntry *\n\nFetch a color entry from table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcolorentryasrgb",
    "page": "Docstrings",
    "title": "GDAL.getcolorentryasrgb",
    "category": "function",
    "text": "GDALGetColorEntryAsRGB(GDALColorTableH hTable,\n                       int i,\n                       GDALColorEntry * poEntry) -> int\n\nFetch a table entry in RGB format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcolorentrycount",
    "page": "Docstrings",
    "title": "GDAL.getcolorentrycount",
    "category": "function",
    "text": "GDALGetColorEntryCount(GDALColorTableH hTable) -> int\n\nGet number of color entries in table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcolorinterpretationbyname",
    "page": "Docstrings",
    "title": "GDAL.getcolorinterpretationbyname",
    "category": "function",
    "text": "GDALGetColorInterpretationByName(const char * pszName) -> GDALColorInterp\n\nGet color interpretation by symbolic name.\n\nParameters\n\npszName: string containing the symbolic name of the color interpretation.\n\nReturns\n\nGDAL color interpretation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcolorinterpretationname",
    "page": "Docstrings",
    "title": "GDAL.getcolorinterpretationname",
    "category": "function",
    "text": "GDALGetColorInterpretationName(GDALColorInterp) -> const char *\n\nGet name of color interpretation.\n\nParameters\n\neInterp: color interpretation to get name of.\n\nReturns\n\nstring corresponding to color interpretation or NULL pointer if invalid enumerator given.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcoordinatedimension",
    "page": "Docstrings",
    "title": "GDAL.getcoordinatedimension",
    "category": "function",
    "text": "OGR_G_GetCoordinateDimension(OGRGeometryH hGeom) -> int\n\nGet the dimension of the coordinates in this geometry.\n\nParameters\n\nhGeom: handle on the geometry to get the dimension of the coordinates from.\n\nReturns\n\nthis will return 2 or 3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getcurvegeometry",
    "page": "Docstrings",
    "title": "GDAL.getcurvegeometry",
    "category": "function",
    "text": "OGR_G_GetCurveGeometry(OGRGeometryH hGeom,\n                       char ** papszOptions) -> OGRGeometryH\n\nReturn curve version of this geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\npapszOptions: options as a null-terminated list of strings. Unused for now. Must be set to NULL.\n\nReturns\n\na new geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatacoveragestatus",
    "page": "Docstrings",
    "title": "GDAL.getdatacoveragestatus",
    "category": "function",
    "text": "GDALGetDataCoverageStatus(GDALRasterBandH hBand,\n                          int nXOff,\n                          int nYOff,\n                          int nXSize,\n                          int nYSize,\n                          int nMaskFlagStop,\n                          double * pdfDataPct) -> int\n\nGet the coverage status of a sub-window of the raster.\n\nParameters\n\nhBand: raster band\nnXOff: The pixel offset to the top left corner of the region of the band to be queried. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be queried. This would be zero to start from the top.\nnXSize: The width of the region of the band to be queried in pixels.\nnYSize: The height of the region of the band to be queried in lines.\nnMaskFlagStop: 0, or a binary-or\'ed mask of possible values GDALDATACOVERAGESTATUSUNIMPLEMENTED, GDALDATACOVERAGESTATUSDATA and GDALDATACOVERAGESTATUSEMPTY. As soon as the computation of the coverage matches the mask, the computation will be stopped. *pdfDataPct will not be valid in that case.\npdfDataPct: Optional output parameter whose pointed value will be set to the (approximate) percentage in [0,100] of pixels in the queried sub-window that have valid values. The implementation might not always be able to compute it, in which case it will be set to a negative value.\n\nReturns\n\na binary-or\'ed combination of possible values GDALDATACOVERAGESTATUSUNIMPLEMENTED, GDALDATACOVERAGESTATUSDATA and GDALDATACOVERAGESTATUSEMPTY\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatasetdriver",
    "page": "Docstrings",
    "title": "GDAL.getdatasetdriver",
    "category": "function",
    "text": "GDALGetDatasetDriver(GDALDatasetH hDataset) -> GDALDriverH\n\nFetch the driver to which this dataset relates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatatypebyname",
    "page": "Docstrings",
    "title": "GDAL.getdatatypebyname",
    "category": "function",
    "text": "GDALGetDataTypeByName(const char *) -> GDALDataType\n\nGet data type by symbolic name.\n\nParameters\n\npszName: string containing the symbolic name of the type.\n\nReturns\n\nGDAL data type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatatypename",
    "page": "Docstrings",
    "title": "GDAL.getdatatypename",
    "category": "function",
    "text": "GDALGetDataTypeName(GDALDataType) -> const char *\n\nGet name of data type.\n\nParameters\n\neDataType: type to get name of.\n\nReturns\n\nstring corresponding to existing data type or NULL pointer if invalid type given.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatatypesize",
    "page": "Docstrings",
    "title": "GDAL.getdatatypesize",
    "category": "function",
    "text": "GDALGetDataTypeSize(GDALDataType) -> int\n\nGet data type size in bits.\n\nParameters\n\neDataType: type, such as GDT_Byte.\n\nReturns\n\nthe number of bits or zero if it is not recognised.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatatypesizebits",
    "page": "Docstrings",
    "title": "GDAL.getdatatypesizebits",
    "category": "function",
    "text": "GDALGetDataTypeSizeBits(GDALDataType eDataType) -> int\n\nGet data type size in bits.\n\nParameters\n\neDataType: type, such as GDT_Byte.\n\nReturns\n\nthe number of bits or zero if it is not recognised.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdatatypesizebytes",
    "page": "Docstrings",
    "title": "GDAL.getdatatypesizebytes",
    "category": "function",
    "text": "GDALGetDataTypeSizeBytes(GDALDataType) -> int\n\nGet data type size in bytes.\n\nParameters\n\neDataType: type, such as GDT_Byte.\n\nReturns\n\nthe number of bytes or zero if it is not recognised.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdefault",
    "page": "Docstrings",
    "title": "GDAL.getdefault",
    "category": "function",
    "text": "OGR_Fld_GetDefault(OGRFieldDefnH hDefn) -> const char *\n\nGet default field value.\n\nParameters\n\nhDefn: handle to the field definition.\n\nReturns\n\ndefault field value or NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdefaulthistogram",
    "page": "Docstrings",
    "title": "GDAL.getdefaulthistogram",
    "category": "function",
    "text": "GDALGetDefaultHistogram(GDALRasterBandH hBand,\n                        double * pdfMin,\n                        double * pdfMax,\n                        int * pnBuckets,\n                        int ** ppanHistogram,\n                        int bForce,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressData) -> CPLErr\n\nFetch default raster histogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdefaulthistogramex",
    "page": "Docstrings",
    "title": "GDAL.getdefaulthistogramex",
    "category": "function",
    "text": "GDALGetDefaultHistogramEx(GDALRasterBandH hBand,\n                          double * pdfMin,\n                          double * pdfMax,\n                          int * pnBuckets,\n                          GUIntBig ** ppanHistogram,\n                          int bForce,\n                          GDALProgressFunc pfnProgress,\n                          void * pProgressData) -> CPLErr\n\nFetch default raster histogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdefaultrat",
    "page": "Docstrings",
    "title": "GDAL.getdefaultrat",
    "category": "function",
    "text": "GDALGetDefaultRAT(GDALRasterBandH hBand) -> GDALRasterAttributeTableH\n\nFetch default Raster Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdefnref",
    "page": "Docstrings",
    "title": "GDAL.getdefnref",
    "category": "function",
    "text": "OGR_F_GetDefnRef(OGRFeatureH hFeat) -> OGRFeatureDefnH\n\nFetch feature definition.\n\nParameters\n\nhFeat: handle to the feature to get the feature definition from.\n\nReturns\n\nan handle to the feature definition object on which feature depends.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdescription",
    "page": "Docstrings",
    "title": "GDAL.getdescription",
    "category": "function",
    "text": "GDALGetDescription(GDALMajorObjectH hObject) -> const char *\n\nFetch object description.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdimension",
    "page": "Docstrings",
    "title": "GDAL.getdimension",
    "category": "function",
    "text": "OGR_G_GetDimension(OGRGeometryH hGeom) -> int\n\nGet the dimension of this geometry.\n\nParameters\n\nhGeom: handle on the geometry to get the dimension from.\n\nReturns\n\n0 for points, 1 for lines and 2 for surfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdriver",
    "page": "Docstrings",
    "title": "GDAL.getdriver",
    "category": "function",
    "text": "GDALGetDriver(int iDriver) -> GDALDriverH\n\nFetch driver by index.\n\n\n\n\n\nOGR_DS_GetDriver(OGRDataSourceH) -> OGRSFDriverH\n\nReturns the driver that the dataset was opened with.\n\nParameters\n\nhDS: handle to the datasource\n\nReturns\n\nNULL if driver info is not available, or pointer to a driver owned by the OGRSFDriverManager.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdriverbyname",
    "page": "Docstrings",
    "title": "GDAL.getdriverbyname",
    "category": "function",
    "text": "GDALGetDriverByName(const char * pszName) -> GDALDriverH\n\nFetch a driver based on the short name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdrivercount",
    "page": "Docstrings",
    "title": "GDAL.getdrivercount",
    "category": "function",
    "text": "GDALGetDriverCount() -> int\n\nFetch the number of registered drivers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdrivercreationoptionlist",
    "page": "Docstrings",
    "title": "GDAL.getdrivercreationoptionlist",
    "category": "function",
    "text": "GDALGetDriverCreationOptionList(GDALDriverH hDriver) -> const char *\n\nReturn the list of creation options of the driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nan XML string that describes the list of creation options or empty string. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdriverhelptopic",
    "page": "Docstrings",
    "title": "GDAL.getdriverhelptopic",
    "category": "function",
    "text": "GDALGetDriverHelpTopic(GDALDriverH hDriver) -> const char *\n\nReturn the URL to the help that describes the driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nthe URL to the help that describes the driver or NULL. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdriverlongname",
    "page": "Docstrings",
    "title": "GDAL.getdriverlongname",
    "category": "function",
    "text": "GDALGetDriverLongName(GDALDriverH hDriver) -> const char *\n\nReturn the long name of a driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nthe long name of the driver or empty string. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getdrivershortname",
    "page": "Docstrings",
    "title": "GDAL.getdrivershortname",
    "category": "function",
    "text": "GDALGetDriverShortName(GDALDriverH hDriver) -> const char *\n\nReturn the short name of a driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nthe short name of the driver. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getenvelope",
    "page": "Docstrings",
    "title": "GDAL.getenvelope",
    "category": "function",
    "text": "OGR_G_GetEnvelope(OGRGeometryH hGeom,\n                  OGREnvelope * psEnvelope) -> void\n\nComputes and returns the bounding envelope for this geometry in the passed psEnvelope structure.\n\nParameters\n\nhGeom: handle of the geometry to get envelope from.\npsEnvelope: the structure in which to place the results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getenvelope3d",
    "page": "Docstrings",
    "title": "GDAL.getenvelope3d",
    "category": "function",
    "text": "OGR_G_GetEnvelope3D(OGRGeometryH hGeom,\n                    OGREnvelope3D * psEnvelope) -> void\n\nComputes and returns the bounding envelope (3D) for this geometry in the passed psEnvelope structure.\n\nParameters\n\nhGeom: handle of the geometry to get envelope from.\npsEnvelope: the structure in which to place the results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.geterrorhandleruserdata",
    "page": "Docstrings",
    "title": "GDAL.geterrorhandleruserdata",
    "category": "function",
    "text": "CPLGetErrorHandlerUserData(void) -> void *\n\nFetch the user data for the error context.\n\nReturns\n\nthe user data pointer for the error context\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getextent",
    "page": "Docstrings",
    "title": "GDAL.getextent",
    "category": "function",
    "text": "OGR_L_GetExtent(OGRLayerH,\n                OGREnvelope *,\n                int) -> OGRErr\n\nFetch the extent of this layer.\n\nParameters\n\nhLayer: handle to the layer from which to get extent.\npsExtent: the structure in which the extent value will be returned.\nbForce: Flag indicating whether the extent should be computed even if it is expensive.\n\nReturns\n\nOGRERRNONE on success, OGRERRFAILURE if extent not known.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getextentex",
    "page": "Docstrings",
    "title": "GDAL.getextentex",
    "category": "function",
    "text": "OGR_L_GetExtentEx(OGRLayerH,\n                  int iGeomField,\n                  OGREnvelope * psExtent,\n                  int bForce) -> OGRErr\n\nFetch the extent of this layer, on the specified geometry field.\n\nParameters\n\nhLayer: handle to the layer from which to get extent.\niGeomField: the index of the geometry field on which to compute the extent.\npsExtent: the structure in which the extent value will be returned.\nbForce: Flag indicating whether the extent should be computed even if it is expensive.\n\nReturns\n\nOGRERRNONE on success, OGRERRFAILURE if extent not known.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfeature",
    "page": "Docstrings",
    "title": "GDAL.getfeature",
    "category": "function",
    "text": "OGR_L_GetFeature(OGRLayerH,\n                 GIntBig) -> OGRFeatureH\n\nFetch a feature by its identifier.\n\nParameters\n\nhLayer: handle to the layer that owned the feature.\nnFeatureId: the feature id of the feature to read.\n\nReturns\n\nan handle to a feature now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfeaturecount",
    "page": "Docstrings",
    "title": "GDAL.getfeaturecount",
    "category": "function",
    "text": "OGR_L_GetFeatureCount(OGRLayerH,\n                      int) -> GIntBig\n\nFetch the feature count in this layer.\n\nParameters\n\nhLayer: handle to the layer that owned the features.\nbForce: Flag indicating whether the count should be computed even if it is expensive.\n\nReturns\n\nfeature count, -1 if count not known.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfeaturesread",
    "page": "Docstrings",
    "title": "GDAL.getfeaturesread",
    "category": "function",
    "text": "OGR_L_GetFeaturesRead(OGRLayerH hLayer) -> GIntBig\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfid",
    "page": "Docstrings",
    "title": "GDAL.getfid",
    "category": "function",
    "text": "OGR_F_GetFID(OGRFeatureH hFeat) -> GIntBig\n\nGet feature identifier.\n\nParameters\n\nhFeat: handle to the feature from which to get the feature identifier.\n\nReturns\n\nfeature id or OGRNullFID if none has been assigned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfidcolumn",
    "page": "Docstrings",
    "title": "GDAL.getfidcolumn",
    "category": "function",
    "text": "OGR_L_GetFIDColumn(OGRLayerH) -> const char *\n\nThis method returns the name of the underlying database column being used as the FID column, or \"\" if not supported.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nfid column name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasbinary",
    "page": "Docstrings",
    "title": "GDAL.getfieldasbinary",
    "category": "function",
    "text": "OGR_F_GetFieldAsBinary(OGRFeatureH hFeat,\n                       int iField,\n                       int * pnBytes) -> GByte *\n\nFetch field value as binary.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnBytes: location to place count of bytes returned.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasdatetime",
    "page": "Docstrings",
    "title": "GDAL.getfieldasdatetime",
    "category": "function",
    "text": "OGR_F_GetFieldAsDateTime(OGRFeatureH hFeat,\n                         int iField,\n                         int * pnYear,\n                         int * pnMonth,\n                         int * pnDay,\n                         int * pnHour,\n                         int * pnMinute,\n                         int * pnSecond,\n                         int * pnTZFlag) -> int\n\nFetch field value as date and time.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnYear: (including century)\npnMonth: (1-12)\npnDay: (1-31)\npnHour: (0-23)\npnMinute: (0-59)\npnSecond: (0-59)\npnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasdatetimeex",
    "page": "Docstrings",
    "title": "GDAL.getfieldasdatetimeex",
    "category": "function",
    "text": "OGR_F_GetFieldAsDateTimeEx(OGRFeatureH hFeat,\n                           int iField,\n                           int * pnYear,\n                           int * pnMonth,\n                           int * pnDay,\n                           int * pnHour,\n                           int * pnMinute,\n                           float * pfSecond,\n                           int * pnTZFlag) -> int\n\nFetch field value as date and time.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnYear: (including century)\npnMonth: (1-12)\npnDay: (1-31)\npnHour: (0-23)\npnMinute: (0-59)\npfSecond: (0-59 with millisecond accuracy)\npnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasdouble",
    "page": "Docstrings",
    "title": "GDAL.getfieldasdouble",
    "category": "function",
    "text": "OGR_F_GetFieldAsDouble(OGRFeatureH hFeat,\n                       int iField) -> double\n\nFetch field value as a double.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasdoublelist",
    "page": "Docstrings",
    "title": "GDAL.getfieldasdoublelist",
    "category": "function",
    "text": "OGR_F_GetFieldAsDoubleList(OGRFeatureH hFeat,\n                           int iField,\n                           int * pnCount) -> const double *\n\nFetch field value as a list of doubles.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnCount: an integer to put the list count (number of doubles) into.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief. If *pnCount is zero on return the returned pointer may be NULL or non-NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasinteger",
    "page": "Docstrings",
    "title": "GDAL.getfieldasinteger",
    "category": "function",
    "text": "OGR_F_GetFieldAsInteger(OGRFeatureH hFeat,\n                        int iField) -> int\n\nFetch field value as integer.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasinteger64",
    "page": "Docstrings",
    "title": "GDAL.getfieldasinteger64",
    "category": "function",
    "text": "OGR_F_GetFieldAsInteger64(OGRFeatureH hFeat,\n                          int iField) -> GIntBig\n\nFetch field value as integer 64 bit.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasinteger64list",
    "page": "Docstrings",
    "title": "GDAL.getfieldasinteger64list",
    "category": "function",
    "text": "OGR_F_GetFieldAsInteger64List(OGRFeatureH hFeat,\n                              int iField,\n                              int * pnCount) -> const GIntBig *\n\nFetch field value as a list of 64 bit integers.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnCount: an integer to put the list count (number of integers) into.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief. If *pnCount is zero on return the returned pointer may be NULL or non-NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasintegerlist",
    "page": "Docstrings",
    "title": "GDAL.getfieldasintegerlist",
    "category": "function",
    "text": "OGR_F_GetFieldAsIntegerList(OGRFeatureH hFeat,\n                            int iField,\n                            int * pnCount) -> const int *\n\nFetch field value as a list of integers.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnCount: an integer to put the list count (number of integers) into.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief. If *pnCount is zero on return the returned pointer may be NULL or non-NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasstring",
    "page": "Docstrings",
    "title": "GDAL.getfieldasstring",
    "category": "function",
    "text": "OGR_F_GetFieldAsString(OGRFeatureH hFeat,\n                       int iField) -> const char *\n\nFetch field value as a string.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value. This string is internal, and should not be modified, or freed. Its lifetime may be very brief.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldasstringlist",
    "page": "Docstrings",
    "title": "GDAL.getfieldasstringlist",
    "category": "function",
    "text": "OGR_F_GetFieldAsStringList(OGRFeatureH hFeat,\n                           int iField) -> char **\n\nFetch field value as a list of strings.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldcount",
    "page": "Docstrings",
    "title": "GDAL.getfieldcount",
    "category": "function",
    "text": "OGR_FD_GetFieldCount(OGRFeatureDefnH hDefn) -> int\n\nFetch number of fields on the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the fields count from.\n\nReturns\n\ncount of fields.\n\n\n\n\n\nOGR_F_GetFieldCount(OGRFeatureH hFeat) -> int\n\nFetch number of fields on this feature This will always be the same as the field count for the OGRFeatureDefn.\n\nParameters\n\nhFeat: handle to the feature to get the fields count from.\n\nReturns\n\ncount of fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfielddefn",
    "page": "Docstrings",
    "title": "GDAL.getfielddefn",
    "category": "function",
    "text": "OGR_FD_GetFieldDefn(OGRFeatureDefnH hDefn,\n                    int iField) -> OGRFieldDefnH\n\nFetch field definition of the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the field definition from.\niField: the field to fetch, between 0 and GetFieldCount()-1.\n\nReturns\n\nan handle to an internal field definition object or NULL if invalid index. This object should not be modified or freed by the application.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfielddefnref",
    "page": "Docstrings",
    "title": "GDAL.getfielddefnref",
    "category": "function",
    "text": "OGR_F_GetFieldDefnRef(OGRFeatureH hFeat,\n                      int i) -> OGRFieldDefnH\n\nFetch definition for this field.\n\nParameters\n\nhFeat: handle to the feature on which the field is found.\ni: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nan handle to the field definition (from the OGRFeatureDefn). This is an internal reference, and should not be deleted or modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldindex",
    "page": "Docstrings",
    "title": "GDAL.getfieldindex",
    "category": "function",
    "text": "OGR_FD_GetFieldIndex(OGRFeatureDefnH hDefn,\n                     const char * pszFieldName) -> int\n\nFind field by name.\n\nParameters\n\nhDefn: handle to the feature definition to get field index from.\npszFieldName: the field name to search for.\n\nReturns\n\nthe field index, or -1 if no match found.\n\n\n\n\n\nOGR_F_GetFieldIndex(OGRFeatureH hFeat,\n                    const char * pszName) -> int\n\nFetch the field index given field name.\n\nParameters\n\nhFeat: handle to the feature on which the field is found.\npszName: the name of the field to search for.\n\nReturns\n\nthe field index, or -1 if no matching field is found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldsubtypename",
    "page": "Docstrings",
    "title": "GDAL.getfieldsubtypename",
    "category": "function",
    "text": "OGR_GetFieldSubTypeName(OGRFieldSubType eSubType) -> const char *\n\nFetch human readable name for a field subtype.\n\nParameters\n\neSubType: the field subtype to get name for.\n\nReturns\n\nthe name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfieldtypename",
    "page": "Docstrings",
    "title": "GDAL.getfieldtypename",
    "category": "function",
    "text": "OGR_GetFieldTypeName(OGRFieldType eType) -> const char *\n\nFetch human readable name for a field type.\n\nParameters\n\neType: the field type to get name for.\n\nReturns\n\nthe name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getfilelist",
    "page": "Docstrings",
    "title": "GDAL.getfilelist",
    "category": "function",
    "text": "GDALGetFileList(GDALDatasetH hDS) -> char **\n\nFetch files forming dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgcpcount",
    "page": "Docstrings",
    "title": "GDAL.getgcpcount",
    "category": "function",
    "text": "GDALGetGCPCount(GDALDatasetH hDS) -> int\n\nGet number of GCPs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgcpprojection",
    "page": "Docstrings",
    "title": "GDAL.getgcpprojection",
    "category": "function",
    "text": "GDALGetGCPProjection(GDALDatasetH hDS) -> const char *\n\nGet output projection for GCPs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgcps",
    "page": "Docstrings",
    "title": "GDAL.getgcps",
    "category": "function",
    "text": "GDALGetGCPs(GDALDatasetH hDS) -> const GDAL_GCP *\n\nFetch GCPs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgenerate_db2_v72_byte_order",
    "page": "Docstrings",
    "title": "GDAL.getgenerate_db2_v72_byte_order",
    "category": "function",
    "text": "OGRGetGenerate_DB2_V72_BYTE_ORDER() -> int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeometrycolumn",
    "page": "Docstrings",
    "title": "GDAL.getgeometrycolumn",
    "category": "function",
    "text": "OGR_L_GetGeometryColumn(OGRLayerH) -> const char *\n\nThis method returns the name of the underlying database column being used as the geometry column, or \"\" if not supported.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\ngeometry column name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeometrycount",
    "page": "Docstrings",
    "title": "GDAL.getgeometrycount",
    "category": "function",
    "text": "OGR_G_GetGeometryCount(OGRGeometryH hGeom) -> int\n\nFetch the number of elements in a geometry or number of geometries in container.\n\nParameters\n\nhGeom: single geometry or geometry container from which to get the number of elements.\n\nReturns\n\nthe number of elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeometryname",
    "page": "Docstrings",
    "title": "GDAL.getgeometryname",
    "category": "function",
    "text": "OGR_G_GetGeometryName(OGRGeometryH hGeom) -> const char *\n\nFetch WKT name for geometry type.\n\nParameters\n\nhGeom: handle on the geometry to get name from.\n\nReturns\n\nname used for this geometry type in well known text format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeometryref",
    "page": "Docstrings",
    "title": "GDAL.getgeometryref",
    "category": "function",
    "text": "OGR_G_GetGeometryRef(OGRGeometryH hGeom,\n                     int iSubGeom) -> OGRGeometryH\n\nFetch geometry from a geometry container.\n\nParameters\n\nhGeom: handle to the geometry container from which to get a geometry from.\niSubGeom: the index of the geometry to fetch, between 0 and getNumGeometries() - 1.\n\nReturns\n\nhandle to the requested geometry.\n\n\n\n\n\nOGR_F_GetGeometryRef(OGRFeatureH hFeat) -> OGRGeometryH\n\nFetch an handle to feature geometry.\n\nParameters\n\nhFeat: handle to the feature to get geometry from.\n\nReturns\n\nan handle to internal feature geometry. This object should not be modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeometrytype",
    "page": "Docstrings",
    "title": "GDAL.getgeometrytype",
    "category": "function",
    "text": "OGR_G_GetGeometryType(OGRGeometryH hGeom) -> OGRwkbGeometryType\n\nFetch geometry type.\n\nParameters\n\nhGeom: handle on the geometry to get type from.\n\nReturns\n\nthe geometry type code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeomfieldcount",
    "page": "Docstrings",
    "title": "GDAL.getgeomfieldcount",
    "category": "function",
    "text": "OGR_FD_GetGeomFieldCount(OGRFeatureDefnH hDefn) -> int\n\nFetch number of geometry fields on the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the fields count from.\n\nReturns\n\ncount of geometry fields.\n\n\n\n\n\nOGR_F_GetGeomFieldCount(OGRFeatureH hFeat) -> int\n\nFetch number of geometry fields on this feature This will always be the same as the geometry field count for the OGRFeatureDefn.\n\nParameters\n\nhFeat: handle to the feature to get the geometry fields count from.\n\nReturns\n\ncount of geometry fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeomfielddefn",
    "page": "Docstrings",
    "title": "GDAL.getgeomfielddefn",
    "category": "function",
    "text": "OGR_FD_GetGeomFieldDefn(OGRFeatureDefnH hDefn,\n                        int iGeomField) -> OGRGeomFieldDefnH\n\nFetch geometry field definition of the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the field definition from.\niGeomField: the geometry field to fetch, between 0 and GetGeomFieldCount() - 1.\n\nReturns\n\nan handle to an internal field definition object or NULL if invalid index. This object should not be modified or freed by the application.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeomfielddefnref",
    "page": "Docstrings",
    "title": "GDAL.getgeomfielddefnref",
    "category": "function",
    "text": "OGR_F_GetGeomFieldDefnRef(OGRFeatureH hFeat,\n                          int i) -> OGRGeomFieldDefnH\n\nFetch definition for this geometry field.\n\nParameters\n\nhFeat: handle to the feature on which the field is found.\ni: the field to fetch, from 0 to GetGeomFieldCount()-1.\n\nReturns\n\nan handle to the field definition (from the OGRFeatureDefn). This is an internal reference, and should not be deleted or modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeomfieldindex",
    "page": "Docstrings",
    "title": "GDAL.getgeomfieldindex",
    "category": "function",
    "text": "OGR_FD_GetGeomFieldIndex(OGRFeatureDefnH hDefn,\n                         const char * pszGeomFieldName) -> int\n\nFind geometry field by name.\n\nParameters\n\nhDefn: handle to the feature definition to get field index from.\npszGeomFieldName: the geometry field name to search for.\n\nReturns\n\nthe geometry field index, or -1 if no match found.\n\n\n\n\n\nOGR_F_GetGeomFieldIndex(OGRFeatureH hFeat,\n                        const char * pszName) -> int\n\nFetch the geometry field index given geometry field name.\n\nParameters\n\nhFeat: handle to the feature on which the geometry field is found.\npszName: the name of the geometry field to search for.\n\nReturns\n\nthe geometry field index, or -1 if no matching geometry field is found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeomfieldref",
    "page": "Docstrings",
    "title": "GDAL.getgeomfieldref",
    "category": "function",
    "text": "OGR_F_GetGeomFieldRef(OGRFeatureH hFeat,\n                      int iField) -> OGRGeometryH\n\nFetch an handle to feature geometry.\n\nParameters\n\nhFeat: handle to the feature to get geometry from.\niField: geometry field to get.\n\nReturns\n\nan handle to internal feature geometry. This object should not be modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeomtype",
    "page": "Docstrings",
    "title": "GDAL.getgeomtype",
    "category": "function",
    "text": "OGR_FD_GetGeomType(OGRFeatureDefnH hDefn) -> OGRwkbGeometryType\n\nFetch the geometry base type of the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the geometry type from.\n\nReturns\n\nthe base type for all geometry related to this definition.\n\n\n\n\n\nOGR_L_GetGeomType(OGRLayerH) -> OGRwkbGeometryType\n\nReturn the layer geometry type.\n\nParameters\n\nhLayer: handle to the layer.\n\nReturns\n\nthe geometry type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getgeotransform",
    "page": "Docstrings",
    "title": "GDAL.getgeotransform",
    "category": "function",
    "text": "GDALGetGeoTransform(GDALDatasetH hDS,\n                    double * padfTransform) -> CPLErr\n\nFetch the affine transformation coefficients.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getinternalhandle",
    "page": "Docstrings",
    "title": "GDAL.getinternalhandle",
    "category": "function",
    "text": "GDALGetInternalHandle(GDALDatasetH hDS,\n                      const char * pszRequest) -> void *\n\nFetch a format specific internally meaningful handle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getinvflattening",
    "page": "Docstrings",
    "title": "GDAL.getinvflattening",
    "category": "function",
    "text": "OSRGetInvFlattening(OGRSpatialReferenceH hSRS,\n                    OGRErr * pnErr) -> double\n\nGet spheroid inverse flattening.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getjpeg2000structure",
    "page": "Docstrings",
    "title": "GDAL.getjpeg2000structure",
    "category": "function",
    "text": "GDALGetJPEG2000Structure(const char * pszFilename,\n                         char ** papszOptions) -> CPLXMLNode *\n\nDump the structure of a JPEG2000 file as a XML tree.\n\nParameters\n\npszFilename: filename.\npapszOptions: NULL terminated list of options, or NULL. Allowed options are BINARYCONTENT=YES, TEXTCONTENT=YES, CODESTREAM=YES, ALL=YES.\n\nReturns\n\nXML tree (to be freed with CPLDestroyXMLNode()) or NULL in case of error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getjustify",
    "page": "Docstrings",
    "title": "GDAL.getjustify",
    "category": "function",
    "text": "OGR_Fld_GetJustify(OGRFieldDefnH hDefn) -> OGRJustification\n\nGet the justification for this field.\n\nParameters\n\nhDefn: handle to the field definition to get justification from.\n\nReturns\n\nthe justification.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlasterrormsg",
    "page": "Docstrings",
    "title": "GDAL.getlasterrormsg",
    "category": "function",
    "text": "CPLGetLastErrorMsg() -> const char *\n\nGet the last error message.\n\nReturns\n\nthe last error message, or NULL if there is no posted error message.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlasterrorno",
    "page": "Docstrings",
    "title": "GDAL.getlasterrorno",
    "category": "function",
    "text": "CPLGetLastErrorNo() -> CPLErrorNum\n\nFetch the last error number.\n\nReturns\n\nthe error number of the last error to occur, or CPLE_None (0) if there are no posted errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlasterrortype",
    "page": "Docstrings",
    "title": "GDAL.getlasterrortype",
    "category": "function",
    "text": "CPLGetLastErrorType() -> CPLErr\n\nFetch the last error type.\n\nReturns\n\nthe error type of the last error to occur, or CE_None (0) if there are no posted errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlaststylename",
    "page": "Docstrings",
    "title": "GDAL.getlaststylename",
    "category": "function",
    "text": "OGR_STBL_GetLastStyleName(OGRStyleTableH hStyleTable) -> const char *\n\nGet the style name of the last style string fetched with OGRSTBLGetNextStyle.\n\nParameters\n\nhStyleTable: handle to the style table.\n\nReturns\n\nthe Name of the last style string or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlayer",
    "page": "Docstrings",
    "title": "GDAL.getlayer",
    "category": "function",
    "text": "OGR_DS_GetLayer(OGRDataSourceH,\n                int) -> OGRLayerH\n\nFetch a layer by index.\n\nParameters\n\nhDS: handle to the data source from which to get the layer.\niLayer: a layer number between 0 and OGRDSGetLayerCount()-1.\n\nReturns\n\nan handle to the layer, or NULL if iLayer is out of range or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlayerbyname",
    "page": "Docstrings",
    "title": "GDAL.getlayerbyname",
    "category": "function",
    "text": "OGR_DS_GetLayerByName(OGRDataSourceH,\n                      const char *) -> OGRLayerH\n\nFetch a layer by name.\n\nParameters\n\nhDS: handle to the data source from which to get the layer.\npszLayerName: Layer the layer name of the layer to fetch.\n\nReturns\n\nan handle to the layer, or NULL if the layer is not found or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlayercount",
    "page": "Docstrings",
    "title": "GDAL.getlayercount",
    "category": "function",
    "text": "OGR_DS_GetLayerCount(OGRDataSourceH) -> int\n\nGet the number of layers in this data source.\n\nParameters\n\nhDS: handle to the data source from which to get the number of layers.\n\nReturns\n\nlayer count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlayerdefn",
    "page": "Docstrings",
    "title": "GDAL.getlayerdefn",
    "category": "function",
    "text": "OGR_L_GetLayerDefn(OGRLayerH) -> OGRFeatureDefnH\n\nFetch the schema information for this layer.\n\nParameters\n\nhLayer: handle to the layer to get the schema information.\n\nReturns\n\nan handle to the feature definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlineargeometry",
    "page": "Docstrings",
    "title": "GDAL.getlineargeometry",
    "category": "function",
    "text": "OGR_G_GetLinearGeometry(OGRGeometryH hGeom,\n                        double dfMaxAngleStepSizeDegrees,\n                        char ** papszOptions) -> OGRGeometryH\n\nReturn, possibly approximate, linear version of this geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\ndfMaxAngleStepSizeDegrees: the largest step in degrees along the arc, zero to use the default setting.\npapszOptions: options as a null-terminated list of strings or NULL. See OGRGeometryFactory::curveToLineString() for valid options.\n\nReturns\n\na new geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getlinearunits",
    "page": "Docstrings",
    "title": "GDAL.getlinearunits",
    "category": "function",
    "text": "OSRGetLinearUnits(OGRSpatialReferenceH hSRS,\n                  char ** ppszName) -> double\n\nFetch linear projection units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getm",
    "page": "Docstrings",
    "title": "GDAL.getm",
    "category": "function",
    "text": "OGR_G_GetM(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the m coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the M coordinate.\ni: point to get the M coordinate.\n\nReturns\n\nthe M coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getmaskband",
    "page": "Docstrings",
    "title": "GDAL.getmaskband",
    "category": "function",
    "text": "GDALGetMaskBand(GDALRasterBandH hBand) -> GDALRasterBandH\n\nReturn the mask band associated with the band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getmaskflags",
    "page": "Docstrings",
    "title": "GDAL.getmaskflags",
    "category": "function",
    "text": "GDALGetMaskFlags(GDALRasterBandH hBand) -> int\n\nReturn the status flags of the mask band associated with the band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getmetadata",
    "page": "Docstrings",
    "title": "GDAL.getmetadata",
    "category": "function",
    "text": "GDALGetMetadata(GDALMajorObjectH hObject,\n                const char * pszDomain) -> char **\n\nFetch metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getmetadatadomainlist",
    "page": "Docstrings",
    "title": "GDAL.getmetadatadomainlist",
    "category": "function",
    "text": "GDALGetMetadataDomainList(GDALMajorObjectH hObject) -> char **\n\nFetch list of metadata domains.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getmetadataitem",
    "page": "Docstrings",
    "title": "GDAL.getmetadataitem",
    "category": "function",
    "text": "GDALGetMetadataItem(GDALMajorObjectH hObject,\n                    const char * pszName,\n                    const char * pszDomain) -> const char *\n\nFetch single metadata item.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getname",
    "page": "Docstrings",
    "title": "GDAL.getname",
    "category": "function",
    "text": "OGR_FD_GetName(OGRFeatureDefnH hDefn) -> const char *\n\nGet name of the OGRFeatureDefn passed as an argument.\n\nParameters\n\nhDefn: handle to the feature definition to get the name from.\n\nReturns\n\nthe name. This name is internal and should not be modified, or freed.\n\n\n\n\n\nOGR_L_GetName(OGRLayerH) -> const char *\n\nReturn the layer name.\n\nParameters\n\nhLayer: handle to the layer.\n\nReturns\n\nthe layer name (must not been freed)\n\n\n\n\n\nOGR_DS_GetName(OGRDataSourceH) -> const char *\n\nReturns the name of the data source.\n\nParameters\n\nhDS: handle to the data source to get the name from.\n\nReturns\n\npointer to an internal name string which should not be modified or freed by the caller.\n\n\n\n\n\nOGR_Dr_GetName(OGRSFDriverH) -> const char *\n\nFetch name of driver (file format).\n\nParameters\n\nhDriver: handle to the driver to get the name from.\n\nReturns\n\ndriver name. This is an internal string and should not be modified or freed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnameref",
    "page": "Docstrings",
    "title": "GDAL.getnameref",
    "category": "function",
    "text": "OGR_Fld_GetNameRef(OGRFieldDefnH hDefn) -> const char *\n\nFetch name of this field.\n\nParameters\n\nhDefn: handle to the field definition.\n\nReturns\n\nthe name of the field definition.\n\n\n\n\n\nOGR_GFld_GetNameRef(OGRGeomFieldDefnH hDefn) -> const char *\n\nFetch name of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition.\n\nReturns\n\nthe name of the geometry field definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnativedata",
    "page": "Docstrings",
    "title": "GDAL.getnativedata",
    "category": "function",
    "text": "OGR_F_GetNativeData(OGRFeatureH hFeat) -> const char *\n\nReturns the native data for the feature.\n\nParameters\n\nhFeat: handle to the feature.\n\nReturns\n\na string with the native data, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnativemediatype",
    "page": "Docstrings",
    "title": "GDAL.getnativemediatype",
    "category": "function",
    "text": "OGR_F_GetNativeMediaType(OGRFeatureH hFeat) -> const char *\n\nReturns the native media type for the feature.\n\nParameters\n\nhFeat: handle to the feature.\n\nReturns\n\na string with the native media type, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnextfeature",
    "page": "Docstrings",
    "title": "GDAL.getnextfeature",
    "category": "function",
    "text": "OGR_L_GetNextFeature(OGRLayerH) -> OGRFeatureH\n\nFetch the next available feature from this layer.\n\nParameters\n\nhLayer: handle to the layer from which feature are read.\n\nReturns\n\nan handle to a feature, or NULL if no more features are available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnextstyle",
    "page": "Docstrings",
    "title": "GDAL.getnextstyle",
    "category": "function",
    "text": "OGR_STBL_GetNextStyle(OGRStyleTableH hStyleTable) -> const char *\n\nGet the next style string from the table.\n\nParameters\n\nhStyleTable: handle to the style table.\n\nReturns\n\nthe next style string or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnoncomplexdatatype",
    "page": "Docstrings",
    "title": "GDAL.getnoncomplexdatatype",
    "category": "function",
    "text": "GDALGetNonComplexDataType(GDALDataType) -> GDALDataType\n\nReturn the base data type for the specified input.\n\nParameters\n\neDataType: type, such as GDT_CFloat32.\n\nReturns\n\nGDAL data type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnonlineargeometriesenabledflag",
    "page": "Docstrings",
    "title": "GDAL.getnonlineargeometriesenabledflag",
    "category": "function",
    "text": "OGRGetNonLinearGeometriesEnabledFlag(void) -> int\n\nGet flag to enable/disable returning non-linear geometries in the C API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getnormprojparm",
    "page": "Docstrings",
    "title": "GDAL.getnormprojparm",
    "category": "function",
    "text": "OSRGetNormProjParm(OGRSpatialReferenceH hSRS,\n                   const char * pszName,\n                   double dfDefaultValue,\n                   OGRErr * pnErr) -> double\n\nThis function is the same as OGRSpatialReference::\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getopendatasets",
    "page": "Docstrings",
    "title": "GDAL.getopendatasets",
    "category": "function",
    "text": "GDALGetOpenDatasets(GDALDatasetH ** ppahDSList,\n                    int * pnCount) -> void\n\nFetch all open GDAL dataset handles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getoverview",
    "page": "Docstrings",
    "title": "GDAL.getoverview",
    "category": "function",
    "text": "GDALGetOverview(GDALRasterBandH hBand,\n                int i) -> GDALRasterBandH\n\nFetch overview raster band object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getoverviewcount",
    "page": "Docstrings",
    "title": "GDAL.getoverviewcount",
    "category": "function",
    "text": "GDALGetOverviewCount(GDALRasterBandH hBand) -> int\n\nReturn the number of overview layers available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpaletteinterpretation",
    "page": "Docstrings",
    "title": "GDAL.getpaletteinterpretation",
    "category": "function",
    "text": "GDALGetPaletteInterpretation(GDALColorTableH hTable) -> GDALPaletteInterp\n\nFetch palette interpretation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpaletteinterpretationname",
    "page": "Docstrings",
    "title": "GDAL.getpaletteinterpretationname",
    "category": "function",
    "text": "GDALGetPaletteInterpretationName(GDALPaletteInterp) -> const char *\n\nGet name of palette interpretation.\n\nParameters\n\neInterp: palette interpretation to get name of.\n\nReturns\n\nstring corresponding to palette interpretation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getparamdbl",
    "page": "Docstrings",
    "title": "GDAL.getparamdbl",
    "category": "function",
    "text": "OGR_ST_GetParamDbl(OGRStyleToolH hST,\n                   int eParam,\n                   int * bValueIsNull) -> double\n\nGet Style Tool parameter value as a double.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nbValueIsNull: pointer to an integer that will be set to TRUE or FALSE to indicate whether the parameter value is NULL.\n\nReturns\n\nthe parameter value as double and sets bValueIsNull.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getparamnum",
    "page": "Docstrings",
    "title": "GDAL.getparamnum",
    "category": "function",
    "text": "OGR_ST_GetParamNum(OGRStyleToolH hST,\n                   int eParam,\n                   int * bValueIsNull) -> int\n\nGet Style Tool parameter value as an integer.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nbValueIsNull: pointer to an integer that will be set to TRUE or FALSE to indicate whether the parameter value is NULL.\n\nReturns\n\nthe parameter value as integer and sets bValueIsNull.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getparamstr",
    "page": "Docstrings",
    "title": "GDAL.getparamstr",
    "category": "function",
    "text": "OGR_ST_GetParamStr(OGRStyleToolH hST,\n                   int eParam,\n                   int * bValueIsNull) -> const char *\n\nGet Style Tool parameter value as string.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nbValueIsNull: pointer to an integer that will be set to TRUE or FALSE to indicate whether the parameter value is NULL.\n\nReturns\n\nthe parameter value as string and sets bValueIsNull.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpart",
    "page": "Docstrings",
    "title": "GDAL.getpart",
    "category": "function",
    "text": "OGR_SM_GetPart(OGRStyleMgrH hSM,\n               int nPartId,\n               const char * pszStyleString) -> OGRStyleToolH\n\nFetch a part (style tool) from the current style.\n\nParameters\n\nhSM: handle to the style manager.\nnPartId: the part number (0-based index).\npszStyleString: (optional) the style string on which to operate. If NULL then the current style string stored in the style manager is used.\n\nReturns\n\nOGRStyleToolH of the requested part (style tools) or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpartcount",
    "page": "Docstrings",
    "title": "GDAL.getpartcount",
    "category": "function",
    "text": "OGR_SM_GetPartCount(OGRStyleMgrH hSM,\n                    const char * pszStyleString) -> int\n\nGet the number of parts in a style.\n\nParameters\n\nhSM: handle to the style manager.\npszStyleString: (optional) the style string on which to operate. If NULL then the current style string stored in the style manager is used.\n\nReturns\n\nthe number of parts (style tools) in the style.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpoint",
    "page": "Docstrings",
    "title": "GDAL.getpoint",
    "category": "function",
    "text": "OGR_G_GetPoint(OGRGeometryH hGeom,\n               int i,\n               double * pdfX,\n               double * pdfY,\n               double * pdfZ) -> void\n\nFetch a point in line string or a point geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\ni: the vertex to fetch, from 0 to getNumPoints()-1, zero for a point.\npdfX: value of x coordinate.\npdfY: value of y coordinate.\npdfZ: value of z coordinate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpointcount",
    "page": "Docstrings",
    "title": "GDAL.getpointcount",
    "category": "function",
    "text": "OGR_G_GetPointCount(OGRGeometryH hGeom) -> int\n\nFetch number of points from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the number of points.\n\nReturns\n\nthe number of points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpoints",
    "page": "Docstrings",
    "title": "GDAL.getpoints",
    "category": "function",
    "text": "OGR_G_GetPoints(OGRGeometryH hGeom,\n                void * pabyX,\n                int nXStride,\n                void * pabyY,\n                int nYStride,\n                void * pabyZ,\n                int nZStride) -> int\n\nReturns all points of line string.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\npabyX: a buffer of at least (sizeof(double) * nXStride * nPointCount) bytes, may be NULL.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: a buffer of at least (sizeof(double) * nYStride * nPointCount) bytes, may be NULL.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: a buffer of at last size (sizeof(double) * nZStride * nPointCount) bytes, may be NULL.\nnZStride: the number of bytes between 2 elements of pabyZ.\n\nReturns\n\nthe number of points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpointszm",
    "page": "Docstrings",
    "title": "GDAL.getpointszm",
    "category": "function",
    "text": "OGR_G_GetPointsZM(OGRGeometryH hGeom,\n                  void * pabyX,\n                  int nXStride,\n                  void * pabyY,\n                  int nYStride,\n                  void * pabyZ,\n                  int nZStride,\n                  void * pabyM,\n                  int nMStride) -> int\n\nReturns all points of line string.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\npabyX: a buffer of at least (sizeof(double) * nXStride * nPointCount) bytes, may be NULL.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: a buffer of at least (sizeof(double) * nYStride * nPointCount) bytes, may be NULL.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: a buffer of at last size (sizeof(double) * nZStride * nPointCount) bytes, may be NULL.\nnZStride: the number of bytes between 2 elements of pabyZ.\npabyM: a buffer of at last size (sizeof(double) * nMStride * nPointCount) bytes, may be NULL.\nnMStride: the number of bytes between 2 elements of pabyM.\n\nReturns\n\nthe number of points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getpointzm",
    "page": "Docstrings",
    "title": "GDAL.getpointzm",
    "category": "function",
    "text": "OGR_G_GetPointZM(OGRGeometryH hGeom,\n                 int i,\n                 double * pdfX,\n                 double * pdfY,\n                 double * pdfZ,\n                 double * pdfM) -> void\n\nFetch a point in line string or a point geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\ni: the vertex to fetch, from 0 to getNumPoints()-1, zero for a point.\npdfX: value of x coordinate.\npdfY: value of y coordinate.\npdfZ: value of z coordinate.\npdfM: value of m coordinate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getprecision",
    "page": "Docstrings",
    "title": "GDAL.getprecision",
    "category": "function",
    "text": "OGR_Fld_GetPrecision(OGRFieldDefnH hDefn) -> int\n\nGet the formatting precision for this field.\n\nParameters\n\nhDefn: handle to the field definition to get precision from.\n\nReturns\n\nthe precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getprimemeridian",
    "page": "Docstrings",
    "title": "GDAL.getprimemeridian",
    "category": "function",
    "text": "OSRGetPrimeMeridian(OGRSpatialReferenceH hSRS,\n                    char ** ppszName) -> double\n\nFetch prime meridian info.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getprojectionref",
    "page": "Docstrings",
    "title": "GDAL.getprojectionref",
    "category": "function",
    "text": "GDALGetProjectionRef(GDALDatasetH hDS) -> const char *\n\nFetch the projection definition string for this dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getprojparm",
    "page": "Docstrings",
    "title": "GDAL.getprojparm",
    "category": "function",
    "text": "OSRGetProjParm(OGRSpatialReferenceH hSRS,\n               const char * pszName,\n               double dfDefaultValue,\n               OGRErr * pnErr) -> double\n\nFetch a projection parameter value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrandomrastersample",
    "page": "Docstrings",
    "title": "GDAL.getrandomrastersample",
    "category": "function",
    "text": "GDALGetRandomRasterSample(GDALRasterBandH,\n                          int,\n                          float *) -> int\n\nUndocumented.\n\nParameters\n\nhBand: undocumented.\nnSamples: undocumented.\npafSampleBuf: undocumented.\n\nReturns\n\nundocumented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasteraccess",
    "page": "Docstrings",
    "title": "GDAL.getrasteraccess",
    "category": "function",
    "text": "GDALGetRasterAccess(GDALRasterBandH hBand) -> GDALAccess\n\nFind out if we have update permission for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterband",
    "page": "Docstrings",
    "title": "GDAL.getrasterband",
    "category": "function",
    "text": "GDALGetRasterBand(GDALDatasetH hDS,\n                  int nBandId) -> GDALRasterBandH\n\nFetch a band object for a dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterbandxsize",
    "page": "Docstrings",
    "title": "GDAL.getrasterbandxsize",
    "category": "function",
    "text": "GDALGetRasterBandXSize(GDALRasterBandH hBand) -> int\n\nFetch XSize of raster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterbandysize",
    "page": "Docstrings",
    "title": "GDAL.getrasterbandysize",
    "category": "function",
    "text": "GDALGetRasterBandYSize(GDALRasterBandH hBand) -> int\n\nFetch YSize of raster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastercategorynames",
    "page": "Docstrings",
    "title": "GDAL.getrastercategorynames",
    "category": "function",
    "text": "GDALGetRasterCategoryNames(GDALRasterBandH hBand) -> char **\n\nFetch the list of category names for this raster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastercolorinterpretation",
    "page": "Docstrings",
    "title": "GDAL.getrastercolorinterpretation",
    "category": "function",
    "text": "GDALGetRasterColorInterpretation(GDALRasterBandH hBand) -> GDALColorInterp\n\nHow should this band be interpreted as color?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastercolortable",
    "page": "Docstrings",
    "title": "GDAL.getrastercolortable",
    "category": "function",
    "text": "GDALGetRasterColorTable(GDALRasterBandH hBand) -> GDALColorTableH\n\nFetch the color table associated with band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastercount",
    "page": "Docstrings",
    "title": "GDAL.getrastercount",
    "category": "function",
    "text": "GDALGetRasterCount(GDALDatasetH hDS) -> int\n\nFetch the number of raster bands on this dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterdatatype",
    "page": "Docstrings",
    "title": "GDAL.getrasterdatatype",
    "category": "function",
    "text": "GDALGetRasterDataType(GDALRasterBandH hBand) -> GDALDataType\n\nFetch the pixel data type for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterhistogram",
    "page": "Docstrings",
    "title": "GDAL.getrasterhistogram",
    "category": "function",
    "text": "GDALGetRasterHistogram(GDALRasterBandH hBand,\n                       double dfMin,\n                       double dfMax,\n                       int nBuckets,\n                       int * panHistogram,\n                       int bIncludeOutOfRange,\n                       int bApproxOK,\n                       GDALProgressFunc pfnProgress,\n                       void * pProgressData) -> CPLErr\n\nCompute raster histogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterhistogramex",
    "page": "Docstrings",
    "title": "GDAL.getrasterhistogramex",
    "category": "function",
    "text": "GDALGetRasterHistogramEx(GDALRasterBandH hBand,\n                         double dfMin,\n                         double dfMax,\n                         int nBuckets,\n                         GUIntBig * panHistogram,\n                         int bIncludeOutOfRange,\n                         int bApproxOK,\n                         GDALProgressFunc pfnProgress,\n                         void * pProgressData) -> CPLErr\n\nCompute raster histogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastermaximum",
    "page": "Docstrings",
    "title": "GDAL.getrastermaximum",
    "category": "function",
    "text": "GDALGetRasterMaximum(GDALRasterBandH hBand,\n                     int * pbSuccess) -> double\n\nFetch the maximum value for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterminimum",
    "page": "Docstrings",
    "title": "GDAL.getrasterminimum",
    "category": "function",
    "text": "GDALGetRasterMinimum(GDALRasterBandH hBand,\n                     int * pbSuccess) -> double\n\nFetch the minimum value for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasternodatavalue",
    "page": "Docstrings",
    "title": "GDAL.getrasternodatavalue",
    "category": "function",
    "text": "GDALGetRasterNoDataValue(GDALRasterBandH hBand,\n                         int * pbSuccess) -> double\n\nFetch the no data value for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasteroffset",
    "page": "Docstrings",
    "title": "GDAL.getrasteroffset",
    "category": "function",
    "text": "GDALGetRasterOffset(GDALRasterBandH hBand,\n                    int * pbSuccess) -> double\n\nFetch the raster value offset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastersampleoverview",
    "page": "Docstrings",
    "title": "GDAL.getrastersampleoverview",
    "category": "function",
    "text": "GDALGetRasterSampleOverview(GDALRasterBandH hBand,\n                            int nDesiredSamples) -> GDALRasterBandH\n\nFetch best sampling overview.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrastersampleoverviewex",
    "page": "Docstrings",
    "title": "GDAL.getrastersampleoverviewex",
    "category": "function",
    "text": "GDALGetRasterSampleOverviewEx(GDALRasterBandH hBand,\n                              GUIntBig nDesiredSamples) -> GDALRasterBandH\n\nFetch best sampling overview.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterscale",
    "page": "Docstrings",
    "title": "GDAL.getrasterscale",
    "category": "function",
    "text": "GDALGetRasterScale(GDALRasterBandH hBand,\n                   int * pbSuccess) -> double\n\nFetch the raster value scale.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterstatistics",
    "page": "Docstrings",
    "title": "GDAL.getrasterstatistics",
    "category": "function",
    "text": "GDALGetRasterStatistics(GDALRasterBandH hBand,\n                        int bApproxOK,\n                        int bForce,\n                        double * pdfMin,\n                        double * pdfMax,\n                        double * pdfMean,\n                        double * pdfStdDev) -> CPLErr\n\nFetch image statistics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterunittype",
    "page": "Docstrings",
    "title": "GDAL.getrasterunittype",
    "category": "function",
    "text": "GDALGetRasterUnitType(GDALRasterBandH hBand) -> const char *\n\nReturn raster unit type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterxsize",
    "page": "Docstrings",
    "title": "GDAL.getrasterxsize",
    "category": "function",
    "text": "GDALGetRasterXSize(GDALDatasetH hDataset) -> int\n\nFetch raster width in pixels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrasterysize",
    "page": "Docstrings",
    "title": "GDAL.getrasterysize",
    "category": "function",
    "text": "GDALGetRasterYSize(GDALDatasetH hDataset) -> int\n\nFetch raster height in pixels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrawfieldref",
    "page": "Docstrings",
    "title": "GDAL.getrawfieldref",
    "category": "function",
    "text": "OGR_F_GetRawFieldRef(OGRFeatureH hFeat,\n                     int iField) -> OGRField *\n\nFetch an handle to the internal field value given the index.\n\nParameters\n\nhFeat: handle to the feature on which field is found.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe returned handle is to an internal data structure, and should not be freed, or modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrefcount",
    "page": "Docstrings",
    "title": "GDAL.getrefcount",
    "category": "function",
    "text": "OGR_L_GetRefCount(OGRLayerH hLayer) -> int\n\n\n\n\n\nOGR_DS_GetRefCount(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getreferencecount",
    "page": "Docstrings",
    "title": "GDAL.getreferencecount",
    "category": "function",
    "text": "OGR_FD_GetReferenceCount(OGRFeatureDefnH hDefn) -> int\n\nFetch current reference count.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nthe current reference count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getrgbfromstring",
    "page": "Docstrings",
    "title": "GDAL.getrgbfromstring",
    "category": "function",
    "text": "OGR_ST_GetRGBFromString(OGRStyleToolH hST,\n                        const char * pszColor,\n                        int * pnRed,\n                        int * pnGreen,\n                        int * pnBlue,\n                        int * pnAlpha) -> int\n\nReturn the r,g,b,a components of a color encoded in #RRGGBB[AA] format.\n\nParameters\n\nhST: handle to the style tool.\npszColor: the color to parse\npnRed: pointer to an int in which the red value will be returned\npnGreen: pointer to an int in which the green value will be returned\npnBlue: pointer to an int in which the blue value will be returned\npnAlpha: pointer to an int in which the (optional) alpha value will be returned\n\nReturns\n\nTRUE if the color could be successfully parsed, or FALSE in case of errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getsemimajor",
    "page": "Docstrings",
    "title": "GDAL.getsemimajor",
    "category": "function",
    "text": "OSRGetSemiMajor(OGRSpatialReferenceH hSRS,\n                OGRErr * pnErr) -> double\n\nGet spheroid semi major axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getsemiminor",
    "page": "Docstrings",
    "title": "GDAL.getsemiminor",
    "category": "function",
    "text": "OSRGetSemiMinor(OGRSpatialReferenceH hSRS,\n                OGRErr * pnErr) -> double\n\nGet spheroid semi minor axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getspatialfilter",
    "page": "Docstrings",
    "title": "GDAL.getspatialfilter",
    "category": "function",
    "text": "OGR_L_GetSpatialFilter(OGRLayerH) -> OGRGeometryH\n\nThis function returns the current spatial filter for this layer.\n\nParameters\n\nhLayer: handle to the layer to get the spatial filter from.\n\nReturns\n\nan handle to the spatial filter geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getspatialref",
    "page": "Docstrings",
    "title": "GDAL.getspatialref",
    "category": "function",
    "text": "OGR_GFld_GetSpatialRef(OGRGeomFieldDefnH hDefn) -> OGRSpatialReferenceH\n\nFetch spatial reference system of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition\n\nReturns\n\nfield spatial reference system.\n\n\n\n\n\nOGR_L_GetSpatialRef(OGRLayerH) -> OGRSpatialReferenceH\n\nFetch the spatial reference system for this layer.\n\nParameters\n\nhLayer: handle to the layer to get the spatial reference from.\n\nReturns\n\nspatial reference, or NULL if there isn\'t one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getspatialreference",
    "page": "Docstrings",
    "title": "GDAL.getspatialreference",
    "category": "function",
    "text": "OGR_G_GetSpatialReference(OGRGeometryH hGeom) -> OGRSpatialReferenceH\n\nReturns spatial reference system for geometry.\n\nParameters\n\nhGeom: handle on the geometry to get spatial reference from.\n\nReturns\n\na reference to the spatial reference geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getstylestring",
    "page": "Docstrings",
    "title": "GDAL.getstylestring",
    "category": "function",
    "text": "OGR_F_GetStyleString(OGRFeatureH hFeat) -> const char *\n\nFetch style string for this feature.\n\nParameters\n\nhFeat: handle to the feature to get the style from.\n\nReturns\n\na reference to a representation in string format, or NULL if there isn\'t one.\n\n\n\n\n\nOGR_ST_GetStyleString(OGRStyleToolH hST) -> const char *\n\nGet the style string for this Style Tool.\n\nParameters\n\nhST: handle to the style tool.\n\nReturns\n\nthe style string for this style tool or \"\" if the hST is invalid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getstyletable",
    "page": "Docstrings",
    "title": "GDAL.getstyletable",
    "category": "function",
    "text": "OGR_F_GetStyleTable(OGRFeatureH hFeat) -> OGRStyleTableH\n\nReturn style table.\n\n\n\n\n\nOGR_L_GetStyleTable(OGRLayerH hLayer) -> OGRStyleTableH\n\nGet style table.\n\n\n\n\n\nOGR_DS_GetStyleTable(OGRDataSourceH hDS) -> OGRStyleTableH\n\nGet style table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getsubtype",
    "page": "Docstrings",
    "title": "GDAL.getsubtype",
    "category": "function",
    "text": "OGR_Fld_GetSubType(OGRFieldDefnH hDefn) -> OGRFieldSubType\n\nFetch subtype of this field.\n\nParameters\n\nhDefn: handle to the field definition to get subtype from.\n\nReturns\n\nfield subtype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getsummaryrefcount",
    "page": "Docstrings",
    "title": "GDAL.getsummaryrefcount",
    "category": "function",
    "text": "OGR_DS_GetSummaryRefCount(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gettargetlinearunits",
    "page": "Docstrings",
    "title": "GDAL.gettargetlinearunits",
    "category": "function",
    "text": "OSRGetTargetLinearUnits(OGRSpatialReferenceH hSRS,\n                        const char * pszTargetKey,\n                        char ** ppszName) -> double\n\nFetch linear projection units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gettowgs84",
    "page": "Docstrings",
    "title": "GDAL.gettowgs84",
    "category": "function",
    "text": "OSRGetTOWGS84(OGRSpatialReferenceH hSRS,\n              double * padfCoeff,\n              int nCoeffCount) -> OGRErr\n\nFetch TOWGS84 parameters, if available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gettype",
    "page": "Docstrings",
    "title": "GDAL.gettype",
    "category": "function",
    "text": "OGR_Fld_GetType(OGRFieldDefnH hDefn) -> OGRFieldType\n\nFetch type of this field.\n\nParameters\n\nhDefn: handle to the field definition to get type from.\n\nReturns\n\nfield type.\n\n\n\n\n\nOGR_GFld_GetType(OGRGeomFieldDefnH hDefn) -> OGRwkbGeometryType\n\nFetch geometry type of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition to get type from.\n\nReturns\n\nfield geometry type.\n\n\n\n\n\nOGR_ST_GetType(OGRStyleToolH hST) -> OGRSTClassId\n\nDetermine type of Style Tool.\n\nParameters\n\nhST: handle to the style tool.\n\nReturns\n\nthe style tool type, one of OGRSTCPen (1), OGRSTCBrush (2), OGRSTCSymbol (3) or OGRSTCLabel (4). Returns OGRSTCNone (0) if the OGRStyleToolH is invalid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getunit",
    "page": "Docstrings",
    "title": "GDAL.getunit",
    "category": "function",
    "text": "OGR_ST_GetUnit(OGRStyleToolH hST) -> OGRSTUnitId\n\nGet Style Tool units.\n\nParameters\n\nhST: handle to the style tool.\n\nReturns\n\nthe style tool units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getutmzone",
    "page": "Docstrings",
    "title": "GDAL.getutmzone",
    "category": "function",
    "text": "OSRGetUTMZone(OGRSpatialReferenceH hSRS,\n              int * pbNorth) -> int\n\nGet utm zone information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getvirtualmemauto",
    "page": "Docstrings",
    "title": "GDAL.getvirtualmemauto",
    "category": "function",
    "text": "GDALGetVirtualMemAuto(GDALRasterBandH hBand,\n                      GDALRWFlag eRWFlag,\n                      int * pnPixelSpace,\n                      GIntBig * pnLineSpace,\n                      char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL raster band object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getwidth",
    "page": "Docstrings",
    "title": "GDAL.getwidth",
    "category": "function",
    "text": "OGR_Fld_GetWidth(OGRFieldDefnH hDefn) -> int\n\nGet the formatting width for this field.\n\nParameters\n\nhDefn: handle to the field definition to get width from.\n\nReturns\n\nthe width, zero means no specified width.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getx",
    "page": "Docstrings",
    "title": "GDAL.getx",
    "category": "function",
    "text": "OGR_G_GetX(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the x coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the x coordinate.\ni: point to get the x coordinate.\n\nReturns\n\nthe X coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gety",
    "page": "Docstrings",
    "title": "GDAL.gety",
    "category": "function",
    "text": "OGR_G_GetY(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the x coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the y coordinate.\ni: point to get the Y coordinate.\n\nReturns\n\nthe Y coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.getz",
    "page": "Docstrings",
    "title": "GDAL.getz",
    "category": "function",
    "text": "OGR_G_GetZ(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the z coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the Z coordinate.\ni: point to get the Z coordinate.\n\nReturns\n\nthe Z coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gfld_create",
    "page": "Docstrings",
    "title": "GDAL.gfld_create",
    "category": "function",
    "text": "OGR_GFld_Create(const char * pszName,\n                OGRwkbGeometryType eType) -> OGRGeomFieldDefnH\n\nCreate a new field geometry definition.\n\nParameters\n\npszName: the name of the new field definition.\neType: the type of the new field definition.\n\nReturns\n\nhandle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.grid",
    "page": "Docstrings",
    "title": "GDAL.grid",
    "category": "function",
    "text": "GDALGrid(const char * pszDest,\n         GDALDatasetH hSrcDataset,\n         const GDALGridOptions * psOptionsIn,\n         int * pbUsageError) -> GDALDatasetH\n\nCreate raster from the scattered data.\n\nParameters\n\npszDest: the destination dataset path.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALGridOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridcontextcreate",
    "page": "Docstrings",
    "title": "GDAL.gridcontextcreate",
    "category": "function",
    "text": "GDALGridContextCreate(GDALGridAlgorithm eAlgorithm,\n                      const void * poOptions,\n                      GUInt32 nPoints,\n                      const double * padfX,\n                      const double * padfY,\n                      const double * padfZ,\n                      int bCallerWillKeepPointArraysAlive) -> GDALGridContext *\n\nCreates a context to do regular gridding from the scattered data.\n\nParameters\n\neAlgorithm: Gridding method.\npoOptions: Options to control chosen gridding method.\nnPoints: Number of elements in input arrays.\npadfX: Input array of X coordinates.\npadfY: Input array of Y coordinates.\npadfZ: Input array of Z values.\nbCallerWillKeepPointArraysAlive: Whether the provided padfX, padfY, padfZ arrays will still be \"alive\" during the calls to GDALGridContextProcess(). Setting to TRUE prevent them from being duplicated in the context. If unsure, set to FALSE.\n\nReturns\n\nthe context (to be freed with GDALGridContextFree()) or NULL in case or error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridcontextfree",
    "page": "Docstrings",
    "title": "GDAL.gridcontextfree",
    "category": "function",
    "text": "GDALGridContextFree(GDALGridContext * psContext) -> void\n\nFree a context used created by GDALGridContextCreate()\n\nParameters\n\npsContext: the context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridcontextprocess",
    "page": "Docstrings",
    "title": "GDAL.gridcontextprocess",
    "category": "function",
    "text": "GDALGridContextProcess(GDALGridContext * psContext,\n                       double dfXMin,\n                       double dfXMax,\n                       double dfYMin,\n                       double dfYMax,\n                       GUInt32 nXSize,\n                       GUInt32 nYSize,\n                       GDALDataType eType,\n                       void * pData,\n                       GDALProgressFunc pfnProgress,\n                       void * pProgressArg) -> CPLErr\n\nDo the gridding of a window of a raster.\n\nParameters\n\npsContext: Gridding context.\ndfXMin: Lowest X border of output grid.\ndfXMax: Highest X border of output grid.\ndfYMin: Lowest Y border of output grid.\ndfYMax: Highest Y border of output grid.\nnXSize: Number of columns in output grid.\nnYSize: Number of rows in output grid.\neType: Data type of output array.\npData: Pointer to array where the computed grid will be stored.\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nCENone on success or CEFailure if something goes wrong.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridcreate",
    "page": "Docstrings",
    "title": "GDAL.gridcreate",
    "category": "function",
    "text": "GDALGridCreate(GDALGridAlgorithm eAlgorithm,\n               const void * poOptions,\n               GUInt32 nPoints,\n               const double * padfX,\n               const double * padfY,\n               const double * padfZ,\n               double dfXMin,\n               double dfXMax,\n               double dfYMin,\n               double dfYMax,\n               GUInt32 nXSize,\n               GUInt32 nYSize,\n               GDALDataType eType,\n               void * pData,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> CPLErr\n\nCreate regular grid from the scattered data.\n\nParameters\n\neAlgorithm: Gridding method.\npoOptions: Options to control chosen gridding method.\nnPoints: Number of elements in input arrays.\npadfX: Input array of X coordinates.\npadfY: Input array of Y coordinates.\npadfZ: Input array of Z values.\ndfXMin: Lowest X border of output grid.\ndfXMax: Highest X border of output grid.\ndfYMin: Lowest Y border of output grid.\ndfYMax: Highest Y border of output grid.\nnXSize: Number of columns in output grid.\nnYSize: Number of rows in output grid.\neType: Data type of output array.\npData: Pointer to array where the computed grid will be stored.\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nCENone on success or CEFailure if something goes wrong.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.gridoptionsfree",
    "category": "function",
    "text": "GDALGridOptionsFree(GDALGridOptions * psOptions) -> void\n\nFrees the GDALGridOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALGrid().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.gridoptionsnew",
    "category": "function",
    "text": "GDALGridOptionsNew(char ** papszArgv,\n                   GDALGridOptionsForBinary * psOptionsForBinary) -> GDALGridOptions *\n\nAllocates a GDALGridOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdal_translate utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALGridOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALGridOptions struct. Must be freed with GDALGridOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.gridoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.gridoptionssetprogress",
    "category": "function",
    "text": "GDALGridOptionsSetProgress(GDALGridOptions * psOptions,\n                           GDALProgressFunc pfnProgress,\n                           void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALGrid().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.hasarbitraryoverviews",
    "page": "Docstrings",
    "title": "GDAL.hasarbitraryoverviews",
    "category": "function",
    "text": "GDALHasArbitraryOverviews(GDALRasterBandH hBand) -> int\n\nCheck for arbitrary overviews.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.hascurvegeometry",
    "page": "Docstrings",
    "title": "GDAL.hascurvegeometry",
    "category": "function",
    "text": "OGR_G_HasCurveGeometry(OGRGeometryH hGeom,\n                       int bLookForNonLinear) -> int\n\nReturns if this geometry is or has curve geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\nbLookForNonLinear: set it to TRUE to check if the geometry is or contains a CIRCULARSTRING.\n\nReturns\n\nTRUE if this geometry is or has curve geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.hastriangulation",
    "page": "Docstrings",
    "title": "GDAL.hastriangulation",
    "category": "function",
    "text": "GDALHasTriangulation() -> int\n\nReturns if GDAL is built with Delaunay triangulation support.\n\nReturns\n\nTRUE if GDAL is built with Delaunay triangulation support.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.identifydriver",
    "page": "Docstrings",
    "title": "GDAL.identifydriver",
    "category": "function",
    "text": "GDALIdentifyDriver(const char * pszFilename,\n                   char ** papszFileList) -> GDALDriverH\n\nIdentify the driver that can open a raster file.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset.\npapszFileList: an array of strings, whose last element is the NULL pointer. These strings are filenames that are auxiliary to the main filename. The passed value may be NULL.\n\nReturns\n\nA GDALDriverH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDriver *.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.identifydriverex",
    "page": "Docstrings",
    "title": "GDAL.identifydriverex",
    "category": "function",
    "text": "GDALIdentifyDriverEx(const char * pszFilename,\n                     unsigned int nIdentifyFlags,\n                     const char *const * papszAllowedDrivers,\n                     const char *const * papszFileList) -> GDALDriverH\n\nIdentify the driver that can open a raster file.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset.\nnIdentifyFlags: a combination of GDALOFRASTER for raster drivers or GDALOFVECTOR for vector drivers. If none of the value is specified, both kinds are implied.\npapszAllowedDrivers: NULL to consider all candidate drivers, or a NULL terminated list of strings with the driver short names that must be considered.\npapszFileList: an array of strings, whose last element is the NULL pointer. These strings are filenames that are auxiliary to the main filename. The passed value may be NULL.\n\nReturns\n\nA GDALDriverH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDriver *.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.identity",
    "page": "Docstrings",
    "title": "GDAL.identity",
    "category": "function",
    "text": "OGR_L_Identity(OGRLayerH pLayerInput,\n               OGRLayerH pLayerMethod,\n               OGRLayerH pLayerResult,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> OGRErr\n\nIdentify the features of this layer with the ones from the identity layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromdict",
    "page": "Docstrings",
    "title": "GDAL.importfromdict",
    "category": "function",
    "text": "OSRImportFromDict(OGRSpatialReferenceH,\n                  const char *,\n                  const char *) -> OGRErr\n\nRead SRS from WKT dictionary.\n\nParameters\n\nhSRS: spatial reference system handle.\npszDictFile: the name of the dictionary file to load.\npszCode: the code to lookup in the dictionary.\n\nReturns\n\nOGRERRNONE on success, or OGRERRSRSUNSUPPORTED if the code isn\'t found, and OGRERRSRS_FAILURE if something more dramatic goes wrong.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromepsg",
    "page": "Docstrings",
    "title": "GDAL.importfromepsg",
    "category": "function",
    "text": "OSRImportFromEPSG(OGRSpatialReferenceH hSRS,\n                  int nCode) -> OGRErr\n\nInitialize SRS based on EPSG GCS or PCS code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromepsga",
    "page": "Docstrings",
    "title": "GDAL.importfromepsga",
    "category": "function",
    "text": "OSRImportFromEPSGA(OGRSpatialReferenceH hSRS,\n                   int nCode) -> OGRErr\n\nInitialize SRS based on EPSG GCS or PCS code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromerm",
    "page": "Docstrings",
    "title": "GDAL.importfromerm",
    "category": "function",
    "text": "OSRImportFromERM(OGRSpatialReferenceH,\n                 const char *,\n                 const char *,\n                 const char *) -> OGRErr\n\nCreate OGR WKT from ERMapper projection definitions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromesri",
    "page": "Docstrings",
    "title": "GDAL.importfromesri",
    "category": "function",
    "text": "OSRImportFromESRI(OGRSpatialReferenceH,\n                  char **) -> OGRErr\n\nImport coordinate system from ESRI .prj format(s).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfrommicoordsys",
    "page": "Docstrings",
    "title": "GDAL.importfrommicoordsys",
    "category": "function",
    "text": "OSRImportFromMICoordSys(OGRSpatialReferenceH hSRS,\n                        const char * pszCoordSys) -> OGRErr\n\nImport Mapinfo style CoordSys definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromozi",
    "page": "Docstrings",
    "title": "GDAL.importfromozi",
    "category": "function",
    "text": "OSRImportFromOzi(OGRSpatialReferenceH,\n                 const char *const *) -> OGRErr\n\nImport coordinate system from OziExplorer projection definition.\n\nParameters\n\nhSRS: spatial reference object.\npapszLines: Map file lines. This is an array of strings containing the whole OziExplorer .MAP file. The array is terminated by a NULL pointer.\n\nReturns\n\nOGRERR_NONE on success or an error code in case of failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfrompanorama",
    "page": "Docstrings",
    "title": "GDAL.importfrompanorama",
    "category": "function",
    "text": "OSRImportFromPanorama(OGRSpatialReferenceH,\n                      long,\n                      long,\n                      long,\n                      double *) -> OGRErr\n\nImport coordinate system from \"Panorama\" GIS projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfrompci",
    "page": "Docstrings",
    "title": "GDAL.importfrompci",
    "category": "function",
    "text": "OSRImportFromPCI(OGRSpatialReferenceH hSRS,\n                 const char *,\n                 const char *,\n                 double *) -> OGRErr\n\nImport coordinate system from PCI projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromproj4",
    "page": "Docstrings",
    "title": "GDAL.importfromproj4",
    "category": "function",
    "text": "OSRImportFromProj4(OGRSpatialReferenceH,\n                   const char *) -> OGRErr\n\nImport PROJ.4 coordinate string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromurl",
    "page": "Docstrings",
    "title": "GDAL.importfromurl",
    "category": "function",
    "text": "OSRImportFromUrl(OGRSpatialReferenceH hSRS,\n                 const char * pszUrl) -> OGRErr\n\nSet spatial reference from a URL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromusgs",
    "page": "Docstrings",
    "title": "GDAL.importfromusgs",
    "category": "function",
    "text": "OSRImportFromUSGS(OGRSpatialReferenceH,\n                  long,\n                  long,\n                  double *,\n                  long) -> OGRErr\n\nImport coordinate system from USGS projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromwkb",
    "page": "Docstrings",
    "title": "GDAL.importfromwkb",
    "category": "function",
    "text": "OGR_G_ImportFromWkb(OGRGeometryH hGeom,\n                    unsigned char * pabyData,\n                    int nSize) -> OGRErr\n\nAssign geometry from well known binary data.\n\nParameters\n\nhGeom: handle on the geometry to assign the well know binary data to.\npabyData: the binary input data.\nnSize: the size of pabyData in bytes, or zero if not known.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromwkt",
    "page": "Docstrings",
    "title": "GDAL.importfromwkt",
    "category": "function",
    "text": "OGR_G_ImportFromWkt(OGRGeometryH hGeom,\n                    char ** ppszSrcText) -> OGRErr\n\nAssign geometry from well known text data.\n\nParameters\n\nhGeom: handle on the geometry to assign well know text data to.\nppszSrcText: pointer to a pointer to the source text. The pointer is updated to pointer after the consumed text.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\nOSRImportFromWkt(OGRSpatialReferenceH hSRS,\n                 char ** ppszInput) -> OGRErr\n\nImport from WKT string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.importfromxml",
    "page": "Docstrings",
    "title": "GDAL.importfromxml",
    "category": "function",
    "text": "OSRImportFromXML(OGRSpatialReferenceH,\n                 const char *) -> OGRErr\n\nImport coordinate system from XML format (GML only currently).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.info",
    "page": "Docstrings",
    "title": "GDAL.info",
    "category": "function",
    "text": "GDALInfo(GDALDatasetH hDataset,\n         const GDALInfoOptions * psOptions) -> char *\n\nLists various information about a GDAL supported raster dataset.\n\nParameters\n\nhDataset: the dataset handle.\npsOptions: the options structure returned by GDALInfoOptionsNew() or NULL.\n\nReturns\n\nstring corresponding to the information about the raster dataset (must be freed with CPLFree()), or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.infooptionsfree",
    "page": "Docstrings",
    "title": "GDAL.infooptionsfree",
    "category": "function",
    "text": "GDALInfoOptionsFree(GDALInfoOptions * psOptions) -> void\n\nFrees the GDALInfoOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALInfo().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.infooptionsnew",
    "page": "Docstrings",
    "title": "GDAL.infooptionsnew",
    "category": "function",
    "text": "GDALInfoOptionsNew(char ** papszArgv,\n                   GDALInfoOptionsForBinary * psOptionsForBinary) -> GDALInfoOptions *\n\nAllocates a GDALInfoOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdalinfo utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdalinfo_bin.cpp use case) must be allocated with GDALInfoOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options, subdataset number...\n\nReturns\n\npointer to the allocated GDALInfoOptions struct. Must be freed with GDALInfoOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.initfromfeature",
    "page": "Docstrings",
    "title": "GDAL.initfromfeature",
    "category": "function",
    "text": "OGR_SM_InitFromFeature(OGRStyleMgrH hSM,\n                       OGRFeatureH hFeat) -> const char *\n\nInitialize style manager from the style string of a feature.\n\nParameters\n\nhSM: handle to the style manager.\nhFeat: handle to the new feature from which to read the style.\n\nReturns\n\na reference to the style string read from the feature, or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.initgcps",
    "page": "Docstrings",
    "title": "GDAL.initgcps",
    "category": "function",
    "text": "GDALInitGCPs(int,\n             GDAL_GCP *) -> void\n\nInitialize an array of GCPs.\n\nParameters\n\nnCount: number of GCPs in psGCP\npsGCP: array of GCPs of size nCount.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.initstylestring",
    "page": "Docstrings",
    "title": "GDAL.initstylestring",
    "category": "function",
    "text": "OGR_SM_InitStyleString(OGRStyleMgrH hSM,\n                       const char * pszStyleString) -> int\n\nInitialize style manager from the style string.\n\nParameters\n\nhSM: handle to the style manager.\npszStyleString: the style string to use (can be NULL).\n\nReturns\n\nTRUE on success, FALSE on errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.intersection",
    "page": "Docstrings",
    "title": "GDAL.intersection",
    "category": "function",
    "text": "OGR_G_Intersection(OGRGeometryH hThis,\n                   OGRGeometryH hOther) -> OGRGeometryH\n\nCompute intersection.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the intersection or NULL if there is no intersection or an error occurs.\n\n\n\n\n\nOGR_L_Intersection(OGRLayerH pLayerInput,\n                   OGRLayerH pLayerMethod,\n                   OGRLayerH pLayerResult,\n                   char ** papszOptions,\n                   GDALProgressFunc pfnProgress,\n                   void * pProgressArg) -> OGRErr\n\nIntersection of two layers.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.intersects",
    "page": "Docstrings",
    "title": "GDAL.intersects",
    "category": "function",
    "text": "OGR_G_Intersects(OGRGeometryH hGeom,\n                 OGRGeometryH hOtherGeom) -> int\n\nDo these features intersect?\n\nParameters\n\nhGeom: handle on the first geometry.\nhOtherGeom: handle on the other geometry to test against.\n\nReturns\n\nTRUE if the geometries intersect, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.invgeotransform",
    "page": "Docstrings",
    "title": "GDAL.invgeotransform",
    "category": "function",
    "text": "GDALInvGeoTransform(double * gt_in,\n                    double * gt_out) -> int\n\nInvert Geotransform.\n\nParameters\n\ngt_in: Input geotransform (six doubles - unaltered).\ngt_out: Output geotransform (six doubles - updated).\n\nReturns\n\nTRUE on success or FALSE if the equation is uninvertable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.is3d",
    "page": "Docstrings",
    "title": "GDAL.is3d",
    "category": "function",
    "text": "OGR_G_Is3D(OGRGeometryH hGeom) -> int\n\nSee whether this geometry has Z coordinates.\n\nParameters\n\nhGeom: handle on the geometry to check whether it has Z coordinates.\n\nReturns\n\nTRUE if the geometry has Z coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.iscompound",
    "page": "Docstrings",
    "title": "GDAL.iscompound",
    "category": "function",
    "text": "OSRIsCompound(OGRSpatialReferenceH hSRS) -> int\n\nCheck if the coordinate system is compound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isdefaultdriverspecific",
    "page": "Docstrings",
    "title": "GDAL.isdefaultdriverspecific",
    "category": "function",
    "text": "OGR_Fld_IsDefaultDriverSpecific(OGRFieldDefnH hDefn) -> int\n\nReturns whether the default value is driver specific.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nTRUE if the default value is driver specific.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isfieldnull",
    "page": "Docstrings",
    "title": "GDAL.isfieldnull",
    "category": "function",
    "text": "OGR_F_IsFieldNull(OGRFeatureH hFeat,\n                  int iField) -> int\n\nTest if a field is null.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to test.\n\nReturns\n\nTRUE if the field is null, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isfieldset",
    "page": "Docstrings",
    "title": "GDAL.isfieldset",
    "category": "function",
    "text": "OGR_F_IsFieldSet(OGRFeatureH hFeat,\n                 int iField) -> int\n\nTest if a field has ever been assigned a value or not.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to test.\n\nReturns\n\nTRUE if the field has been set, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isfieldsetandnotnull",
    "page": "Docstrings",
    "title": "GDAL.isfieldsetandnotnull",
    "category": "function",
    "text": "OGR_F_IsFieldSetAndNotNull(OGRFeatureH hFeat,\n                           int iField) -> int\n\nTest if a field is set and not null.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to test.\n\nReturns\n\nTRUE if the field is set and not null, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isgeocentric",
    "page": "Docstrings",
    "title": "GDAL.isgeocentric",
    "category": "function",
    "text": "OSRIsGeocentric(OGRSpatialReferenceH hSRS) -> int\n\nCheck if geocentric coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isgeographic",
    "page": "Docstrings",
    "title": "GDAL.isgeographic",
    "category": "function",
    "text": "OSRIsGeographic(OGRSpatialReferenceH hSRS) -> int\n\nCheck if geographic coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isgeometryignored",
    "page": "Docstrings",
    "title": "GDAL.isgeometryignored",
    "category": "function",
    "text": "OGR_FD_IsGeometryIgnored(OGRFeatureDefnH hDefn) -> int\n\nDetermine whether the geometry can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isignored",
    "page": "Docstrings",
    "title": "GDAL.isignored",
    "category": "function",
    "text": "OGR_Fld_IsIgnored(OGRFieldDefnH hDefn) -> int\n\nReturn whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nignore state\n\n\n\n\n\nOGR_GFld_IsIgnored(OGRGeomFieldDefnH hDefn) -> int\n\nReturn whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the geometry field definition\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.islocal",
    "page": "Docstrings",
    "title": "GDAL.islocal",
    "category": "function",
    "text": "OSRIsLocal(OGRSpatialReferenceH hSRS) -> int\n\nCheck if local coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ismeasured",
    "page": "Docstrings",
    "title": "GDAL.ismeasured",
    "category": "function",
    "text": "OGR_G_IsMeasured(OGRGeometryH hGeom) -> int\n\nSee whether this geometry is measured.\n\nParameters\n\nhGeom: handle on the geometry to check whether it is measured.\n\nReturns\n\nTRUE if the geometry has M coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isnullable",
    "page": "Docstrings",
    "title": "GDAL.isnullable",
    "category": "function",
    "text": "OGR_Fld_IsNullable(OGRFieldDefnH hDefn) -> int\n\nReturn whether this field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nTRUE if the field is authorized to be null.\n\n\n\n\n\nOGR_GFld_IsNullable(OGRGeomFieldDefnH hDefn) -> int\n\nReturn whether this geometry field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nTRUE if the field is authorized to be null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isprojected",
    "page": "Docstrings",
    "title": "GDAL.isprojected",
    "category": "function",
    "text": "OSRIsProjected(OGRSpatialReferenceH hSRS) -> int\n\nCheck if projected coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isring",
    "page": "Docstrings",
    "title": "GDAL.isring",
    "category": "function",
    "text": "OGR_G_IsRing(OGRGeometryH hGeom) -> int\n\nTest if the geometry is a ring.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if the geometry has no points, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.issame",
    "page": "Docstrings",
    "title": "GDAL.issame",
    "category": "function",
    "text": "OGR_FD_IsSame(OGRFeatureDefnH hFDefn,\n              OGRFeatureDefnH hOtherFDefn) -> int\n\nTest if the feature definition is identical to the other one.\n\nParameters\n\nhFDefn: handle to the feature definition on witch OGRFeature are based on.\nhOtherFDefn: handle to the other feature definition to compare to.\n\nReturns\n\nTRUE if the feature definition is identical to the other one.\n\n\n\n\n\nOSRIsSame(OGRSpatialReferenceH hSRS1,\n          OGRSpatialReferenceH hSRS2) -> int\n\nDo these two spatial references describe the same system ?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.issamegeogcs",
    "page": "Docstrings",
    "title": "GDAL.issamegeogcs",
    "category": "function",
    "text": "OSRIsSameGeogCS(OGRSpatialReferenceH hSRS1,\n                OGRSpatialReferenceH hSRS2) -> int\n\nDo the GeogCS\'es match?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.issamevertcs",
    "page": "Docstrings",
    "title": "GDAL.issamevertcs",
    "category": "function",
    "text": "OSRIsSameVertCS(OGRSpatialReferenceH hSRS1,\n                OGRSpatialReferenceH hSRS2) -> int\n\nDo the VertCS\'es match?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.issimple",
    "page": "Docstrings",
    "title": "GDAL.issimple",
    "category": "function",
    "text": "OGR_G_IsSimple(OGRGeometryH hGeom) -> int\n\nReturns TRUE if the geometry is simple.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if object is simple, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isstyleignored",
    "page": "Docstrings",
    "title": "GDAL.isstyleignored",
    "category": "function",
    "text": "OGR_FD_IsStyleIgnored(OGRFeatureDefnH hDefn) -> int\n\nDetermine whether the style can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on which OGRFeature are based on.\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isvalid",
    "page": "Docstrings",
    "title": "GDAL.isvalid",
    "category": "function",
    "text": "OGR_G_IsValid(OGRGeometryH hGeom) -> int\n\nTest if the geometry is valid.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if the geometry has no points, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.isvertical",
    "page": "Docstrings",
    "title": "GDAL.isvertical",
    "category": "function",
    "text": "OSRIsVertical(OGRSpatialReferenceH hSRS) -> int\n\nCheck if vertical coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.loadozimapfile",
    "page": "Docstrings",
    "title": "GDAL.loadozimapfile",
    "category": "function",
    "text": "GDALLoadOziMapFile(const char *,\n                   double *,\n                   char **,\n                   int *,\n                   GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for OZI .map.\n\nParameters\n\npszFilename: filename of .tab file\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.loadstyletable",
    "page": "Docstrings",
    "title": "GDAL.loadstyletable",
    "category": "function",
    "text": "OGR_STBL_LoadStyleTable(OGRStyleTableH hStyleTable,\n                        const char * pszFilename) -> int\n\nLoad a style table from a file.\n\nParameters\n\nhStyleTable: handle to the style table.\npszFilename: the name of the file to load from.\n\nReturns\n\nTRUE on success, FALSE on error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.loadtabfile",
    "page": "Docstrings",
    "title": "GDAL.loadtabfile",
    "category": "function",
    "text": "GDALLoadTabFile(const char *,\n                double *,\n                char **,\n                int *,\n                GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for MapInfo .tab files.\n\nParameters\n\npszFilename: filename of .tab\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.loadworldfile",
    "page": "Docstrings",
    "title": "GDAL.loadworldfile",
    "category": "function",
    "text": "GDALLoadWorldFile(const char *,\n                  double *) -> int\n\nRead ESRI world file.\n\nParameters\n\npszFilename: the world file name.\npadfGeoTransform: the six double array into which the geotransformation should be placed.\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.loggingerrorhandler",
    "page": "Docstrings",
    "title": "GDAL.loggingerrorhandler",
    "category": "function",
    "text": "CPLLoggingErrorHandler(CPLErr eErrClass,\n                       CPLErrorNum nError,\n                       const char * pszErrorMsg) -> void\n\nError handler that logs into the file defined by the CPL_LOG configuration option, or stderr otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.morphfromesri",
    "page": "Docstrings",
    "title": "GDAL.morphfromesri",
    "category": "function",
    "text": "OSRMorphFromESRI(OGRSpatialReferenceH) -> OGRErr\n\nConvert in place from ESRI WKT format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.morphtoesri",
    "page": "Docstrings",
    "title": "GDAL.morphtoesri",
    "category": "function",
    "text": "OSRMorphToESRI(OGRSpatialReferenceH) -> OGRErr\n\nConvert in place to ESRI WKT format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.nearblack",
    "page": "Docstrings",
    "title": "GDAL.nearblack",
    "category": "function",
    "text": "GDALNearblack(const char * pszDest,\n              GDALDatasetH hDstDS,\n              GDALDatasetH hSrcDS,\n              const GDALNearblackOptions * psOptions,\n              int * pbUsageError) -> GDALDatasetH\n\nConvert nearly black/white borders to exact value.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL. Might be equal to hSrcDataset.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALNearblackOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS is not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.nearblackoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.nearblackoptionsfree",
    "category": "function",
    "text": "GDALNearblackOptionsFree(GDALNearblackOptions * psOptions) -> void\n\nFrees the GDALNearblackOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALNearblack().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.nearblackoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.nearblackoptionsnew",
    "category": "function",
    "text": "GDALNearblackOptionsNew(char ** papszArgv,\n                        GDALNearblackOptionsForBinary * psOptionsForBinary) -> GDALNearblackOptions *\n\nAllocates a GDALNearblackOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the nearblack utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALNearblackOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALNearblackOptions struct. Must be freed with GDALNearblackOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.nearblackoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.nearblackoptionssetprogress",
    "category": "function",
    "text": "GDALNearblackOptionsSetProgress(GDALNearblackOptions * psOptions,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALNearblack().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.newspatialreference",
    "page": "Docstrings",
    "title": "GDAL.newspatialreference",
    "category": "function",
    "text": "OSRNewSpatialReference(const char * pszWKT) -> OGRSpatialReferenceH\n\nConstructor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.octcleanupprojmutex",
    "page": "Docstrings",
    "title": "GDAL.octcleanupprojmutex",
    "category": "function",
    "text": "OCTCleanupProjMutex() -> void\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.octdestroycoordinatetransformation",
    "page": "Docstrings",
    "title": "GDAL.octdestroycoordinatetransformation",
    "category": "function",
    "text": "OCTDestroyCoordinateTransformation(OGRCoordinateTransformationH hCT) -> void\n\nOGRCoordinateTransformation destructor.\n\nParameters\n\nhCT: the object to delete\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.octnewcoordinatetransformation",
    "page": "Docstrings",
    "title": "GDAL.octnewcoordinatetransformation",
    "category": "function",
    "text": "OCTNewCoordinateTransformation(OGRSpatialReferenceH hSourceSRS,\n                               OGRSpatialReferenceH hTargetSRS) -> OGRCoordinateTransformationH\n\nCreate transformation object.\n\nParameters\n\nhSourceSRS: source spatial reference system.\nhTargetSRS: target spatial reference system.\n\nReturns\n\nNULL on failure or a ready to use transformation object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.octproj4normalize",
    "page": "Docstrings",
    "title": "GDAL.octproj4normalize",
    "category": "function",
    "text": "OCTProj4Normalize(const char * pszProj4Src) -> char *\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.octtransform",
    "page": "Docstrings",
    "title": "GDAL.octtransform",
    "category": "function",
    "text": "OCTTransform(OGRCoordinateTransformationH hTransform,\n             int nCount,\n             double * x,\n             double * y,\n             double * z) -> int\n\nTransform an array of points.\n\nParameters\n\nhTransform: Transformation object\nnCount: Number of points\nx: Array of nCount x values.\ny: Array of nCount y values.\nz: Array of nCount z values.\n\nReturns\n\nTRUE or FALSE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.octtransformex",
    "page": "Docstrings",
    "title": "GDAL.octtransformex",
    "category": "function",
    "text": "OCTTransformEx(OGRCoordinateTransformationH hTransform,\n               int nCount,\n               double * x,\n               double * y,\n               double * z,\n               int * pabSuccess) -> int\n\nTransform an array of points.\n\nParameters\n\nhTransform: Transformation object\nnCount: Number of points\nx: Array of nCount x values.\ny: Array of nCount y values.\nz: Array of nCount z values.\npabSuccess: Output array of nCount value that will be set to TRUE/FALSE\n\nReturns\n\nTRUE or FALSE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ogrgetdriver",
    "page": "Docstrings",
    "title": "GDAL.ogrgetdriver",
    "category": "function",
    "text": "OGRGetDriver(int) -> OGRSFDriverH\n\nFetch the indicated driver.\n\nParameters\n\niDriver: the driver index, from 0 to GetDriverCount()-1.\n\nReturns\n\nhandle to the driver, or NULL if iDriver is out of range.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ogrgetdriverbyname",
    "page": "Docstrings",
    "title": "GDAL.ogrgetdriverbyname",
    "category": "function",
    "text": "OGRGetDriverByName(const char *) -> OGRSFDriverH\n\nFetch the indicated driver.\n\nParameters\n\npszName: the driver name\n\nReturns\n\nthe driver, or NULL if no driver with that name is found\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ogrgetdrivercount",
    "page": "Docstrings",
    "title": "GDAL.ogrgetdrivercount",
    "category": "function",
    "text": "OGRGetDriverCount(void) -> int\n\nFetch the number of registered drivers.\n\nReturns\n\nthe drivers count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.open",
    "page": "Docstrings",
    "title": "GDAL.open",
    "category": "function",
    "text": "GDALOpen(const char * pszFilename,\n         GDALAccess eAccess) -> GDALDatasetH\n\nOpen a raster file as a GDALDataset.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset. It should be in UTF-8 encoding.\neAccess: the desired access, either GAUpdate or GAReadOnly. Many drivers support only read only access.\n\nReturns\n\nA GDALDatasetH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDataset *.\n\n\n\n\n\nOGR_Dr_Open(OGRSFDriverH,\n            const char *,\n            int) -> OGRDataSourceH\n\nAttempt to open file with this driver.\n\nParameters\n\nhDriver: handle to the driver that is used to open file.\npszName: the name of the file, or data source to try and open.\nbUpdate: TRUE if update access is required, otherwise FALSE (the default).\n\nReturns\n\nNULL on error or if the pass name is not supported by this driver, otherwise an handle to a GDALDataset. This GDALDataset should be closed by deleting the object when it is no longer needed.\n\n\n\n\n\nOGROpen(const char *,\n        int,\n        OGRSFDriverH *) -> OGRDataSourceH\n\nOpen a file / data source with one of the registered drivers.\n\nParameters\n\npszName: the name of the file, or data source to open.\nbUpdate: FALSE for read-only access (the default) or TRUE for read-write access.\npahDriverList: if non-NULL, this argument will be updated with a pointer to the driver which was used to open the data source.\n\nReturns\n\nNULL on error or if the pass name is not supported by this driver, otherwise an handle to a GDALDataset. This GDALDataset should be closed by deleting the object when it is no longer needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.openex",
    "page": "Docstrings",
    "title": "GDAL.openex",
    "category": "function",
    "text": "GDALOpenEx(const char * pszFilename,\n           unsigned int nOpenFlags,\n           const char *const * papszAllowedDrivers,\n           const char *const * papszOpenOptions,\n           const char *const * papszSiblingFiles) -> friend GDALDatasetH\n\nOpen a raster or vector file as a GDALDataset.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset. It should be in UTF-8 encoding.\nnOpenFlags: a combination of GDALOF flags that may be combined through logical or operator. \n\nDriver kind: GDALOFRASTER for raster drivers, GDALOFVECTOR for vector drivers. If none of the value is specified, both kinds are implied. \n\nAccess mode: GDALOFREADONLY (exclusive)or GDALOFUPDATE. \n\nShared mode: GDALOFSHARED. If set, it allows the sharing of GDALDataset handles for a dataset with other callers that have set GDALOFSHARED. In particular, GDALOpenEx() will first consult its list of currently open and shared GDALDataset\'s, and if the GetDescription() name for one exactly matches the pszFilename passed to GDALOpenEx() it will be referenced and returned, if GDALOpenEx() is called from the same thread. \n\nVerbose error: GDALOFVERBOSE_ERROR. If set, a failed attempt to open the file will lead to an error message to be reported.\n\npapszAllowedDrivers: NULL to consider all candidate drivers, or a NULL terminated list of strings with the driver short names that must be considered.\npapszOpenOptions: NULL, or a NULL terminated list of strings with open options passed to candidate drivers. An option exists for all drivers, OVERVIEWLEVEL=level, to select a particular overview level of a dataset. The level index starts at 0. The level number can be suffixed by \"only\" to specify that only this overview level must be visible, and not sub-levels. Open options are validated by default, and a warning is emitted in case the option is not recognized. In some scenarios, it might be not desirable (e.g. when not knowing which driver will open the file), so the special open option VALIDATEOPEN_OPTIONS can be set to NO to avoid such warnings. Alternatively, since GDAL 2.1, an option name can be preceded by the @ character to indicate that it may not cause a warning if the driver doesn\'t declare this option.\npapszSiblingFiles: NULL, or a NULL terminated list of strings that are filenames that are auxiliary to the main filename. If NULL is passed, a probing of the file system will be done.\n\nReturns\n\nA GDALDatasetH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDataset *.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.openshared",
    "page": "Docstrings",
    "title": "GDAL.openshared",
    "category": "function",
    "text": "GDALOpenShared(const char * pszFilename,\n               GDALAccess eAccess) -> GDALDatasetH\n\nOpen a raster file as a GDALDataset.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset. It should be in UTF-8 encoding.\neAccess: the desired access, either GAUpdate or GAReadOnly. Many drivers support only read only access.\n\nReturns\n\nA GDALDatasetH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDataset *.\n\n\n\n\n\nOGROpenShared(const char *,\n              int,\n              OGRSFDriverH *) -> OGRDataSourceH\n\nOpen a file / data source with one of the registered drivers if not already opened, or increment reference count of already opened data source previously opened with OGROpenShared()\n\nParameters\n\npszName: the name of the file, or data source to open.\nbUpdate: FALSE for read-only access (the default) or TRUE for read-write access.\npahDriverList: if non-NULL, this argument will be updated with a pointer to the driver which was used to open the data source.\n\nReturns\n\nNULL on error or if the pass name is not supported by this driver, otherwise an handle to a GDALDataset. This GDALDataset should be closed by deleting the object when it is no longer needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.openverticalshiftgrid",
    "page": "Docstrings",
    "title": "GDAL.openverticalshiftgrid",
    "category": "function",
    "text": "GDALOpenVerticalShiftGrid(const char * pszProj4Geoidgrids,\n                          int * pbError) -> GDALDatasetH\n\nLoad proj.4 geoidgrids as GDAL dataset.\n\nParameters\n\npszProj4Geoidgrids: Value of proj.4 geoidgrids parameter.\npbError: If not NULL, the pointed value will be set to TRUE if an error occurred.\n\nReturns\n\na dataset. If not NULL, it must be closed with GDALClose().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.optgetparameterinfo",
    "page": "Docstrings",
    "title": "GDAL.optgetparameterinfo",
    "category": "function",
    "text": "OPTGetParameterInfo(const char * pszProjectionMethod,\n                    const char * pszParameterName,\n                    char ** ppszUserName,\n                    char ** ppszType,\n                    double * pdfDefaultValue) -> int\n\nFetch information about a single parameter of a projection method.\n\nParameters\n\npszProjectionMethod: name of projection method for which the parameter applies. Not currently used, but in the future this could affect defaults. This is the internal projection method name, such as \"Tranverse_Mercator\".\npszParameterName: name of the parameter to fetch information about. This is the internal name such as \"centralmeridian\" (SRSPPCENTRALMERIDIAN).\nppszUserName: location at which to return the user visible name for the parameter. This pointer may be NULL to skip the user name. The returned name should not be modified or freed.\nppszType: location at which to return the parameter type for the parameter. This pointer may be NULL to skip. The returned type should not be modified or freed. The type values are described above.\npdfDefaultValue: location at which to put the default value for this parameter. The pointer may be NULL.\n\nReturns\n\nTRUE if parameter found, or FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.optgetparameterlist",
    "page": "Docstrings",
    "title": "GDAL.optgetparameterlist",
    "category": "function",
    "text": "OPTGetParameterList(const char * pszProjectionMethod,\n                    char ** ppszUserName) -> char **\n\nFetch the parameters for a given projection method.\n\nParameters\n\npszProjectionMethod: internal name of projection methods to fetch the parameters for, such as \"TransverseMercator\" (SRSPTTRANSVERSEMERCATOR).\nppszUserName: pointer in which to return a user visible name for the projection name. The returned string should not be modified or freed by the caller. Legal to pass in NULL if user name not required.\n\nReturns\n\nreturns a NULL terminated list of internal parameter names that should be freed by the caller when no longer needed. Returns NULL if projection method is unknown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.optgetprojectionmethods",
    "page": "Docstrings",
    "title": "GDAL.optgetprojectionmethods",
    "category": "function",
    "text": "OPTGetProjectionMethods() -> char **\n\nFetch list of possible projection methods.\n\nReturns\n\nReturns NULL terminated list of projection methods. This should be freed with CSLDestroy() when no longer needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.overlaps",
    "page": "Docstrings",
    "title": "GDAL.overlaps",
    "category": "function",
    "text": "OGR_G_Overlaps(OGRGeometryH hThis,\n               OGRGeometryH hOther) -> int\n\nTest for overlap.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are overlapping, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.overviewmagnitudecorrection",
    "page": "Docstrings",
    "title": "GDAL.overviewmagnitudecorrection",
    "category": "function",
    "text": "GDALOverviewMagnitudeCorrection(GDALRasterBandH hBaseBand,\n                                int nOverviewCount,\n                                GDALRasterBandH * pahOverviews,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> CPLErr\n\nUndocumented.\n\nParameters\n\nhBaseBand: undocumented.\nnOverviewCount: undocumented.\npahOverviews: undocumented.\npfnProgress: undocumented.\npProgressData: undocumented.\n\nReturns\n\nundocumented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.packeddmstodec",
    "page": "Docstrings",
    "title": "GDAL.packeddmstodec",
    "category": "function",
    "text": "GDALPackedDMSToDec(double) -> double\n\nConvert a packed DMS value (DDDMMMSSS.SS) into decimal degrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.pointonsurface",
    "page": "Docstrings",
    "title": "GDAL.pointonsurface",
    "category": "function",
    "text": "OGR_G_PointOnSurface(OGRGeometryH hGeom) -> OGRGeometryH\n\nReturns a point guaranteed to lie on the surface.\n\nParameters\n\nhGeom: the geometry to operate on.\n\nReturns\n\na point guaranteed to lie on the surface or NULL if an error occurred.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.polygonize",
    "page": "Docstrings",
    "title": "GDAL.polygonize",
    "category": "function",
    "text": "GDALPolygonize(GDALRasterBandH hSrcBand,\n               GDALRasterBandH hMaskBand,\n               OGRLayerH hOutLayer,\n               int iPixValField,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> CPLErr\n\nCreate polygon coverage from raster data.\n\nParameters\n\nhSrcBand: the source raster band to be processed.\nhMaskBand: an optional mask band. All pixels in the mask band with a value other than zero will be considered suitable for collection as polygons.\nhOutLayer: the vector feature layer to which the polygons should be written.\niPixValField: the attribute field index indicating the feature attribute into which the pixel value of the polygon should be written.\npapszOptions: a name/value list of additional options \n\n\"8CONNECTED\": May be set to \"8\" to use 8 connectedness. Otherwise 4 connectedness will be applied to the algorithm\n\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure on a failure.\n\n\n\n\n\nOGR_G_Polygonize(OGRGeometryH hTarget) -> OGRGeometryH\n\nPolygonizes a set of sparse edges.\n\nParameters\n\nhTarget: The Geometry to be polygonized.\n\nReturns\n\na handle to a newly allocated geometry now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.poperrorhandler",
    "page": "Docstrings",
    "title": "GDAL.poperrorhandler",
    "category": "function",
    "text": "CPLPopErrorHandler() -> void\n\nPop error handler off stack.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.pusherrorhandler",
    "page": "Docstrings",
    "title": "GDAL.pusherrorhandler",
    "category": "function",
    "text": "CPLPushErrorHandler(CPLErrorHandler pfnErrorHandlerNew) -> void\n\nPush a new CPLError handler.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.pusherrorhandlerex",
    "page": "Docstrings",
    "title": "GDAL.pusherrorhandlerex",
    "category": "function",
    "text": "CPLPushErrorHandlerEx(CPLErrorHandler pfnErrorHandlerNew,\n                      void * pUserData) -> void\n\nPush a new CPLError handler with user data on the error context.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\npUserData: User data to put on the error context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.quieterrorhandler",
    "page": "Docstrings",
    "title": "GDAL.quieterrorhandler",
    "category": "function",
    "text": "CPLQuietErrorHandler(CPLErr eErrClass,\n                     CPLErrorNum nError,\n                     const char * pszErrorMsg) -> void\n\nError handler that does not do anything, except for debug messages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasteradviseread",
    "page": "Docstrings",
    "title": "GDAL.rasteradviseread",
    "category": "function",
    "text": "GDALRasterAdviseRead(GDALRasterBandH hBand,\n                     int nXOff,\n                     int nYOff,\n                     int nXSize,\n                     int nYSize,\n                     int nBufXSize,\n                     int nBufYSize,\n                     GDALDataType eDT,\n                     char ** papszOptions) -> CPLErr\n\nAdvise driver of upcoming read requests.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterbandcopywholeraster",
    "page": "Docstrings",
    "title": "GDAL.rasterbandcopywholeraster",
    "category": "function",
    "text": "GDALRasterBandCopyWholeRaster(GDALRasterBandH hSrcBand,\n                              GDALRasterBandH hDstBand,\n                              const char *const * constpapszOptions,\n                              GDALProgressFunc pfnProgress,\n                              void * pProgressData) -> CPLErr\n\nCopy all raster band raster data.\n\nParameters\n\nhSrcBand: the source band\nhDstBand: the destination band\npapszOptions: transfer hints in \"StringList\" Name=Value format.\npfnProgress: progress reporting function.\npProgressData: callback data for progress function.\n\nReturns\n\nCENone on success, or CEFailure on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterbandgettiledvirtualmem",
    "page": "Docstrings",
    "title": "GDAL.rasterbandgettiledvirtualmem",
    "category": "function",
    "text": "GDALRasterBandGetTiledVirtualMem(GDALRasterBandH hBand,\n                                 GDALRWFlag eRWFlag,\n                                 int nXOff,\n                                 int nYOff,\n                                 int nXSize,\n                                 int nYSize,\n                                 int nTileXSize,\n                                 int nTileYSize,\n                                 GDALDataType eBufType,\n                                 size_t nCacheSize,\n                                 int bSingleThreadUsage,\n                                 char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL rasterband object, with tiling organization.\n\nParameters\n\nhBand: Rasterband object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnTileXSize: the width of the tiles.\nnTileYSize: the height of the tiles.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterbandgetvirtualmem",
    "page": "Docstrings",
    "title": "GDAL.rasterbandgetvirtualmem",
    "category": "function",
    "text": "GDALRasterBandGetVirtualMem(GDALRasterBandH hBand,\n                            GDALRWFlag eRWFlag,\n                            int nXOff,\n                            int nYOff,\n                            int nXSize,\n                            int nYSize,\n                            int nBufXSize,\n                            int nBufYSize,\n                            GDALDataType eBufType,\n                            int nPixelSpace,\n                            GIntBig nLineSpace,\n                            size_t nCacheSize,\n                            size_t nPageSizeHint,\n                            int bSingleThreadUsage,\n                            char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL raster band object.\n\nParameters\n\nhBand: Rasterband object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnBufXSize: the width of the buffer image into which the desired region is to be read, or from which it is to be written.\nnBufYSize: the height of the buffer image into which the desired region is to be read, or from which it is to be written.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnPixelSpace: The byte offset from the start of one pixel value in the buffer to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in the buffer to the start of the next. If defaulted (0) the size of the datatype eBufType * nBufXSize is used.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nnPageSizeHint: hint for the page size. Must be a multiple of the system page size, returned by CPLGetPageSize(). Minimum value is generally 4096. Might be set to 0 to let the function determine a default page size.\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterio",
    "page": "Docstrings",
    "title": "GDAL.rasterio",
    "category": "function",
    "text": "GDALRasterIO(GDALRasterBandH hBand,\n             GDALRWFlag eRWFlag,\n             int nXOff,\n             int nYOff,\n             int nXSize,\n             int nYSize,\n             void * pData,\n             int nBufXSize,\n             int nBufYSize,\n             GDALDataType eBufType,\n             int nPixelSpace,\n             int nLineSpace) -> CPLErr\n\nRead/write a region of image data for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterioex",
    "page": "Docstrings",
    "title": "GDAL.rasterioex",
    "category": "function",
    "text": "GDALRasterIOEx(GDALRasterBandH hBand,\n               GDALRWFlag eRWFlag,\n               int nXOff,\n               int nYOff,\n               int nXSize,\n               int nYSize,\n               void * pData,\n               int nBufXSize,\n               int nBufYSize,\n               GDALDataType eBufType,\n               GSpacing nPixelSpace,\n               GSpacing nLineSpace,\n               GDALRasterIOExtraArg * psExtraArg) -> CPLErr\n\nRead/write a region of image data for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterize",
    "page": "Docstrings",
    "title": "GDAL.rasterize",
    "category": "function",
    "text": "GDALRasterize(const char * pszDest,\n              GDALDatasetH hDstDS,\n              GDALDatasetH hSrcDataset,\n              const GDALRasterizeOptions * psOptionsIn,\n              int * pbUsageError) -> GDALDatasetH\n\nBurns vector geometries into a raster.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALRasterizeOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS is not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterizegeometries",
    "page": "Docstrings",
    "title": "GDAL.rasterizegeometries",
    "category": "function",
    "text": "GDALRasterizeGeometries(GDALDatasetH hDS,\n                        int nBandCount,\n                        int * panBandList,\n                        int nGeomCount,\n                        OGRGeometryH * pahGeometries,\n                        GDALTransformerFunc pfnTransformer,\n                        void * pTransformArg,\n                        double * padfGeomBurnValue,\n                        char ** papszOptions,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressArg) -> CPLErr\n\nBurn geometries into raster.\n\nParameters\n\nhDS: output data, must be opened in update mode.\nnBandCount: the number of bands to be updated.\npanBandList: the list of bands to be updated.\nnGeomCount: the number of geometries being passed in pahGeometries.\npahGeometries: the array of geometries to burn in.\npfnTransformer: transformation to apply to geometries to put into pixel/line coordinates on raster. If NULL a geotransform based one will be created internally.\npTransformArg: callback data for transformer.\npadfGeomBurnValue: the array of values to burn into the raster. There should be nBandCount values for each geometry.\npapszOptions: special options controlling rasterization \n\n\"ALL_TOUCHED\": May be set to TRUE to set all pixels touched by the line or polygons, not just those whose center is within the polygon or that are selected by brezenhams line algorithm. Defaults to FALSE. \n\n\"BURNVALUEFROM\": May be set to \"Z\" to use the Z values of the geometries. dfBurnValue is added to this before burning. Defaults to GDALBurnValueSrc.GBV_UserBurnValue in which case just the dfBurnValue is burned. This is implemented only for points and lines for now. The M value may be supported in the future. \n\n\"MERGE_ALG\": May be REPLACE (the default) or ADD. REPLACE results in overwriting of value, while ADD adds the new value to the existing raster, suitable for heatmaps for instance.\n\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterizelayers",
    "page": "Docstrings",
    "title": "GDAL.rasterizelayers",
    "category": "function",
    "text": "GDALRasterizeLayers(GDALDatasetH hDS,\n                    int nBandCount,\n                    int * panBandList,\n                    int nLayerCount,\n                    OGRLayerH * pahLayers,\n                    GDALTransformerFunc pfnTransformer,\n                    void * pTransformArg,\n                    double * padfLayerBurnValues,\n                    char ** papszOptions,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg) -> CPLErr\n\nBurn geometries from the specified list of layers into raster.\n\nParameters\n\nhDS: output data, must be opened in update mode.\nnBandCount: the number of bands to be updated.\npanBandList: the list of bands to be updated.\nnLayerCount: the number of layers being passed in pahLayers array.\npahLayers: the array of layers to burn in.\npfnTransformer: transformation to apply to geometries to put into pixel/line coordinates on raster. If NULL a geotransform based one will be created internally.\npTransformArg: callback data for transformer.\npadfLayerBurnValues: the array of values to burn into the raster. There should be nBandCount values for each layer.\npapszOptions: special options controlling rasterization: \n\n\"ATTRIBUTE\": Identifies an attribute field on the features to be used for a burn in value. The value will be burned into all output bands. If specified, padfLayerBurnValues will not be used and can be a NULL pointer. \n\n\"CHUNKYSIZE\": The height in lines of the chunk to operate on. The larger the chunk size the less times we need to make a pass through all the shapes. If it is not set or set to zero the default chunk size will be used. Default size will be estimated based on the GDAL cache buffer size using formula: cachesizebytes/scanlinesizebytes, so the chunk will not exceed the cache. \n\n\"ALL_TOUCHED\": May be set to TRUE to set all pixels touched by the line or polygons, not just those whose center is within the polygon or that are selected by brezenhams line algorithm. Defaults to FALSE. \n\n\"BURNVALUEFROM\": May be set to \"Z\" to use the Z values of the geometries. The value from padfLayerBurnValues or the attribute field value is added to this before burning. In default case dfBurnValue is burned as it is. This is implemented properly only for points and lines for now. Polygons will be burned using the Z value from the first point. The M value may be supported in the future. \n\n\"MERGE_ALG\": May be REPLACE (the default) or ADD. REPLACE results in overwriting of value, while ADD adds the new value to the existing raster, suitable for heatmaps for instance.\n\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterizelayersbuf",
    "page": "Docstrings",
    "title": "GDAL.rasterizelayersbuf",
    "category": "function",
    "text": "GDALRasterizeLayersBuf(void * pData,\n                       int nBufXSize,\n                       int nBufYSize,\n                       GDALDataType eBufType,\n                       int nPixelSpace,\n                       int nLineSpace,\n                       int nLayerCount,\n                       OGRLayerH * pahLayers,\n                       const char * pszDstProjection,\n                       double * padfDstGeoTransform,\n                       GDALTransformerFunc pfnTransformer,\n                       void * pTransformArg,\n                       double dfBurnValue,\n                       char ** papszOptions,\n                       GDALProgressFunc pfnProgress,\n                       void * pProgressArg) -> CPLErr\n\nBurn geometries from the specified list of layer into raster.\n\nParameters\n\npData: pointer to the output data array.\nnBufXSize: width of the output data array in pixels.\nnBufYSize: height of the output data array in pixels.\neBufType: data type of the output data array.\nnPixelSpace: The byte offset from the start of one pixel value in pData to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in pData to the start of the next. If defaulted the size of the datatype eBufType * nBufXSize is used.\nnLayerCount: the number of layers being passed in pahLayers array.\npahLayers: the array of layers to burn in.\npszDstProjection: WKT defining the coordinate system of the target raster.\npadfDstGeoTransform: geotransformation matrix of the target raster.\npfnTransformer: transformation to apply to geometries to put into pixel/line coordinates on raster. If NULL a geotransform based one will be created internally.\npTransformArg: callback data for transformer.\ndfBurnValue: the value to burn into the raster.\npapszOptions: special options controlling rasterization: \n\n\"ATTRIBUTE\": Identifies an attribute field on the features to be used for a burn in value. The value will be burned into all output bands. If specified, padfLayerBurnValues will not be used and can be a NULL pointer. \n\n\"ALL_TOUCHED\": May be set to TRUE to set all pixels touched by the line or polygons, not just those whose center is within the polygon or that are selected by brezenhams line algorithm. Defaults to FALSE. \n\n\"BURNVALUEFROM\": May be set to \"Z\" to use the Z values of the geometries. dfBurnValue or the attribute field value is added to this before burning. In default case dfBurnValue is burned as it is. This is implemented properly only for points and lines for now. Polygons will be burned using the Z value from the first point. The M value may be supported in the future. \n\n\"MERGE_ALG\": May be REPLACE (the default) or ADD. REPLACE results in overwriting of value, while ADD adds the new value to the existing raster, suitable for heatmaps for instance.\n\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure on error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterizeoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.rasterizeoptionsfree",
    "category": "function",
    "text": "GDALRasterizeOptionsFree(GDALRasterizeOptions * psOptions) -> void\n\nFrees the GDALRasterizeOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALRasterize().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterizeoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.rasterizeoptionsnew",
    "category": "function",
    "text": "GDALRasterizeOptionsNew(char ** papszArgv,\n                        GDALRasterizeOptionsForBinary * psOptionsForBinary) -> GDALRasterizeOptions *\n\nAllocates a GDALRasterizeOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdal_rasterize utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALRasterizeOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALRasterizeOptions struct. Must be freed with GDALRasterizeOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rasterizeoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.rasterizeoptionssetprogress",
    "category": "function",
    "text": "GDALRasterizeOptionsSetProgress(GDALRasterizeOptions * psOptions,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALRasterize().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratchangesarewrittentofile",
    "page": "Docstrings",
    "title": "GDAL.ratchangesarewrittentofile",
    "category": "function",
    "text": "GDALRATChangesAreWrittenToFile(GDALRasterAttributeTableH hRAT) -> int\n\nDetermine whether changes made to this RAT are reflected directly in the dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratclone",
    "page": "Docstrings",
    "title": "GDAL.ratclone",
    "category": "function",
    "text": "GDALRATClone(GDALRasterAttributeTableH) -> GDALRasterAttributeTableH\n\nCopy Raster Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratcreatecolumn",
    "page": "Docstrings",
    "title": "GDAL.ratcreatecolumn",
    "category": "function",
    "text": "GDALRATCreateColumn(GDALRasterAttributeTableH,\n                    const char *,\n                    GDALRATFieldType,\n                    GDALRATFieldUsage) -> CPLErr\n\nCreate new column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratdumpreadable",
    "page": "Docstrings",
    "title": "GDAL.ratdumpreadable",
    "category": "function",
    "text": "GDALRATDumpReadable(GDALRasterAttributeTableH,\n                    FILE *) -> void\n\nDump RAT in readable form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetcolofusage",
    "page": "Docstrings",
    "title": "GDAL.ratgetcolofusage",
    "category": "function",
    "text": "GDALRATGetColOfUsage(GDALRasterAttributeTableH,\n                     GDALRATFieldUsage) -> int\n\nFetch column index for given usage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetcolumncount",
    "page": "Docstrings",
    "title": "GDAL.ratgetcolumncount",
    "category": "function",
    "text": "GDALRATGetColumnCount(GDALRasterAttributeTableH) -> int\n\nFetch table column count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetlinearbinning",
    "page": "Docstrings",
    "title": "GDAL.ratgetlinearbinning",
    "category": "function",
    "text": "GDALRATGetLinearBinning(GDALRasterAttributeTableH,\n                        double *,\n                        double *) -> int\n\nGet linear binning information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetnameofcol",
    "page": "Docstrings",
    "title": "GDAL.ratgetnameofcol",
    "category": "function",
    "text": "GDALRATGetNameOfCol(GDALRasterAttributeTableH,\n                    int) -> const char *\n\nFetch name of indicated column.\n\nParameters\n\nhRAT: RAT handle.\niCol: column index.\n\nReturns\n\nname.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetrowcount",
    "page": "Docstrings",
    "title": "GDAL.ratgetrowcount",
    "category": "function",
    "text": "GDALRATGetRowCount(GDALRasterAttributeTableH) -> int\n\nFetch row count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetrowofvalue",
    "page": "Docstrings",
    "title": "GDAL.ratgetrowofvalue",
    "category": "function",
    "text": "GDALRATGetRowOfValue(GDALRasterAttributeTableH,\n                     double) -> int\n\nGet row for pixel value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgettypeofcol",
    "page": "Docstrings",
    "title": "GDAL.ratgettypeofcol",
    "category": "function",
    "text": "GDALRATGetTypeOfCol(GDALRasterAttributeTableH,\n                    int) -> GDALRATFieldType\n\nFetch column type.\n\nParameters\n\nhRAT: RAT handle.\niCol: column index.\n\nReturns\n\ntype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetusageofcol",
    "page": "Docstrings",
    "title": "GDAL.ratgetusageofcol",
    "category": "function",
    "text": "GDALRATGetUsageOfCol(GDALRasterAttributeTableH,\n                     int) -> GDALRATFieldUsage\n\nFetch column usage value.\n\nParameters\n\nhRAT: RAT handle.\niCol: column index.\n\nReturns\n\nusage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetvalueasdouble",
    "page": "Docstrings",
    "title": "GDAL.ratgetvalueasdouble",
    "category": "function",
    "text": "GDALRATGetValueAsDouble(GDALRasterAttributeTableH,\n                        int,\n                        int) -> double\n\nFetch field value as a double.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetvalueasint",
    "page": "Docstrings",
    "title": "GDAL.ratgetvalueasint",
    "category": "function",
    "text": "GDALRATGetValueAsInt(GDALRasterAttributeTableH,\n                     int,\n                     int) -> int\n\nFetch field value as a integer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratgetvalueasstring",
    "page": "Docstrings",
    "title": "GDAL.ratgetvalueasstring",
    "category": "function",
    "text": "GDALRATGetValueAsString(GDALRasterAttributeTableH,\n                        int,\n                        int) -> const char *\n\nFetch field value as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratinitializefromcolortable",
    "page": "Docstrings",
    "title": "GDAL.ratinitializefromcolortable",
    "category": "function",
    "text": "GDALRATInitializeFromColorTable(GDALRasterAttributeTableH,\n                                GDALColorTableH) -> CPLErr\n\nInitialize from color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratserializejson",
    "page": "Docstrings",
    "title": "GDAL.ratserializejson",
    "category": "function",
    "text": "GDALRATSerializeJSON(GDALRasterAttributeTableH) -> void *\n\nSerialize Raster Attribute Table in Json format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratsetlinearbinning",
    "page": "Docstrings",
    "title": "GDAL.ratsetlinearbinning",
    "category": "function",
    "text": "GDALRATSetLinearBinning(GDALRasterAttributeTableH,\n                        double,\n                        double) -> CPLErr\n\nSet linear binning information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratsetrowcount",
    "page": "Docstrings",
    "title": "GDAL.ratsetrowcount",
    "category": "function",
    "text": "GDALRATSetRowCount(GDALRasterAttributeTableH,\n                   int) -> void\n\nSet row count.\n\nParameters\n\nhRAT: RAT handle.\nnNewCount: the new number of rows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratsetvalueasdouble",
    "page": "Docstrings",
    "title": "GDAL.ratsetvalueasdouble",
    "category": "function",
    "text": "GDALRATSetValueAsDouble(GDALRasterAttributeTableH,\n                        int,\n                        int,\n                        double) -> void\n\nSet field value from double.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratsetvalueasint",
    "page": "Docstrings",
    "title": "GDAL.ratsetvalueasint",
    "category": "function",
    "text": "GDALRATSetValueAsInt(GDALRasterAttributeTableH,\n                     int,\n                     int,\n                     int) -> void\n\nSet field value from integer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratsetvalueasstring",
    "page": "Docstrings",
    "title": "GDAL.ratsetvalueasstring",
    "category": "function",
    "text": "GDALRATSetValueAsString(GDALRasterAttributeTableH,\n                        int,\n                        int,\n                        const char *) -> void\n\nSet field value from string.\n\nParameters\n\nhRAT: RAT handle.\niRow: row index.\niField: field index.\npszValue: value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rattranslatetocolortable",
    "page": "Docstrings",
    "title": "GDAL.rattranslatetocolortable",
    "category": "function",
    "text": "GDALRATTranslateToColorTable(GDALRasterAttributeTableH,\n                             int nEntryCount) -> GDALColorTableH\n\nTranslate to a color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratvaluesioasdouble",
    "page": "Docstrings",
    "title": "GDAL.ratvaluesioasdouble",
    "category": "function",
    "text": "GDALRATValuesIOAsDouble(GDALRasterAttributeTableH hRAT,\n                        GDALRWFlag eRWFlag,\n                        int iField,\n                        int iStartRow,\n                        int iLength,\n                        double * pdfData) -> CPLErr\n\nRead or Write a block of doubles to/from the Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratvaluesioasinteger",
    "page": "Docstrings",
    "title": "GDAL.ratvaluesioasinteger",
    "category": "function",
    "text": "GDALRATValuesIOAsInteger(GDALRasterAttributeTableH hRAT,\n                         GDALRWFlag eRWFlag,\n                         int iField,\n                         int iStartRow,\n                         int iLength,\n                         int * pnData) -> CPLErr\n\nRead or Write a block of ints to/from the Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.ratvaluesioasstring",
    "page": "Docstrings",
    "title": "GDAL.ratvaluesioasstring",
    "category": "function",
    "text": "GDALRATValuesIOAsString(GDALRasterAttributeTableH hRAT,\n                        GDALRWFlag eRWFlag,\n                        int iField,\n                        int iStartRow,\n                        int iLength,\n                        char ** papszStrList) -> CPLErr\n\nRead or Write a block of strings to/from the Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rawfield_isnull",
    "page": "Docstrings",
    "title": "GDAL.rawfield_isnull",
    "category": "function",
    "text": "OGR_RawField_IsNull(const OGRField * puField) -> int\n\nReturns whether a raw field is null.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rawfield_isunset",
    "page": "Docstrings",
    "title": "GDAL.rawfield_isunset",
    "category": "function",
    "text": "OGR_RawField_IsUnset(const OGRField * puField) -> int\n\nReturns whether a raw field is unset.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rawfield_setnull",
    "page": "Docstrings",
    "title": "GDAL.rawfield_setnull",
    "category": "function",
    "text": "OGR_RawField_SetNull(OGRField * puField) -> void\n\nMark a raw field as null.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rawfield_setunset",
    "page": "Docstrings",
    "title": "GDAL.rawfield_setunset",
    "category": "function",
    "text": "OGR_RawField_SetUnset(OGRField * puField) -> void\n\nMark a raw field as unset.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.readblock",
    "page": "Docstrings",
    "title": "GDAL.readblock",
    "category": "function",
    "text": "GDALReadBlock(GDALRasterBandH hBand,\n              int nXOff,\n              int nYOff,\n              void * pData) -> CPLErr\n\nRead a block of image data efficiently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.readozimapfile",
    "page": "Docstrings",
    "title": "GDAL.readozimapfile",
    "category": "function",
    "text": "GDALReadOziMapFile(const char *,\n                   double *,\n                   char **,\n                   int *,\n                   GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for OZI .map.\n\nParameters\n\npszBaseFilename: filename whose basename will help building the .map filename.\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.readtabfile",
    "page": "Docstrings",
    "title": "GDAL.readtabfile",
    "category": "function",
    "text": "GDALReadTabFile(const char *,\n                double *,\n                char **,\n                int *,\n                GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for MapInfo .tab files.\n\nParameters\n\npszBaseFilename: filename whose basename will help building the .tab filename.\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.readworldfile",
    "page": "Docstrings",
    "title": "GDAL.readworldfile",
    "category": "function",
    "text": "GDALReadWorldFile(const char *,\n                  const char *,\n                  double *) -> int\n\nRead ESRI world file.\n\nParameters\n\npszBaseFilename: the target raster file.\npszExtension: the extension to use (i.e. \".wld\") or NULL to derive it from the pszBaseFilename\npadfGeoTransform: the six double array into which the geotransformation should be placed.\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.reference",
    "page": "Docstrings",
    "title": "GDAL.reference",
    "category": "function",
    "text": "OGR_FD_Reference(OGRFeatureDefnH hDefn) -> int\n\nIncrements the reference count by one.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nthe updated reference count.\n\n\n\n\n\nOGR_L_Reference(OGRLayerH hLayer) -> int\n\n\n\n\n\nOGR_DS_Reference(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\nOSRReference(OGRSpatialReferenceH hSRS) -> int\n\nIncrements the reference count by one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.referencedataset",
    "page": "Docstrings",
    "title": "GDAL.referencedataset",
    "category": "function",
    "text": "GDALReferenceDataset(GDALDatasetH hDataset) -> int\n\nAdd one to dataset reference count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.regenerateoverviews",
    "page": "Docstrings",
    "title": "GDAL.regenerateoverviews",
    "category": "function",
    "text": "GDALRegenerateOverviews(GDALRasterBandH hSrcBand,\n                        int nOverviewCount,\n                        GDALRasterBandH * pahOverviewBands,\n                        const char * pszResampling,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressData) -> CPLErr\n\nGenerate downsampled overviews.\n\nParameters\n\nhSrcBand: the source (base level) band.\nnOverviewCount: the number of downsampled bands being generated.\npahOvrBands: the list of downsampled bands to be generated.\npszResampling: Resampling algorithm (e.g. \"AVERAGE\").\npfnProgress: progress report function.\npProgressData: progress function callback data.\n\nReturns\n\nCENone on success or CEFailure on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.registerall",
    "page": "Docstrings",
    "title": "GDAL.registerall",
    "category": "function",
    "text": "OGRRegisterAll(void) -> void\n\nRegister all drivers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.registerdriver",
    "page": "Docstrings",
    "title": "GDAL.registerdriver",
    "category": "function",
    "text": "GDALRegisterDriver(GDALDriverH hDriver) -> int\n\nRegister a driver for use.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.release",
    "page": "Docstrings",
    "title": "GDAL.release",
    "category": "function",
    "text": "OGR_FD_Release(OGRFeatureDefnH hDefn) -> void\n\nDrop a reference, and destroy if unreferenced.\n\nParameters\n\nhDefn: handle to the feature definition to be released.\n\n\n\n\n\nOSRRelease(OGRSpatialReferenceH hSRS) -> void\n\nDecrements the reference count by one, and destroy if zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.releasedataset",
    "page": "Docstrings",
    "title": "GDAL.releasedataset",
    "category": "function",
    "text": "GDALReleaseDataset(GDALDatasetH hDataset) -> int\n\nDrop a reference to this object, and destroy if no longer referenced.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.releasedatasource",
    "page": "Docstrings",
    "title": "GDAL.releasedatasource",
    "category": "function",
    "text": "OGRReleaseDataSource(OGRDataSourceH) -> OGRErr\n\nDrop a reference to this datasource, and if the reference count drops to zero close (destroy) the datasource.\n\nParameters\n\nhDS: handle to the data source to release\n\nReturns\n\nOGRERR_NONE on success or an error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.releaseresultset",
    "page": "Docstrings",
    "title": "GDAL.releaseresultset",
    "category": "function",
    "text": "OGR_DS_ReleaseResultSet(OGRDataSourceH,\n                        OGRLayerH) -> void\n\nRelease results of OGRDSExecuteSQL().\n\nParameters\n\nhDS: an handle to the data source on which was executed an SQL query.\nhLayer: handle to the result of a previous OGRDSExecuteSQL() call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.removegeometry",
    "page": "Docstrings",
    "title": "GDAL.removegeometry",
    "category": "function",
    "text": "OGR_G_RemoveGeometry(OGRGeometryH hGeom,\n                     int iGeom,\n                     int bDelete) -> OGRErr\n\nRemove a geometry from an exiting geometry container.\n\nParameters\n\nhGeom: the existing geometry to delete from.\niGeom: the index of the geometry to delete. A value of -1 is a special flag meaning that all geometries should be removed.\nbDelete: if TRUE the geometry will be destroyed, otherwise it will not. The default is TRUE as the existing geometry is considered to own the geometries in it.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRFAILURE if the index is out of range.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.renamedataset",
    "page": "Docstrings",
    "title": "GDAL.renamedataset",
    "category": "function",
    "text": "GDALRenameDataset(GDALDriverH hDriver,\n                  const char * pszNewName,\n                  const char * pszOldName) -> CPLErr\n\nRename a dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.reorderfield",
    "page": "Docstrings",
    "title": "GDAL.reorderfield",
    "category": "function",
    "text": "OGR_L_ReorderField(OGRLayerH,\n                   int iOldFieldPos,\n                   int iNewFieldPos) -> OGRErr\n\nReorder an existing field on a layer.\n\nParameters\n\nhLayer: handle to the layer.\niOldFieldPos: previous position of the field to move. Must be in the range [0,GetFieldCount()-1].\niNewFieldPos: new position of the field to move. Must be in the range [0,GetFieldCount()-1].\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.reorderfielddefns",
    "page": "Docstrings",
    "title": "GDAL.reorderfielddefns",
    "category": "function",
    "text": "OGR_FD_ReorderFieldDefns(OGRFeatureDefnH hDefn,\n                         int * panMap) -> OGRErr\n\nReorder the field definitions in the array of the feature definition.\n\nParameters\n\nhDefn: handle to the feature definition.\npanMap: an array of GetFieldCount() elements which is a permutation of [0, GetFieldCount()-1]. panMap is such that, for each field definition at position i after reordering, its position before reordering was panMap[i].\n\nReturns\n\nOGRERR_NONE in case of success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.reorderfields",
    "page": "Docstrings",
    "title": "GDAL.reorderfields",
    "category": "function",
    "text": "OGR_L_ReorderFields(OGRLayerH,\n                    int * panMap) -> OGRErr\n\nReorder all the fields of a layer.\n\nParameters\n\nhLayer: handle to the layer.\npanMap: an array of GetLayerDefn()->OGRFeatureDefn::GetFieldCount() elements which is a permutation of [0, GetLayerDefn()->OGRFeatureDefn::GetFieldCount()-1].\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.reprojectiontransform",
    "page": "Docstrings",
    "title": "GDAL.reprojectiontransform",
    "category": "function",
    "text": "GDALReprojectionTransform(void * pTransformArg,\n                          int bDstToSrc,\n                          int nPointCount,\n                          double * padfX,\n                          double * padfY,\n                          double * padfZ,\n                          int * panSuccess) -> int\n\nPerform reprojection transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.resetreading",
    "page": "Docstrings",
    "title": "GDAL.resetreading",
    "category": "function",
    "text": "OGR_L_ResetReading(OGRLayerH) -> void\n\nReset feature reading to start on the first feature.\n\nParameters\n\nhLayer: handle to the layer on which features are read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.resetstylestringreading",
    "page": "Docstrings",
    "title": "GDAL.resetstylestringreading",
    "category": "function",
    "text": "OGR_STBL_ResetStyleStringReading(OGRStyleTableH hStyleTable) -> void\n\nReset the next style pointer to 0.\n\nParameters\n\nhStyleTable: handle to the style table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rollbacktransaction",
    "page": "Docstrings",
    "title": "GDAL.rollbacktransaction",
    "category": "function",
    "text": "OGR_L_RollbackTransaction(OGRLayerH) -> OGRErr\n\nFor datasources which support transactions, RollbackTransaction will roll back a datasource to its state before the start of the current transaction.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rpcinfotomd",
    "page": "Docstrings",
    "title": "GDAL.rpcinfotomd",
    "category": "function",
    "text": "RPCInfoToMD(GDALRPCInfo * psRPCInfo) -> char **\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.rpctransform",
    "page": "Docstrings",
    "title": "GDAL.rpctransform",
    "category": "function",
    "text": "GDALRPCTransform(void * pTransformArg,\n                 int bDstToSrc,\n                 int nPointCount,\n                 double * x,\n                 double * y,\n                 double * z,\n                 int * panSuccess) -> int\n\nRPC transform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.savestyletable",
    "page": "Docstrings",
    "title": "GDAL.savestyletable",
    "category": "function",
    "text": "OGR_STBL_SaveStyleTable(OGRStyleTableH hStyleTable,\n                        const char * pszFilename) -> int\n\nSave a style table to a file.\n\nParameters\n\nhStyleTable: handle to the style table.\npszFilename: the name of the file to save to.\n\nReturns\n\nTRUE on success, FALSE on error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.segmentize",
    "page": "Docstrings",
    "title": "GDAL.segmentize",
    "category": "function",
    "text": "OGR_G_Segmentize(OGRGeometryH hGeom,\n                 double dfMaxLength) -> void\n\nModify the geometry such it has no segment longer then the given distance.\n\nParameters\n\nhGeom: handle on the geometry to segmentize\ndfMaxLength: the maximum distance between 2 points after segmentization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.serializetransformer",
    "page": "Docstrings",
    "title": "GDAL.serializetransformer",
    "category": "function",
    "text": "GDALSerializeTransformer(GDALTransformerFunc,\n                         void * pTransformArg) -> CPLXMLNode *\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.set",
    "page": "Docstrings",
    "title": "GDAL.set",
    "category": "function",
    "text": "OGR_Fld_Set(OGRFieldDefnH hDefn,\n            const char * pszNameIn,\n            OGRFieldType eTypeIn,\n            int nWidthIn,\n            int nPrecisionIn,\n            OGRJustification eJustifyIn) -> void\n\nSet defining parameters for a field in one call.\n\nParameters\n\nhDefn: handle to the field definition to set to.\npszNameIn: the new name to assign.\neTypeIn: the new type (one of the OFT values like OFTInteger).\nnWidthIn: the preferred formatting width. Defaults to zero indicating undefined.\nnPrecisionIn: number of decimals places for formatting, defaults to zero indicating undefined.\neJustifyIn: the formatting justification (OJLeft or OJRight), defaults to OJUndefined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.set3d",
    "page": "Docstrings",
    "title": "GDAL.set3d",
    "category": "function",
    "text": "OGR_G_Set3D(OGRGeometryH hGeom,\n            int bIs3D) -> void\n\nAdd or remove the Z coordinate dimension.\n\nParameters\n\nhGeom: handle on the geometry to set or unset the Z dimension.\nbIs3D: Should the geometry have a Z dimension, either TRUE or FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setacea",
    "page": "Docstrings",
    "title": "GDAL.setacea",
    "category": "function",
    "text": "OSRSetACEA(OGRSpatialReferenceH hSRS,\n           double dfStdP1,\n           double dfStdP2,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nAlbers Conic Equal Area.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setae",
    "page": "Docstrings",
    "title": "GDAL.setae",
    "category": "function",
    "text": "OSRSetAE(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nAzimuthal Equidistant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setangularunits",
    "page": "Docstrings",
    "title": "GDAL.setangularunits",
    "category": "function",
    "text": "OSRSetAngularUnits(OGRSpatialReferenceH hSRS,\n                   const char * pszUnits,\n                   double dfInRadians) -> OGRErr\n\nSet the angular units for the geographic coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setattributefilter",
    "page": "Docstrings",
    "title": "GDAL.setattributefilter",
    "category": "function",
    "text": "OGR_L_SetAttributeFilter(OGRLayerH,\n                         const char *) -> OGRErr\n\nSet a new attribute query.\n\nParameters\n\nhLayer: handle to the layer on which attribute query will be executed.\npszQuery: query in restricted SQL WHERE format, or NULL to clear the current query.\n\nReturns\n\nOGRERR_NONE if successfully installed, or an error code if the query expression is in error, or some other failure occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setattrvalue",
    "page": "Docstrings",
    "title": "GDAL.setattrvalue",
    "category": "function",
    "text": "OSRSetAttrValue(OGRSpatialReferenceH hSRS,\n                const char * pszPath,\n                const char * pszValue) -> OGRErr\n\nSet attribute value in spatial reference.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setauthority",
    "page": "Docstrings",
    "title": "GDAL.setauthority",
    "category": "function",
    "text": "OSRSetAuthority(OGRSpatialReferenceH hSRS,\n                const char * pszTargetKey,\n                const char * pszAuthority,\n                int nCode) -> OGRErr\n\nSet the authority for a node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setaxes",
    "page": "Docstrings",
    "title": "GDAL.setaxes",
    "category": "function",
    "text": "OSRSetAxes(OGRSpatialReferenceH hSRS,\n           const char * pszTargetKey,\n           const char * pszXAxisName,\n           OGRAxisOrientation eXAxisOrientation,\n           const char * pszYAxisName,\n           OGRAxisOrientation eYAxisOrientation) -> OGRErr\n\nSet the axes for a coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setbonne",
    "page": "Docstrings",
    "title": "GDAL.setbonne",
    "category": "function",
    "text": "OSRSetBonne(OGRSpatialReferenceH hSRS,\n            double dfStdP1,\n            double dfCentralMeridian,\n            double dfFalseEasting,\n            double dfFalseNorthing) -> OGRErr\n\nBonne.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcachemax",
    "page": "Docstrings",
    "title": "GDAL.setcachemax",
    "category": "function",
    "text": "GDALSetCacheMax(int nNewSizeInBytes) -> void\n\nSet maximum cache memory.\n\nParameters\n\nnNewSizeInBytes: the maximum number of bytes for caching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcachemax64",
    "page": "Docstrings",
    "title": "GDAL.setcachemax64",
    "category": "function",
    "text": "GDALSetCacheMax64(GIntBig nNewSizeInBytes) -> void\n\nSet maximum cache memory.\n\nParameters\n\nnNewSizeInBytes: the maximum number of bytes for caching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcea",
    "page": "Docstrings",
    "title": "GDAL.setcea",
    "category": "function",
    "text": "OSRSetCEA(OGRSpatialReferenceH hSRS,\n          double dfStdP1,\n          double dfCentralMeridian,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nCylindrical Equal Area.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcolorentry",
    "page": "Docstrings",
    "title": "GDAL.setcolorentry",
    "category": "function",
    "text": "GDALSetColorEntry(GDALColorTableH hTable,\n                  int i,\n                  const GDALColorEntry * poEntry) -> void\n\nSet entry in color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcompoundcs",
    "page": "Docstrings",
    "title": "GDAL.setcompoundcs",
    "category": "function",
    "text": "OSRSetCompoundCS(OGRSpatialReferenceH hSRS,\n                 const char * pszName,\n                 OGRSpatialReferenceH hHorizSRS,\n                 OGRSpatialReferenceH hVertSRS) -> OGRErr\n\nSetup a compound coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcoordinatedimension",
    "page": "Docstrings",
    "title": "GDAL.setcoordinatedimension",
    "category": "function",
    "text": "OGR_G_SetCoordinateDimension(OGRGeometryH hGeom,\n                             int nNewDimension) -> void\n\nSet the coordinate dimension.\n\nParameters\n\nhGeom: handle on the geometry to set the dimension of the coordinates.\nnNewDimension: New coordinate dimension value, either 2 or 3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcs",
    "page": "Docstrings",
    "title": "GDAL.setcs",
    "category": "function",
    "text": "OSRSetCS(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nCassini-Soldner.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setcurrenterrorhandlercatchdebug",
    "page": "Docstrings",
    "title": "GDAL.setcurrenterrorhandlercatchdebug",
    "category": "function",
    "text": "CPLSetCurrentErrorHandlerCatchDebug(int bCatchDebug) -> void\n\nSet if the current error handler should intercept debug messages, or if they should be processed by the previous handler.\n\nParameters\n\nbCatchDebug: FALSE if the current error handler should not intercept debug messages\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setdefault",
    "page": "Docstrings",
    "title": "GDAL.setdefault",
    "category": "function",
    "text": "OGR_Fld_SetDefault(OGRFieldDefnH hDefn,\n                   const char * pszDefault) -> void\n\nSet default field value.\n\nParameters\n\nhDefn: handle to the field definition.\npszDefault: new default field value or NULL pointer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setdefaulthistogram",
    "page": "Docstrings",
    "title": "GDAL.setdefaulthistogram",
    "category": "function",
    "text": "GDALSetDefaultHistogram(GDALRasterBandH hBand,\n                        double dfMin,\n                        double dfMax,\n                        int nBuckets,\n                        int * panHistogram) -> CPLErr\n\nSet default histogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setdefaulthistogramex",
    "page": "Docstrings",
    "title": "GDAL.setdefaulthistogramex",
    "category": "function",
    "text": "GDALSetDefaultHistogramEx(GDALRasterBandH hBand,\n                          double dfMin,\n                          double dfMax,\n                          int nBuckets,\n                          GUIntBig * panHistogram) -> CPLErr\n\nSet default histogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setdefaultrat",
    "page": "Docstrings",
    "title": "GDAL.setdefaultrat",
    "category": "function",
    "text": "GDALSetDefaultRAT(GDALRasterBandH hBand,\n                  GDALRasterAttributeTableH hRAT) -> CPLErr\n\nSet default Raster Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setdescription",
    "page": "Docstrings",
    "title": "GDAL.setdescription",
    "category": "function",
    "text": "GDALSetDescription(GDALMajorObjectH hObject,\n                   const char * pszNewDesc) -> void\n\nSet object description.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setec",
    "page": "Docstrings",
    "title": "GDAL.setec",
    "category": "function",
    "text": "OSRSetEC(OGRSpatialReferenceH hSRS,\n         double dfStdP1,\n         double dfStdP2,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nEquidistant Conic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.seteckert",
    "page": "Docstrings",
    "title": "GDAL.seteckert",
    "category": "function",
    "text": "OSRSetEckert(OGRSpatialReferenceH hSRS,\n             int nVariation,\n             double dfCentralMeridian,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nEckert I-VI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.seteckertiv",
    "page": "Docstrings",
    "title": "GDAL.seteckertiv",
    "category": "function",
    "text": "OSRSetEckertIV(OGRSpatialReferenceH hSRS,\n               double dfCentralMeridian,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nEckert IV.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.seteckertvi",
    "page": "Docstrings",
    "title": "GDAL.seteckertvi",
    "category": "function",
    "text": "OSRSetEckertVI(OGRSpatialReferenceH hSRS,\n               double dfCentralMeridian,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nEckert VI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setequirectangular",
    "page": "Docstrings",
    "title": "GDAL.setequirectangular",
    "category": "function",
    "text": "OSRSetEquirectangular(OGRSpatialReferenceH hSRS,\n                      double dfCenterLat,\n                      double dfCenterLong,\n                      double dfFalseEasting,\n                      double dfFalseNorthing) -> OGRErr\n\nEquirectangular.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setequirectangular2",
    "page": "Docstrings",
    "title": "GDAL.setequirectangular2",
    "category": "function",
    "text": "OSRSetEquirectangular2(OGRSpatialReferenceH hSRS,\n                       double dfCenterLat,\n                       double dfCenterLong,\n                       double dfStdParallel1,\n                       double dfFalseEasting,\n                       double dfFalseNorthing) -> OGRErr\n\nEquirectangular generalized form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.seterrorhandler",
    "page": "Docstrings",
    "title": "GDAL.seterrorhandler",
    "category": "function",
    "text": "CPLSetErrorHandler(CPLErrorHandler pfnErrorHandlerNew) -> CPLErrorHandler\n\nInstall custom error handler.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\n\nReturns\n\nreturns the previously installed error handler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.seterrorhandlerex",
    "page": "Docstrings",
    "title": "GDAL.seterrorhandlerex",
    "category": "function",
    "text": "CPLSetErrorHandlerEx(CPLErrorHandler pfnErrorHandlerNew,\n                     void * pUserData) -> CPLErrorHandler\n\nInstall custom error handle with user\'s data.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\npUserData: User data to carry along with the error context.\n\nReturns\n\nreturns the previously installed error handler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfeature",
    "page": "Docstrings",
    "title": "GDAL.setfeature",
    "category": "function",
    "text": "OGR_L_SetFeature(OGRLayerH,\n                 OGRFeatureH) -> OGRErr\n\nRewrite an existing feature.\n\nParameters\n\nhLayer: handle to the layer to write the feature.\nhFeat: the feature to write.\n\nReturns\n\nOGRERRNONE if the operation works, otherwise an appropriate error code (e.g OGRERRNONEXISTINGFEATURE if the feature does not exist).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfid",
    "page": "Docstrings",
    "title": "GDAL.setfid",
    "category": "function",
    "text": "OGR_F_SetFID(OGRFeatureH hFeat,\n             GIntBig nFID) -> OGRErr\n\nSet the feature identifier.\n\nParameters\n\nhFeat: handle to the feature to set the feature id to.\nnFID: the new feature identifier value to assign.\n\nReturns\n\nOn success OGRERR_NONE, or on failure some other value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldbinary",
    "page": "Docstrings",
    "title": "GDAL.setfieldbinary",
    "category": "function",
    "text": "OGR_F_SetFieldBinary(OGRFeatureH hFeat,\n                     int iField,\n                     int nBytes,\n                     GByte * pabyData) -> void\n\nSet field to binary data.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnBytes: the number of bytes in pabyData array.\npabyData: the data to apply.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfielddatetime",
    "page": "Docstrings",
    "title": "GDAL.setfielddatetime",
    "category": "function",
    "text": "OGR_F_SetFieldDateTime(OGRFeatureH hFeat,\n                       int iField,\n                       int nYear,\n                       int nMonth,\n                       int nDay,\n                       int nHour,\n                       int nMinute,\n                       int nSecond,\n                       int nTZFlag) -> void\n\nSet field to datetime.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnYear: (including century)\nnMonth: (1-12)\nnDay: (1-31)\nnHour: (0-23)\nnMinute: (0-59)\nnSecond: (0-59)\nnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfielddatetimeex",
    "page": "Docstrings",
    "title": "GDAL.setfielddatetimeex",
    "category": "function",
    "text": "OGR_F_SetFieldDateTimeEx(OGRFeatureH hFeat,\n                         int iField,\n                         int nYear,\n                         int nMonth,\n                         int nDay,\n                         int nHour,\n                         int nMinute,\n                         float fSecond,\n                         int nTZFlag) -> void\n\nSet field to datetime.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnYear: (including century)\nnMonth: (1-12)\nnDay: (1-31)\nnHour: (0-23)\nnMinute: (0-59)\nfSecond: (0-59, with millisecond accuracy)\nnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfielddouble",
    "page": "Docstrings",
    "title": "GDAL.setfielddouble",
    "category": "function",
    "text": "OGR_F_SetFieldDouble(OGRFeatureH hFeat,\n                     int iField,\n                     double dfValue) -> void\n\nSet field to double value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\ndfValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfielddoublelist",
    "page": "Docstrings",
    "title": "GDAL.setfielddoublelist",
    "category": "function",
    "text": "OGR_F_SetFieldDoubleList(OGRFeatureH hFeat,\n                         int iField,\n                         int nCount,\n                         double * padfValues) -> void\n\nSet field to list of doubles value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnCount: the number of values in the list being assigned.\npadfValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldinteger",
    "page": "Docstrings",
    "title": "GDAL.setfieldinteger",
    "category": "function",
    "text": "OGR_F_SetFieldInteger(OGRFeatureH hFeat,\n                      int iField,\n                      int nValue) -> void\n\nSet field to integer value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\nnValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldinteger64",
    "page": "Docstrings",
    "title": "GDAL.setfieldinteger64",
    "category": "function",
    "text": "OGR_F_SetFieldInteger64(OGRFeatureH hFeat,\n                        int iField,\n                        GIntBig nValue) -> void\n\nSet field to 64 bit integer value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\nnValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldinteger64list",
    "page": "Docstrings",
    "title": "GDAL.setfieldinteger64list",
    "category": "function",
    "text": "OGR_F_SetFieldInteger64List(OGRFeatureH hFeat,\n                            int iField,\n                            int nCount,\n                            const GIntBig * panValues) -> void\n\nSet field to list of 64 bit integers value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnCount: the number of values in the list being assigned.\npanValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldintegerlist",
    "page": "Docstrings",
    "title": "GDAL.setfieldintegerlist",
    "category": "function",
    "text": "OGR_F_SetFieldIntegerList(OGRFeatureH hFeat,\n                          int iField,\n                          int nCount,\n                          int * panValues) -> void\n\nSet field to list of integers value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnCount: the number of values in the list being assigned.\npanValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldnull",
    "page": "Docstrings",
    "title": "GDAL.setfieldnull",
    "category": "function",
    "text": "OGR_F_SetFieldNull(OGRFeatureH hFeat,\n                   int iField) -> void\n\nClear a field, marking it as null.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to set to null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldraw",
    "page": "Docstrings",
    "title": "GDAL.setfieldraw",
    "category": "function",
    "text": "OGR_F_SetFieldRaw(OGRFeatureH hFeat,\n                  int iField,\n                  OGRField * psValue) -> void\n\nSet field.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npsValue: handle on the value to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldstring",
    "page": "Docstrings",
    "title": "GDAL.setfieldstring",
    "category": "function",
    "text": "OGR_F_SetFieldString(OGRFeatureH hFeat,\n                     int iField,\n                     const char * pszValue) -> void\n\nSet field to string value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npszValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfieldstringlist",
    "page": "Docstrings",
    "title": "GDAL.setfieldstringlist",
    "category": "function",
    "text": "OGR_F_SetFieldStringList(OGRFeatureH hFeat,\n                         int iField,\n                         char ** papszValues) -> void\n\nSet field to list of strings value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\npapszValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfrom",
    "page": "Docstrings",
    "title": "GDAL.setfrom",
    "category": "function",
    "text": "OGR_F_SetFrom(OGRFeatureH hFeat,\n              OGRFeatureH hOtherFeat,\n              int bForgiving) -> OGRErr\n\nSet one feature from another.\n\nParameters\n\nhFeat: handle to the feature to set to.\nhOtherFeat: handle to the feature from which geometry, and field values will be copied.\nbForgiving: TRUE if the operation should continue despite lacking output fields matching some of the source fields.\n\nReturns\n\nOGRERR_NONE if the operation succeeds, even if some values are not transferred, otherwise an error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfromuserinput",
    "page": "Docstrings",
    "title": "GDAL.setfromuserinput",
    "category": "function",
    "text": "OSRSetFromUserInput(OGRSpatialReferenceH hSRS,\n                    const char * pszDef) -> OGRErr\n\nSet spatial reference from various text formats.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setfromwithmap",
    "page": "Docstrings",
    "title": "GDAL.setfromwithmap",
    "category": "function",
    "text": "OGR_F_SetFromWithMap(OGRFeatureH hFeat,\n                     OGRFeatureH hOtherFeat,\n                     int bForgiving,\n                     int * panMap) -> OGRErr\n\nSet one feature from another.\n\nParameters\n\nhFeat: handle to the feature to set to.\nhOtherFeat: handle to the feature from which geometry, and field values will be copied.\npanMap: Array of the indices of the destination feature\'s fields stored at the corresponding index of the source feature\'s fields. A value of -1 should be used to ignore the source\'s field. The array should not be NULL and be as long as the number of fields in the source feature.\nbForgiving: TRUE if the operation should continue despite lacking output fields matching some of the source fields.\n\nReturns\n\nOGRERR_NONE if the operation succeeds, even if some values are not transferred, otherwise an error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgaussschreibertmercator",
    "page": "Docstrings",
    "title": "GDAL.setgaussschreibertmercator",
    "category": "function",
    "text": "OSRSetGaussSchreiberTMercator(OGRSpatialReferenceH hSRS,\n                              double dfCenterLat,\n                              double dfCenterLong,\n                              double dfScale,\n                              double dfFalseEasting,\n                              double dfFalseNorthing) -> OGRErr\n\nGauss Schreiber Transverse Mercator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgcps",
    "page": "Docstrings",
    "title": "GDAL.setgcps",
    "category": "function",
    "text": "GDALSetGCPs(GDALDatasetH hDS,\n            int nGCPCount,\n            const GDAL_GCP * pasGCPList,\n            const char * pszGCPProjection) -> CPLErr\n\nAssign GCPs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgenerate_db2_v72_byte_order",
    "page": "Docstrings",
    "title": "GDAL.setgenerate_db2_v72_byte_order",
    "category": "function",
    "text": "OGRSetGenerate_DB2_V72_BYTE_ORDER(int bGenerate_DB2_V72_BYTE_ORDER) -> OGRErr\n\nSpecial entry point to enable the hack for generating DB2 V7.2 style WKB.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgenimgprojtransformerdstgeotransform",
    "page": "Docstrings",
    "title": "GDAL.setgenimgprojtransformerdstgeotransform",
    "category": "function",
    "text": "GDALSetGenImgProjTransformerDstGeoTransform(void * hTransformArg,\n                                            const double * padfGeoTransform) -> void\n\nSet GenImgProj output geotransform.\n\nParameters\n\nhTransformArg: the handle to update.\npadfGeoTransform: the destination geotransform to apply (six doubles).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeoccs",
    "page": "Docstrings",
    "title": "GDAL.setgeoccs",
    "category": "function",
    "text": "OSRSetGeocCS(OGRSpatialReferenceH hSRS,\n             const char * pszName) -> OGRErr\n\nSet the user visible PROJCS name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeogcs",
    "page": "Docstrings",
    "title": "GDAL.setgeogcs",
    "category": "function",
    "text": "OSRSetGeogCS(OGRSpatialReferenceH hSRS,\n             const char * pszGeogName,\n             const char * pszDatumName,\n             const char * pszSpheroidName,\n             double dfSemiMajor,\n             double dfInvFlattening,\n             const char * pszPMName,\n             double dfPMOffset,\n             const char * pszAngularUnits,\n             double dfConvertToRadians) -> OGRErr\n\nSet geographic coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeometry",
    "page": "Docstrings",
    "title": "GDAL.setgeometry",
    "category": "function",
    "text": "OGR_F_SetGeometry(OGRFeatureH hFeat,\n                  OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry.\n\nParameters\n\nhFeat: handle to the feature on which new geometry is applied to.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeometrydirectly",
    "page": "Docstrings",
    "title": "GDAL.setgeometrydirectly",
    "category": "function",
    "text": "OGR_F_SetGeometryDirectly(OGRFeatureH hFeat,\n                          OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry.\n\nParameters\n\nhFeat: handle to the feature on which to apply the geometry.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeometryignored",
    "page": "Docstrings",
    "title": "GDAL.setgeometryignored",
    "category": "function",
    "text": "OGR_FD_SetGeometryIgnored(OGRFeatureDefnH hDefn,\n                          int bIgnore) -> void\n\nSet whether the geometry can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\nbIgnore: ignore state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeomfield",
    "page": "Docstrings",
    "title": "GDAL.setgeomfield",
    "category": "function",
    "text": "OGR_F_SetGeomField(OGRFeatureH hFeat,\n                   int iField,\n                   OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry of a specified geometry field.\n\nParameters\n\nhFeat: handle to the feature on which new geometry is applied to.\niField: geometry field to set.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeomfielddirectly",
    "page": "Docstrings",
    "title": "GDAL.setgeomfielddirectly",
    "category": "function",
    "text": "OGR_F_SetGeomFieldDirectly(OGRFeatureH hFeat,\n                           int iField,\n                           OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry of a specified geometry field.\n\nParameters\n\nhFeat: handle to the feature on which to apply the geometry.\niField: geometry field to set.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRFAILURE if the index is invalid, or OGRUNSUPPORTEDGEOMETRY_TYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeomtype",
    "page": "Docstrings",
    "title": "GDAL.setgeomtype",
    "category": "function",
    "text": "OGR_FD_SetGeomType(OGRFeatureDefnH hDefn,\n                   OGRwkbGeometryType eType) -> void\n\nAssign the base geometry type for the passed layer (the same as the feature definition).\n\nParameters\n\nhDefn: handle to the layer or feature definition to set the geometry type to.\neType: the new type to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeos",
    "page": "Docstrings",
    "title": "GDAL.setgeos",
    "category": "function",
    "text": "OSRSetGEOS(OGRSpatialReferenceH hSRS,\n           double dfCentralMeridian,\n           double dfSatelliteHeight,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nGEOS - Geostationary Satellite View.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgeotransform",
    "page": "Docstrings",
    "title": "GDAL.setgeotransform",
    "category": "function",
    "text": "GDALSetGeoTransform(GDALDatasetH hDS,\n                    double * padfTransform) -> CPLErr\n\nSet the affine transformation coefficients.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgh",
    "page": "Docstrings",
    "title": "GDAL.setgh",
    "category": "function",
    "text": "OSRSetGH(OGRSpatialReferenceH hSRS,\n         double dfCentralMeridian,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nGoode Homolosine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgnomonic",
    "page": "Docstrings",
    "title": "GDAL.setgnomonic",
    "category": "function",
    "text": "OSRSetGnomonic(OGRSpatialReferenceH hSRS,\n               double dfCenterLat,\n               double dfCenterLong,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nGnomonic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setgs",
    "page": "Docstrings",
    "title": "GDAL.setgs",
    "category": "function",
    "text": "OSRSetGS(OGRSpatialReferenceH hSRS,\n         double dfCentralMeridian,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nGall Stereograpic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.sethom",
    "page": "Docstrings",
    "title": "GDAL.sethom",
    "category": "function",
    "text": "OSRSetHOM(OGRSpatialReferenceH hSRS,\n          double dfCenterLat,\n          double dfCenterLong,\n          double dfAzimuth,\n          double dfRectToSkew,\n          double dfScale,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nSet a Hotine Oblique Mercator projection using azimuth angle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.sethom2pno",
    "page": "Docstrings",
    "title": "GDAL.sethom2pno",
    "category": "function",
    "text": "OSRSetHOM2PNO(OGRSpatialReferenceH hSRS,\n              double dfCenterLat,\n              double dfLat1,\n              double dfLong1,\n              double dfLat2,\n              double dfLong2,\n              double dfScale,\n              double dfFalseEasting,\n              double dfFalseNorthing) -> OGRErr\n\nSet a Hotine Oblique Mercator projection using two points on projection centerline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.sethomac",
    "page": "Docstrings",
    "title": "GDAL.sethomac",
    "category": "function",
    "text": "OSRSetHOMAC(OGRSpatialReferenceH hSRS,\n            double dfCenterLat,\n            double dfCenterLong,\n            double dfAzimuth,\n            double dfRectToSkew,\n            double dfScale,\n            double dfFalseEasting,\n            double dfFalseNorthing) -> OGRErr\n\nSet an Oblique Mercator projection using azimuth angle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setigh",
    "page": "Docstrings",
    "title": "GDAL.setigh",
    "category": "function",
    "text": "OSRSetIGH(OGRSpatialReferenceH hSRS) -> OGRErr\n\nInterrupted Goode Homolosine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setignored",
    "page": "Docstrings",
    "title": "GDAL.setignored",
    "category": "function",
    "text": "OGR_Fld_SetIgnored(OGRFieldDefnH hDefn,\n                   int ignore) -> void\n\nSet whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the field definition\nignore: ignore state\n\n\n\n\n\nOGR_GFld_SetIgnored(OGRGeomFieldDefnH hDefn,\n                    int ignore) -> void\n\nSet whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the geometry field definition\nignore: ignore state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setignoredfields",
    "page": "Docstrings",
    "title": "GDAL.setignoredfields",
    "category": "function",
    "text": "OGR_L_SetIgnoredFields(OGRLayerH,\n                       const char **) -> OGRErr\n\nSet which fields can be omitted when retrieving features from the layer.\n\nParameters\n\npapszFields: an array of field names terminated by NULL item. If NULL is passed, the ignored list is cleared.\n\nReturns\n\nOGRERR_NONE if all field names have been resolved (even if the driver does not support this method)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setiwmpolyconic",
    "page": "Docstrings",
    "title": "GDAL.setiwmpolyconic",
    "category": "function",
    "text": "OSRSetIWMPolyconic(OGRSpatialReferenceH hSRS,\n                   double dfLat1,\n                   double dfLat2,\n                   double dfCenterLong,\n                   double dfFalseEasting,\n                   double dfFalseNorthing) -> OGRErr\n\nInternational Map of the World Polyconic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setjustify",
    "page": "Docstrings",
    "title": "GDAL.setjustify",
    "category": "function",
    "text": "OGR_Fld_SetJustify(OGRFieldDefnH hDefn,\n                   OGRJustification eJustify) -> void\n\nSet the justification for this field.\n\nParameters\n\nhDefn: handle to the field definition to set justification to.\neJustify: the new justification.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setkrovak",
    "page": "Docstrings",
    "title": "GDAL.setkrovak",
    "category": "function",
    "text": "OSRSetKrovak(OGRSpatialReferenceH hSRS,\n             double dfCenterLat,\n             double dfCenterLong,\n             double dfAzimuth,\n             double dfPseudoStdParallel1,\n             double dfScale,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nKrovak Oblique Conic Conformal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlaea",
    "page": "Docstrings",
    "title": "GDAL.setlaea",
    "category": "function",
    "text": "OSRSetLAEA(OGRSpatialReferenceH hSRS,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nLambert Azimuthal Equal-Area.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlcc",
    "page": "Docstrings",
    "title": "GDAL.setlcc",
    "category": "function",
    "text": "OSRSetLCC(OGRSpatialReferenceH hSRS,\n          double dfStdP1,\n          double dfStdP2,\n          double dfCenterLat,\n          double dfCenterLong,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nLambert Conformal Conic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlcc1sp",
    "page": "Docstrings",
    "title": "GDAL.setlcc1sp",
    "category": "function",
    "text": "OSRSetLCC1SP(OGRSpatialReferenceH hSRS,\n             double dfCenterLat,\n             double dfCenterLong,\n             double dfScale,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nLambert Conformal Conic 1SP.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlccb",
    "page": "Docstrings",
    "title": "GDAL.setlccb",
    "category": "function",
    "text": "OSRSetLCCB(OGRSpatialReferenceH hSRS,\n           double dfStdP1,\n           double dfStdP2,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nLambert Conformal Conic (Belgium)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlinearunits",
    "page": "Docstrings",
    "title": "GDAL.setlinearunits",
    "category": "function",
    "text": "OSRSetLinearUnits(OGRSpatialReferenceH hSRS,\n                  const char * pszUnits,\n                  double dfInMeters) -> OGRErr\n\nSet the linear units for the projection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlinearunitsandupdateparameters",
    "page": "Docstrings",
    "title": "GDAL.setlinearunitsandupdateparameters",
    "category": "function",
    "text": "OSRSetLinearUnitsAndUpdateParameters(OGRSpatialReferenceH hSRS,\n                                     const char * pszUnits,\n                                     double dfInMeters) -> OGRErr\n\nSet the linear units for the projection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setlocalcs",
    "page": "Docstrings",
    "title": "GDAL.setlocalcs",
    "category": "function",
    "text": "OSRSetLocalCS(OGRSpatialReferenceH hSRS,\n              const char * pszName) -> OGRErr\n\nSet the user visible LOCAL_CS name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmc",
    "page": "Docstrings",
    "title": "GDAL.setmc",
    "category": "function",
    "text": "OSRSetMC(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nMiller Cylindrical.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmeasured",
    "page": "Docstrings",
    "title": "GDAL.setmeasured",
    "category": "function",
    "text": "OGR_G_SetMeasured(OGRGeometryH hGeom,\n                  int bIsMeasured) -> void\n\nAdd or remove the M coordinate dimension.\n\nParameters\n\nhGeom: handle on the geometry to set or unset the M dimension.\nbIsMeasured: Should the geometry have a M dimension, either TRUE or FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmercator",
    "page": "Docstrings",
    "title": "GDAL.setmercator",
    "category": "function",
    "text": "OSRSetMercator(OGRSpatialReferenceH hSRS,\n               double dfCenterLat,\n               double dfCenterLong,\n               double dfScale,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nMercator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmercator2sp",
    "page": "Docstrings",
    "title": "GDAL.setmercator2sp",
    "category": "function",
    "text": "OSRSetMercator2SP(OGRSpatialReferenceH hSRS,\n                  double dfStdP1,\n                  double dfCenterLat,\n                  double dfCenterLong,\n                  double dfFalseEasting,\n                  double dfFalseNorthing) -> OGRErr\n\nMercator 2SP.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmetadata",
    "page": "Docstrings",
    "title": "GDAL.setmetadata",
    "category": "function",
    "text": "GDALSetMetadata(GDALMajorObjectH hObject,\n                char ** papszMD,\n                const char * pszDomain) -> CPLErr\n\nSet metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmetadataitem",
    "page": "Docstrings",
    "title": "GDAL.setmetadataitem",
    "category": "function",
    "text": "GDALSetMetadataItem(GDALMajorObjectH hObject,\n                    const char * pszName,\n                    const char * pszValue,\n                    const char * pszDomain) -> CPLErr\n\nSet single metadata item.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setmollweide",
    "page": "Docstrings",
    "title": "GDAL.setmollweide",
    "category": "function",
    "text": "OSRSetMollweide(OGRSpatialReferenceH hSRS,\n                double dfCentralMeridian,\n                double dfFalseEasting,\n                double dfFalseNorthing) -> OGRErr\n\nMollweide.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setname",
    "page": "Docstrings",
    "title": "GDAL.setname",
    "category": "function",
    "text": "OGR_Fld_SetName(OGRFieldDefnH hDefn,\n                const char * pszName) -> void\n\nReset the name of this field.\n\nParameters\n\nhDefn: handle to the field definition to apply the new name to.\npszName: the new name to apply.\n\n\n\n\n\nOGR_GFld_SetName(OGRGeomFieldDefnH hDefn,\n                 const char * pszName) -> void\n\nReset the name of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition to apply the new name to.\npszName: the new name to apply.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnativedata",
    "page": "Docstrings",
    "title": "GDAL.setnativedata",
    "category": "function",
    "text": "OGR_F_SetNativeData(OGRFeatureH hFeat,\n                    const char * pszNativeData) -> void\n\nSets the native data for the feature.\n\nParameters\n\nhFeat: handle to the feature.\npszNativeData: a string with the native data, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnativemediatype",
    "page": "Docstrings",
    "title": "GDAL.setnativemediatype",
    "category": "function",
    "text": "OGR_F_SetNativeMediaType(OGRFeatureH hFeat,\n                         const char * pszNativeMediaType) -> void\n\nSets the native media type for the feature.\n\nParameters\n\nhFeat: handle to the feature.\npszNativeMediaType: a string with the native media type, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnextbyindex",
    "page": "Docstrings",
    "title": "GDAL.setnextbyindex",
    "category": "function",
    "text": "OGR_L_SetNextByIndex(OGRLayerH,\n                     GIntBig) -> OGRErr\n\nMove read cursor to the nIndex\'th feature in the current resultset.\n\nParameters\n\nhLayer: handle to the layer\nnIndex: the index indicating how many steps into the result set to seek.\n\nReturns\n\nOGRERR_NONE on success or an error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnonlineargeometriesenabledflag",
    "page": "Docstrings",
    "title": "GDAL.setnonlineargeometriesenabledflag",
    "category": "function",
    "text": "OGRSetNonLinearGeometriesEnabledFlag(int bFlag) -> void\n\nSet flag to enable/disable returning non-linear geometries in the C API.\n\nParameters\n\nbFlag: TRUE if non-linear geometries might be returned (default value). FALSE to ask for non-linear geometries to be approximated as linear geometries.\n\nReturns\n\na point or NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnormprojparm",
    "page": "Docstrings",
    "title": "GDAL.setnormprojparm",
    "category": "function",
    "text": "OSRSetNormProjParm(OGRSpatialReferenceH hSRS,\n                   const char * pszParmName,\n                   double dfValue) -> OGRErr\n\nSet a projection parameter with a normalized value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnullable",
    "page": "Docstrings",
    "title": "GDAL.setnullable",
    "category": "function",
    "text": "OGR_Fld_SetNullable(OGRFieldDefnH hDefn,\n                    int bNullableIn) -> void\n\nSet whether this field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\nbNullableIn: FALSE if the field must have a not-null constraint.\n\n\n\n\n\nOGR_GFld_SetNullable(OGRGeomFieldDefnH hDefn,\n                     int bNullableIn) -> void\n\nSet whether this geometry field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\nbNullableIn: FALSE if the field must have a not-null constraint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setnzmg",
    "page": "Docstrings",
    "title": "GDAL.setnzmg",
    "category": "function",
    "text": "OSRSetNZMG(OGRSpatialReferenceH hSRS,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nNew Zealand Map Grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setom",
    "page": "Docstrings",
    "title": "GDAL.setom",
    "category": "function",
    "text": "OSRSetOM(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfAzimuth,\n         double dfRectToSkew,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nOblique Mercator (aka HOM (variant B)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setorthographic",
    "page": "Docstrings",
    "title": "GDAL.setorthographic",
    "category": "function",
    "text": "OSRSetOrthographic(OGRSpatialReferenceH hSRS,\n                   double dfCenterLat,\n                   double dfCenterLong,\n                   double dfFalseEasting,\n                   double dfFalseNorthing) -> OGRErr\n\nOrthographic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setos",
    "page": "Docstrings",
    "title": "GDAL.setos",
    "category": "function",
    "text": "OSRSetOS(OGRSpatialReferenceH hSRS,\n         double dfOriginLat,\n         double dfCMeridian,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nOblique Stereographic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setparamdbl",
    "page": "Docstrings",
    "title": "GDAL.setparamdbl",
    "category": "function",
    "text": "OGR_ST_SetParamDbl(OGRStyleToolH hST,\n                   int eParam,\n                   double dfValue) -> void\n\nSet Style Tool parameter value from a double.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\ndfValue: the new parameter value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setparamnum",
    "page": "Docstrings",
    "title": "GDAL.setparamnum",
    "category": "function",
    "text": "OGR_ST_SetParamNum(OGRStyleToolH hST,\n                   int eParam,\n                   int nValue) -> void\n\nSet Style Tool parameter value from an integer.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nnValue: the new parameter value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setparamstr",
    "page": "Docstrings",
    "title": "GDAL.setparamstr",
    "category": "function",
    "text": "OGR_ST_SetParamStr(OGRStyleToolH hST,\n                   int eParam,\n                   const char * pszValue) -> void\n\nSet Style Tool parameter value from a string.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\npszValue: the new parameter value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpoint",
    "page": "Docstrings",
    "title": "GDAL.setpoint",
    "category": "function",
    "text": "OGR_G_SetPoint(OGRGeometryH hGeom,\n               int i,\n               double dfX,\n               double dfY,\n               double dfZ) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\ndfZ: input Z coordinate to assign (defaults to zero).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpoint_2d",
    "page": "Docstrings",
    "title": "GDAL.setpoint_2d",
    "category": "function",
    "text": "OGR_G_SetPoint_2D(OGRGeometryH hGeom,\n                  int i,\n                  double dfX,\n                  double dfY) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpointcount",
    "page": "Docstrings",
    "title": "GDAL.setpointcount",
    "category": "function",
    "text": "OGR_G_SetPointCount(OGRGeometryH hGeom,\n                    int nNewPointCount) -> void\n\nSet number of points in a geometry.\n\nParameters\n\nhGeom: handle to the geometry.\nnNewPointCount: the new number of points for geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpointm",
    "page": "Docstrings",
    "title": "GDAL.setpointm",
    "category": "function",
    "text": "OGR_G_SetPointM(OGRGeometryH hGeom,\n                int i,\n                double dfX,\n                double dfY,\n                double dfM) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\ndfM: input M coordinate to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpoints",
    "page": "Docstrings",
    "title": "GDAL.setpoints",
    "category": "function",
    "text": "OGR_G_SetPoints(OGRGeometryH hGeom,\n                int nPointsIn,\n                void * pabyX,\n                int nXStride,\n                void * pabyY,\n                int nYStride,\n                void * pabyZ,\n                int nZStride) -> void\n\nAssign all points in a point or a line string geometry.\n\nParameters\n\nhGeom: handle to the geometry to set the coordinates.\nnPointsIn: number of points being passed in padfX and padfY.\npabyX: list of X coordinates (double values) of points being assigned.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: list of Y coordinates (double values) of points being assigned.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: list of Z coordinates (double values) of points being assigned (defaults to NULL for 2D objects).\nnZStride: the number of bytes between 2 elements of pabyZ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpointszm",
    "page": "Docstrings",
    "title": "GDAL.setpointszm",
    "category": "function",
    "text": "OGR_G_SetPointsZM(OGRGeometryH hGeom,\n                  int nPointsIn,\n                  void * pabyX,\n                  int nXStride,\n                  void * pabyY,\n                  int nYStride,\n                  void * pabyZ,\n                  int nZStride,\n                  void * pabyM,\n                  int nMStride) -> void\n\nAssign all points in a point or a line string geometry.\n\nParameters\n\nhGeom: handle to the geometry to set the coordinates.\nnPointsIn: number of points being passed in padfX and padfY.\npabyX: list of X coordinates (double values) of points being assigned.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: list of Y coordinates (double values) of points being assigned.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: list of Z coordinates (double values) of points being assigned (if not NULL, upgrades the geometry to have Z coordinate).\nnZStride: the number of bytes between 2 elements of pabyZ.\npabyM: list of M coordinates (double values) of points being assigned (if not NULL, upgrades the geometry to have M coordinate).\nnMStride: the number of bytes between 2 elements of pabyM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpointzm",
    "page": "Docstrings",
    "title": "GDAL.setpointzm",
    "category": "function",
    "text": "OGR_G_SetPointZM(OGRGeometryH hGeom,\n                 int i,\n                 double dfX,\n                 double dfY,\n                 double dfZ,\n                 double dfM) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\ndfZ: input Z coordinate to assign.\ndfM: input M coordinate to assign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setpolyconic",
    "page": "Docstrings",
    "title": "GDAL.setpolyconic",
    "category": "function",
    "text": "OSRSetPolyconic(OGRSpatialReferenceH hSRS,\n                double dfCenterLat,\n                double dfCenterLong,\n                double dfFalseEasting,\n                double dfFalseNorthing) -> OGRErr\n\nPolyconic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setprecision",
    "page": "Docstrings",
    "title": "GDAL.setprecision",
    "category": "function",
    "text": "OGR_Fld_SetPrecision(OGRFieldDefnH hDefn,\n                     int nPrecision) -> void\n\nSet the formatting precision for this field in characters.\n\nParameters\n\nhDefn: handle to the field definition to set precision to.\nnPrecision: the new precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setprojcs",
    "page": "Docstrings",
    "title": "GDAL.setprojcs",
    "category": "function",
    "text": "OSRSetProjCS(OGRSpatialReferenceH hSRS,\n             const char * pszName) -> OGRErr\n\nSet the user visible PROJCS name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setprojection",
    "page": "Docstrings",
    "title": "GDAL.setprojection",
    "category": "function",
    "text": "GDALSetProjection(GDALDatasetH hDS,\n                  const char * pszProjection) -> CPLErr\n\nSet the projection reference string for this dataset.\n\n\n\n\n\nOSRSetProjection(OGRSpatialReferenceH hSRS,\n                 const char * pszProjection) -> OGRErr\n\nSet a projection name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setprojparm",
    "page": "Docstrings",
    "title": "GDAL.setprojparm",
    "category": "function",
    "text": "OSRSetProjParm(OGRSpatialReferenceH hSRS,\n               const char * pszParmName,\n               double dfValue) -> OGRErr\n\nSet a projection parameter value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setps",
    "page": "Docstrings",
    "title": "GDAL.setps",
    "category": "function",
    "text": "OSRSetPS(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nPolar Stereographic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setqsc",
    "page": "Docstrings",
    "title": "GDAL.setqsc",
    "category": "function",
    "text": "OSRSetQSC(OGRSpatialReferenceH hSRS,\n          double dfCenterLat,\n          double dfCenterLong) -> OGRErr\n\nQuadrilateralized Spherical Cube.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrastercategorynames",
    "page": "Docstrings",
    "title": "GDAL.setrastercategorynames",
    "category": "function",
    "text": "GDALSetRasterCategoryNames(GDALRasterBandH hBand,\n                           char ** papszNames) -> CPLErr\n\nSet the category names for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrastercolorinterpretation",
    "page": "Docstrings",
    "title": "GDAL.setrastercolorinterpretation",
    "category": "function",
    "text": "GDALSetRasterColorInterpretation(GDALRasterBandH hBand,\n                                 GDALColorInterp eColorInterp) -> CPLErr\n\nSet color interpretation of a band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrastercolortable",
    "page": "Docstrings",
    "title": "GDAL.setrastercolortable",
    "category": "function",
    "text": "GDALSetRasterColorTable(GDALRasterBandH hBand,\n                        GDALColorTableH hCT) -> CPLErr\n\nSet the raster color table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrasternodatavalue",
    "page": "Docstrings",
    "title": "GDAL.setrasternodatavalue",
    "category": "function",
    "text": "GDALSetRasterNoDataValue(GDALRasterBandH hBand,\n                         double dfValue) -> CPLErr\n\nSet the no data value for this band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrasteroffset",
    "page": "Docstrings",
    "title": "GDAL.setrasteroffset",
    "category": "function",
    "text": "GDALSetRasterOffset(GDALRasterBandH hBand,\n                    double dfNewOffset) -> CPLErr\n\nSet scaling offset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrasterscale",
    "page": "Docstrings",
    "title": "GDAL.setrasterscale",
    "category": "function",
    "text": "GDALSetRasterScale(GDALRasterBandH hBand,\n                   double dfNewOffset) -> CPLErr\n\nSet scaling ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrasterstatistics",
    "page": "Docstrings",
    "title": "GDAL.setrasterstatistics",
    "category": "function",
    "text": "GDALSetRasterStatistics(GDALRasterBandH hBand,\n                        double dfMin,\n                        double dfMax,\n                        double dfMean,\n                        double dfStdDev) -> CPLErr\n\nSet statistics on band.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrasterunittype",
    "page": "Docstrings",
    "title": "GDAL.setrasterunittype",
    "category": "function",
    "text": "GDALSetRasterUnitType(GDALRasterBandH hBand,\n                      const char * pszNewValue) -> CPLErr\n\nSet unit type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setrobinson",
    "page": "Docstrings",
    "title": "GDAL.setrobinson",
    "category": "function",
    "text": "OSRSetRobinson(OGRSpatialReferenceH hSRS,\n               double dfCenterLong,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nRobinson.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setsch",
    "page": "Docstrings",
    "title": "GDAL.setsch",
    "category": "function",
    "text": "OSRSetSCH(OGRSpatialReferenceH hSRS,\n          double dfPegLat,\n          double dfPegLong,\n          double dfPegHeading,\n          double dfPegHgt) -> OGRErr\n\nSpherical, Cross-track, Height.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setsinusoidal",
    "page": "Docstrings",
    "title": "GDAL.setsinusoidal",
    "category": "function",
    "text": "OSRSetSinusoidal(OGRSpatialReferenceH hSRS,\n                 double dfCenterLong,\n                 double dfFalseEasting,\n                 double dfFalseNorthing) -> OGRErr\n\nSinusoidal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setsoc",
    "page": "Docstrings",
    "title": "GDAL.setsoc",
    "category": "function",
    "text": "OSRSetSOC(OGRSpatialReferenceH hSRS,\n          double dfLatitudeOfOrigin,\n          double dfCentralMeridian,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nSwiss Oblique Cylindrical.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setspatialfilter",
    "page": "Docstrings",
    "title": "GDAL.setspatialfilter",
    "category": "function",
    "text": "OGR_L_SetSpatialFilter(OGRLayerH,\n                       OGRGeometryH) -> void\n\nSet a new spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\nhGeom: handle to the geometry to use as a filtering region. NULL may be passed indicating that the current spatial filter should be cleared, but no new one instituted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setspatialfilterex",
    "page": "Docstrings",
    "title": "GDAL.setspatialfilterex",
    "category": "function",
    "text": "OGR_L_SetSpatialFilterEx(OGRLayerH,\n                         int iGeomField,\n                         OGRGeometryH hGeom) -> void\n\nSet a new spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\niGeomField: index of the geometry field on which the spatial filter operates.\nhGeom: handle to the geometry to use as a filtering region. NULL may be passed indicating that the current spatial filter should be cleared, but no new one instituted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setspatialfilterrect",
    "page": "Docstrings",
    "title": "GDAL.setspatialfilterrect",
    "category": "function",
    "text": "OGR_L_SetSpatialFilterRect(OGRLayerH,\n                           double,\n                           double,\n                           double,\n                           double) -> void\n\nSet a new rectangular spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\ndfMinX: the minimum X coordinate for the rectangular region.\ndfMinY: the minimum Y coordinate for the rectangular region.\ndfMaxX: the maximum X coordinate for the rectangular region.\ndfMaxY: the maximum Y coordinate for the rectangular region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setspatialfilterrectex",
    "page": "Docstrings",
    "title": "GDAL.setspatialfilterrectex",
    "category": "function",
    "text": "OGR_L_SetSpatialFilterRectEx(OGRLayerH,\n                             int iGeomField,\n                             double dfMinX,\n                             double dfMinY,\n                             double dfMaxX,\n                             double dfMaxY) -> void\n\nSet a new rectangular spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\niGeomField: index of the geometry field on which the spatial filter operates.\ndfMinX: the minimum X coordinate for the rectangular region.\ndfMinY: the minimum Y coordinate for the rectangular region.\ndfMaxX: the maximum X coordinate for the rectangular region.\ndfMaxY: the maximum Y coordinate for the rectangular region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setspatialref",
    "page": "Docstrings",
    "title": "GDAL.setspatialref",
    "category": "function",
    "text": "OGR_GFld_SetSpatialRef(OGRGeomFieldDefnH hDefn,\n                       OGRSpatialReferenceH hSRS) -> void\n\nSet the spatial reference of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition\nhSRS: the new SRS to apply.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstateplane",
    "page": "Docstrings",
    "title": "GDAL.setstateplane",
    "category": "function",
    "text": "OSRSetStatePlane(OGRSpatialReferenceH hSRS,\n                 int nZone,\n                 int bNAD83) -> OGRErr\n\nSet State Plane projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstateplanewithunits",
    "page": "Docstrings",
    "title": "GDAL.setstateplanewithunits",
    "category": "function",
    "text": "OSRSetStatePlaneWithUnits(OGRSpatialReferenceH hSRS,\n                          int nZone,\n                          int bNAD83,\n                          const char * pszOverrideUnitName,\n                          double dfOverrideUnit) -> OGRErr\n\nSet State Plane projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstereographic",
    "page": "Docstrings",
    "title": "GDAL.setstereographic",
    "category": "function",
    "text": "OSRSetStereographic(OGRSpatialReferenceH hSRS,\n                    double dfOriginLat,\n                    double dfCMeridian,\n                    double dfScale,\n                    double dfFalseEasting,\n                    double dfFalseNorthing) -> OGRErr\n\nStereographic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstyleignored",
    "page": "Docstrings",
    "title": "GDAL.setstyleignored",
    "category": "function",
    "text": "OGR_FD_SetStyleIgnored(OGRFeatureDefnH hDefn,\n                       int bIgnore) -> void\n\nSet whether the style can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\nbIgnore: ignore state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstylestring",
    "page": "Docstrings",
    "title": "GDAL.setstylestring",
    "category": "function",
    "text": "OGR_F_SetStyleString(OGRFeatureH hFeat,\n                     const char * pszStyle) -> void\n\nSet feature style string.\n\nParameters\n\nhFeat: handle to the feature to set style to.\npszStyle: the style string to apply to this feature, cannot be NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstylestringdirectly",
    "page": "Docstrings",
    "title": "GDAL.setstylestringdirectly",
    "category": "function",
    "text": "OGR_F_SetStyleStringDirectly(OGRFeatureH hFeat,\n                             char * pszStyle) -> void\n\nSet feature style string.\n\nParameters\n\nhFeat: handle to the feature to set style to.\npszStyle: the style string to apply to this feature, cannot be NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstyletable",
    "page": "Docstrings",
    "title": "GDAL.setstyletable",
    "category": "function",
    "text": "OGR_F_SetStyleTable(OGRFeatureH hFeat,\n                    OGRStyleTableH hStyleTable) -> void\n\nSet style table.\n\n\n\n\n\nOGR_L_SetStyleTable(OGRLayerH hLayer,\n                    OGRStyleTableH hStyleTable) -> void\n\nSet style table.\n\n\n\n\n\nOGR_DS_SetStyleTable(OGRDataSourceH hDS,\n                     OGRStyleTableH hStyleTable) -> void\n\nSet style table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setstyletabledirectly",
    "page": "Docstrings",
    "title": "GDAL.setstyletabledirectly",
    "category": "function",
    "text": "OGR_F_SetStyleTableDirectly(OGRFeatureH hFeat,\n                            OGRStyleTableH hStyleTable) -> void\n\nSet style table and take ownership.\n\n\n\n\n\nOGR_L_SetStyleTableDirectly(OGRLayerH hLayer,\n                            OGRStyleTableH hStyleTable) -> void\n\nSet style table (and take ownership)\n\n\n\n\n\nOGR_DS_SetStyleTableDirectly(OGRDataSourceH hDS,\n                             OGRStyleTableH hStyleTable) -> void\n\nSet style table (and take ownership)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setsubtype",
    "page": "Docstrings",
    "title": "GDAL.setsubtype",
    "category": "function",
    "text": "OGR_Fld_SetSubType(OGRFieldDefnH hDefn,\n                   OGRFieldSubType eSubType) -> void\n\nSet the subtype of this field.\n\nParameters\n\nhDefn: handle to the field definition to set type to.\neSubType: the new field subtype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settargetlinearunits",
    "page": "Docstrings",
    "title": "GDAL.settargetlinearunits",
    "category": "function",
    "text": "OSRSetTargetLinearUnits(OGRSpatialReferenceH hSRS,\n                        const char * pszTargetKey,\n                        const char * pszUnits,\n                        double dfInMeters) -> OGRErr\n\nSet the linear units for the target node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settm",
    "page": "Docstrings",
    "title": "GDAL.settm",
    "category": "function",
    "text": "OSRSetTM(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nTransverse Mercator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settmg",
    "page": "Docstrings",
    "title": "GDAL.settmg",
    "category": "function",
    "text": "OSRSetTMG(OGRSpatialReferenceH hSRS,\n          double dfCenterLat,\n          double dfCenterLong,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nTunesia Mining Grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settmso",
    "page": "Docstrings",
    "title": "GDAL.settmso",
    "category": "function",
    "text": "OSRSetTMSO(OGRSpatialReferenceH hSRS,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfScale,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nTransverse Mercator (South Oriented)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settmvariant",
    "page": "Docstrings",
    "title": "GDAL.settmvariant",
    "category": "function",
    "text": "OSRSetTMVariant(OGRSpatialReferenceH hSRS,\n                const char * pszVariantName,\n                double dfCenterLat,\n                double dfCenterLong,\n                double dfScale,\n                double dfFalseEasting,\n                double dfFalseNorthing) -> OGRErr\n\nTransverse Mercator variant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settowgs84",
    "page": "Docstrings",
    "title": "GDAL.settowgs84",
    "category": "function",
    "text": "OSRSetTOWGS84(OGRSpatialReferenceH hSRS,\n              double dfDX,\n              double dfDY,\n              double dfDZ,\n              double dfEX,\n              double dfEY,\n              double dfEZ,\n              double dfPPM) -> OGRErr\n\nSet the Bursa-Wolf conversion to WGS84.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settped",
    "page": "Docstrings",
    "title": "GDAL.settped",
    "category": "function",
    "text": "OSRSetTPED(OGRSpatialReferenceH hSRS,\n           double dfLat1,\n           double dfLong1,\n           double dfLat2,\n           double dfLong2,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nTPED (Two Point Equi Distant)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settransformerdstgeotransform",
    "page": "Docstrings",
    "title": "GDAL.settransformerdstgeotransform",
    "category": "function",
    "text": "GDALSetTransformerDstGeoTransform(void * pTransformArg,\n                                  const double * padfGeoTransform) -> void\n\nSet ApproxTransformer or GenImgProj output geotransform.\n\nParameters\n\npTransformArg: the handle to update.\npadfGeoTransform: the destination geotransform to apply (six doubles).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.settype",
    "page": "Docstrings",
    "title": "GDAL.settype",
    "category": "function",
    "text": "OGR_Fld_SetType(OGRFieldDefnH hDefn,\n                OGRFieldType eType) -> void\n\nSet the type of this field.\n\nParameters\n\nhDefn: handle to the field definition to set type to.\neType: the new field type.\n\n\n\n\n\nOGR_GFld_SetType(OGRGeomFieldDefnH hDefn,\n                 OGRwkbGeometryType eType) -> void\n\nSet the geometry type of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition to set type to.\neType: the new field geometry type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setunit",
    "page": "Docstrings",
    "title": "GDAL.setunit",
    "category": "function",
    "text": "OGR_ST_SetUnit(OGRStyleToolH hST,\n               OGRSTUnitId eUnit,\n               double dfGroundPaperScale) -> void\n\nSet Style Tool units.\n\nParameters\n\nhST: handle to the style tool.\neUnit: the new unit.\ndfGroundPaperScale: ground to paper scale factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setutm",
    "page": "Docstrings",
    "title": "GDAL.setutm",
    "category": "function",
    "text": "OSRSetUTM(OGRSpatialReferenceH hSRS,\n          int nZone,\n          int bNorth) -> OGRErr\n\nSet UTM projection definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setvdg",
    "page": "Docstrings",
    "title": "GDAL.setvdg",
    "category": "function",
    "text": "OSRSetVDG(OGRSpatialReferenceH hSRS,\n          double dfCentralMeridian,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nVanDerGrinten.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setvertcs",
    "page": "Docstrings",
    "title": "GDAL.setvertcs",
    "category": "function",
    "text": "OSRSetVertCS(OGRSpatialReferenceH hSRS,\n             const char * pszVertCSName,\n             const char * pszVertDatumName,\n             int nVertDatumType) -> OGRErr\n\nSetup the vertical coordinate system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setwagner",
    "page": "Docstrings",
    "title": "GDAL.setwagner",
    "category": "function",
    "text": "OSRSetWagner(OGRSpatialReferenceH hSRS,\n             int nVariation,\n             double dfCenterLat,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nWagner I  VII.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setwellknowngeogcs",
    "page": "Docstrings",
    "title": "GDAL.setwellknowngeogcs",
    "category": "function",
    "text": "OSRSetWellKnownGeogCS(OGRSpatialReferenceH hSRS,\n                      const char * pszName) -> OGRErr\n\nSet a GeogCS based on well known name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.setwidth",
    "page": "Docstrings",
    "title": "GDAL.setwidth",
    "category": "function",
    "text": "OGR_Fld_SetWidth(OGRFieldDefnH hDefn,\n                 int nNewWidth) -> void\n\nSet the formatting width for this field in characters.\n\nParameters\n\nhDefn: handle to the field definition to set width to.\nnNewWidth: the new width.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.sievefilter",
    "page": "Docstrings",
    "title": "GDAL.sievefilter",
    "category": "function",
    "text": "GDALSieveFilter(GDALRasterBandH hSrcBand,\n                GDALRasterBandH hMaskBand,\n                GDALRasterBandH hDstBand,\n                int nSizeThreshold,\n                int nConnectedness,\n                char ** papszOptions,\n                GDALProgressFunc pfnProgress,\n                void * pProgressArg) -> CPLErr\n\nRemoves small raster polygons.\n\nParameters\n\nhSrcBand: the source raster band to be processed.\nhMaskBand: an optional mask band. All pixels in the mask band with a value other than zero will be considered suitable for inclusion in polygons.\nhDstBand: the output raster band. It may be the same as hSrcBand to update the source in place.\nnSizeThreshold: raster polygons with sizes smaller than this will be merged into their largest neighbour.\nnConnectedness: either 4 indicating that diagonal pixels are not considered directly adjacent for polygon membership purposes or 8 indicating they are.\npapszOptions: algorithm options in name=value list form. None currently supported.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.simpleimagewarp",
    "page": "Docstrings",
    "title": "GDAL.simpleimagewarp",
    "category": "function",
    "text": "GDALSimpleImageWarp(GDALDatasetH hSrcDS,\n                    GDALDatasetH hDstDS,\n                    int nBandCount,\n                    int * panBandList,\n                    GDALTransformerFunc pfnTransform,\n                    void * pTransformArg,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg,\n                    char ** papszWarpOptions) -> int\n\nPerform simple image warp.\n\nParameters\n\nhSrcDS: the source image dataset.\nhDstDS: the destination image dataset.\nnBandCount: the number of bands to be warped. If zero, all bands will be processed.\npanBandList: the list of bands to translate.\npfnTransform: the transformation function to call. See GDALTransformerFunc().\npTransformArg: the callback handle to pass to pfnTransform.\npfnProgress: the function used to report progress. See GDALProgressFunc().\npProgressArg: the callback handle to pass to pfnProgress.\npapszWarpOptions: additional options controlling the warp.\n\nReturns\n\nTRUE if the operation completes, or FALSE if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.simplify",
    "page": "Docstrings",
    "title": "GDAL.simplify",
    "category": "function",
    "text": "OGR_G_Simplify(OGRGeometryH hThis,\n               double dTolerance) -> OGRGeometryH\n\nCompute a simplified geometry.\n\nParameters\n\nhThis: the geometry.\ndTolerance: the distance tolerance for the simplification.\n\nReturns\n\nthe simplified geometry or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.simplifypreservetopology",
    "page": "Docstrings",
    "title": "GDAL.simplifypreservetopology",
    "category": "function",
    "text": "OGR_G_SimplifyPreserveTopology(OGRGeometryH hThis,\n                               double dTolerance) -> OGRGeometryH\n\nSimplify the geometry while preserving topology.\n\nParameters\n\nhThis: the geometry.\ndTolerance: the distance tolerance for the simplification.\n\nReturns\n\nthe simplified geometry or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.sm_create",
    "page": "Docstrings",
    "title": "GDAL.sm_create",
    "category": "function",
    "text": "OGR_SM_Create(OGRStyleTableH hStyleTable) -> OGRStyleMgrH\n\nOGRStyleMgr factory.\n\nParameters\n\nhStyleTable: pointer to OGRStyleTable or NULL if not working with a style table.\n\nReturns\n\nan handle to the new style manager object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.st_create",
    "page": "Docstrings",
    "title": "GDAL.st_create",
    "category": "function",
    "text": "OGR_ST_Create(OGRSTClassId eClassId) -> OGRStyleToolH\n\nOGRStyleTool factory.\n\nParameters\n\neClassId: subclass of style tool to create. One of OGRSTCPen (1), OGRSTCBrush (2), OGRSTCSymbol (3) or OGRSTCLabel (4).\n\nReturns\n\nan handle to the new style tool object or NULL if the creation failed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.starttransaction",
    "page": "Docstrings",
    "title": "GDAL.starttransaction",
    "category": "function",
    "text": "OGR_L_StartTransaction(OGRLayerH) -> OGRErr\n\nFor datasources which support transactions, StartTransaction creates a transaction.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.stbl_create",
    "page": "Docstrings",
    "title": "GDAL.stbl_create",
    "category": "function",
    "text": "OGR_STBL_Create(void) -> OGRStyleTableH\n\nOGRStyleTable factory.\n\nReturns\n\nan handle to the new style table object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.stealgeometry",
    "page": "Docstrings",
    "title": "GDAL.stealgeometry",
    "category": "function",
    "text": "OGR_F_StealGeometry(OGRFeatureH hFeat) -> OGRGeometryH\n\nTake away ownership of geometry.\n\nReturns\n\nthe pointer to the geometry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.stripctparms",
    "page": "Docstrings",
    "title": "GDAL.stripctparms",
    "category": "function",
    "text": "OSRStripCTParms(OGRSpatialReferenceH hSRS) -> OGRErr\n\nStrip OGC CT Parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.suggestedwarpoutput",
    "page": "Docstrings",
    "title": "GDAL.suggestedwarpoutput",
    "category": "function",
    "text": "GDALSuggestedWarpOutput(GDALDatasetH hSrcDS,\n                        GDALTransformerFunc pfnTransformer,\n                        void * pTransformArg,\n                        double * padfGeoTransformOut,\n                        int * pnPixels,\n                        int * pnLines) -> CPLErr\n\nSuggest output file size.\n\nParameters\n\nhSrcDS: the input image (it is assumed the whole input images is being transformed).\npfnTransformer: the transformer function.\npTransformArg: the callback data for the transformer function.\npadfGeoTransformOut: the array of six doubles in which the suggested geotransform is returned.\npnPixels: int in which the suggest pixel width of output is returned.\npnLines: int in which the suggest pixel height of output is returned.\n\nReturns\n\nCENone if successful or CEFailure otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.suggestedwarpoutput2",
    "page": "Docstrings",
    "title": "GDAL.suggestedwarpoutput2",
    "category": "function",
    "text": "GDALSuggestedWarpOutput2(GDALDatasetH hSrcDS,\n                         GDALTransformerFunc pfnTransformer,\n                         void * pTransformArg,\n                         double * padfGeoTransformOut,\n                         int * pnPixels,\n                         int * pnLines,\n                         double * padfExtent,\n                         int nOptions) -> CPLErr\n\nSuggest output file size.\n\nParameters\n\nhSrcDS: the input image (it is assumed the whole input images is being transformed).\npfnTransformer: the transformer function.\npTransformArg: the callback data for the transformer function.\npadfGeoTransformOut: the array of six doubles in which the suggested geotransform is returned.\npnPixels: int in which the suggest pixel width of output is returned.\npnLines: int in which the suggest pixel height of output is returned.\npadfExtent: Four entry array to return extents as (xmin, ymin, xmax, ymax).\nnOptions: Options, currently always zero.\n\nReturns\n\nCENone if successful or CEFailure otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.swapwords",
    "page": "Docstrings",
    "title": "GDAL.swapwords",
    "category": "function",
    "text": "GDALSwapWords(void * pData,\n              int nWordSize,\n              int nWordCount,\n              int nWordSkip) -> void\n\nByte swap words in-place.\n\nParameters\n\npData: pointer to start of data buffer.\nnWordSize: size of words being swapped in bytes. Normally 2, 4 or 8.\nnWordCount: the number of words to be swapped in this call.\nnWordSkip: the byte offset from the start of one word to the start of the next. For packed buffers this is the same as nWordSize.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.swapwordsex",
    "page": "Docstrings",
    "title": "GDAL.swapwordsex",
    "category": "function",
    "text": "GDALSwapWordsEx(void * pData,\n                int nWordSize,\n                size_t nWordCount,\n                int nWordSkip) -> void\n\nByte swap words in-place.\n\nParameters\n\npData: pointer to start of data buffer.\nnWordSize: size of words being swapped in bytes. Normally 2, 4 or 8.\nnWordCount: the number of words to be swapped in this call.\nnWordSkip: the byte offset from the start of one word to the start of the next. For packed buffers this is the same as nWordSize.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.symdifference",
    "page": "Docstrings",
    "title": "GDAL.symdifference",
    "category": "function",
    "text": "OGR_G_SymDifference(OGRGeometryH hThis,\n                    OGRGeometryH hOther) -> OGRGeometryH\n\nCompute symmetric difference.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the symmetric difference or NULL if the difference is empty or an error occurs.\n\n\n\n\n\nOGR_L_SymDifference(OGRLayerH pLayerInput,\n                    OGRLayerH pLayerMethod,\n                    OGRLayerH pLayerResult,\n                    char ** papszOptions,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg) -> OGRErr\n\nSymmetrical difference of two layers.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.symmetricdifference",
    "page": "Docstrings",
    "title": "GDAL.symmetricdifference",
    "category": "function",
    "text": "OGR_G_SymmetricDifference(OGRGeometryH hThis,\n                          OGRGeometryH hOther) -> OGRGeometryH\n\nCompute symmetric difference (deprecated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.synctodisk",
    "page": "Docstrings",
    "title": "GDAL.synctodisk",
    "category": "function",
    "text": "OGR_L_SyncToDisk(OGRLayerH) -> OGRErr\n\nFlush pending changes to disk.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE if no error occurs (even if nothing is done) or an error code.\n\n\n\n\n\nOGR_DS_SyncToDisk(OGRDataSourceH) -> OGRErr\n\nFlush pending changes to disk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.testcapability",
    "page": "Docstrings",
    "title": "GDAL.testcapability",
    "category": "function",
    "text": "OGR_L_TestCapability(OGRLayerH,\n                     const char *) -> int\n\nTest if this layer supported the named capability.\n\nParameters\n\nhLayer: handle to the layer to get the capability from.\npszCap: the name of the capability to test.\n\nReturns\n\nTRUE if the layer has the requested capability, or FALSE otherwise. OGRLayers will return FALSE for any unrecognized capabilities.\n\n\n\n\n\nOGR_DS_TestCapability(OGRDataSourceH,\n                      const char *) -> int\n\nTest if capability is available.\n\nParameters\n\nhDS: handle to the data source against which to test the capability.\npszCapability: the capability to test.\n\nReturns\n\nTRUE if capability available otherwise FALSE.\n\n\n\n\n\nOGR_Dr_TestCapability(OGRSFDriverH,\n                      const char *) -> int\n\nTest if capability is available.\n\nParameters\n\nhDriver: handle to the driver to test the capability against.\npszCap: the capability to test.\n\nReturns\n\nTRUE if capability available otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.touches",
    "page": "Docstrings",
    "title": "GDAL.touches",
    "category": "function",
    "text": "OGR_G_Touches(OGRGeometryH hThis,\n              OGRGeometryH hOther) -> int\n\nTest for touching.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are touching, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.tpstransform",
    "page": "Docstrings",
    "title": "GDAL.tpstransform",
    "category": "function",
    "text": "GDALTPSTransform(void * pTransformArg,\n                 int bDstToSrc,\n                 int nPointCount,\n                 double * x,\n                 double * y,\n                 double * z,\n                 int * panSuccess) -> int\n\nTransforms point based on GCP derived polynomial model.\n\nParameters\n\npTransformArg: return value from GDALCreateTPSTransformer().\nbDstToSrc: TRUE if transformation is from the destination (georeferenced) coordinates to pixel/line or FALSE when transforming from pixel/line to georeferenced coordinates.\nnPointCount: the number of values in the x, y and z arrays.\nx: array containing the X values to be transformed.\ny: array containing the Y values to be transformed.\nz: array containing the Z values to be transformed.\npanSuccess: array in which a flag indicating success (TRUE) or failure (FALSE) of the transformation are placed.\n\nReturns\n\nTRUE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.transform",
    "page": "Docstrings",
    "title": "GDAL.transform",
    "category": "function",
    "text": "OGR_G_Transform(OGRGeometryH hGeom,\n                OGRCoordinateTransformationH hTransform) -> OGRErr\n\nApply arbitrary coordinate transformation to geometry.\n\nParameters\n\nhGeom: handle on the geometry to apply the transform to.\nhTransform: handle on the transformation to apply.\n\nReturns\n\nOGRERR_NONE on success or an error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.transformgeolocations",
    "page": "Docstrings",
    "title": "GDAL.transformgeolocations",
    "category": "function",
    "text": "GDALTransformGeolocations(GDALRasterBandH hXBand,\n                          GDALRasterBandH hYBand,\n                          GDALRasterBandH hZBand,\n                          GDALTransformerFunc pfnTransformer,\n                          void * pTransformArg,\n                          GDALProgressFunc pfnProgress,\n                          void * pProgressArg,\n                          char ** papszOptions) -> CPLErr\n\nTransform locations held in bands.\n\nParameters\n\nhXBand: the band containing the X locations (usually long/easting).\nhYBand: the band containing the Y locations (usually lat/northing).\nhZBand: the band containing the Z locations (may be NULL).\npfnTransformer: the transformer function.\npTransformArg: the callback data for the transformer function.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\npapszOptions: list of name/value options - none currently supported.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.transformto",
    "page": "Docstrings",
    "title": "GDAL.transformto",
    "category": "function",
    "text": "OGR_G_TransformTo(OGRGeometryH hGeom,\n                  OGRSpatialReferenceH hSRS) -> OGRErr\n\nTransform geometry to new spatial reference system.\n\nParameters\n\nhGeom: handle on the geometry to apply the transform to.\nhSRS: handle on the spatial reference system to apply.\n\nReturns\n\nOGRERR_NONE on success, or an error code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.translate",
    "page": "Docstrings",
    "title": "GDAL.translate",
    "category": "function",
    "text": "GDALTranslate(const char * pszDest,\n              GDALDatasetH hSrcDataset,\n              const GDALTranslateOptions * psOptionsIn,\n              int * pbUsageError) -> GDALDatasetH\n\nConverts raster data between different formats.\n\nParameters\n\npszDest: the destination dataset path.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALTranslateOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.translateoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.translateoptionsfree",
    "category": "function",
    "text": "GDALTranslateOptionsFree(GDALTranslateOptions * psOptions) -> void\n\nFrees the GDALTranslateOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALTranslate().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.translateoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.translateoptionsnew",
    "category": "function",
    "text": "GDALTranslateOptionsNew(char ** papszArgv,\n                        GDALTranslateOptionsForBinary * psOptionsForBinary) -> GDALTranslateOptions *\n\nAllocates a GDALTranslateOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdal_translate utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALTranslateOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALTranslateOptions struct. Must be freed with GDALTranslateOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.translateoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.translateoptionssetprogress",
    "category": "function",
    "text": "GDALTranslateOptionsSetProgress(GDALTranslateOptions * psOptions,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALTranslate().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationcomputebarycentriccoefficients",
    "page": "Docstrings",
    "title": "GDAL.triangulationcomputebarycentriccoefficients",
    "category": "function",
    "text": "GDALTriangulationComputeBarycentricCoefficients(GDALTriangulation * psDT,\n                                                const double * padfX,\n                                                const double * padfY) -> int\n\nComputes barycentric coefficients for each triangles of the triangulation.\n\nParameters\n\npsDT: triangulation.\npadfX: x coordinates of the points. Must be identical to the one passed to GDALTriangulationCreateDelaunay().\npadfY: y coordinates of the points. Must be identical to the one passed to GDALTriangulationCreateDelaunay().\n\nReturns\n\nTRUE in case of success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationcomputebarycentriccoordinates",
    "page": "Docstrings",
    "title": "GDAL.triangulationcomputebarycentriccoordinates",
    "category": "function",
    "text": "GDALTriangulationComputeBarycentricCoordinates(const GDALTriangulation * psDT,\n                                               int nFacetIdx,\n                                               double dfX,\n                                               double dfY,\n                                               double * pdfL1,\n                                               double * pdfL2,\n                                               double * pdfL3) -> int\n\nComputes the barycentric coordinates of a point.\n\nParameters\n\npsDT: triangulation.\nnFacetIdx: index of the triangle in the triangulation\ndfX: x coordinate of the point.\ndfY: y coordinate of the point.\npdfL1: (output) pointer to the 1st barycentric coordinate.\npdfL2: (output) pointer to the 2nd barycentric coordinate.\npdfL3: (output) pointer to the 2nd barycentric coordinate.\n\nReturns\n\nTRUE in case of success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationcreatedelaunay",
    "page": "Docstrings",
    "title": "GDAL.triangulationcreatedelaunay",
    "category": "function",
    "text": "GDALTriangulationCreateDelaunay(int nPoints,\n                                const double * padfX,\n                                const double * padfY) -> GDALTriangulation *\n\nComputes a Delaunay triangulation of the passed points.\n\nParameters\n\nnPoints: number of points\npadfX: x coordinates of the points.\npadfY: y coordinates of the points.\n\nReturns\n\ntriangulation that must be freed with GDALTriangulationFree(), or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationfindfacetbruteforce",
    "page": "Docstrings",
    "title": "GDAL.triangulationfindfacetbruteforce",
    "category": "function",
    "text": "GDALTriangulationFindFacetBruteForce(const GDALTriangulation * psDT,\n                                     double dfX,\n                                     double dfY,\n                                     int * panOutputFacetIdx) -> int\n\nReturns the index of the triangle that contains the point by iterating over all triangles.\n\nParameters\n\npsDT: triangulation.\ndfX: x coordinate of the point.\ndfY: y coordinate of the point.\npanOutputFacetIdx: (output) pointer to the index of the triangle.\n\nReturns\n\nindex >= 0 of the triangle in case of success, -1 otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationfindfacetdirected",
    "page": "Docstrings",
    "title": "GDAL.triangulationfindfacetdirected",
    "category": "function",
    "text": "GDALTriangulationFindFacetDirected(const GDALTriangulation * psDT,\n                                   int nFacetIdx,\n                                   double dfX,\n                                   double dfY,\n                                   int * panOutputFacetIdx) -> int\n\nReturns the index of the triangle that contains the point by walking in the triangulation.\n\nParameters\n\npsDT: triangulation.\nnFacetIdx: index of first triangle to start with.\ndfX: x coordinate of the point.\ndfY: y coordinate of the point.\npanOutputFacetIdx: (output) pointer to the index of the triangle.\n\nReturns\n\nTRUE in case of success, -1 otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationfree",
    "page": "Docstrings",
    "title": "GDAL.triangulationfree",
    "category": "function",
    "text": "GDALTriangulationFree(GDALTriangulation * psDT) -> void\n\nFree a triangulation.\n\nParameters\n\npsDT: triangulation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.triangulationterminate",
    "page": "Docstrings",
    "title": "GDAL.triangulationterminate",
    "category": "function",
    "text": "GDALTriangulationTerminate() -> void\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.turnfailureintowarning",
    "page": "Docstrings",
    "title": "GDAL.turnfailureintowarning",
    "category": "function",
    "text": "CPLTurnFailureIntoWarning(int bOn) -> void\n\nWhether failures should be turned into warnings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.union",
    "page": "Docstrings",
    "title": "GDAL.union",
    "category": "function",
    "text": "OGR_G_Union(OGRGeometryH hThis,\n            OGRGeometryH hOther) -> OGRGeometryH\n\nCompute union.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the union or NULL if an error occurs.\n\n\n\n\n\nOGR_L_Union(OGRLayerH pLayerInput,\n            OGRLayerH pLayerMethod,\n            OGRLayerH pLayerResult,\n            char ** papszOptions,\n            GDALProgressFunc pfnProgress,\n            void * pProgressArg) -> OGRErr\n\nUnion of two layers.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.unioncascaded",
    "page": "Docstrings",
    "title": "GDAL.unioncascaded",
    "category": "function",
    "text": "OGR_G_UnionCascaded(OGRGeometryH hThis) -> OGRGeometryH\n\nCompute union using cascading.\n\nParameters\n\nhThis: the geometry.\n\nReturns\n\na new geometry representing the union or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.unsafe_loadstringlist",
    "page": "Docstrings",
    "title": "GDAL.unsafe_loadstringlist",
    "category": "function",
    "text": "Load a null-terminated list of strings\n\nThat is it expects a StringList, in the sense of the CPL functions, as a null-terminated array of strings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.unsetfield",
    "page": "Docstrings",
    "title": "GDAL.unsetfield",
    "category": "function",
    "text": "OGR_F_UnsetField(OGRFeatureH hFeat,\n                 int iField) -> void\n\nClear a field, marking it as unset.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to unset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.update",
    "page": "Docstrings",
    "title": "GDAL.update",
    "category": "function",
    "text": "OGR_L_Update(OGRLayerH pLayerInput,\n             OGRLayerH pLayerMethod,\n             OGRLayerH pLayerResult,\n             char ** papszOptions,\n             GDALProgressFunc pfnProgress,\n             void * pProgressArg) -> OGRErr\n\nUpdate this layer with features from the update layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.usetransformer",
    "page": "Docstrings",
    "title": "GDAL.usetransformer",
    "category": "function",
    "text": "GDALUseTransformer(void * pTransformArg,\n                   int bDstToSrc,\n                   int nPointCount,\n                   double * x,\n                   double * y,\n                   double * z,\n                   int * panSuccess) -> int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.validate",
    "page": "Docstrings",
    "title": "GDAL.validate",
    "category": "function",
    "text": "OGR_F_Validate(OGRFeatureH hFeat,\n               int nValidateFlags,\n               int bEmitError) -> int\n\nValidate that a feature meets constraints of its schema.\n\nParameters\n\nhFeat: handle to the feature to validate.\nnValidateFlags: OGRFVALALL or combination of OGRFVALNULL, OGRFVALGEOMTYPE, OGRFVALWIDTH and OGRFVALALLOWNULLWHEN_DEFAULT with \'|\' operator\nbEmitError: TRUE if a CPLError() must be emitted when a check fails\n\nReturns\n\nTRUE if all enabled validation tests pass.\n\n\n\n\n\nOSRValidate(OGRSpatialReferenceH) -> OGRErr\n\nValidate SRS tokens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.validatecreationoptions",
    "page": "Docstrings",
    "title": "GDAL.validatecreationoptions",
    "category": "function",
    "text": "GDALValidateCreationOptions(GDALDriverH hDriver,\n                            char ** papszCreationOptions) -> int\n\nValidate the list of creation options that are handled by a driver.\n\nParameters\n\nhDriver: the handle of the driver with whom the lists of creation option must be validated\npapszCreationOptions: the list of creation options. An array of strings, whose last element is a NULL pointer\n\nReturns\n\nTRUE if the list of creation options is compatible with the Create() and CreateCopy() method of the driver, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.value",
    "page": "Docstrings",
    "title": "GDAL.value",
    "category": "function",
    "text": "OGR_G_Value(OGRGeometryH hGeom,\n            double dfDistance) -> OGRGeometryH\n\nFetch point at given distance along curve.\n\nParameters\n\nhGeom: curve geometry.\ndfDistance: distance along the curve at which to sample position. This distance should be between zero and get_Length() for this curve.\n\nReturns\n\na point or NULL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vectortranslate",
    "page": "Docstrings",
    "title": "GDAL.vectortranslate",
    "category": "function",
    "text": "GDALVectorTranslate(const char * pszDest,\n                    GDALDatasetH hDstDS,\n                    int nSrcCount,\n                    GDALDatasetH * pahSrcDS,\n                    const GDALVectorTranslateOptions * psOptions,\n                    int * pbUsageError) -> GDALDatasetH\n\nConverts vector data between file formats.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL.\nnSrcCount: the number of input datasets (only 1 supported currently)\npahSrcDS: the list of input datasets.\npsOptionsIn: the options struct returned by GDALVectorTranslateOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS is not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vectortranslateoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.vectortranslateoptionsfree",
    "category": "function",
    "text": "GDALVectorTranslateOptionsFree(GDALVectorTranslateOptions * psOptions) -> void\n\nFrees the GDALVectorTranslateOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALVectorTranslate().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vectortranslateoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.vectortranslateoptionsnew",
    "category": "function",
    "text": "GDALVectorTranslateOptionsNew(char ** papszArgv,\n                              GDALVectorTranslateOptionsForBinary * psOptionsForBinary) -> GDALVectorTranslateOptions *\n\nallocates a GDALVectorTranslateOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the ogr2ogr utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALVectorTranslateOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALVectorTranslateOptions struct. Must be freed with GDALVectorTranslateOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vectortranslateoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.vectortranslateoptionssetprogress",
    "category": "function",
    "text": "GDALVectorTranslateOptionsSetProgress(GDALVectorTranslateOptions * psOptions,\n                                      GDALProgressFunc pfnProgress,\n                                      void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALVectorTranslate().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtaddband",
    "page": "Docstrings",
    "title": "GDAL.vrtaddband",
    "category": "function",
    "text": "VRTAddBand(VRTDatasetH,\n           GDALDataType,\n           char **) -> int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtaddcomplexsource",
    "page": "Docstrings",
    "title": "GDAL.vrtaddcomplexsource",
    "category": "function",
    "text": "VRTAddComplexSource(VRTSourcedRasterBandH,\n                    GDALRasterBandH,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    double,\n                    double,\n                    double) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtaddfuncsource",
    "page": "Docstrings",
    "title": "GDAL.vrtaddfuncsource",
    "category": "function",
    "text": "VRTAddFuncSource(VRTSourcedRasterBandH,\n                 VRTImageReadFunc,\n                 void *,\n                 double) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtaddsimplesource",
    "page": "Docstrings",
    "title": "GDAL.vrtaddsimplesource",
    "category": "function",
    "text": "VRTAddSimpleSource(VRTSourcedRasterBandH,\n                   GDALRasterBandH,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   const char *,\n                   double) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtaddsource",
    "page": "Docstrings",
    "title": "GDAL.vrtaddsource",
    "category": "function",
    "text": "VRTAddSource(VRTSourcedRasterBandH,\n             VRTSourceH) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtcreate",
    "page": "Docstrings",
    "title": "GDAL.vrtcreate",
    "category": "function",
    "text": "VRTCreate(int,\n          int) -> VRTDatasetH\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtflushcache",
    "page": "Docstrings",
    "title": "GDAL.vrtflushcache",
    "category": "function",
    "text": "VRTFlushCache(VRTDatasetH) -> void\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.vrtserializetoxml",
    "page": "Docstrings",
    "title": "GDAL.vrtserializetoxml",
    "category": "function",
    "text": "VRTSerializeToXML(VRTDatasetH,\n                  const char *) -> CPLXMLNode *\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.warp",
    "page": "Docstrings",
    "title": "GDAL.warp",
    "category": "function",
    "text": "GDALWarp(const char * pszDest,\n         GDALDatasetH hDstDS,\n         int nSrcCount,\n         GDALDatasetH * pahSrcDS,\n         const GDALWarpAppOptions * psOptionsIn,\n         int * pbUsageError) -> GDALDatasetH\n\nImage reprojection and warping function.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL.\nnSrcCount: the number of input datasets.\npahSrcDS: the list of input datasets.\npsOptionsIn: the options struct returned by GDALWarpAppOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS if not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.warpappoptionsfree",
    "page": "Docstrings",
    "title": "GDAL.warpappoptionsfree",
    "category": "function",
    "text": "GDALWarpAppOptionsFree(GDALWarpAppOptions * psOptions) -> void\n\nFrees the GDALWarpAppOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALWarp().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.warpappoptionsnew",
    "page": "Docstrings",
    "title": "GDAL.warpappoptionsnew",
    "category": "function",
    "text": "GDALWarpAppOptionsNew(char ** papszArgv,\n                      GDALWarpAppOptionsForBinary * psOptionsForBinary) -> GDALWarpAppOptions *\n\nAllocates a GDALWarpAppOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdalwarp utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALWarpAppOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALWarpAppOptions struct. Must be freed with GDALWarpAppOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.warpappoptionssetprogress",
    "page": "Docstrings",
    "title": "GDAL.warpappoptionssetprogress",
    "category": "function",
    "text": "GDALWarpAppOptionsSetProgress(GDALWarpAppOptions * psOptions,\n                              GDALProgressFunc pfnProgress,\n                              void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALWarpApp().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.warpappoptionssetwarpoption",
    "page": "Docstrings",
    "title": "GDAL.warpappoptionssetwarpoption",
    "category": "function",
    "text": "GDALWarpAppOptionsSetWarpOption(GDALWarpAppOptions * psOptions,\n                                const char * pszKey,\n                                const char * pszValue) -> void\n\nSet a warp option.\n\nParameters\n\npsOptions: the options struct for GDALWarpApp().\npszKey: key.\npszValue: value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.within",
    "page": "Docstrings",
    "title": "GDAL.within",
    "category": "function",
    "text": "OGR_G_Within(OGRGeometryH hThis,\n             OGRGeometryH hOther) -> int\n\nTest for containment.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if hThis is within hOther, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.wkbsize",
    "page": "Docstrings",
    "title": "GDAL.wkbsize",
    "category": "function",
    "text": "OGR_G_WkbSize(OGRGeometryH hGeom) -> int\n\nReturns size of related binary representation.\n\nParameters\n\nhGeom: handle on the geometry to get the binary size from.\n\nReturns\n\nsize of binary representation in bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.writeblock",
    "page": "Docstrings",
    "title": "GDAL.writeblock",
    "category": "function",
    "text": "GDALWriteBlock(GDALRasterBandH hBand,\n               int nXOff,\n               int nYOff,\n               void * pData) -> CPLErr\n\nWrite a block of image data efficiently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GDAL.writeworldfile",
    "page": "Docstrings",
    "title": "GDAL.writeworldfile",
    "category": "function",
    "text": "GDALWriteWorldFile(const char *,\n                   const char *,\n                   double *) -> int\n\nWrite ESRI world file.\n\nParameters\n\npszBaseFilename: the target raster file.\npszExtension: the extension to use (i.e. \".wld\"). Must not be NULL\npadfGeoTransform: the six double array from which the geotransformation should be read.\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GDAL.ALTER_ALL_FLAGGDAL.ALTER_DEFAULT_FLAGGDAL.ALTER_NAME_FLAGGDAL.ALTER_NULLABLE_FLAGGDAL.ALTER_TYPE_FLAGGDAL.ALTER_WIDTH_PRECISION_FLAGGDAL.CGDAL.CE_DebugGDAL.CE_FailureGDAL.CE_FatalGDAL.CE_NoneGDAL.CE_WarningGDAL.CPLE_AWSAccessDeniedGDAL.CPLE_AWSBucketNotFoundGDAL.CPLE_AWSInvalidCredentialsGDAL.CPLE_AWSObjectNotFoundGDAL.CPLE_AWSSignatureDoesNotMatchGDAL.CPLE_AppDefinedGDAL.CPLE_AssertionFailedGDAL.CPLE_FileIOGDAL.CPLE_HttpResponseGDAL.CPLE_IllegalArgGDAL.CPLE_NoWriteAccessGDAL.CPLE_NoneGDAL.CPLE_NotSupportedGDAL.CPLE_ObjectNullGDAL.CPLE_OpenFailedGDAL.CPLE_OutOfMemoryGDAL.CPLE_UserInterruptGDAL.CPLErrGDAL.CPLErrorHandlerGDAL.CPLErrorNumGDAL.CPLFileFinderGDAL.CPLSharedFileInfoGDAL.CPLVirtualMemGDAL.CPLVirtualMemAccessModeGDAL.CPLVirtualMemCachePageCbkGDAL.CPLVirtualMemFreeUserDataGDAL.CPLVirtualMemUnCachePageCbkGDAL.CPLXMLNodeGDAL.CPLXMLNodeTypeGDAL.CPL_FRMT_GB_WITHOUT_PREFIXGDAL.CPL_HAS_GINT64GDAL.CPL_IS_LSBGDAL.CXT_AttributeGDAL.CXT_CommentGDAL.CXT_ElementGDAL.CXT_LiteralGDAL.CXT_TextGDAL.FALSEGDAL.FILEGDAL.FilterFunc4ValuesTypeGDAL.FilterFuncTypeGDAL.GARIO_COMPLETEGDAL.GARIO_ERRORGDAL.GARIO_PENDINGGDAL.GARIO_TypeCountGDAL.GARIO_UPDATEGDAL.GA_ReadOnlyGDAL.GA_UpdateGDAL.GBoolGDAL.GByteGDAL.GCI_AlphaBandGDAL.GCI_BlackBandGDAL.GCI_BlueBandGDAL.GCI_CyanBandGDAL.GCI_GrayIndexGDAL.GCI_GreenBandGDAL.GCI_HueBandGDAL.GCI_LightnessBandGDAL.GCI_MagentaBandGDAL.GCI_MaxGDAL.GCI_PaletteIndexGDAL.GCI_RedBandGDAL.GCI_SaturationBandGDAL.GCI_UndefinedGDAL.GCI_YCbCr_CbBandGDAL.GCI_YCbCr_CrBandGDAL.GCI_YCbCr_YBandGDAL.GCI_YellowBandGDAL.GDALGDAL.GDALAccessGDAL.GDALAsyncReaderHGDAL.GDALAsyncStatusTypeGDAL.GDALBuildVRTOptionsGDAL.GDALBuildVRTOptionsForBinaryGDAL.GDALColorEntryGDAL.GDALColorInterpGDAL.GDALColorTableHGDAL.GDALContourGeneratorHGDAL.GDALContourWriterGDAL.GDALDEMProcessingOptionsGDAL.GDALDEMProcessingOptionsForBinaryGDAL.GDALDataTypeGDAL.GDALDatasetHGDAL.GDALDerivedPixelFuncGDAL.GDALDriverHGDAL.GDALErrorGDAL.GDALGridAlgorithmGDAL.GDALGridContextGDAL.GDALGridDataMetricsOptionsGDAL.GDALGridInverseDistanceToAPowerNearestNeighborOptionsGDAL.GDALGridInverseDistanceToAPowerOptionsGDAL.GDALGridLinearOptionsGDAL.GDALGridMovingAverageOptionsGDAL.GDALGridNearestNeighborOptionsGDAL.GDALGridOptionsGDAL.GDALGridOptionsForBinaryGDAL.GDALInfoOptionsGDAL.GDALInfoOptionsForBinaryGDAL.GDALMD_AOP_AREAGDAL.GDALMD_AOP_POINTGDAL.GDALMD_AREA_OR_POINTGDAL.GDALMajorObjectHGDAL.GDALMaskFuncGDAL.GDALNearblackOptionsGDAL.GDALNearblackOptionsForBinaryGDAL.GDALPaletteInterpGDAL.GDALProgressFuncGDAL.GDALRATFieldTypeGDAL.GDALRATFieldUsageGDAL.GDALRIOResampleAlgGDAL.GDALRPCInfoGDAL.GDALRWFlagGDAL.GDALRasterAttributeTableHGDAL.GDALRasterBandHGDAL.GDALRasterIOExtraArgGDAL.GDALRasterizeOptionsGDAL.GDALRasterizeOptionsForBinaryGDAL.GDALResampleAlgGDAL.GDALTileOrganizationGDAL.GDALTransformerFuncGDAL.GDALTransformerInfoGDAL.GDALTranslateOptionsGDAL.GDALTranslateOptionsForBinaryGDAL.GDALTriBarycentricCoefficientsGDAL.GDALTriFacetGDAL.GDALTriangulationGDAL.GDALVERSIONGDAL.GDALVectorTranslateOptionsGDAL.GDALVectorTranslateOptionsForBinaryGDAL.GDALWarpAppOptionsGDAL.GDALWarpAppOptionsForBinaryGDAL.GDALWarpOperationHGDAL.GDALWarpOptionsGDAL.GDAL_DATAGDAL.GDAL_DATA_COVERAGE_STATUS_DATAGDAL.GDAL_DATA_COVERAGE_STATUS_EMPTYGDAL.GDAL_DATA_COVERAGE_STATUS_UNIMPLEMENTEDGDAL.GDAL_DCAP_CREATEGDAL.GDAL_DCAP_CREATECOPYGDAL.GDAL_DCAP_DEFAULT_FIELDSGDAL.GDAL_DCAP_GNMGDAL.GDAL_DCAP_NOTNULL_FIELDSGDAL.GDAL_DCAP_NOTNULL_GEOMFIELDSGDAL.GDAL_DCAP_OPENGDAL.GDAL_DCAP_RASTERGDAL.GDAL_DCAP_VECTORGDAL.GDAL_DCAP_VIRTUALIOGDAL.GDAL_DMD_CONNECTION_PREFIXGDAL.GDAL_DMD_CREATIONDATATYPESGDAL.GDAL_DMD_CREATIONFIELDDATATYPESGDAL.GDAL_DMD_CREATIONOPTIONLISTGDAL.GDAL_DMD_EXTENSIONGDAL.GDAL_DMD_EXTENSIONSGDAL.GDAL_DMD_HELPTOPICGDAL.GDAL_DMD_LONGNAMEGDAL.GDAL_DMD_MIMETYPEGDAL.GDAL_DMD_OPENOPTIONLISTGDAL.GDAL_DMD_SUBDATASETSGDAL.GDAL_DS_LAYER_CREATIONOPTIONLISTGDAL.GDAL_GCPGDAL.GDAL_GTI2_SIGNATUREGDAL.GDAL_OF_ALLGDAL.GDAL_OF_ARRAY_BLOCK_ACCESSGDAL.GDAL_OF_BLOCK_ACCESS_MASKGDAL.GDAL_OF_DEFAULT_BLOCK_ACCESSGDAL.GDAL_OF_GNMGDAL.GDAL_OF_HASHSET_BLOCK_ACCESSGDAL.GDAL_OF_INTERNALGDAL.GDAL_OF_KIND_MASKGDAL.GDAL_OF_RASTERGDAL.GDAL_OF_READONLYGDAL.GDAL_OF_RESERVED_1GDAL.GDAL_OF_SHAREDGDAL.GDAL_OF_UPDATEGDAL.GDAL_OF_VECTORGDAL.GDAL_OF_VERBOSE_ERRORGDAL.GDT_ByteGDAL.GDT_CFloat32GDAL.GDT_CFloat64GDAL.GDT_CInt16GDAL.GDT_CInt32GDAL.GDT_Float32GDAL.GDT_Float64GDAL.GDT_Int16GDAL.GDT_Int32GDAL.GDT_TypeCountGDAL.GDT_UInt16GDAL.GDT_UInt32GDAL.GDT_UnknownGDAL.GFT_IntegerGDAL.GFT_RealGDAL.GFT_StringGDAL.GFU_AlphaGDAL.GFU_AlphaMaxGDAL.GFU_AlphaMinGDAL.GFU_BlueGDAL.GFU_BlueMaxGDAL.GFU_BlueMinGDAL.GFU_GenericGDAL.GFU_GreenGDAL.GFU_GreenMaxGDAL.GFU_GreenMinGDAL.GFU_MaxGDAL.GFU_MaxCountGDAL.GFU_MinGDAL.GFU_MinMaxGDAL.GFU_NameGDAL.GFU_PixelCountGDAL.GFU_RedGDAL.GFU_RedMaxGDAL.GFU_RedMinGDAL.GF_ReadGDAL.GF_WriteGDAL.GGA_InverseDistanceToAPowerGDAL.GGA_InverseDistanceToAPowerNearestNeighborGDAL.GGA_LinearGDAL.GGA_MetricAverageDistanceGDAL.GGA_MetricAverageDistancePtsGDAL.GGA_MetricCountGDAL.GGA_MetricMaximumGDAL.GGA_MetricMinimumGDAL.GGA_MetricRangeGDAL.GGA_MovingAverageGDAL.GGA_NearestNeighborGDAL.GInt16GDAL.GInt32GDAL.GInt64GDAL.GIntBigGDAL.GMF_ALL_VALIDGDAL.GMF_ALPHAGDAL.GMF_NODATAGDAL.GMF_PER_DATASETGDAL.GPI_CMYKGDAL.GPI_GrayGDAL.GPI_HLSGDAL.GPI_RGBGDAL.GPtrDiff_tGDAL.GRA_AverageGDAL.GRA_BilinearGDAL.GRA_CubicGDAL.GRA_CubicSplineGDAL.GRA_LanczosGDAL.GRA_MaxGDAL.GRA_MedGDAL.GRA_MinGDAL.GRA_ModeGDAL.GRA_NearestNeighbourGDAL.GRA_Q1GDAL.GRA_Q3GDAL.GRIORA_AverageGDAL.GRIORA_BilinearGDAL.GRIORA_CubicGDAL.GRIORA_CubicSplineGDAL.GRIORA_GaussGDAL.GRIORA_LanczosGDAL.GRIORA_ModeGDAL.GRIORA_NearestNeighbourGDAL.GSpacingGDAL.GTO_BITGDAL.GTO_BSQGDAL.GTO_TIPGDAL.GUInt16GDAL.GUInt32GDAL.GUInt64GDAL.GUIntBigGDAL.GWKAOM_AverageGDAL.GWKAOM_FmodeGDAL.GWKAOM_ImodeGDAL.GWKAOM_MaxGDAL.GWKAOM_MinGDAL.GWKAOM_QuantGDAL.GWKAverageOrModeAlgGDAL.OAO_DownGDAL.OAO_EastGDAL.OAO_NorthGDAL.OAO_OtherGDAL.OAO_SouthGDAL.OAO_UpGDAL.OAO_WestGDAL.ODT_HD_ClassicGDAL.ODT_HD_GeocentricGDAL.ODT_HD_MaxGDAL.ODT_HD_MinGDAL.ODT_HD_OtherGDAL.ODT_LD_MaxGDAL.ODT_LD_MinGDAL.ODT_VD_AltitudeBarometricGDAL.ODT_VD_DepthGDAL.ODT_VD_EllipsoidalGDAL.ODT_VD_GeoidModelDerivedGDAL.ODT_VD_MaxGDAL.ODT_VD_MinGDAL.ODT_VD_NormalGDAL.ODT_VD_OrthometricGDAL.ODT_VD_OtherGDAL.ODrCCreateDataSourceGDAL.ODrCDeleteDataSourceGDAL.ODsCCreateGeomFieldAfterCreateLayerGDAL.ODsCCreateLayerGDAL.ODsCCurveGeometriesGDAL.ODsCDeleteLayerGDAL.ODsCEmulatedTransactionsGDAL.ODsCMeasuredGeometriesGDAL.ODsCRandomLayerReadGDAL.ODsCRandomLayerWriteGDAL.ODsCTransactionsGDAL.OFSTBooleanGDAL.OFSTFloat32GDAL.OFSTInt16GDAL.OFSTMaxSubTypeGDAL.OFSTNoneGDAL.OFTBinaryGDAL.OFTDateGDAL.OFTDateTimeGDAL.OFTIntegerGDAL.OFTInteger64GDAL.OFTInteger64ListGDAL.OFTIntegerListGDAL.OFTMaxTypeGDAL.OFTRealGDAL.OFTRealListGDAL.OFTStringGDAL.OFTStringListGDAL.OFTTimeGDAL.OFTWideStringGDAL.OFTWideStringListGDAL.OGRAxisOrientationGDAL.OGRBooleanGDAL.OGRContourWriterInfoGDAL.OGRCoordinateTransformationHGDAL.OGRDataSourceHGDAL.OGRDatumTypeGDAL.OGRERR_CORRUPT_DATAGDAL.OGRERR_FAILUREGDAL.OGRERR_INVALID_HANDLEGDAL.OGRERR_NONEGDAL.OGRERR_NON_EXISTING_FEATUREGDAL.OGRERR_NOT_ENOUGH_DATAGDAL.OGRERR_NOT_ENOUGH_MEMORYGDAL.OGRERR_UNSUPPORTED_GEOMETRY_TYPEGDAL.OGRERR_UNSUPPORTED_OPERATIONGDAL.OGRERR_UNSUPPORTED_SRSGDAL.OGREnvelopeGDAL.OGREnvelope3DGDAL.OGRErrGDAL.OGRFeatureDefnHGDAL.OGRFeatureHGDAL.OGRFieldGDAL.OGRFieldDefnHGDAL.OGRFieldSubTypeGDAL.OGRFieldTypeGDAL.OGRGeomFieldDefnHGDAL.OGRGeometryHGDAL.OGRJustificationGDAL.OGRLayerHGDAL.OGRNullFIDGDAL.OGRNullMarkerGDAL.OGRSFDriverHGDAL.OGRSTBrushAngleGDAL.OGRSTBrushBColorGDAL.OGRSTBrushDxGDAL.OGRSTBrushDyGDAL.OGRSTBrushFColorGDAL.OGRSTBrushIdGDAL.OGRSTBrushLastGDAL.OGRSTBrushParamGDAL.OGRSTBrushPriorityGDAL.OGRSTBrushSizeGDAL.OGRSTCBrushGDAL.OGRSTCLabelGDAL.OGRSTCNoneGDAL.OGRSTCPenGDAL.OGRSTCSymbolGDAL.OGRSTCVectorGDAL.OGRSTClassIdGDAL.OGRSTLabelAdjHorGDAL.OGRSTLabelAdjVertGDAL.OGRSTLabelAnchorGDAL.OGRSTLabelAngleGDAL.OGRSTLabelBColorGDAL.OGRSTLabelBoldGDAL.OGRSTLabelDxGDAL.OGRSTLabelDyGDAL.OGRSTLabelFColorGDAL.OGRSTLabelFontNameGDAL.OGRSTLabelHColorGDAL.OGRSTLabelItalicGDAL.OGRSTLabelLastGDAL.OGRSTLabelOColorGDAL.OGRSTLabelParamGDAL.OGRSTLabelPerpGDAL.OGRSTLabelPlacementGDAL.OGRSTLabelPriorityGDAL.OGRSTLabelSizeGDAL.OGRSTLabelStretchGDAL.OGRSTLabelStrikeoutGDAL.OGRSTLabelTextStringGDAL.OGRSTLabelUnderlineGDAL.OGRSTPenCapGDAL.OGRSTPenColorGDAL.OGRSTPenIdGDAL.OGRSTPenJoinGDAL.OGRSTPenLastGDAL.OGRSTPenParamGDAL.OGRSTPenPatternGDAL.OGRSTPenPerOffsetGDAL.OGRSTPenPriorityGDAL.OGRSTPenWidthGDAL.OGRSTSymbolAngleGDAL.OGRSTSymbolColorGDAL.OGRSTSymbolDxGDAL.OGRSTSymbolDyGDAL.OGRSTSymbolFontNameGDAL.OGRSTSymbolIdGDAL.OGRSTSymbolLastGDAL.OGRSTSymbolOColorGDAL.OGRSTSymbolOffsetGDAL.OGRSTSymbolParamGDAL.OGRSTSymbolPerpGDAL.OGRSTSymbolPriorityGDAL.OGRSTSymbolSizeGDAL.OGRSTSymbolStepGDAL.OGRSTUCMGDAL.OGRSTUGroundGDAL.OGRSTUInchesGDAL.OGRSTUMMGDAL.OGRSTUPixelGDAL.OGRSTUPointsGDAL.OGRSTUnitIdGDAL.OGRSpatialReferenceHGDAL.OGRStyleMgrHGDAL.OGRStyleTableHGDAL.OGRStyleToolHGDAL.OGRUnsetMarkerGDAL.OGR_F_VAL_ALLOW_DIFFERENT_GEOM_DIMGDAL.OGR_F_VAL_ALLOW_NULL_WHEN_DEFAULTGDAL.OGR_F_VAL_GEOM_TYPEGDAL.OGR_F_VAL_NULLGDAL.OGR_F_VAL_WIDTHGDAL.OGRwkbByteOrderGDAL.OGRwkbGeometryTypeGDAL.OGRwkbVariantGDAL.OJLeftGDAL.OJRightGDAL.OJUndefinedGDAL.OLCAlterFieldDefnGDAL.OLCCreateFieldGDAL.OLCCreateGeomFieldGDAL.OLCCurveGeometriesGDAL.OLCDeleteFeatureGDAL.OLCDeleteFieldGDAL.OLCFastFeatureCountGDAL.OLCFastGetExtentGDAL.OLCFastSetNextByIndexGDAL.OLCFastSpatialFilterGDAL.OLCIgnoreFieldsGDAL.OLCMeasuredGeometriesGDAL.OLCRandomReadGDAL.OLCRandomWriteGDAL.OLCReorderFieldsGDAL.OLCSequentialWriteGDAL.OLCStringsAsUTF8GDAL.OLCTransactionsGDAL.OLMD_FID64GDAL.RASTERIO_EXTRA_ARG_CURRENT_VERSIONGDAL.SRS_DN_NAD27GDAL.SRS_DN_NAD83GDAL.SRS_DN_WGS72GDAL.SRS_DN_WGS84GDAL.SRS_PM_GREENWICHGDAL.SRS_PP_AZIMUTHGDAL.SRS_PP_CENTRAL_MERIDIANGDAL.SRS_PP_FALSE_EASTINGGDAL.SRS_PP_FALSE_NORTHINGGDAL.SRS_PP_FIPSZONEGDAL.SRS_PP_LANDSAT_NUMBERGDAL.SRS_PP_LATITUDE_OF_1ST_POINTGDAL.SRS_PP_LATITUDE_OF_2ND_POINTGDAL.SRS_PP_LATITUDE_OF_CENTERGDAL.SRS_PP_LATITUDE_OF_ORIGINGDAL.SRS_PP_LATITUDE_OF_POINT_1GDAL.SRS_PP_LATITUDE_OF_POINT_2GDAL.SRS_PP_LATITUDE_OF_POINT_3GDAL.SRS_PP_LONGITUDE_OF_1ST_POINTGDAL.SRS_PP_LONGITUDE_OF_2ND_POINTGDAL.SRS_PP_LONGITUDE_OF_CENTERGDAL.SRS_PP_LONGITUDE_OF_ORIGINGDAL.SRS_PP_LONGITUDE_OF_POINT_1GDAL.SRS_PP_LONGITUDE_OF_POINT_2GDAL.SRS_PP_LONGITUDE_OF_POINT_3GDAL.SRS_PP_PATH_NUMBERGDAL.SRS_PP_PEG_POINT_HEADINGGDAL.SRS_PP_PEG_POINT_HEIGHTGDAL.SRS_PP_PEG_POINT_LATITUDEGDAL.SRS_PP_PEG_POINT_LONGITUDEGDAL.SRS_PP_PERSPECTIVE_POINT_HEIGHTGDAL.SRS_PP_PSEUDO_STD_PARALLEL_1GDAL.SRS_PP_RECTIFIED_GRID_ANGLEGDAL.SRS_PP_SATELLITE_HEIGHTGDAL.SRS_PP_SCALE_FACTORGDAL.SRS_PP_STANDARD_PARALLEL_1GDAL.SRS_PP_STANDARD_PARALLEL_2GDAL.SRS_PP_ZONEGDAL.SRS_PT_AITOFFGDAL.SRS_PT_ALBERS_CONIC_EQUAL_AREAGDAL.SRS_PT_AZIMUTHAL_EQUIDISTANTGDAL.SRS_PT_BONNEGDAL.SRS_PT_CASSINI_SOLDNERGDAL.SRS_PT_CRASTER_PARABOLICGDAL.SRS_PT_CYLINDRICAL_EQUAL_AREAGDAL.SRS_PT_ECKERT_IGDAL.SRS_PT_ECKERT_IIGDAL.SRS_PT_ECKERT_IIIGDAL.SRS_PT_ECKERT_IVGDAL.SRS_PT_ECKERT_VGDAL.SRS_PT_ECKERT_VIGDAL.SRS_PT_EQUIDISTANT_CONICGDAL.SRS_PT_EQUIRECTANGULARGDAL.SRS_PT_GALL_STEREOGRAPHICGDAL.SRS_PT_GAUSSSCHREIBERTMERCATORGDAL.SRS_PT_GEOSTATIONARY_SATELLITEGDAL.SRS_PT_GNOMONICGDAL.SRS_PT_GOODE_HOMOLOSINEGDAL.SRS_PT_HOTINE_OBLIQUE_MERCATORGDAL.SRS_PT_HOTINE_OBLIQUE_MERCATOR_AZIMUTH_CENTERGDAL.SRS_PT_HOTINE_OBLIQUE_MERCATOR_TWO_POINT_NATURAL_ORIGINGDAL.SRS_PT_IGHGDAL.SRS_PT_IMW_POLYCONICGDAL.SRS_PT_KROVAKGDAL.SRS_PT_LABORDE_OBLIQUE_MERCATORGDAL.SRS_PT_LAMBERT_AZIMUTHAL_EQUAL_AREAGDAL.SRS_PT_LAMBERT_CONFORMAL_CONIC_1SPGDAL.SRS_PT_LAMBERT_CONFORMAL_CONIC_2SPGDAL.SRS_PT_LAMBERT_CONFORMAL_CONIC_2SP_BELGIUMGDAL.SRS_PT_LOXIMUTHALGDAL.SRS_PT_MERCATOR_1SPGDAL.SRS_PT_MERCATOR_2SPGDAL.SRS_PT_MERCATOR_AUXILIARY_SPHEREGDAL.SRS_PT_MILLER_CYLINDRICALGDAL.SRS_PT_MOLLWEIDEGDAL.SRS_PT_NEW_ZEALAND_MAP_GRIDGDAL.SRS_PT_OBLIQUE_STEREOGRAPHICGDAL.SRS_PT_ORTHOGRAPHICGDAL.SRS_PT_POLAR_STEREOGRAPHICGDAL.SRS_PT_POLYCONICGDAL.SRS_PT_QSCGDAL.SRS_PT_QUARTIC_AUTHALICGDAL.SRS_PT_ROBINSONGDAL.SRS_PT_SCHGDAL.SRS_PT_SINUSOIDALGDAL.SRS_PT_STEREOGRAPHICGDAL.SRS_PT_SWISS_OBLIQUE_CYLINDRICALGDAL.SRS_PT_TRANSVERSE_MERCATORGDAL.SRS_PT_TRANSVERSE_MERCATOR_MI_21GDAL.SRS_PT_TRANSVERSE_MERCATOR_MI_22GDAL.SRS_PT_TRANSVERSE_MERCATOR_MI_23GDAL.SRS_PT_TRANSVERSE_MERCATOR_MI_24GDAL.SRS_PT_TRANSVERSE_MERCATOR_MI_25GDAL.SRS_PT_TRANSVERSE_MERCATOR_SOUTH_ORIENTEDGDAL.SRS_PT_TUNISIA_MINING_GRIDGDAL.SRS_PT_TWO_POINT_EQUIDISTANTGDAL.SRS_PT_VANDERGRINTENGDAL.SRS_PT_WAGNER_IGDAL.SRS_PT_WAGNER_IIGDAL.SRS_PT_WAGNER_IIIGDAL.SRS_PT_WAGNER_IVGDAL.SRS_PT_WAGNER_VGDAL.SRS_PT_WAGNER_VIGDAL.SRS_PT_WAGNER_VIIGDAL.SRS_PT_WINKEL_IGDAL.SRS_PT_WINKEL_IIGDAL.SRS_PT_WINKEL_TRIPELGDAL.SRS_UA_DEGREEGDAL.SRS_UA_DEGREE_CONVGDAL.SRS_UA_RADIANGDAL.SRS_UL_CENTIMETERGDAL.SRS_UL_CENTIMETER_CONVGDAL.SRS_UL_CHAINGDAL.SRS_UL_CHAIN_CONVGDAL.SRS_UL_DECIMETERGDAL.SRS_UL_DECIMETER_CONVGDAL.SRS_UL_FOOTGDAL.SRS_UL_FOOT_CONVGDAL.SRS_UL_INDIAN_CHAINGDAL.SRS_UL_INDIAN_CHAIN_CONVGDAL.SRS_UL_INDIAN_FOOTGDAL.SRS_UL_INDIAN_FOOT_CONVGDAL.SRS_UL_INDIAN_YARDGDAL.SRS_UL_INDIAN_YARD_CONVGDAL.SRS_UL_INTL_CHAINGDAL.SRS_UL_INTL_CHAIN_CONVGDAL.SRS_UL_INTL_FATHOMGDAL.SRS_UL_INTL_FATHOM_CONVGDAL.SRS_UL_INTL_FOOTGDAL.SRS_UL_INTL_FOOT_CONVGDAL.SRS_UL_INTL_INCHGDAL.SRS_UL_INTL_INCH_CONVGDAL.SRS_UL_INTL_LINKGDAL.SRS_UL_INTL_LINK_CONVGDAL.SRS_UL_INTL_NAUT_MILEGDAL.SRS_UL_INTL_NAUT_MILE_CONVGDAL.SRS_UL_INTL_STAT_MILEGDAL.SRS_UL_INTL_STAT_MILE_CONVGDAL.SRS_UL_INTL_YARDGDAL.SRS_UL_INTL_YARD_CONVGDAL.SRS_UL_KILOMETERGDAL.SRS_UL_KILOMETER_CONVGDAL.SRS_UL_LINKGDAL.SRS_UL_LINK_CONVGDAL.SRS_UL_LINK_ClarkeGDAL.SRS_UL_LINK_Clarke_CONVGDAL.SRS_UL_METERGDAL.SRS_UL_MILLIMETERGDAL.SRS_UL_MILLIMETER_CONVGDAL.SRS_UL_NAUTICAL_MILEGDAL.SRS_UL_NAUTICAL_MILE_CONVGDAL.SRS_UL_RODGDAL.SRS_UL_ROD_CONVGDAL.SRS_UL_US_CHAINGDAL.SRS_UL_US_CHAIN_CONVGDAL.SRS_UL_US_FOOTGDAL.SRS_UL_US_FOOT_CONVGDAL.SRS_UL_US_INCHGDAL.SRS_UL_US_INCH_CONVGDAL.SRS_UL_US_STAT_MILEGDAL.SRS_UL_US_STAT_MILE_CONVGDAL.SRS_UL_US_YARDGDAL.SRS_UL_US_YARD_CONVGDAL.SRS_WGS84_INVFLATTENINGGDAL.SRS_WGS84_SEMIMAJORGDAL.SRS_WKT_WGS84GDAL.TRUEGDAL.VIRTUALMEM_READONLYGDAL.VIRTUALMEM_READONLY_ENFORCEDGDAL.VIRTUALMEM_READWRITEGDAL.VRTAverageFilteredSourceHGDAL.VRTAveragedSourceHGDAL.VRTComplexSourceHGDAL.VRTDatasetHGDAL.VRTDerivedRasterBandHGDAL.VRTDriverHGDAL.VRTFilteredSourceHGDAL.VRTFuncSourceHGDAL.VRTImageReadFuncGDAL.VRTKernelFilteredSourceHGDAL.VRTRasterBandHGDAL.VRTRawRasterBandHGDAL.VRTSimpleSourceHGDAL.VRTSourceHGDAL.VRTSourcedRasterBandHGDAL.VRTWarpedDatasetHGDAL.VRTWarpedRasterBandHGDAL.VRT_NODATA_UNSETGDAL.VSILFILEGDAL.VSIRangeStatusGDAL.VSIStatBufGDAL.VSIStatBufLGDAL.VSI_RANGE_STATUS_DATAGDAL.VSI_RANGE_STATUS_HOLEGDAL.VSI_RANGE_STATUS_UNKNOWNGDAL.VSI_STAT_EXISTS_FLAGGDAL.VSI_STAT_NATURE_FLAGGDAL.VSI_STAT_SET_ERROR_FLAGGDAL.VSI_STAT_SIZE_FLAGGDAL._CPLXMLNodeGDAL.__init__GDAL._cplassertGDAL.addbandGDAL.addderivedbandpixelfuncGDAL.addfielddefnGDAL.addgeometryGDAL.addgeometrydirectlyGDAL.addgeomfielddefnGDAL.addpartGDAL.addpointGDAL.addpoint_2dGDAL.addpointmGDAL.addpointzmGDAL.addstyleGDAL.adjustvaluetodatatypeGDAL.allregisterGDAL.alterfielddefnGDAL.applygeotransformGDAL.applyverticalshiftgridGDAL.approximatearcanglesGDAL.approxtransformGDAL.approxtransformerownssubtransformerGDAL.areaGDAL.aretypesubtypecompatibleGDAL.argetnextupdatedregionGDAL.arlockbufferGDAL.arunlockbufferGDAL.assignspatialreferenceGDAL.autoidentifyepsgGDAL.axisenumtonameGDAL.beginasyncreaderGDAL.boundaryGDAL.bufferGDAL.buildoverviewsGDAL.buildpolygonfromedgesGDAL.buildvrtGDAL.buildvrtoptionsfreeGDAL.buildvrtoptionsnewGDAL.buildvrtoptionssetprogressGDAL.calcinvflatteningGDAL.calcsemiminorfrominvflatteningGDAL.centroidGDAL.cg_createGDAL.check_depsGDAL.checksumimageGDAL.cleanupGDAL.cleanupallGDAL.cleanuperrormutexGDAL.clipGDAL.cloneGDAL.clonecolortableGDAL.clonegeogcsGDAL.closeGDAL.closeringsGDAL.committransactionGDAL.composegeotransformsGDAL.computebandstatsGDAL.computematchingpointsGDAL.computemediancutpctGDAL.computeproximityGDAL.computerasterminmaxGDAL.computerasterstatisticsGDAL.containsGDAL.contourgenerateGDAL.contourwriterGDAL.convexhullGDAL.coordinatedimensionGDAL.copybitsGDAL.copydatasetfilesGDAL.copydatasourceGDAL.copygeogcsfromGDAL.copylayerGDAL.copywordsGDAL.createGDAL.createapproxtransformerGDAL.createcolorrampGDAL.createcolortableGDAL.createcopyGDAL.createdatasetmaskbandGDAL.createdatasourceGDAL.createfeatureGDAL.createfieldGDAL.createfromfgfGDAL.createfromgmlGDAL.createfromgmltreeGDAL.createfromwkbGDAL.createfromwktGDAL.creategcprefinetransformerGDAL.creategcptransformerGDAL.creategenimgprojtransformerGDAL.creategenimgprojtransformer2GDAL.creategenimgprojtransformer3GDAL.creategeoloctransformerGDAL.creategeometryGDAL.creategeometryfromjsonGDAL.creategeomfieldGDAL.createlayerGDAL.createmaskbandGDAL.createpansharpenedvrtGDAL.createrasterattributetableGDAL.createreprojectiontransformerGDAL.createrpctransformerGDAL.createsimilartransformerGDAL.createtpstransformerGDAL.crossesGDAL.datasetadvisereadGDAL.datasetcommittransactionGDAL.datasetcopylayerGDAL.datasetcopywholerasterGDAL.datasetcreatelayerGDAL.datasetdeletelayerGDAL.datasetexecutesqlGDAL.datasetgetlayerGDAL.datasetgetlayerbynameGDAL.datasetgetlayercountGDAL.datasetgetnextfeatureGDAL.datasetgetstyletableGDAL.datasetgettiledvirtualmemGDAL.datasetgetvirtualmemGDAL.datasetrasterioGDAL.datasetrasterioexGDAL.datasetreleaseresultsetGDAL.datasetresetreadingGDAL.datasetrollbacktransactionGDAL.datasetsetstyletableGDAL.datasetsetstyletabledirectlyGDAL.datasetstarttransactionGDAL.datasettestcapabilityGDAL.datatypeiscomplexGDAL.datatypeunionGDAL.dectodmsGDAL.dectopackeddmsGDAL.defaulterrorhandlerGDAL.deinitgcpsGDAL.delaunaytriangulationGDAL.deletedatasetGDAL.deletedatasourceGDAL.deletefeatureGDAL.deletefieldGDAL.deletefielddefnGDAL.deletegeomfielddefnGDAL.deletelayerGDAL.deleterasternodatavalueGDAL.demprocessingGDAL.demprocessingoptionsfreeGDAL.demprocessingoptionsnewGDAL.demprocessingoptionssetprogressGDAL.depsjl_pathGDAL.dereferenceGDAL.dereferencedatasetGDAL.deregisterdriverGDAL.deserializetransformerGDAL.destroyGDAL.destroyapproxtransformerGDAL.destroycolortableGDAL.destroydriverGDAL.destroydrivermanagerGDAL.destroygcptransformerGDAL.destroygenimgprojtransformerGDAL.destroygeoloctransformerGDAL.destroygeometryGDAL.destroyrasterattributetableGDAL.destroyreprojectiontransformerGDAL.destroyrpctransformerGDAL.destroyspatialreferenceGDAL.destroytpstransformerGDAL.destroytransformerGDAL.differenceGDAL.disjointGDAL.distanceGDAL.distance3dGDAL.ditherrgb2pctGDAL.dumpopendatasetsGDAL.dumpreadableGDAL.duplicategcpsGDAL.emergencyerrorGDAL.emptyGDAL.endasyncreaderGDAL.epsgtreatsaslatlongGDAL.epsgtreatsasnorthingeastingGDAL.equalGDAL.equalsGDAL.eraseGDAL.errorresetGDAL.errorsetstateGDAL.evalGDAL.executesqlGDAL.exportenvelopetogmltreeGDAL.exporttoermGDAL.exporttogmlGDAL.exporttogmlexGDAL.exporttogmltreeGDAL.exporttoisowkbGDAL.exporttoisowktGDAL.exporttojsonGDAL.exporttojsonexGDAL.exporttokmlGDAL.exporttomicoordsysGDAL.exporttopanoramaGDAL.exporttopciGDAL.exporttoprettywktGDAL.exporttoproj4GDAL.exporttousgsGDAL.exporttowkbGDAL.exporttowktGDAL.exporttoxmlGDAL.extractrpcinfoGDAL.f_createGDAL.failsafeGDAL.fd_createGDAL.feedlineGDAL.fillnodataGDAL.fillrasterGDAL.fillunsetwithdefaultGDAL.findGDAL.findfieldindexGDAL.fixupGDAL.fixuporderingGDAL.flattento2dGDAL.fld_createGDAL.flushcacheGDAL.flushcacheblockGDAL.flushrastercacheGDAL.forcetoGDAL.forcetolinestringGDAL.forcetomultilinestringGDAL.forcetomultipointGDAL.forcetomultipolygonGDAL.forcetopolygonGDAL.fpolygonizeGDAL.gcpstogeotransformGDAL.gcptransformGDAL.gdal_translate_pathGDAL.gdalinfo_pathGDAL.gdaljl_errorhandlerGDAL.gdalwarp_pathGDAL.generalcmdlineprocessorGDAL.genimgprojtransformGDAL.geoloctransformGDAL.getaccessGDAL.getactualblocksizeGDAL.getangularunitsGDAL.getareaGDAL.getasyncstatustypebynameGDAL.getasyncstatustypenameGDAL.getattrvalueGDAL.getauthoritycodeGDAL.getauthoritynameGDAL.getaxisGDAL.getbanddatasetGDAL.getbandnumberGDAL.getblocksizeGDAL.getboundaryGDAL.getcachemaxGDAL.getcachemax64GDAL.getcacheusedGDAL.getcacheused64GDAL.getcolorentryGDAL.getcolorentryasrgbGDAL.getcolorentrycountGDAL.getcolorinterpretationbynameGDAL.getcolorinterpretationnameGDAL.getcoordinatedimensionGDAL.getcurvegeometryGDAL.getdatacoveragestatusGDAL.getdatasetdriverGDAL.getdatatypebynameGDAL.getdatatypenameGDAL.getdatatypesizeGDAL.getdatatypesizebitsGDAL.getdatatypesizebytesGDAL.getdefaultGDAL.getdefaulthistogramGDAL.getdefaulthistogramexGDAL.getdefaultratGDAL.getdefnrefGDAL.getdescriptionGDAL.getdimensionGDAL.getdriverGDAL.getdriverbynameGDAL.getdrivercountGDAL.getdrivercreationoptionlistGDAL.getdriverhelptopicGDAL.getdriverlongnameGDAL.getdrivershortnameGDAL.getenvelopeGDAL.getenvelope3dGDAL.geterrorhandleruserdataGDAL.getextentGDAL.getextentexGDAL.getfeatureGDAL.getfeaturecountGDAL.getfeaturesreadGDAL.getfidGDAL.getfidcolumnGDAL.getfieldasbinaryGDAL.getfieldasdatetimeGDAL.getfieldasdatetimeexGDAL.getfieldasdoubleGDAL.getfieldasdoublelistGDAL.getfieldasintegerGDAL.getfieldasinteger64GDAL.getfieldasinteger64listGDAL.getfieldasintegerlistGDAL.getfieldasstringGDAL.getfieldasstringlistGDAL.getfieldcountGDAL.getfielddefnGDAL.getfielddefnrefGDAL.getfieldindexGDAL.getfieldsubtypenameGDAL.getfieldtypenameGDAL.getfilelistGDAL.getgcpcountGDAL.getgcpprojectionGDAL.getgcpsGDAL.getgenerate_db2_v72_byte_orderGDAL.getgeometrycolumnGDAL.getgeometrycountGDAL.getgeometrynameGDAL.getgeometryrefGDAL.getgeometrytypeGDAL.getgeomfieldcountGDAL.getgeomfielddefnGDAL.getgeomfielddefnrefGDAL.getgeomfieldindexGDAL.getgeomfieldrefGDAL.getgeomtypeGDAL.getgeotransformGDAL.getinternalhandleGDAL.getinvflatteningGDAL.getjpeg2000structureGDAL.getjustifyGDAL.getlasterrormsgGDAL.getlasterrornoGDAL.getlasterrortypeGDAL.getlaststylenameGDAL.getlayerGDAL.getlayerbynameGDAL.getlayercountGDAL.getlayerdefnGDAL.getlineargeometryGDAL.getlinearunitsGDAL.getmGDAL.getmaskbandGDAL.getmaskflagsGDAL.getmetadataGDAL.getmetadatadomainlistGDAL.getmetadataitemGDAL.getnameGDAL.getnamerefGDAL.getnativedataGDAL.getnativemediatypeGDAL.getnextfeatureGDAL.getnextstyleGDAL.getnoncomplexdatatypeGDAL.getnonlineargeometriesenabledflagGDAL.getnormprojparmGDAL.getopendatasetsGDAL.getopendsGDAL.getopendscountGDAL.getoverviewGDAL.getoverviewcountGDAL.getpaletteinterpretationGDAL.getpaletteinterpretationnameGDAL.getparamdblGDAL.getparamnumGDAL.getparamstrGDAL.getpartGDAL.getpartcountGDAL.getpointGDAL.getpointcountGDAL.getpointsGDAL.getpointszmGDAL.getpointzmGDAL.getprecisionGDAL.getprimemeridianGDAL.getprojectionrefGDAL.getprojparmGDAL.getrandomrastersampleGDAL.getrasteraccessGDAL.getrasterbandGDAL.getrasterbandxsizeGDAL.getrasterbandysizeGDAL.getrastercategorynamesGDAL.getrastercolorinterpretationGDAL.getrastercolortableGDAL.getrastercountGDAL.getrasterdatatypeGDAL.getrasterhistogramGDAL.getrasterhistogramexGDAL.getrastermaximumGDAL.getrasterminimumGDAL.getrasternodatavalueGDAL.getrasteroffsetGDAL.getrastersampleoverviewGDAL.getrastersampleoverviewexGDAL.getrasterscaleGDAL.getrasterstatisticsGDAL.getrasterunittypeGDAL.getrasterxsizeGDAL.getrasterysizeGDAL.getrawfieldrefGDAL.getrefcountGDAL.getreferencecountGDAL.getrgbfromstringGDAL.getsemimajorGDAL.getsemiminorGDAL.getspatialfilterGDAL.getspatialrefGDAL.getspatialreferenceGDAL.getstylestringGDAL.getstyletableGDAL.getsubtypeGDAL.getsummaryrefcountGDAL.gettargetlinearunitsGDAL.gettowgs84GDAL.gettypeGDAL.getunitGDAL.getutmzoneGDAL.getvirtualmemautoGDAL.getwidthGDAL.getxGDAL.getyGDAL.getzGDAL.gfld_createGDAL.gridGDAL.gridcontextcreateGDAL.gridcontextfreeGDAL.gridcontextprocessGDAL.gridcreateGDAL.gridoptionsfreeGDAL.gridoptionsnewGDAL.gridoptionssetprogressGDAL.hasarbitraryoverviewsGDAL.hascurvegeometryGDAL.hastriangulationGDAL.identifydriverGDAL.identifydriverexGDAL.identityGDAL.importfromdictGDAL.importfromepsgGDAL.importfromepsgaGDAL.importfromermGDAL.importfromesriGDAL.importfrommicoordsysGDAL.importfromoziGDAL.importfrompanoramaGDAL.importfrompciGDAL.importfromproj4GDAL.importfromurlGDAL.importfromusgsGDAL.importfromwkbGDAL.importfromwktGDAL.importfromxmlGDAL.includeGDAL.infoGDAL.infooptionsfreeGDAL.infooptionsnewGDAL.initfromfeatureGDAL.initgcpsGDAL.initstylestringGDAL.intersectGDAL.intersectionGDAL.intersectsGDAL.invgeotransformGDAL.is3dGDAL.iscompoundGDAL.isdefaultdriverspecificGDAL.isfieldnullGDAL.isfieldsetGDAL.isfieldsetandnotnullGDAL.isgeocentricGDAL.isgeographicGDAL.isgeometryignoredGDAL.isignoredGDAL.islocalGDAL.ismeasuredGDAL.isnullableGDAL.isprojectedGDAL.isringGDAL.issameGDAL.issamegeogcsGDAL.issamevertcsGDAL.issimpleGDAL.isstyleignoredGDAL.isvalidGDAL.isverticalGDAL.libgdalGDAL.loadozimapfileGDAL.loadstyletableGDAL.loadtabfileGDAL.loadworldfileGDAL.loggingerrorhandlerGDAL.morphfromesriGDAL.morphtoesriGDAL.nearblackGDAL.nearblackoptionsfreeGDAL.nearblackoptionsnewGDAL.nearblackoptionssetprogressGDAL.newspatialreferenceGDAL.octcleanupprojmutexGDAL.octdestroycoordinatetransformationGDAL.octnewcoordinatetransformationGDAL.octproj4normalizeGDAL.octtransformGDAL.octtransformexGDAL.ogr2ogr_pathGDAL.ogrZMarkerGDAL.ogrgetdriverGDAL.ogrgetdriverbynameGDAL.ogrgetdrivercountGDAL.ogrinfo_pathGDAL.openGDAL.openexGDAL.opensharedGDAL.openverticalshiftgridGDAL.optgetparameterinfoGDAL.optgetparameterlistGDAL.optgetprojectionmethodsGDAL.overlapsGDAL.overviewmagnitudecorrectionGDAL.packeddmstodecGDAL.pointonsurfaceGDAL.polygonizeGDAL.poperrorhandlerGDAL.pusherrorhandlerGDAL.pusherrorhandlerexGDAL.quieterrorhandlerGDAL.rasteradvisereadGDAL.rasterbandcopywholerasterGDAL.rasterbandgettiledvirtualmemGDAL.rasterbandgetvirtualmemGDAL.rasterioGDAL.rasterioexGDAL.rasterizeGDAL.rasterizegeometriesGDAL.rasterizelayersGDAL.rasterizelayersbufGDAL.rasterizeoptionsfreeGDAL.rasterizeoptionsnewGDAL.rasterizeoptionssetprogressGDAL.ratchangesarewrittentofileGDAL.ratcloneGDAL.ratcreatecolumnGDAL.ratdumpreadableGDAL.ratgetcolofusageGDAL.ratgetcolumncountGDAL.ratgetlinearbinningGDAL.ratgetnameofcolGDAL.ratgetrowcountGDAL.ratgetrowofvalueGDAL.ratgettypeofcolGDAL.ratgetusageofcolGDAL.ratgetvalueasdoubleGDAL.ratgetvalueasintGDAL.ratgetvalueasstringGDAL.ratinitializefromcolortableGDAL.ratserializejsonGDAL.ratsetlinearbinningGDAL.ratsetrowcountGDAL.ratsetvalueasdoubleGDAL.ratsetvalueasintGDAL.ratsetvalueasstringGDAL.rattranslatetocolortableGDAL.ratvaluesioasdoubleGDAL.ratvaluesioasintegerGDAL.ratvaluesioasstringGDAL.rawfield_isnullGDAL.rawfield_isunsetGDAL.rawfield_setnullGDAL.rawfield_setunsetGDAL.readblockGDAL.readozimapfileGDAL.readtabfileGDAL.readworldfileGDAL.referenceGDAL.referencedatasetGDAL.regenerateoverviewsGDAL.registerallGDAL.registerdriverGDAL.releaseGDAL.releasedatasetGDAL.releasedatasourceGDAL.releaseresultsetGDAL.removegeometryGDAL.renamedatasetGDAL.reorderfieldGDAL.reorderfielddefnsGDAL.reorderfieldsGDAL.reprojectiontransformGDAL.resetreadingGDAL.resetstylestringreadingGDAL.rollbacktransactionGDAL.rpcinfotomdGDAL.rpctransformGDAL.savestyletableGDAL.segmentizeGDAL.serializetransformerGDAL.setGDAL.set3dGDAL.setaceaGDAL.setaeGDAL.setangularunitsGDAL.setattributefilterGDAL.setattrvalueGDAL.setauthorityGDAL.setaxesGDAL.setbonneGDAL.setcachemaxGDAL.setcachemax64GDAL.setceaGDAL.setcolorentryGDAL.setcompoundcsGDAL.setcoordinatedimensionGDAL.setcsGDAL.setcurrenterrorhandlercatchdebugGDAL.setdefaultGDAL.setdefaulthistogramGDAL.setdefaulthistogramexGDAL.setdefaultratGDAL.setdescriptionGDAL.setecGDAL.seteckertGDAL.seteckertivGDAL.seteckertviGDAL.setequirectangularGDAL.setequirectangular2GDAL.seterrorhandlerGDAL.seterrorhandlerexGDAL.setfeatureGDAL.setfidGDAL.setfieldbinaryGDAL.setfielddatetimeGDAL.setfielddatetimeexGDAL.setfielddoubleGDAL.setfielddoublelistGDAL.setfieldintegerGDAL.setfieldinteger64GDAL.setfieldinteger64listGDAL.setfieldintegerlistGDAL.setfieldnullGDAL.setfieldrawGDAL.setfieldstringGDAL.setfieldstringlistGDAL.setfromGDAL.setfromuserinputGDAL.setfromwithmapGDAL.setgaussschreibertmercatorGDAL.setgcpsGDAL.setgenerate_db2_v72_byte_orderGDAL.setgenimgprojtransformerdstgeotransformGDAL.setgeoccsGDAL.setgeogcsGDAL.setgeometryGDAL.setgeometrydirectlyGDAL.setgeometryignoredGDAL.setgeomfieldGDAL.setgeomfielddirectlyGDAL.setgeomtypeGDAL.setgeosGDAL.setgeotransformGDAL.setghGDAL.setgnomonicGDAL.setgsGDAL.sethomGDAL.sethom2pnoGDAL.sethomacGDAL.setighGDAL.setignoredGDAL.setignoredfieldsGDAL.setiwmpolyconicGDAL.setjustifyGDAL.setkrovakGDAL.setlaeaGDAL.setlccGDAL.setlcc1spGDAL.setlccbGDAL.setlinearunitsGDAL.setlinearunitsandupdateparametersGDAL.setlocalcsGDAL.setmcGDAL.setmeasuredGDAL.setmercatorGDAL.setmercator2spGDAL.setmetadataGDAL.setmetadataitemGDAL.setmollweideGDAL.setnameGDAL.setnativedataGDAL.setnativemediatypeGDAL.setnextbyindexGDAL.setnonlineargeometriesenabledflagGDAL.setnormprojparmGDAL.setnullableGDAL.setnzmgGDAL.setomGDAL.setorthographicGDAL.setosGDAL.setparamdblGDAL.setparamnumGDAL.setparamstrGDAL.setpointGDAL.setpoint_2dGDAL.setpointcountGDAL.setpointmGDAL.setpointsGDAL.setpointszmGDAL.setpointzmGDAL.setpolyconicGDAL.setprecisionGDAL.setprojcsGDAL.setprojectionGDAL.setprojparmGDAL.setpsGDAL.setqscGDAL.setrastercategorynamesGDAL.setrastercolorinterpretationGDAL.setrastercolortableGDAL.setrasternodatavalueGDAL.setrasteroffsetGDAL.setrasterscaleGDAL.setrasterstatisticsGDAL.setrasterunittypeGDAL.setrobinsonGDAL.setschGDAL.setsinusoidalGDAL.setsocGDAL.setspatialfilterGDAL.setspatialfilterexGDAL.setspatialfilterrectGDAL.setspatialfilterrectexGDAL.setspatialrefGDAL.setstateplaneGDAL.setstateplanewithunitsGDAL.setstereographicGDAL.setstyleignoredGDAL.setstylestringGDAL.setstylestringdirectlyGDAL.setstyletableGDAL.setstyletabledirectlyGDAL.setsubtypeGDAL.settargetlinearunitsGDAL.settmGDAL.settmgGDAL.settmsoGDAL.settmvariantGDAL.settowgs84GDAL.settpedGDAL.settransformerdstgeotransformGDAL.settypeGDAL.setunitGDAL.setutmGDAL.setvdgGDAL.setvertcsGDAL.setwagnerGDAL.setwellknowngeogcsGDAL.setwidthGDAL.sievefilterGDAL.simpleimagewarpGDAL.simplifyGDAL.simplifypreservetopologyGDAL.sm_createGDAL.st_createGDAL.starttransactionGDAL.stbl_createGDAL.stealgeometryGDAL.stripctparmsGDAL.suggestedwarpoutputGDAL.suggestedwarpoutput2GDAL.swapwordsGDAL.swapwordsexGDAL.symdifferenceGDAL.symmetricdifferenceGDAL.synctodiskGDAL.testcapabilityGDAL.throw_classGDAL.time_tGDAL.touchesGDAL.tpstransformGDAL.transformGDAL.transformgeolocationsGDAL.transformtoGDAL.translateGDAL.translateoptionsfreeGDAL.translateoptionsnewGDAL.translateoptionssetprogressGDAL.triangulationcomputebarycentriccoefficientsGDAL.triangulationcomputebarycentriccoordinatesGDAL.triangulationcreatedelaunayGDAL.triangulationfindfacetbruteforceGDAL.triangulationfindfacetdirectedGDAL.triangulationfreeGDAL.triangulationterminateGDAL.turnfailureintowarningGDAL.unionGDAL.unioncascadedGDAL.unsafe_loadstringlistGDAL.unsetfieldGDAL.updateGDAL.usetransformerGDAL.validateGDAL.validatecreationoptionsGDAL.valueGDAL.vectortranslateGDAL.vectortranslateoptionsfreeGDAL.vectortranslateoptionsnewGDAL.vectortranslateoptionssetprogressGDAL.vrtaddbandGDAL.vrtaddcomplexsourceGDAL.vrtaddfuncsourceGDAL.vrtaddsimplesourceGDAL.vrtaddsourceGDAL.vrtcreateGDAL.vrtflushcacheGDAL.vrtserializetoxmlGDAL.vsi_l_offsetGDAL.warpGDAL.warpappoptionsfreeGDAL.warpappoptionsnewGDAL.warpappoptionssetprogressGDAL.warpappoptionssetwarpoptionGDAL.withinGDAL.wkb25DBitGDAL.wkbCircularStringGDAL.wkbCircularStringMGDAL.wkbCircularStringZGDAL.wkbCircularStringZMGDAL.wkbCompoundCurveGDAL.wkbCompoundCurveMGDAL.wkbCompoundCurveZGDAL.wkbCompoundCurveZMGDAL.wkbCurveGDAL.wkbCurveMGDAL.wkbCurvePolygonGDAL.wkbCurvePolygonMGDAL.wkbCurvePolygonZGDAL.wkbCurvePolygonZMGDAL.wkbCurveZGDAL.wkbCurveZMGDAL.wkbGeometryCollectionGDAL.wkbGeometryCollection25DGDAL.wkbGeometryCollectionMGDAL.wkbGeometryCollectionZMGDAL.wkbLineStringGDAL.wkbLineString25DGDAL.wkbLineStringMGDAL.wkbLineStringZMGDAL.wkbLinearRingGDAL.wkbMultiCurveGDAL.wkbMultiCurveMGDAL.wkbMultiCurveZGDAL.wkbMultiCurveZMGDAL.wkbMultiLineStringGDAL.wkbMultiLineString25DGDAL.wkbMultiLineStringMGDAL.wkbMultiLineStringZMGDAL.wkbMultiPointGDAL.wkbMultiPoint25DGDAL.wkbMultiPointMGDAL.wkbMultiPointZMGDAL.wkbMultiPolygonGDAL.wkbMultiPolygon25DGDAL.wkbMultiPolygonMGDAL.wkbMultiPolygonZMGDAL.wkbMultiSurfaceGDAL.wkbMultiSurfaceMGDAL.wkbMultiSurfaceZGDAL.wkbMultiSurfaceZMGDAL.wkbNDRGDAL.wkbNoneGDAL.wkbPointGDAL.wkbPoint25DGDAL.wkbPointMGDAL.wkbPointZMGDAL.wkbPolygonGDAL.wkbPolygon25DGDAL.wkbPolygonMGDAL.wkbPolygonZMGDAL.wkbPolyhedralSurfaceGDAL.wkbPolyhedralSurfaceMGDAL.wkbPolyhedralSurfaceZGDAL.wkbPolyhedralSurfaceZMGDAL.wkbSurfaceGDAL.wkbSurfaceMGDAL.wkbSurfaceZGDAL.wkbSurfaceZMGDAL.wkbTINGDAL.wkbTINMGDAL.wkbTINZGDAL.wkbTINZMGDAL.wkbTriangleGDAL.wkbTriangleMGDAL.wkbTriangleZGDAL.wkbTriangleZMGDAL.wkbUnknownGDAL.wkbVariantIsoGDAL.wkbVariantOldOgcGDAL.wkbVariantPostGIS1GDAL.wkbXDRGDAL.wkbsizeGDAL.writeblockGDAL.writeworldfile"
},

]}
