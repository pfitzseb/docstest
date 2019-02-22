var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OIFITS.jl-1",
    "page": "Readme",
    "title": "OIFITS.jl",
    "category": "section",
    "text": "(Image: License) (Image: Build Status) (Image: Build Status)The OIFITS.jl package provides support for OI-FITS data in Julia language."
},

{
    "location": "#OI-FITS-Summary-1",
    "page": "Readme",
    "title": "OI-FITS Summary",
    "category": "section",
    "text": "OI-FITS is a standard to store optical interferometry data as a collection of data-blocks.  In the first version of the standard (see Ref. 1), the available data-blocks are:OI_TARGET provides a list of observed targets;\nOI_ARRAY describes a given array of stations;\nOI_WAVELENGTH describes a given instrument (notably the effective wavelengths and bandwidths of its spectral channels);\nOI_VIS contains complex visibility data;\nOI_VIS2 contains squared visibility (powerspectrum) data;\nOI_T3 contains triple product (bispectrum) data.These data-blocks, are stored as binary tables in a FITS data file.  The support for the actual FITS files is provided by the FITSIO.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "OIFITS is a registered Julia package, the installation is as simple as:Pkg.add(\"OIFITS\")\nPkg.update()The last command Pkg.update() may be unnecessary."
},

{
    "location": "#Typical-usage-1",
    "page": "Readme",
    "title": "Typical usage",
    "category": "section",
    "text": "Loading an OI-FITS data file:using OIFITS\nmaster = OIFITS.load(\"testdata.oifits\")To iterate through all data-blocks:for db in master\n    dbname = OIFITS.get_dbname(db)\n    revn = OIFITS.get_revn(db)\n    println(\"Data block is $dbname, revision $revn\")\nendTo iterate through a sub-set of the data-blocks (here the complex visibility data, the powerspectrum data and the bispectrum data):for db in OIFITS.select(master, \"OI_VIS\", \"OI_VIS2\", \"OI_T3\")\n    dbname = OIFITS.get_dbname(db)\n    n = length(OIFITS.get_time(db))\n    println(\"Data block is $dbname, number of exposures is $n\")\nend"
},

{
    "location": "#Accessor-functions-1",
    "page": "Readme",
    "title": "Accessor functions",
    "category": "section",
    "text": "Any OI-FITS field (keyword/column) of a given data-block can be retrieved via an accessor whose name has suffix OIFITS.get_ followed by the name of the field (in lower case letters and with all non-letter and all non-digit letters replaced by the underscore character \'_\').  A notable exception is the revision number corresponding to the keyword \"OIREVN\" which is retrieved with the method `OIFITS.getrevn()`.  For instance:OIFITS.get_revn(db)      # get the revison number of the format (OI_REVN)\nOIFITS.get_eff_wave(db)  # get effective wavelengths (EFF_WAVE)\nOIFITS.get_eff_band(db)  # get effective bandwidths (EFF_BAND)\nOIFITS.get_ucoord(db)    # get the U coordinates of the data (UCOORD)Of course, getting a given field must make sense.  For instance, OIFITS.get_eff_wave() can be applied on any OI_WAVELENGTH data-blocks but also on data-blocks which contains interferometric data such as OI_VIS, OI_VIS2, OI_T3, etc. but not on other data-blocks like OI_TARGET."
},

{
    "location": "#Reading-data-1",
    "page": "Readme",
    "title": "Reading data",
    "category": "section",
    "text": "To load the contents of an OI-FITS file in memory, use:master = OIFITS.load(filename)where filename is the name of the file and the returned value, master, contains all the OI-FITS data-blocks of the file.  You may have the names of the data blocks printed as they get read with keyword quiet=false:master = OIFITS.load(filename, quiet=false)If you already have a FITS handle to the data, you can use it as the argument to OIFITS.load in place of the file name."
},

{
    "location": "#Constructors-1",
    "page": "Readme",
    "title": "Constructors",
    "category": "section",
    "text": "It is possible to build OI-FITS data-blocks individually.  The general syntax is:OIFITS.new_XXX(KEY1=VAL1, KEY2=VAL2, ...)where XXX is the type of the data-block and KEYn=VALn constructions give the fields of the data-block and their values.  The names of the fields follow the same convention as for the field accessors.Available data-block constructors are:OIFITS.new_target => OI_TARGET\nOIFITS.new_array => OI_ARRAY\nOIFITS.new_wavelength => OI_WAVELENGTH\nOIFITS.new_vis  => OI_VIS\nOIFITS.new_vis2 => OI_VIS2\nOIFITS.new_t3   => OI_T3When defining a new data-block, all mandatory fields must be provided. For instance, to create an OI_WAVELENGTH data-block:µm = 1e-6  # all values are in SI units in OI-FITS\ndb = OIFITS.new_wavelength(insname=\"Amber\",\n                           eff_wave=[1.4µm,1.6µm,1.8µm],\n                           eff_band=[0.2µm,0.2µm,0.2µm])Note that the revision number (revn=...) can be omitted; by default, the highest defined revision will be used.A consistent set of OI-FITS data-blocks is made of: exactly one OI_TARGET data-block, one or more OI_WAVELENGTH data-blocks, one or more OI_ARRAY data-blocks and any number of data-blocks with interferometric data (OI_VIS, OI_VIS2 or OI_T3).  These data-blocks must be stored in a container created by:master = OIFITS.new_master()Then, call:OIFITS.attach(master, db)to attach all data-block db to the OI-FITS container (in any order). Finally, you must call:OIFITS.update(master)to update internal information such as links between data-blocks with interferometric data and the related instrument (OI_WAVELENGTH data-block) and array of stations (OI_ARRAY data-block).  If you do not do that, then applying some accessors may not work, e.g. OIFITS.get_eff_wave() on a data-blocks with interferometric data.To read an OI-FITS data-block from the HDU of a FITS file:db = OIFITS.read_datablock(hdu)where hdu is a FITS HDU handle.  The result may be nothing if the current HDU does not contain an OI-FITS data-block."
},

{
    "location": "#Miscellaneous-functions-1",
    "page": "Readme",
    "title": "Miscellaneous functions",
    "category": "section",
    "text": "OI-FITS implements some useful functions which can be used to deal with FITS file (not just OI-FITS ones).  These functions could be part of FITSIO package."
},

{
    "location": "#Retrieving-information-from-the-header-of-a-FITS-HDU-1",
    "page": "Readme",
    "title": "Retrieving information from the header of a FITS HDU",
    "category": "section",
    "text": "The header of a FITS HDU can be read with the function:fts = FITS(filename)\nhdr = FITSIO.read_header(fts[1])which returns an indexable and iterable object, here hdr.  The keys of hdr are the FITS keywords of the header.  For instance:keys(hdr)          # yield an iterator on the keys of hdr\ncollect(keys(hdr)) # yield all the keys of hdr\nhaskey(hdr, key)   # check whether key is present\nhdr[key]           # retrieve the contents associated with the keyFor commentary FITS keywords (\"HISTORY\" or \"COMMENT\"), there is no value, just a comment but there may be any number of these commentary keywords.  Other keywords must be unique and thus have a scalar value.  Use get_comment to retrieve the comment of a FITS keyword:get_comment(hdr, key)keys(hdr)          # yield an iterator on the keys of hdr\ncollect(keys(hdr)) # yield all the keys of hdr\nhaskey(hdr, key)   # check whether key is present\nhdr[key]           # retrieve the contents associated with the keyOIFITS provides method OIFITS.get_value() and OIFITS.get_comment() method to retrieve the value and comment (respectively) of a FITS keyword with type checking and, optionaly, let you provide a default value if the keyword is absent:val = OIFITS.get_value(hdr, key)\nval = OIFITS.get_value(hdr, key, def)\ncom = OIFITS.get_comment(hdr, key)\ncom = OIFITS.get_comment(hdr, key, def)To retrieve a value and make sure it has a specific type, the following methods are available:OIFITS.get_logical(hdr, \"SIMPLE\")\nOIFITS.get_integer(hdr, \"BITPIX\")\nOIFITS.get_real(hdr, \"BSCALE\")\nOIFITS.get_string(hdr, \"XTENSION\")which throw an error if the keyword is not present and perform type checking and conversion if allowed.  It is also possible to supply a default value to return if the keyword is not present:bscale = OIFITS.get_real(hdr, \"BSCALE\", 1.0)\nbzero = OIFITS.get_real(hdr, \"BZERO\", 0.0)\nxtension = OIFITS.get_string(hdr, \"XTENSION\", \"IMAGE\")The function:OIFITS.get_hdutype(hdr)returns the HDU type as a Symbol, :image_hdu for an image, :ascii_table for an ASCII table, :binary_table for a binary table, and :unknown otherwise.For a FITS table, the function:OIFITS.get_dbtype(hdr)returns the OI-FITS data-block type as a Symbol like :OI_TARGET, :OI_WAVELENGTH, etc."
},

{
    "location": "#Reading-FITS-tables-1",
    "page": "Readme",
    "title": "Reading FITS tables",
    "category": "section",
    "text": "In addition to the method read(tbl::TableHDU, colname::String) provided by FITSIO for reading a specific column of a FITS table, the low-level function:OIFITS.read_column(ff::FITSFile, colnum::Integer)returns a Julia array with the contents of the colnum-th column of the current HDU in FITS file handle ff.  The current HDU must be a FITS table (an ASCII or a binary one).  The last dimension of the result corresponds to the rows of the table.  It is also possible to read all the table:OIFITS.read_table(ff::FITSFile)\nOIFITS.read_table(hdu::Union(TableHDU,ASCIITableHDU))or at high-level:read(hdu::Union(TableHDU,ASCIITableHDU))The result is a dictionary whose keys are the names of the columns (in uppercase letters and with trailing spaces removed).  If a column has given units, the units are stored in the dictionary with suffix \".units\" appended to the column name.  For instance, the units for column \"TIME\" are accessible with key \"TIME.units\"."
},

{
    "location": "#FITS-and-Julia-types-conversion-1",
    "page": "Readme",
    "title": "FITS and Julia types conversion",
    "category": "section",
    "text": "The functions cfitsio_datatype() and fits_bitpix() deal with conversion between CFITSIO type code or BITPIX value and actual Julia data types. They can be used as follows (assuming T is a Julia data type, while code and bitpix are integers):cfitsio_datatype(T) --------> code (e.g., TBYTE, TFLOAT, etc.)\ncfitsio_datatype(code) -----> T\n\nfits_bitpix(T) -------------> bitpix (e.g., BYTE_IMG, FLOAT_IMG, etc.)\nfits_bitpix(bitpix) --------> TThe functions fits_get_coltype() and fits_get_eqcoltype() yield the data type, repeat count and width in bytes of a given column, their prototypes are:(code, repcnt, width) = fits_get_coltype(ff::FITSFile, colnum::Integer)\n(code, repcnt, width) = fits_get_eqcoltype(ff::FITSFile, colnum::Integer)with colnum the column number, code the CFITSIO column type (call cfitsio_datatype(code) to convert it to a Julia type) of the elements in this column, repcnt and width the repeat count and width of a cell in this column.  The difference between fits_get_coltype() and fits_get_eqcoltype() is that the former yields the column type as it is stored in the file, while the latter yields the column type after automatic scaling by the values \"TSCALn\" and \"TZEROn\" keywods if present (with n the column number).  Note that reading the column data with fits_read_col() or fitsio_read_column() automatically apply this kind of scaling.To retrieve the dimensions of the cells in a given column, call the function fits_read_tdim(), its prototype is:dims = fits_read_tdim(ff::FITSFile, colnum::Integer)where dims is a vector of integer dimensions."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "The developments of this package has received funding from the European Community\'s Seventh Framework Programme (FP7/2013-2016) under Grant Agreement 312430 (OPTICON)."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Pauls, T. A., Young, J. S., Cotton, W. D., & Monnier, J. D. \"A data exchange standard for optical (visible/IR) interferometry.\" Publications of the Astronomical Society of the Pacific, vol. 117, no 837, p. 1255 (2005). [pdf]\nDuvert, G., Young, J., & Hummel, C. \"OIFITS 2: the 2nd version of the Data Exchange Standard for Optical (Visible/IR) Interferometry.\" arXiv preprint [arXiv:1510.04556v2.04556]."
},

{
    "location": "autodocs/#OIFITS.clone",
    "page": "Docstrings",
    "title": "OIFITS.clone",
    "category": "function",
    "text": "Clone a data-block\n\nThis method clones an existing data-block.  The array data are shared between the clones but not the links (owner, target, instrument, etc.).  Only the fields defined by OI-FITS standard are cloned.  This method is intended when a data-block from a given OIMaster instance is to be attached to another OIMaster instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_array",
    "page": "Docstrings",
    "title": "OIFITS.get_array",
    "category": "function",
    "text": "Assuming mst is an instance of OIMaster, then:\n\n    get_array(mst, arrname)\n\nyields the OIArray data-block of mst whose name is arrname if any, nothing otherwise.\n\nAssuming db is an instance of a sub-type of OIDataBlock, then:\n\n    get_array(db)\n\nyields corresponding instance of OIArray if any, nothing otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_arrays",
    "page": "Docstrings",
    "title": "OIFITS.get_arrays",
    "category": "function",
    "text": "Assuming mst is an instance of OIMaster, then:\n\n    get_arrays(mst)\n\nyields the names of the interferometric arrays defined in mst.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_def",
    "page": "Docstrings",
    "title": "OIFITS.get_def",
    "category": "function",
    "text": "get_def(db, revn = default_revision())\n\nyields the OIDataBlockDef for datablock of type db (e.g., \"OI_TARGET\") in revison revn of OI-FITS standard.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_instrument",
    "page": "Docstrings",
    "title": "OIFITS.get_instrument",
    "category": "function",
    "text": "Assuming mst is an instance of OIMaster, then:\n\n    get_instrument(mst, insname)\n\nyields the OIWavelength data-block of mst whose name is insname if any, nothing otherwise.\n\nAssuming db is an instance of a sub-type of OIDataBlock, then:\n\n    get_instrument(db)\n\nyields corresponding instance of OIWavelength if any, nothing otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_instruments",
    "page": "Docstrings",
    "title": "OIFITS.get_instruments",
    "category": "function",
    "text": "Assuming mst is an instance of OIMaster, then:\n\n    get_instruments(mst)\n\nyields the names of the instruments defined in mst.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_target",
    "page": "Docstrings",
    "title": "OIFITS.get_target",
    "category": "function",
    "text": "Assuming mst is an instance of OIMaster, then:\n\n    get_target(mst)\n\nyields the OITarget data-block of mst if any, nothing otherwise.\n\nAssuming tgt is an instance of OITarget, then:\n\n    get_target(tgt)\n\nyields the \"TARGET\" column of tgt which is an array of target names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_target_id",
    "page": "Docstrings",
    "title": "OIFITS.get_target_id",
    "category": "function",
    "text": "Assuming db is an instance of OITarget, OIVis, OIVis2 or OIT3, then:\n\n    get_target_id(db)\n\nyields the \"TARGET_ID\" column of db which is an array of integers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.get_targets",
    "page": "Docstrings",
    "title": "OIFITS.get_targets",
    "category": "function",
    "text": "Assuming mst is an instance of OIMaster, then:\n\n    get_targets(mst)\n\nyields the names of the targets defined in mst.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.select_target",
    "page": "Docstrings",
    "title": "OIFITS.select_target",
    "category": "function",
    "text": "Select data for a given target\n\nThe method select_target selects a subset of data corresponding to a given target.   The general syntax is:\n\n    out = select_target(inp, tgt)\n\nwhere inp is the input data (can be an instance of OIMaster or of any OIDataBlock sub-types), tgt is the target number or name.\n\nThe result out may share part of its contents with the input data inp.\n\nThe result may be nothing if the input contains no data for the given target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OIFITS.select_wavelength",
    "page": "Docstrings",
    "title": "OIFITS.select_wavelength",
    "category": "function",
    "text": "Select data at given wavelengths\n\nThe method select_wavelength selects a subset of data on the basis of their wavelength.   The general syntax is:\n\n    out = select_wavelength(inp, sel)\n\nwhere inp is the input data (can be an instance of OIMaster or of any OIDataBlock sub-types), sel is a predicate function which takes a wavelength (in meters) as argument and returns true if this wavelength is to be selected and false otherwise.\n\nAn alternative is:\n\n    out = select_wavelength(inp, wmin, wmax)\n\nto select wavelengths w such that wmin ≤ w ≤ wmax.  The wavelength bounds are in meters.\n\nThe result out may share part of its contents with the input data inp.\n\nThe result may be nothing if the input contains no data at selected wavelengths.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OIFITS.NameOIFITS.OIArrayOIFITS.OIContentsOIFITS.OICorrelationOIFITS.OIDataOIFITS.OIDataBlockOIFITS.OIDataBlockDefOIFITS.OIFITSOIFITS.OIFieldDefOIFITS.OIFormatDefOIFITS.OIMasterOIFITS.OIPolarizationOIFITS.OISpectrumOIFITS.OIT3OIFITS.OITargetOIFITS.OIVisOIFITS.OIVis2OIFITS.OIWavelengthOIFITS._BITPIXOIFITS._COMMENTOIFITS._DATABLOCKSOIFITS._DATATYPEOIFITS._DATATYPESOIFITS._DTYPE_COMPLEXOIFITS._DTYPE_INTEGEROIFITS._DTYPE_LOGICALOIFITS._DTYPE_REALOIFITS._DTYPE_STRINGOIFITS._EXTENSIONOIFITS._EXTNAMESOIFITS._FIELDSOIFITS._FORMATSOIFITS._REVERSE_DATATYPEOIFITS.__init__OIFITS.add_defOIFITS.attach!OIFITS.build_datablockOIFITS.cfitsio_datatypeOIFITS.check_datablockOIFITS.cloneOIFITS.default_revisionOIFITS.evalOIFITS.fits_bitpixOIFITS.fixnameOIFITS.get_amporderOIFITS.get_amptypOIFITS.get_arrayOIFITS.get_arraysOIFITS.get_arrayxOIFITS.get_arrayyOIFITS.get_arrayzOIFITS.get_arrnameOIFITS.get_calstatOIFITS.get_categoryOIFITS.get_commentOIFITS.get_corrOIFITS.get_corrindx_fluxdataOIFITS.get_corrindx_ivisOIFITS.get_corrindx_rvisOIFITS.get_corrindx_t3ampOIFITS.get_corrindx_t3phiOIFITS.get_corrindx_vis2dataOIFITS.get_corrindx_visampOIFITS.get_corrindx_visphiOIFITS.get_corrnameOIFITS.get_date_obsOIFITS.get_dbnameOIFITS.get_dbtypeOIFITS.get_dec_errOIFITS.get_decep0OIFITS.get_defOIFITS.get_descrOIFITS.get_diameterOIFITS.get_eff_bandOIFITS.get_eff_waveOIFITS.get_equinoxOIFITS.get_file_handleOIFITS.get_flagOIFITS.get_fluxdataOIFITS.get_fluxerrOIFITS.get_fovOIFITS.get_fovtypeOIFITS.get_frameOIFITS.get_hdutypeOIFITS.get_iindxOIFITS.get_insnameOIFITS.get_instrumentOIFITS.get_instrumentsOIFITS.get_int_timeOIFITS.get_integerOIFITS.get_ivisOIFITS.get_iviserrOIFITS.get_jindxOIFITS.get_jxxOIFITS.get_jxyOIFITS.get_jyxOIFITS.get_jyyOIFITS.get_logicalOIFITS.get_mjdOIFITS.get_mjd_endOIFITS.get_mjd_obsOIFITS.get_modelOIFITS.get_ndataOIFITS.get_npolOIFITS.get_orientOIFITS.get_para_errOIFITS.get_parallaxOIFITS.get_phiorderOIFITS.get_phitypOIFITS.get_pmdecOIFITS.get_pmdec_errOIFITS.get_pmraOIFITS.get_pmra_errOIFITS.get_ra_errOIFITS.get_raep0OIFITS.get_realOIFITS.get_revnOIFITS.get_rvisOIFITS.get_rviserrOIFITS.get_spectypOIFITS.get_sta_indexOIFITS.get_sta_nameOIFITS.get_staxyzOIFITS.get_stringOIFITS.get_sysvelOIFITS.get_t3ampOIFITS.get_t3amperrOIFITS.get_t3phiOIFITS.get_t3phierrOIFITS.get_targetOIFITS.get_target_idOIFITS.get_targetsOIFITS.get_tel_nameOIFITS.get_timeOIFITS.get_u1coordOIFITS.get_u2coordOIFITS.get_ucoordOIFITS.get_v1coordOIFITS.get_v2coordOIFITS.get_valueOIFITS.get_vcoordOIFITS.get_veldefOIFITS.get_veltypOIFITS.get_vis2dataOIFITS.get_vis2errOIFITS.get_visampOIFITS.get_visamperrOIFITS.get_visphiOIFITS.get_visphierrOIFITS.get_visrefmapOIFITS.hash_column_namesOIFITS.includeOIFITS.is_complexOIFITS.is_integerOIFITS.is_logicalOIFITS.is_realOIFITS.is_stringOIFITS.loadOIFITS.make_hduOIFITS.name2SymbolOIFITS.new_arrayOIFITS.new_corrOIFITS.new_inspolOIFITS.new_masterOIFITS.new_spectrumOIFITS.new_t3OIFITS.new_targetOIFITS.new_visOIFITS.new_vis2OIFITS.new_wavelengthOIFITS.read_columnOIFITS.read_datablockOIFITS.read_tableOIFITS.readtableOIFITS.selectOIFITS.select_targetOIFITS.select_wavelengthOIFITS.symbolicnameOIFITS.to_complexOIFITS.to_integerOIFITS.to_realOIFITS.update!"
},

]}
