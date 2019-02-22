var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HDF5-interface-for-the-Julia-language-1",
    "page": "Readme",
    "title": "HDF5 interface for the Julia language",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)[HDF5][HDF5] is a file format and library for storing and accessing data, commonly used for scientific data. HDF5 files can be created and read by numerous programming languages.  This package provides an interface to the HDF5 library for the [Julia][Julia] language."
},

{
    "location": "#Julia-data-(*.jld)-and-Matlab-(*.mat)-files-1",
    "page": "Readme",
    "title": "Julia data (*.jld) and Matlab (*.mat) files",
    "category": "section",
    "text": "The core HDF5 functionality is the foundation for two special-purpose packages, used to read and write HDF5 files with specific formatting conventions. The first is the JLD (\"Julia data\") package, which implements a generic mechanism for reading and writing Julia variables. While one can use \"plain\" HDF5 for this purpose, the advantage of the JLD package is that it preserves the exact type information of each variable.The other functionality provided through HDF5 is the ability to read and write Matlab *.mat files saved as \"-v7.3\". The Matlab-specific portions have been moved to Simon Kornblith\'s MAT.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, use the package manager:Pkg.add(\"HDF5\")You also need to have the HDF5 library installed on your system (version 1.8 or higher is required), but for most users no additional steps should be required; the HDF5 library should be installed for you automatically when you add the package.If you have to install the HDF5 library manually, here are some examples of how to do it:Debian/(K)Ubuntu: apt-get -u install hdf5-tools\nOSX: brew tap homebrew/science; brew install hdf5 (using Homebrew)\nWindows: It is highly recommended that you use the HDF5 library fetched by this package. Other HDF5 binaries may be compiled against a different C runtime from the Julia binary, which will cause Julia to crash when freeing memory allocated by libhdf5.If you\'ve installed the library but discover that Julia is not finding it, you can add the path to Julia\'s Libdl.DL_LOAD_PATH variable, e.g.,push!(Libdl.DL_LOAD_PATH, \"/opt/local/lib\")\nPkg.build(\"HDF5\")Inserting this command into your .juliarc.jl file will cause this to happen automatically each time you start Julia.If you\'re on Linux but you do not have root privileges on your machine (and you can\'t persuade the sysadmin to install the libraries for you), you can download the binaries and place them somewhere in your home directory. To use HDF5, you\'ll have to start julia asLD_LIBRARY_PATH=/path/to/hdf5/libs juliaYou can set up an alias so this happens for you automatically each time you start julia."
},

{
    "location": "#Quickstart-1",
    "page": "Readme",
    "title": "Quickstart",
    "category": "section",
    "text": "Begin your code withusing HDF5To read and write a variable to a file, one approach is to use the filename:A = collect(reshape(1:120, 15, 8))\nh5write(\"/tmp/test2.h5\", \"mygroup2/A\", A)\ndata = h5read(\"/tmp/test2.h5\", \"mygroup2/A\", (2:3:15, 3:5))where the last line reads back just A[2:3:15, 3:5] from the dataset.More fine-grained control can be obtained using functional syntax:h5open(\"mydata.h5\", \"w\") do file\n    write(file, \"A\", A)  # alternatively, say \"@write file A\"\nend\n\nc = h5open(\"mydata.h5\", \"r\") do file\n    read(file, \"A\")\nendThis allows you to add variables as they are generated to an open HDF5 file. You don\'t have to use the do syntax (file = h5open(\"mydata.h5\", \"w\") works just fine), but an advantage is that it will automatically close the file (close(file)) for you, even in cases of error.Julia\'s high-level wrapper, providing a dictionary-like interface, may also be of interest:using HDF5\n\nh5open(\"test.h5\", \"w\") do file\n    g = g_create(file, \"mygroup\") # create a group\n    g[\"dset1\"] = 3.2              # create a scalar dataset inside the group\n    attrs(g)[\"Description\"] = \"This group contains only a single dataset\" # an attribute\nendConvenience functions for attributes attached to datasets are also provided:A = Vector{Int}(1:10)\nh5write(\"bar.h5\", \"foo\", A)\nh5writeattr(\"bar.h5\", \"foo\", Dict(\"c\"=>\"value for metadata parameter c\",\"d\"=>\"metadata d\"))\nh5readattr(\"bar.h5\", \"foo\")"
},

{
    "location": "#Specific-file-formats-1",
    "page": "Readme",
    "title": "Specific file formats",
    "category": "section",
    "text": "There is no conflict in having multiple modules (HDF5, JLD, and MAT) available simultaneously; the formatting of the file is determined by the open command."
},

{
    "location": "#Complete-documentation-1",
    "page": "Readme",
    "title": "Complete documentation",
    "category": "section",
    "text": "The HDF5 API is much more extensive than suggested by this brief introduction.  More complete documentation is found in the doc directory.The test directory contains a number of test scripts that also demonstrate usage."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Konrad Hinsen initiated Julia\'s support for HDF5\nTim Holy and Simon Kornblith (co-maintainers and primary authors)\nTom Short contributed code and ideas to the dictionary-like interface\nBlake Johnson made several improvements, such as support for iterating over attributes\nIsaiah Norton and Elliot Saba improved installation on Windows and OSX\nSteve Johnson contributed the do syntax and Blosc compression\nMike Nolta and Jameson Nash contributed code or suggestions for improving the handling of HDF5\'s constants\nThanks also to the users who have reported bugs and tested fixes[Julia]: http://julialang.org \"Julia\" [HDF5]: http://www.hdfgroup.org/HDF5/ \"HDF5\""
},

{
    "location": "autodocs/#HDF5.create_external",
    "page": "Docstrings",
    "title": "HDF5.create_external",
    "category": "function",
    "text": "create_external(source::Union{HDF5File, HDF5Group}, source_relpath, target_filename, target_path;\n                lcpl_id=HDF5.H5P_DEFAULT, lapl_id=HDF5.H5P.DEFAULT)\n\nCreate an external link such that source[source_relpath] points to target_path within the file with path target_filename; Calls [H5Lcreate_external](https://www.hdfgroup.org/HDF5/doc/RM/RM_H5L.html#Link-CreateExternal).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HDF5.get_datasets",
    "page": "Docstrings",
    "title": "HDF5.get_datasets",
    "category": "function",
    "text": "get_datasets(file::HDF5File) -> datasets::Vector{HDF5Dataset}\n\nGet all the datasets in an hdf5 file without loading the data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HDF5.get_dims",
    "page": "Docstrings",
    "title": "HDF5.get_dims",
    "category": "function",
    "text": "get_dims(dset::HDF5Dataset)\n\nGet the array dimensions from a dataset and return a tuple of dims and maxdims.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HDF5.h5open",
    "page": "Docstrings",
    "title": "HDF5.h5open",
    "category": "function",
    "text": "h5open(filename::AbstractString, mode::AbstractString=\"r\"; swmr=false)\n\nOpen or create an HDF5 file where mode is one of:\n\n\"r\"  read only\n\"r+\" read and write\n\"cw\" read and write, create file if not existing, do not truncate\n\"w\"  read and write, create a new file (destroys any existing contents)\n\nPass swmr=true to enable (Single Writer Multiple Reader) SWMR write access for \"w\" and \"r+\", or SWMR read access for \"r\".\n\n\n\n\n\nfunction h5open(f::Function, args...; swmr=false)\n\nApply the function f to the result of h5open(args...;kwargs...) and close the resulting HDF5File upon completion. For example with a do block:\n\nh5open(\"foo.h5\",\"w\") do h5\n    h5[\"foo\"]=[1,2,3]\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HDF5.ishdf5",
    "page": "Docstrings",
    "title": "HDF5.ishdf5",
    "category": "function",
    "text": "ishdf5(name::AbstractString)\n\nReturns true if name is a path to a valid hdf5 file, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HDF5.set_dims!",
    "page": "Docstrings",
    "title": "HDF5.set_dims!",
    "category": "function",
    "text": "set_dims!(dset::HDF5Dataset, new_dims::Dims)\n\nChange the current dimensions of a dataset to new_dims, limited by max_dims = get_dims(dset)[2]. Reduction is possible and leads to loss of truncated data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HDF5.start_swmr_write",
    "page": "Docstrings",
    "title": "HDF5.start_swmr_write",
    "category": "function",
    "text": "start_swmr_write(h5::HDF5File)\n\nStart Single Reader Multiple Writer (SWMR) writing mode. See SWMR documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HDF5.@checked_libHDF5.@readHDF5.@writeHDF5.ASCIICharHDF5.ASCII_ATTRIBUTE_PROPERTIESHDF5.ASCII_LINK_PROPERTIESHDF5.C_time_tHDF5.CharTypeHDF5.DEFAULT_PROPERTIESHDF5.DataFileHDF5.DatasetOrAttributeHDF5.EmptyArrayHDF5.FILTER_BLOSCHDF5.FILTER_BLOSC_VERSIONHDF5.FixedArrayHDF5.H5D_CHUNKEDHDF5.H5D_COMPACTHDF5.H5D_CONTIGUOUSHDF5.H5E_DEFAULTHDF5.H5FD_MPIO_CHUNK_DEFAULTHDF5.H5FD_MPIO_CHUNK_MULTI_IOHDF5.H5FD_MPIO_CHUNK_ONE_IOHDF5.H5FD_MPIO_COLLECTIVEHDF5.H5FD_MPIO_COLLECTIVE_IOHDF5.H5FD_MPIO_INDEPENDENTHDF5.H5FD_MPIO_INDIVIDUAL_IOHDF5.H5F_ACC_CREATHDF5.H5F_ACC_DEBUGHDF5.H5F_ACC_EXCLHDF5.H5F_ACC_RDONLYHDF5.H5F_ACC_RDWRHDF5.H5F_ACC_SWMR_READHDF5.H5F_ACC_SWMR_WRITEHDF5.H5F_ACC_TRUNCHDF5.H5F_CLOSE_DEFAULTHDF5.H5F_CLOSE_SEMIHDF5.H5F_CLOSE_STRONGHDF5.H5F_CLOSE_WEAKHDF5.H5F_LIBVER_EARLIESTHDF5.H5F_LIBVER_LATESTHDF5.H5F_LIBVER_V110HDF5.H5F_LIBVER_V18HDF5.H5F_OBJ_ALLHDF5.H5F_OBJ_ATTRHDF5.H5F_OBJ_DATASETHDF5.H5F_OBJ_DATATYPEHDF5.H5F_OBJ_FILEHDF5.H5F_OBJ_GROUPHDF5.H5F_OBJ_LOCALHDF5.H5F_SCOPE_GLOBALHDF5.H5F_SCOPE_LOCALHDF5.H5GINFO_TEMP_ARRAYHDF5.H5GinfoHDF5.H5I_ATTRHDF5.H5I_DATASETHDF5.H5I_DATASPACEHDF5.H5I_DATATYPEHDF5.H5I_FILEHDF5.H5I_GROUPHDF5.H5I_REFERENCEHDF5.H5LInfoHDF5.H5L_TYPE_EXTERNALHDF5.H5L_TYPE_HARDHDF5.H5L_TYPE_SOFTHDF5.H5OINFO_TEMP_ARRAYHDF5.H5O_TYPE_DATASETHDF5.H5O_TYPE_GROUPHDF5.H5O_TYPE_NAMED_DATATYPEHDF5.H5OinfoHDF5.H5P_ATTRIBUTE_CREATEHDF5.H5P_DATASET_ACCESSHDF5.H5P_DATASET_CREATEHDF5.H5P_DATASET_XFERHDF5.H5P_DATATYPE_ACCESSHDF5.H5P_DATATYPE_CREATEHDF5.H5P_DEFAULTHDF5.H5P_FILE_ACCESSHDF5.H5P_FILE_CREATEHDF5.H5P_FILE_MOUNTHDF5.H5P_GROUP_ACCESSHDF5.H5P_GROUP_CREATEHDF5.H5P_LINK_ACCESSHDF5.H5P_LINK_CREATEHDF5.H5P_OBJECT_COPYHDF5.H5P_OBJECT_CREATEHDF5.H5P_STRING_CREATEHDF5.H5RDEREFERENCEHDF5.H5R_DATASET_REGIONHDF5.H5R_DSET_REG_REF_BUF_SIZEHDF5.H5R_OBJECTHDF5.H5R_OBJ_REF_BUF_SIZEHDF5.H5S_ALLHDF5.H5S_NULLHDF5.H5S_SCALARHDF5.H5S_SELECT_ANDHDF5.H5S_SELECT_APPENDHDF5.H5S_SELECT_NOTAHDF5.H5S_SELECT_NOTBHDF5.H5S_SELECT_ORHDF5.H5S_SELECT_PREPENDHDF5.H5S_SELECT_SETHDF5.H5S_SELECT_XORHDF5.H5S_SIMPLEHDF5.H5S_UNLIMITEDHDF5.H5T_ARRAYHDF5.H5T_BITFIELDHDF5.H5T_COMPOUNDHDF5.H5T_CSET_ASCIIHDF5.H5T_CSET_UTF8HDF5.H5T_C_S1HDF5.H5T_DIR_ASCENDHDF5.H5T_DIR_DESCENDHDF5.H5T_ENUMHDF5.H5T_FLOATHDF5.H5T_IEEE_F32BEHDF5.H5T_IEEE_F32LEHDF5.H5T_IEEE_F64BEHDF5.H5T_IEEE_F64LEHDF5.H5T_INTEGERHDF5.H5T_NATIVE_DOUBLEHDF5.H5T_NATIVE_FLOATHDF5.H5T_NATIVE_INT16HDF5.H5T_NATIVE_INT32HDF5.H5T_NATIVE_INT64HDF5.H5T_NATIVE_INT8HDF5.H5T_NATIVE_UINT16HDF5.H5T_NATIVE_UINT32HDF5.H5T_NATIVE_UINT64HDF5.H5T_NATIVE_UINT8HDF5.H5T_OPAQUEHDF5.H5T_REFERENCEHDF5.H5T_SGN_2HDF5.H5T_SGN_NONEHDF5.H5T_STD_I16BEHDF5.H5T_STD_I16LEHDF5.H5T_STD_I32BEHDF5.H5T_STD_I32LEHDF5.H5T_STD_I64BEHDF5.H5T_STD_I64LEHDF5.H5T_STD_I8BEHDF5.H5T_STD_I8LEHDF5.H5T_STD_REF_DSETREGHDF5.H5T_STD_REF_OBJHDF5.H5T_STD_U16BEHDF5.H5T_STD_U16LEHDF5.H5T_STD_U32BEHDF5.H5T_STD_U32LEHDF5.H5T_STD_U64BEHDF5.H5T_STD_U64LEHDF5.H5T_STD_U8BEHDF5.H5T_STD_U8LEHDF5.H5T_STRINGHDF5.H5T_STR_NULLPADHDF5.H5T_STR_NULLTERMHDF5.H5T_STR_SPACEPADHDF5.H5T_TIMEHDF5.H5T_VARIABLEHDF5.H5T_VLENHDF5.H5T_class_tHDF5.H5Z_CLASS_T_VERSHDF5.H5Z_FLAG_OPTIONALHDF5.H5Z_FLAG_REVERSEHDF5.H5Z_class2_tHDF5.H5Z_filter_tHDF5.H5_INDEX_CRT_ORDERHDF5.H5_INDEX_NAMEHDF5.H5_INDEX_UNKNOWNHDF5.H5_ITER_DECHDF5.H5_ITER_INCHDF5.H5_ITER_NHDF5.H5_ITER_NATIVEHDF5.H5_ITER_UNKNOWNHDF5.HDF5HDF5.HDF5AttributeHDF5.HDF5AttributesHDF5.HDF5BitsKindHDF5.HDF5ChunkStorageHDF5.HDF5CompoundHDF5.HDF5DatasetHDF5.HDF5DataspaceHDF5.HDF5DatatypeHDF5.HDF5FileHDF5.HDF5GroupHDF5.HDF5ObjectHDF5.HDF5OpaqueHDF5.HDF5PropertiesHDF5.HDF5ReferenceObjHDF5.HDF5ReferenceObj_NULLHDF5.HDF5ScalarHDF5.HDF5VlenHDF5.HVL_SIZEHDF5.HaddrHDF5.HerrHDF5.HidHDF5.HmetainfoHDF5.HmpihHDF5.Hmpih32HDF5.Hmpih64HDF5.HsizeHDF5.HssizeHDF5.HtriHDF5.Hvl_tHDF5.LENGTH_TEMP_ARRAYHDF5.REF_TEMP_ARRAYHDF5.ScalarOrStringHDF5.UTF8CharHDF5.UTF8_ATTRIBUTE_PROPERTIESHDF5.UTF8_LINK_PROPERTIESHDF5.__init__HDF5._a_createHDF5._a_writeHDF5._attr_propertiesHDF5._d_createHDF5._d_writeHDF5._dataspaceHDF5._getindexHDF5._link_propertiesHDF5._set_blosc_valuesHDF5._setindex!HDF5.a_createHDF5.a_deleteHDF5.a_openHDF5.a_readHDF5.a_writeHDF5.attrsHDF5.atypeHDF5.blosc_chunkdimsHDF5.blosc_filterHDF5.blosc_flags_HDF5.blosc_nameHDF5.blosc_nelements_HDF5.blosc_set_localHDF5.blosc_valuesHDF5.ccallexprHDF5.ccallsymsHDF5.chartypeHDF5.checkpropsHDF5.checkvalidHDF5.chunked_propsHDF5.create_externalHDF5.csetHDF5.d_createHDF5.d_create_externalHDF5.d_openHDF5.d_readHDF5.d_writeHDF5.dataspaceHDF5.datatypeHDF5.depsfileHDF5.do_write_chunkHDF5.endofHDF5.evalHDF5.existsHDF5.fdHDF5.fileHDF5.filenameHDF5.funcdecexprHDF5.g_createHDF5.g_openHDF5.get_chunkHDF5.get_create_propertiesHDF5.get_datasetsHDF5.get_datasets!HDF5.get_dimsHDF5.get_fclose_degreeHDF5.get_libver_boundsHDF5.get_userblockHDF5.gettypeHDF5.h5_closeHDF5.h5_dont_atexitHDF5.h5_garbage_collectHDF5.h5_get_libversionHDF5.h5_mpihandleHDF5.h5_openHDF5.h5_set_free_list_limitsHDF5.h5a_closeHDF5.h5a_createHDF5.h5a_create_by_nameHDF5.h5a_deleteHDF5.h5a_delete_by_idxHDF5.h5a_delete_by_nameHDF5.h5a_existsHDF5.h5a_exists_by_nameHDF5.h5a_get_create_plistHDF5.h5a_get_nameHDF5.h5a_get_name_by_idxHDF5.h5a_get_spaceHDF5.h5a_get_typeHDF5.h5a_openHDF5.h5a_readHDF5.h5a_writeHDF5.h5d_closeHDF5.h5d_createHDF5.h5d_flushHDF5.h5d_get_access_plistHDF5.h5d_get_create_plistHDF5.h5d_get_offsetHDF5.h5d_get_spaceHDF5.h5d_get_typeHDF5.h5d_oappendHDF5.h5d_openHDF5.h5d_readHDF5.h5d_refreshHDF5.h5d_set_extentHDF5.h5d_vlen_get_buf_sizeHDF5.h5d_vlen_reclaimHDF5.h5d_writeHDF5.h5do_write_chunkHDF5.h5e_set_autoHDF5.h5f_closeHDF5.h5f_createHDF5.h5f_flushHDF5.h5f_get_access_plistHDF5.h5f_get_create_plistHDF5.h5f_get_nameHDF5.h5f_get_obj_idsHDF5.h5f_get_vfd_handleHDF5.h5f_is_hdf5HDF5.h5f_openHDF5.h5g_closeHDF5.h5g_createHDF5.h5g_get_create_plistHDF5.h5g_get_infoHDF5.h5g_get_num_objsHDF5.h5g_get_objname_by_idxHDF5.h5g_openHDF5.h5i_dec_refHDF5.h5i_get_file_idHDF5.h5i_get_nameHDF5.h5i_get_refHDF5.h5i_get_typeHDF5.h5i_is_validHDF5.h5l_create_externalHDF5.h5l_create_hardHDF5.h5l_create_softHDF5.h5l_deleteHDF5.h5l_existsHDF5.h5l_get_infoHDF5.h5o_closeHDF5.h5o_copyHDF5.h5o_get_infoHDF5.h5o_openHDF5.h5o_open_by_addrHDF5.h5o_open_by_idxHDF5.h5objectHDF5.h5openHDF5.h5p_closeHDF5.h5p_createHDF5.h5p_get_chunkHDF5.h5p_get_driverHDF5.h5p_get_driver_infoHDF5.h5p_get_dxpl_mpioHDF5.h5p_get_fapl_mpioHDF5.h5p_get_fapl_mpio32HDF5.h5p_get_fapl_mpio64HDF5.h5p_get_fclose_degreeHDF5.h5p_get_layoutHDF5.h5p_get_userblockHDF5.h5p_set_bloscHDF5.h5p_set_char_encodingHDF5.h5p_set_chunkHDF5.h5p_set_create_intermediate_groupHDF5.h5p_set_deflateHDF5.h5p_set_dxpl_mpioHDF5.h5p_set_externalHDF5.h5p_set_fapl_mpioHDF5.h5p_set_fapl_mpio32HDF5.h5p_set_fapl_mpio64HDF5.h5p_set_fclose_degreeHDF5.h5p_set_layoutHDF5.h5p_set_libver_boundsHDF5.h5p_set_local_heap_size_hintHDF5.h5p_set_shuffleHDF5.h5p_set_userblockHDF5.h5r_createHDF5.h5r_dereferenceHDF5.h5r_get_obj_typeHDF5.h5r_get_regionHDF5.h5readHDF5.h5readattrHDF5.h5rewriteHDF5.h5s_closeHDF5.h5s_copyHDF5.h5s_createHDF5.h5s_create_simpleHDF5.h5s_get_simple_extent_dimsHDF5.h5s_get_simple_extent_ndimsHDF5.h5s_get_simple_extent_typeHDF5.h5s_is_simpleHDF5.h5s_select_hyperslabHDF5.h5t_array_createHDF5.h5t_closeHDF5.h5t_commitHDF5.h5t_committedHDF5.h5t_copyHDF5.h5t_createHDF5.h5t_equalHDF5.h5t_get_array_dimsHDF5.h5t_get_array_ndimsHDF5.h5t_get_classHDF5.h5t_get_csetHDF5.h5t_get_member_classHDF5.h5t_get_member_indexHDF5.h5t_get_member_nameHDF5.h5t_get_member_offsetHDF5.h5t_get_member_typeHDF5.h5t_get_native_typeHDF5.h5t_get_nmembersHDF5.h5t_get_signHDF5.h5t_get_sizeHDF5.h5t_get_strpadHDF5.h5t_get_superHDF5.h5t_get_tagHDF5.h5t_insertHDF5.h5t_is_variable_strHDF5.h5t_openHDF5.h5t_set_csetHDF5.h5t_set_sizeHDF5.h5t_vlen_createHDF5.h5writeHDF5.h5writeattrHDF5.hasHDF5.hashHDF5.hdf5_obj_openHDF5.hdf5_prop_get_setHDF5.hdf5_to_juliaHDF5.hdf5_to_julia_eltypeHDF5.hdf5_type_idHDF5.hdf5_type_mapHDF5.hdf5arrayHDF5.heuristic_chunkHDF5.hf5start_swmr_writeHDF5.hiding_errorsHDF5.hyperslabHDF5.includeHDF5.infoHDF5.init_libhdf5HDF5.iscontiguousHDF5.ishdf5HDF5.ismmappableHDF5.isnullHDF5.libhdf5HDF5.libhdf5_hlHDF5.libhdf5handleHDF5.libversionHDF5.mpihandlesHDF5.nameHDF5.o_copyHDF5.o_deleteHDF5.o_openHDF5.objinfoHDF5.p2aHDF5.p_createHDF5.read_constHDF5.read_rowHDF5.readarrayHDF5.readmmapHDF5.refreshHDF5.register_bloscHDF5.rehash!HDF5.rootHDF5.set_chunkHDF5.set_dims!HDF5.split1HDF5.start_swmr_writeHDF5.stringtypeHDF5.t2pHDF5.t_commitHDF5.t_createHDF5.t_openHDF5.unpadHDF5.vlen_get_buf_sizeHDF5.vlenpackHDF5.writearray"
},

]}
