var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Saving-and-loading-variables-in-Julia-Data-format-(JLD)-1",
    "page": "Readme",
    "title": "Saving and loading variables in Julia Data format (JLD)",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)(Image: JLD)JLD, for which files conventionally have the extension .jld, is a widely-used format for data storage with the Julia programming language.  JLD is a specific \"dialect\" of [HDF5][HDF5], a cross-platform, multi-language data storage format most frequently used for scientific data.  By comparison with \"plain\" HDF5, JLD files automatically add attributes and naming conventions to preserve type information for each object.For lossless storage of arbitrary Julia objects, the only other complete solution appears to be Julia\'s serializer, which can be accessed via the serialize and deserialize commands.  However, because the serializer is also used for inter-process communication, long-term backwards compatibility is currently uncertain.  (The JLDArchives package exists to test compatibility of older JLD file formats.) If you choose to save data using the serializer, please use the file extension .jls to distinguish the files from .jld files.Note: You should only read JLD files from trusted sources, as JLD files are capable of executing arbitrary code when read in."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, use the package manager:Pkg.add(\"JLD\")Currently this also requires the HDF5 package."
},

{
    "location": "#Quickstart-1",
    "page": "Readme",
    "title": "Quickstart",
    "category": "section",
    "text": "To use the JLD module, begin your code withusing JLDIf you just want to save a few variables and don\'t care to use the more advanced features, then a simple syntax is:t = 15\nz = [1,3]\nsave(\"/tmp/myfile.jld\", \"t\", t, \"arr\", z)Here we\'re explicitly saving t and z as \"t\" and \"arr\" within myfile.jld. You can alternatively pass save a dictionary; the keys must be strings and are saved as the variable names of their values within the JLD file. You can read these variables back in withd = load(\"/tmp/myfile.jld\")which reads the entire file into a returned dictionary d. Or you can be more specific and just request particular variables of interest. For example, z = load(\"/tmp/myfile.jld\", \"arr\") will return the value of arr from the file and assign it back to z.JLD uses the FileIO package to provide a generic interface to save and load files. However this means that the user needs to explicitly request for the JLD format to be used while saving a new file.save(\"/tmp/foo\",\"bar\",0.0) # ambiguous\nsave(\"/tmp/foo.jld\",\"bar\",0.0) # JLD format is inferred from the file extension\nusing FileIO; save(File(format\"JLD\",\"/tmp/foo\"),\"bar\",0.0) # JLD format explicitly requested using FileIOThis problem is not encountered while loading a JLD file because FileIO can use magic bytes at the beginning of the file to infer its data format.There are also convenience macros @save and @load that work on the variables themselves. @save \"/tmp/myfile.jld\" t z will create a file with just t and z; if you don\'t mention any variables, then it saves all the variables in the current module. Conversely, @load will pop the saved variables directly into the global workspace of the current module. However, keep in mind that these macros have significant limitations: for example, you can\'t use @load inside a function, there are constraints on using string interpolation inside filenames, etc. These limitations stem from the fact that Julia compiles functions to machine code before evaluation, so you cannot introduce new variables at runtime or evaluate expressions in other workspaces. The save and load functions do not have these limitations, and are therefore recommended as being considerably more robust, at the cost of some slight reduction in convenience.More fine-grained control can be obtained using functional syntax:jldopen(\"mydata.jld\", \"w\") do file\n    write(file, \"A\", A)  # alternatively, say \"@write file A\"\nend\n\nc = jldopen(\"mydata.jld\", \"r\") do file\n    read(file, \"A\")\nendThis allows you to add variables as they are generated to an open JLD file. You don\'t have to use the do syntax (file = jldopen(\"mydata.jld\", \"w\") works just fine), but an advantage is that it will automatically close the file (close(file)) for you, even in cases of error.Julia\'s high-level wrapper, providing a dictionary-like interface, may also be of interest:using JLD, HDF5\n\njldopen(\"test.jld\", \"w\") do file\n    g = g_create(file, \"mygroup\") # create a group\n    g[\"dset1\"] = 3.2              # create a scalar dataset inside the group\n    g[\"dest2\"] = rand(2,2)\nendNote that the features of HDF5 generally can also be used on JLD files."
},

{
    "location": "#Types-and-their-definitions-1",
    "page": "Readme",
    "title": "Types and their definitions",
    "category": "section",
    "text": "You can save objects that have user-defined type; in a fresh Julia session, before loading those objects these types need to be defined. If no definition is available, the JLD module will automatically create the types for you.  However, it\'s important to note that MyType, defined automatically by JLD, is not the same MyType as defined in an external module–-in particular, module functions will not work for types defined by JLD.  To ensure that loaded types have the full suite of behaviors provided by their definition in external modules, you should ensure that such modules are available before reading such variables from a .jld file.To ensure automatic loading of modules, use addrequire to specify any dependencies. For example, suppose you have a file \"MyTypes.jl\" somewhere on your default LOAD_PATH, defined this way:module MyTypes\n\nexport MyType\n\ntype MyType\n    value::Int\nend\n\nendand you have an object x of type MyType. Then save x in the following way:jldopen(\"somedata.jld\", \"w\") do file\n    addrequire(file, MyTypes)\n    write(file, \"x\", x)\nendThis will cause \"MyTypes.jl\" to be loaded automatically whenever \"somedata.jld\" is opened."
},

{
    "location": "#If-you-have-performance-problems...-1",
    "page": "Readme",
    "title": "If you have performance problems...",
    "category": "section",
    "text": "Please see the complete documentation, particularly the section about custom serializers. "
},

{
    "location": "#Complete-documentation-1",
    "page": "Readme",
    "title": "Complete documentation",
    "category": "section",
    "text": "More extensive documentation, including information about the JLD format conventions, can be found in the doc directory.The test directory contains a number of test scripts that also demonstrate usage."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Simon Kornblith and Tim Holy (co-maintainers and primary authors)\nTom Short contributed to string->type conversion\nThanks also to the users who have reported bugs and tested fixes[Julia]: http://julialang.org \"Julia\" [HDF5]: http://www.hdfgroup.org/HDF5/ \"HDF5\""
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JLD.@loadJLD.@saveJLD.AnonymousFunctionSerializerJLD.AssociativeWrapperJLD.BUILTIN_H5_typesJLD.BUILTIN_TYPESJLD.BitsKindOrStringJLD.BitsKindTypesJLD.EMPTY_TUPLE_TYPEJLD.GlobalRefSerializerJLD.H5CONVERT_INFOJLD.INLINE_POINTER_IMMUTABLEJLD.INLINE_TUPLEJLD.JLCONVERT_INFOJLD.JLDJLD.JLD00JLD.JLD_REF_TYPEJLD.JL_TYPENAME_TRANSLATEJLD.JldDatasetJLD.JldDatatypeJLD.JldFileJLD.JldGroupJLD.JldTypeInfoJLD.JldWriteSessionJLD.NothingTypeJLD.PointerExceptionJLD.SimpleVectorWrapperJLD.TupleTypeJLD.TypeMismatchExceptionJLD.TypesTypeJLD.UnconvertedTypeJLD.UnsupportedTypeJLD.__init__JLD._gen_h5convert!JLD._gen_jlconvert_immutableJLD._gen_jlconvert_immutable!JLD._gen_jlconvert_tupleJLD._gen_jlconvert_typeJLD._gen_jlconvert_type!JLD._h5convert_valsJLD._istoplevelJLD._jlconvert_bitsJLD._jlconvert_bits!JLD._julia_typeJLD._runtime_propertiesJLD._typedictJLD._where_macrocallJLD._writeJLD.addrequireJLD.commit_datatypeJLD.compact_propertiesJLD.creatorJLD.destructureJLD.dset_create_propertiesJLD.ensurepathsafeJLD.evalJLD.expand_where_macroJLD.fixtypesJLD.full_typenameJLD.func2exprJLD.gcuseJLD.gen_h5convertJLD.gen_jlconvertJLD.gen_jlconvert!JLD.get_grefJLD.h5convert!JLD.h5convert_arrayJLD.h5convert_valsJLD.h5fieldtypeJLD.h5typeJLD.includeJLD.is_valid_type_exJLD.iscompatibleJLD.iscompressedJLD.ismmappableJLD.ismmappedJLD.isopaqueJLD.jlconvertJLD.jlconvert!JLD.jldatatypeJLD.jldobjectJLD.jldopenJLD.julia_typeJLD.loadJLD.magic_baseJLD.mangle_nameJLD.modname2modJLD.name_type_attrJLD.o_deleteJLD.opaquesizeJLD.path2modsymJLD.pathcreatorJLD.pathrefsJLD.pathrequireJLD.pathtypesJLD.read_arrayJLD.read_refJLD.read_refsJLD.read_scalarJLD.read_valsJLD.readasJLD.readmmapJLD.reconstruct_typeJLD.refarray_eltypeJLD.rootJLD.saveJLD.save_writeJLD.translateJLD.truncate_module_pathJLD.tupletypesJLD.typeindexJLD.typemap_CoreJLD.typetupleJLD.unknown_type_errJLD.uses_referenceJLD.version_currentJLD.write_compoundJLD.write_refJLD.writeas"
},

]}
