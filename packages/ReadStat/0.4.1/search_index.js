var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReadStat-1",
    "page": "Readme",
    "title": "ReadStat",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: ReadStat) (Image: Coverage Status)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "ReadStat.jl: Read files from Stata, SPSS, and SAS –The ReadStat.jl Julia package uses the ReadStat C library to parse binary and transport files from Stata, SPSS and SAS. All functions return a tuple, with the first element an array of columns and the second element a vector of column names.For integration with packages like DataFrames.jl you should use the StatFiles.jl package."
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "using ReadStat\n\nread_dta(\"/path/to/something.dta\")\n\nread_por(\"/path/to/something.por\")\n\nread_sav(\"/path/to/something.sav\")\n\nread_sas7bdat(\"/path/to/something.sas7bdat\")"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, run the following:Pkg.add(\"ReadStat\")"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReadStat.ParserReadStat.READSTAT_ERROR_MALLOCReadStat.READSTAT_ERROR_OPENReadStat.READSTAT_ERROR_PARSEReadStat.READSTAT_ERROR_READReadStat.READSTAT_ERROR_USER_ABORTReadStat.READSTAT_TYPE_CHARReadStat.READSTAT_TYPE_DOUBLEReadStat.READSTAT_TYPE_FLOATReadStat.READSTAT_TYPE_INT16ReadStat.READSTAT_TYPE_INT32ReadStat.READSTAT_TYPE_LONG_STRINGReadStat.READSTAT_TYPE_STRINGReadStat.ReadStatReadStat.ReadStatDataFrameReadStat.ReadStatValueReadStat.ValueReadStat.as_nativeReadStat.check_depsReadStat.depsjl_pathReadStat.evalReadStat.get_alignmentReadStat.get_formatReadStat.get_labelReadStat.get_measureReadStat.get_nameReadStat.get_storagewidthReadStat.get_typeReadStat.handle_info!ReadStat.handle_metadata!ReadStat.handle_value!ReadStat.handle_value_label!ReadStat.handle_variable!ReadStat.includeReadStat.libreadstatReadStat.parse_data_file!ReadStat.read_data_fileReadStat.read_dtaReadStat.read_porReadStat.read_sas7bdatReadStat.read_savReadStat.readfield!ReadStat.readstatReadStat.readstat_get_file_format_versionReadStat.readstat_get_file_labelReadStat.readstat_get_modified_timeReadStat.readstat_get_row_countReadStat.readstat_get_var_countReadStat.readstat_value_is_missingReadStat.readstat_variable_get_index"
},

]}
