var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MATLAB-1",
    "page": "Readme",
    "title": "MATLAB",
    "category": "section",
    "text": "The MATLAB.jl package provides an interface for using MATLAB™ from Julia using the MATLAB C api.  In other words, this package allows users to call MATLAB functions within Julia, thus making it easy to interoperate with MATLAB from the Julia language.You cannot use MATLAB.jl without having purchased and installed a copy of MATLAB™ from MathWorks. This package is available free of charge and in no way replaces or alters any functionality of MathWorks\'s MATLAB product."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Generally, this package is comprised of two aspects:Creating and manipulating mxArrays (the data structure that MATLAB used to represent arrays and other kinds of data)\nCommunicating with MATLAB engine sessionsWarning: MATLAB string arrays are not supported, and will throw an error exception. This also applies if they are nested within a MATLAB struct. This is a limitation of the MATLAB C api. The MATLAB function convertContainedStringsToChars may be used to facilitate conversion to a compatible format for use with MATLAB.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Important: The procedure to setup this package consists of the following steps.By default, MATLAB.jl uses the MATLAB installation with the greatest version number. To specify that a specific MATLAB installation should be used, set the environment variable MATLAB_HOME."
},

{
    "location": "#Windows-1",
    "page": "Readme",
    "title": "Windows",
    "category": "section",
    "text": "Start a Command Prompt as an Administrator and enter matlab /regserver.\nFrom Julia run: Pkg.add(\"MATLAB\")"
},

{
    "location": "#Linux-1",
    "page": "Readme",
    "title": "Linux",
    "category": "section",
    "text": "Make sure matlab is in executable path. \nMake sure csh is installed. (Note: MATLAB for Linux relies on csh to open an engine session.) To install ``csh`` in Debian/Ubuntu/Linux Mint, you may type in the following command in terminal:\n\n```bash\nsudo apt-get install csh\n```From Julia run: Pkg.add(\"MATLAB\")"
},

{
    "location": "#Mac-OS-X-1",
    "page": "Readme",
    "title": "Mac OS X",
    "category": "section",
    "text": "Ensure that MATLAB is installed in /Applications (for example, if you are using MATLAB R2012b, you may add the following command to .profile:  export MATLAB_HOME=/Applications/MATLAB_R2012b.app).\nFrom Julia run: Pkg.add(\"MATLAB\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#MxArray-class-1",
    "page": "Readme",
    "title": "MxArray class",
    "category": "section",
    "text": "An instance of MxArray encapsulates a MATLAB variable. This package provides a series of functions to manipulate such instances."
},

{
    "location": "#Create-MATLAB-variables-in-Julia-1",
    "page": "Readme",
    "title": "Create MATLAB variables in Julia",
    "category": "section",
    "text": "One can use the function mxarray to create MATLAB variables (of type MxArray), as followsmxarray(Float64, n)   # creates an n-by-1 MATLAB zero array of double valued type\nmxarray(Int32, m, n)  # creates an m-by-n MATLAB zero array of int32 valued type \nmxarray(Bool, m, n)   # creates a MATLAB logical array of size m-by-n\n\nmxarray(Float64, (n1, n2, n3))  # creates a MATLAB array of size n1-by-n2-by-n3\n\nmxcellarray(m, n)        # creates a MATLAB cell array\nmxstruct(\"a\", \"b\", \"c\")  # creates a MATLAB struct with given fieldsYou may also convert a Julia variable to MATLAB variablea = rand(m, n)\n\nx = mxarray(a)     # converts a to a MATLAB array\nx = mxarray(1.2)   # converts a scalar 1.2 to a MATLAB variable\n\na = sprand(m, n, 0.1)\nx = mxarray(a)     # converts a sparse matrix to a MATLAB sparse matrix\n\nx = mxarray(\"abc\") # converts a string to a MATLAB char array\n\nx = mxarray([\"a\", 1, 2.3])  # converts a Julia array to a MATLAB cell array\n\nx = mxarray(Dict(\"a\"=>1, \"b\"=>\"string\", \"c\"=>[1,2,3])) # converts a Julia dictionary to a MATLAB structThe function mxarray can also convert a compound type to a Julia struct:struct S\n    x::Float64\n    y::Vector{Int32}\n    z::Bool\nend\n\ns = S(1.2, Int32[1, 2], false)\n\nx = mxarray(s)   # creates a MATLAB struct with three fields: x, y, z\nxc = mxarray([s, s])  # creates a MATLAB cell array, each cell is a struct.\nxs = mxstructarray([s, s])  # creates a MATLAB array of structsNote: For safety, the conversation between MATLAB and Julia variables uses deep copy.When you finish using a MATLAB variable, you may call delete to free the memory. But this is optional, it will be deleted when reclaimed by the garbage collector.delete(x)Note: if you put a MATLAB variable x to MATLAB engine session, then the MATLAB engine will take over the management of its life cylce, and you don\'t have to delete it explicitly."
},

{
    "location": "#Access-MATLAB-variables-1",
    "page": "Readme",
    "title": "Access MATLAB variables",
    "category": "section",
    "text": "You may access attributes and data of a MATLAB variable through the functions provided by this package.# suppose x is of type MxArray\nnrows(x)    # returns number of rows in x\nncols(x)    # returns number of columns in x \nnelems(x)   # returns number of elements in x\nndims(x)    # returns number of dimensions in x\nsize(x)     # returns the size of x as a tuple\nsize(x, d)  # returns the size of x along a specific dimension\n\neltype(x)   # returns element type of x (in Julia Type)\nelsize(x)   # return number of bytes per element\n\ndata_ptr(x)   # returns pointer to data (in Ptr{T}), where T is eltype(x)\n\n# suppose s is a MATLAB struct\nmxnfields(s)	# returns the number of fields in struct s\nYou may also make tests on a MATLAB variable.is_double(x)   # returns whether x is a double array\nis_sparse(x)   # returns whether x is sparse\nis_complex(x)  # returns whether x is complex\nis_cell(x)     # returns whether x is a cell array\nis_struct(x)   # returns whether x is a struct\nis_empty(x)    # returns whether x is empty\n\n...            # there are many more there"
},

{
    "location": "#Convert-MATLAB-variables-to-Julia-1",
    "page": "Readme",
    "title": "Convert MATLAB variables to Julia",
    "category": "section",
    "text": "a = jarray(x)   # converts x to a Julia array\na = jvector(x)  # converts x to a Julia vector (1D array) when x is a vector\na = jscalar(x)  # converts x to a Julia scalar\na = jmatrix(x)  # converts x to a Julia matrix\na = jstring(x)  # converts x to a Julia string\na = jdict(x)    # converts a MATLAB struct to a Julia dictionary (using fieldnames as keys)\n\na = jvalue(x)  # converts x to a Julia value in default manner"
},

{
    "location": "#Read/Write-MAT-Files-1",
    "page": "Readme",
    "title": "Read/Write MAT Files",
    "category": "section",
    "text": "This package provides functions to manipulate MATLAB\'s mat files:mf = MatFile(filename, mode)    # opens a MAT file using a specific mode, and returns a handle\nmf = MatFile(filename)          # opens a MAT file for reading, equivalent to MatFile(filename, \"r\")\nclose(mf)                       # closes a MAT file.\n\nget_mvariable(mf, name)   # gets a variable and returns an mxArray\nget_variable(mf, name)    # gets a variable, but converts it to a Julia value using `jvalue`\n\nput_variable(mf, name, v)   # puts a variable v to the MAT file\n                            # v can be either an MxArray instance or normal variable\n                            # If v is not an MxArray, it will be converted using `mxarray`\n\nput_variables(mf; name1=v1, name2=v2, ...)  # put multiple variables using keyword arguments\n\nvariable_names(mf)   # get a vector of all variable names in a MAT fileThere are also convenient functions that can get/put all variables in one call:read_matfile(filename)    # returns a dictionary that maps each variable name\n                          # to an MxArray instance\n\nwrite_matfile(filename; name1=v1, name2=v2, ...)  # writes all variables given in the\n                                                  # keyword argument list to a MAT fileBoth read_matfile and write_matfile will close the MAT file handle before returning. Examples:struct S\n    x::Float64\n    y::Bool\n    z::Vector{Float64}\nend\n\nwrite_matfile(\"test.mat\"; \n    a = Int32[1 2 3; 4 5 6], \n    b = [1.2, 3.4, 5.6, 7.8], \n    c = [[0.0, 1.0], [1.0, 2.0], [1.0, 2.0, 3.0]], \n    d = Dict(\"name\"=>\"MATLAB\", \"score\"=>100.0), \n    s = \"abcde\",\n    ss = [S(1.0, true, [1., 2.]), S(2.0, false, [3., 4.])] )This example will create a MAT file called testmat, which contains six MATLAB variables:a: a 2-by-3 int32 array\nb: a 4-by-1 double array\nc: a 3-by-1 cell array, each cell contains a double vector\nd: a struct with two fields: name and score\ns: a string (i.e. char array)\nss: an array of structs with two elements, and three fields: x, y, and z."
},

{
    "location": "#Use-MATLAB-Engine-1",
    "page": "Readme",
    "title": "Use MATLAB Engine",
    "category": "section",
    "text": ""
},

{
    "location": "#Basic-Use-1",
    "page": "Readme",
    "title": "Basic Use",
    "category": "section",
    "text": "To evaluate expressions in MATLAB, one may open a MATLAB engine session and communicate with it. There are three ways to call MATLAB from Julia:The mat\"\" custom string literal allows you to write MATLAB syntax inside Julia and use Julia variables directly from MATLAB via interpolation\nThe eval_string evaluate a string containing MATLAB expressions (typically used with the helper macros @mget and @mput\nThe mxcall function calls a given MATLAB function and returns the resultIn general, the mat\"\" custom string literal is the preferred method to interact with the MATLAB engine.Note: There can be multiple (reasonable) ways to convert a MATLAB variable to Julia array. For example, MATLAB represents a scalar using a 1-by-1 matrix. Here we have two choices in terms of converting such a matrix back to Julia: (1) convert to a scalar number, or (2) convert to a matrix of size 1-by-1."
},

{
    "location": "#The-mat\"\"-custom-string-literal-1",
    "page": "Readme",
    "title": "The mat\"\" custom string literal",
    "category": "section",
    "text": "Text inside the mat\"\" custom string literal is in MATLAB syntax. Variables from Julia can be \"interpolated\" into MATLAB code by prefixing them with a dollar sign as you would interpolate them into an ordinary string.using MATLAB\n\nx = range(-10.0, stop=10.0, length=500)\nmat\"plot($x, sin($x))\"  # evaluate a MATLAB function\n\ny = range(2.0, stop=3.0, length=500)\nmat\"\"\"\n    $u = $x + $y\n	$v = $x - $y\n\"\"\"\n@show u v               # u and v are accessible from JuliaAs with ordinary string literals, you can also interpolate whole Julia expressions, e.g. mat\"$(x[1]) = $(x[2]) + $(binomial(5, 2))\"."
},

{
    "location": "#eval_string-1",
    "page": "Readme",
    "title": "eval_string",
    "category": "section",
    "text": "You may also use the eval_string function to evaluate MATLAB code as follows		eval_string(\"a = sum([1,2,3])\")The eval_string function also takes an optional argument that specifies which MATLAB session to evaluate the code in, e.g.julia> s = MSession();\njulia> eval_string(s, \"a = sum([1,2,3])\")\na =\n     6"
},

{
    "location": "#mxcall-1",
    "page": "Readme",
    "title": "mxcall",
    "category": "section",
    "text": "You may also directly call a MATLAB function on Julia variables using mxcall:x = -10.0:0.1:10.0\ny = -10.0:0.1:10.0\nxx, yy = mxcall(:meshgrid, 2, x, y)Note: Since MATLAB functions behavior depends on the number of outputs, you have to specify the number of output arguments in mxcall as the second argument.mxcall puts the input arguments to the MATLAB workspace (using mangled names), evaluates the function call in MATLAB, and retrieves the variable from the MATLAB session. This function is mainly provided for convenience. However, you should keep in mind that it may incur considerable overhead due to the communication between MATLAB and Julia domain."
},

{
    "location": "#@mget-and-@mput-1",
    "page": "Readme",
    "title": "@mget and @mput",
    "category": "section",
    "text": "The macro @mget can be used to extract the value of a MATLAB variable into Julia julia> mat\"a = 6\"\njulia> @mget a\n6.0The macro @mput can be used to translate a Julia variable into MATLABjulia> x = [1,2,3]\njulia> @mput x\njulia> eval_string(\"y = sum(x)\")\njulia> @mget y\n6.0\njulia> @show y\na = 63.0"
},

{
    "location": "#Viewing-the-MATLAB-Session-(Windows-only)-1",
    "page": "Readme",
    "title": "Viewing the MATLAB Session (Windows only)",
    "category": "section",
    "text": "To open an interactive window for the MATLAB session, use the command show_msession() and to hide the window, use hide_msession(). Warning: manually closing this window will result in an error or result in a segfault; it is advised that you only use the hide_msession() command to hide the interactive window.Note that this feature only works on Windows.# default\nshow_msession() # open the default MATLAB session interactive window\nget_msession_visiblity() # get the session\'s visibility state\nhide_msession() # hide the default MATLAB session interactive window\n\n# similarily\ns = MSession()\nshow_msession(s)\nget_msession_visiblity(a)\nhide_msession(s)"
},

{
    "location": "#Advanced-use-of-MATLAB-Engines-1",
    "page": "Readme",
    "title": "Advanced use of MATLAB Engines",
    "category": "section",
    "text": "This package provides a series of functions for users to control the communication with MATLAB sessions.Here is an example:s1 = MSession()    # creates a MATLAB session\ns2 = MSession(0)   # creates a MATLAB session without recording output\n\nx = rand(3, 4)\nput_variable(s1, :x, x)  # put x to session s1\n\ny = rand(2, 3)\nput_variable(s2, :y, y)  # put y to session s2\n\neval_string(s1, \"r = sin(x)\")  # evaluate sin(x) in session s1\neval_string(s2, \"r = sin(y)\")  # evaluate sin(y) in session s2\n\nr1_mx = get_mvariable(s1, :r)  # get r from s1\nr2_mx = get_mvariable(s2, :r)  # get r from s2\n\nr1 = jarray(r1_mx)\nr2 = jarray(r2_mx)\n\n# ... do other stuff on r1 and r2\n\nclose(s1)  # close session s1\nclose(s2)  # close session s2"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MATLAB.@mat_strMATLAB.@mgetMATLAB.@mputMATLAB.@mx_test_isMATLAB.@mxget_attrMATLAB.DumbParserStateMATLAB.MATLABMATLAB.MEngineErrorMATLAB.MSessionMATLAB.MatFileMATLAB.MxArrayMATLAB.MxComplexNumMATLAB.MxNumMATLAB.MxRealNumMATLAB.PairsMATLAB.__init__MATLAB._copy_sparse_matMATLAB._dims_to_mwSizeMATLAB._fieldname_arrayMATLAB._gen_marg_nameMATLAB._jarrayxMATLAB._jsparseMATLAB._mget_multiMATLAB._mput_multiMATLAB.check_assignmentMATLAB.classidMATLAB.classid_type_mapMATLAB.close_default_msessionMATLAB.data_ptrMATLAB.default_matlabcmdMATLAB.default_msession_refMATLAB.default_output_buffer_sizeMATLAB.default_startflagMATLAB.deleteMATLAB.do_mat_strMATLAB.dumb_parse!MATLAB.elsizeMATLAB.eng_closeMATLAB.eng_eval_stringMATLAB.eng_get_variableMATLAB.eng_get_visibleMATLAB.eng_openMATLAB.eng_output_bufferMATLAB.eng_put_variableMATLAB.eng_set_visibleMATLAB.engfuncMATLAB.evalMATLAB.eval_stringMATLAB.get_cellMATLAB.get_default_msessionMATLAB.get_fieldMATLAB.get_fieldnameMATLAB.get_mvariableMATLAB.get_variableMATLAB.imag_ptrMATLAB.includeMATLAB.is_cellMATLAB.is_charMATLAB.is_complexMATLAB.is_doubleMATLAB.is_emptyMATLAB.is_int16MATLAB.is_int32MATLAB.is_int64MATLAB.is_int8MATLAB.is_logicalMATLAB.is_numericMATLAB.is_singleMATLAB.is_sparseMATLAB.is_structMATLAB.is_uint16MATLAB.is_uint32MATLAB.is_uint64MATLAB.is_uint8MATLAB.jarrayMATLAB.jdictMATLAB.jmatrixMATLAB.jscalarMATLAB.jsparseMATLAB.jstringMATLAB.jvalueMATLAB.jvectorMATLAB.libengMATLAB.libmatMATLAB.libmxMATLAB.make_getvar_statementMATLAB.mat_closeMATLAB.mat_get_dirMATLAB.mat_get_variableMATLAB.mat_openMATLAB.mat_put_variableMATLAB.matfuncMATLAB.matlab_cmdMATLAB.matlab_homepathMATLAB.matlab_libpathMATLAB.mwIndexMATLAB.mwSizeMATLAB.mxCELL_CLASSMATLAB.mxCHAR_CLASSMATLAB.mxCOMPLEXMATLAB.mxClassIDMATLAB.mxComplexityMATLAB.mxDOUBLE_CLASSMATLAB.mxFUNCTION_CLASSMATLAB.mxINT16_CLASSMATLAB.mxINT32_CLASSMATLAB.mxINT64_CLASSMATLAB.mxINT8_CLASSMATLAB.mxLOGICAL_CLASSMATLAB.mxOBJECT_CLASSMATLAB.mxOPAQUE_CLASSMATLAB.mxREALMATLAB.mxSINGLE_CLASSMATLAB.mxSTRUCT_CLASSMATLAB.mxUINT16_CLASSMATLAB.mxUINT32_CLASSMATLAB.mxUINT64_CLASSMATLAB.mxUINT8_CLASSMATLAB.mxUNKNOWN_CLASSMATLAB.mxVOID_CLASSMATLAB.mx_create_cell_arrayMATLAB.mx_create_char_arrayMATLAB.mx_create_double_scalarMATLAB.mx_create_logical_scalarMATLAB.mx_create_numeric_arrayMATLAB.mx_create_numeric_matrixMATLAB.mx_create_sparseMATLAB.mx_create_sparse_logicalMATLAB.mx_create_stringMATLAB.mx_create_struct_arrayMATLAB.mx_create_struct_matrixMATLAB.mx_destroy_arrayMATLAB.mx_duplicate_arrayMATLAB.mx_freeMATLAB.mx_get_cellMATLAB.mx_get_classidMATLAB.mx_get_dataMATLAB.mx_get_dimsMATLAB.mx_get_elemsizeMATLAB.mx_get_fieldMATLAB.mx_get_field_bynumMATLAB.mx_get_fieldnameMATLAB.mx_get_irMATLAB.mx_get_jcMATLAB.mx_get_mMATLAB.mx_get_nMATLAB.mx_get_ndimsMATLAB.mx_get_nelemsMATLAB.mx_get_nfieldsMATLAB.mx_get_piMATLAB.mx_get_prMATLAB.mx_get_stringMATLAB.mx_is_cellMATLAB.mx_is_charMATLAB.mx_is_complexMATLAB.mx_is_doubleMATLAB.mx_is_emptyMATLAB.mx_is_int16MATLAB.mx_is_int32MATLAB.mx_is_int64MATLAB.mx_is_int8MATLAB.mx_is_logicalMATLAB.mx_is_numericMATLAB.mx_is_singleMATLAB.mx_is_sparseMATLAB.mx_is_structMATLAB.mx_is_uint16MATLAB.mx_is_uint32MATLAB.mx_is_uint64MATLAB.mx_is_uint8MATLAB.mx_set_cellMATLAB.mx_set_fieldMATLAB.mxarrayMATLAB.mxcallMATLAB.mxcellarrayMATLAB.mxclassidMATLAB.mxclassid_to_typeMATLAB.mxcomplexflagMATLAB.mxfuncMATLAB.mxnfieldsMATLAB.mxsparseMATLAB.mxstructMATLAB.mxstructarrayMATLAB.ncolsMATLAB.nelemsMATLAB.nrowsMATLAB.put_variableMATLAB.put_variablesMATLAB.read_matfileMATLAB.real_ptrMATLAB.releaseMATLAB.restart_default_msessionMATLAB.set_cellMATLAB.set_fieldMATLAB.startcmdMATLAB.variable_namesMATLAB.write_matfile"
},

]}
