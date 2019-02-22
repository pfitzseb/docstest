var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JLD2-1",
    "page": "Readme",
    "title": "JLD2",
    "category": "section",
    "text": "(Image: Travis Build Status) (Image: AppVeyor Build Status) (Image: codecov.io)JLD2 saves and loads Julia data structures in a format comprising a subset of HDF5, without any dependency on the HDF5 C library. It typically outperforms the previous JLD package (sometimes by multiple orders of magnitude) and often outperforms Julia\'s built-in serializer. While other HDF5 implementations supporting HDF5 File Format Specification Version 3.0 (i.e. libhdf5 1.10 or later) should be able to read the files that JLD2 produces, JLD2 is likely to be incapable of reading files created or modified by other HDF5 implementations. JLD2 does not aim to be backwards or forwards compatible with the previous JLD package.The code here should work on Julia 0.6. It has extensive unit tests, but it has received little testing in the wild. Please use caution. If your tolerance for data loss is low, JLD may be a better choice at this time."
},

{
    "location": "#Reading-and-writing-data-1",
    "page": "Readme",
    "title": "Reading and writing data",
    "category": "section",
    "text": ""
},

{
    "location": "#@save-and-@load-macros-1",
    "page": "Readme",
    "title": "@save and @load macros",
    "category": "section",
    "text": "The @save and @load macros are the simplest way to interact with a JLD2 file. The @save macro writes one or more variables from the current scope to the JLD file. For example:using JLD2, FileIO\nhello = \"world\"\nfoo = :bar\n@save \"example.jld2\" hello fooThis writes the variables hello and foo to datasets in a new JLD2 file named example.jld2. The @load macro loads variables out of a JLD2 file:@load \"example.jld2\" hello fooThis assigns the contents of the hello and foo datasets to variables of the same name in the current scope.It is best practice to explicitly name the variables to be loaded and saved from a file, so that it is clear from whence these variables arise. However, for convenience, JLD2 also provides variants of @load and @save that do not require variables to be named explicitly. When called with no variable arguments, @save <filename> writes all variables in the global scope of the current module to file <filename>, while @load <filename> loads all variables in file <filename>. When called with no variable arguments, @load requires that the file name is provided as a string literal, i.e., it is not possible to select the file at runtime."
},

{
    "location": "#save-and-load-functions-1",
    "page": "Readme",
    "title": "save and load functions",
    "category": "section",
    "text": "The save and load functions, provided by FileIO, provide an alternative mechanism to read and write data from a JLD2 file. To use these functions, you must say using FileIO; it is not necessary to say using JLD2 since FileIO will determine the correct package automatically.The save function accepts an Associative yielding the key/value pairs, where the key is a string representing the name of the dataset and the value represents its contents:using FileIO\nsave(\"example.jld2\", Dict(\"hello\" => \"world\", \"foo\" => :bar))The save function can also accept the dataset names and contents as arguments:save(\"example.jld2\", \"hello\", \"world\", \"foo\", :bar)When using the save function, the file extension must be .jld2, since the extension .jld currently belongs to the previous JLD package.If called with a filename argument only, the load function loads all datasets from the given file into a Dict:load(\"example.jld2\") # -> Dict{String,Any}(\"hello\" => \"world\", \"foo\" => :bar)If called with a single dataset name, load returns the contents of that dataset from the file:load(\"example.jld2\", \"hello\") # -> \"world\"If called with multiple dataset names, load returns the contents of the given datasets as a tuple:load(\"example.jld2\", \"hello\", \"foo\") # -> (\"hello\", :bar)"
},

{
    "location": "#File-interface-1",
    "page": "Readme",
    "title": "File interface",
    "category": "section",
    "text": "It is also possible to interact with JLD2 files using a file-like interface. The jldopen function accepts a file name and an argument specifying how the file should be opened:f = jldopen(\"example.jld2\", \"r\")  # open read-only (default)\nf = jldopen(\"example.jld2\", \"r+\") # open read/write, failing if no file exists\nf = jldopen(\"example.jld2\", \"w\")  # open read/write, overwriting existing file\nf = jldopen(\"example.jld2\", \"a+\") # open read/write, preserving contents of existing file or creating a new fileData can be written to the file using write(f, \"name\", data) or f[\"name\"] = data, or read from the file using read(f, \"name\") or f[\"name\"]. When you are done with the file, remember to call close(f).Like open, jldopen also accepts a function as the first argument, permitting do-block syntax:jldopen(\"example.jld2\", \"w\") do file\n    file[\"bigdata\"] = randn(5)\nend"
},

{
    "location": "#Groups-1",
    "page": "Readme",
    "title": "Groups",
    "category": "section",
    "text": "It is possible to construct groups within a JLD2 file, which may or may not be useful for organizing your data. You can create groups explicitly:jldopen(\"example.jld2\", \"w\") do file\n    mygroup = JLD2.Group(file, \"mygroup\")\n    mygroup[\"mystuff\"] = 42\nendor implicitly, by saving a variable with a name containing slashes as path delimiters:jldopen(\"example.jld2\", \"w\") do file\n    file[\"mygroup/mystuff\"] = 42\nend\n# or save(\"example.jld2\", \"mygroup/mystuff\", 42)Both of these examples yield the same group structure, which you can see at the REPL:julia> file = jldopen(\"example.jld2\", \"r\")\nJLDFile /Users/simon/example.jld2 (read-only)\n └─📂 mygroup\n    └─🔢 mystuffSimilarly, you can access groups directly:jldopen(\"example.jld2\", \"r\") do file\n    @assert file[\"mygroup\"][\"mystuff\"] == 42\nendor using slashes as path delimiters:@assert load(\"example.jld2\", \"mygroup/mystuff\") == 42"
},

{
    "location": "autodocs/#JLD2.CustomSerialization",
    "page": "Docstrings",
    "title": "JLD2.CustomSerialization",
    "category": "type",
    "text": "CustomSerialization{T,S}\n\nOn-disk representation for data that is written as if it were of Julia type T, but is read as type S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.GlobalHeap",
    "page": "Docstrings",
    "title": "JLD2.GlobalHeap",
    "category": "type",
    "text": "GlobalHeap\n\nRepresents an HDF5 global heap structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.Group",
    "page": "Docstrings",
    "title": "JLD2.Group",
    "category": "type",
    "text": "Group{T}\n\nJLD group object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.H5Datatype",
    "page": "Docstrings",
    "title": "JLD2.H5Datatype",
    "category": "type",
    "text": "H5Datatype\n\nSupertype of all HDF5 datatypes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.IndirectPointer",
    "page": "Docstrings",
    "title": "JLD2.IndirectPointer",
    "category": "type",
    "text": "IndirectPointer\n\nWhen writing data, we may need to enlarge the memory mapping, which would invalidate any memory addresses arising from the old mmap pointer. IndirectPointer holds a pointer to the startptr field of an MmapIO, and the offset relative to that pointer. It defers computing a memory address until converted to a Ptr{T}, so the memory mapping can be enlarged and addresses will remain valid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.JLDFile",
    "page": "Docstrings",
    "title": "JLD2.JLDFile",
    "category": "type",
    "text": "JLDFile{T<:IO}\n\nJLD file object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.JLDWriteSession",
    "page": "Docstrings",
    "title": "JLD2.JLDWriteSession",
    "category": "type",
    "text": "JLDWriteSession{T}\n\nA JLDWriteSession keeps track of references to serialized objects. If T is a Dict, h5offset maps an object ID (returned by calling objectid) to th RelOffset of the written dataset. If it is Union{}, then references are not tracked, and objects referenced multiple times are written multiple times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.ReadRepresentation",
    "page": "Docstrings",
    "title": "JLD2.ReadRepresentation",
    "category": "type",
    "text": "ReadRepresentation{T,ODR}\n\nA type encoding both the Julia type T and the on-disk (HDF5) representation ODR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.RelOffset",
    "page": "Docstrings",
    "title": "JLD2.RelOffset",
    "category": "type",
    "text": "RelOffset\n\nRepresents an HDF5 relative offset. This differs from a file offset (used elsewhere) in that it is relative to the superblock base address. In practice, this means that FILE_HEADER_LENGTHhas been subtracted. fileoffset and h5offset convert between RelOffsets and file offsets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.TypeMappingException",
    "page": "Docstrings",
    "title": "JLD2.TypeMappingException",
    "category": "type",
    "text": "constructrr(f::JLDFile, T::DataType, dt::CompoundType, attrs::Vector{ReadAttribute},             hard_failure::Bool=false)\n\nConstructs a ReadRepresentation for a given type. This is the generic method for all types not specially handled below.\n\nIf hard_failure is true, then throw a TypeMappingException instead of attempting reconstruction. This helps in cases where we can\'t know if reconstructed parametric types will have a matching memory layout without first inspecting the memory layout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.behead",
    "page": "Docstrings",
    "title": "JLD2.behead",
    "category": "function",
    "text": "behead(T)\n\nGiven a UnionAll type, recursively eliminates the where clauses\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.construct_array",
    "page": "Docstrings",
    "title": "JLD2.construct_array",
    "category": "function",
    "text": "construct_array{T}(io::IO, ::Type{T}, ndims::Int)\n\nConstruct array by reading ndims dimensions from io. Assumes io has already been seeked to the correct position.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.fileoffset",
    "page": "Docstrings",
    "title": "JLD2.fileoffset",
    "category": "function",
    "text": "fileoffset(f::JLDFile, x::RelOffset)\n\nConverts an offset x relative to the superblock of file f to an absolute offset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.group_payload_size",
    "page": "Docstrings",
    "title": "JLD2.group_payload_size",
    "category": "function",
    "text": "group_payload_size(pairs)\n\nReturns the size of a group payload, including link info, group info, and link messages, but not the object header. pairs is an iterator of String => RelOffset pairs. Provides space after the last object message for a continuation message.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.h5offset",
    "page": "Docstrings",
    "title": "JLD2.h5offset",
    "category": "function",
    "text": "h5offset(f::JLDFile, x::RelOffset)\n\nConverts an absolute file offset x to an offset relative to the superblock of file f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.jld_finalizer",
    "page": "Docstrings",
    "title": "JLD2.jld_finalizer",
    "category": "function",
    "text": "jld_finalizer(f::JLDFile)\n\nWhen a JLDFile is finalized, it is possible that the MmapIO has been munmapped, since Julia does not guarantee finalizer order. This means that the underlying file may be closed before we get a chance to write to it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.jldopen",
    "page": "Docstrings",
    "title": "JLD2.jldopen",
    "category": "function",
    "text": "jldopen(fname::AbstractString, mode::AbstractString)\n\nOpens a JLD file at path fname.\n\n\"r\": Open for reading only, failing if no file exists \"r+\": Open for reading and writing, failing if no file exists \"w\"/\"w+\": Open for reading and writing, overwriting the file if it already exists \"a\"/\"a+\": Open for reading and writing, creating a new file if none exists, but               preserving the existing file if one is present\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.link_size",
    "page": "Docstrings",
    "title": "JLD2.link_size",
    "category": "function",
    "text": "link_size(name::String)\n\nReturns the size of a link message, including message header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.links_size",
    "page": "Docstrings",
    "title": "JLD2.links_size",
    "category": "function",
    "text": "links_size(pairs)\n\nReturns the size of several link messages. pairs is an iterator of String => RelOffset pairs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.load_datatypes",
    "page": "Docstrings",
    "title": "JLD2.load_datatypes",
    "category": "function",
    "text": "load_datatypes(f::JLDFile)\n\nPopulate f.datatypes and f.jlh5types with all of the committed datatypes from a file. We need to do this before writing to make sure we reuse written datatypes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.lookup_offset",
    "page": "Docstrings",
    "title": "JLD2.lookup_offset",
    "category": "function",
    "text": "lookup_offset(g::Group, name::AbstractString) -> RelOffset\n\nLookup the offset of a dataset in a group. Returns UNDEFINED_ADDRESS if the dataset is not present. Does not inspect unwritten_child_groups.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.pathize",
    "page": "Docstrings",
    "title": "JLD2.pathize",
    "category": "function",
    "text": "pathize(g::Group, name::AbstractString, create::Bool) -> Tuple{Group,String}\n\nConverts a path to a group and name object. If create is true, any intermediate groups will be created, and the dataset name will be checked for uniqueness with existing names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.prewrite",
    "page": "Docstrings",
    "title": "JLD2.prewrite",
    "category": "function",
    "text": "prewrite(f::JLDFile)\n\nCheck that a JLD file is actually writable, and throw an error if not. Sets the written flag on the file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_array!",
    "page": "Docstrings",
    "title": "JLD2.read_array!",
    "category": "function",
    "text": "read_array!(v::Array, f::JLDFile, rr)\n\nFill the array v with the contents of JLDFile f at the current position, assuming a ReadRepresentation rr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_attr_data",
    "page": "Docstrings",
    "title": "JLD2.read_attr_data",
    "category": "function",
    "text": "read_attr_data(f::JLDFile, attr::ReadAttribute)\n\nRead data from an attribute.\n\n\n\n\n\nread_attr_data(f::JLDFile, attr::ReadAttribute, expected_datatype::H5Datatype,\n               rr::ReadRepresentation)\n\nRead data from an attribute, assuming a specific HDF5 datatype and ReadRepresentation. If the HDF5 datatype does not match, throws an UnsupportedFeatureException. This allows better type stability while simultaneously validating the data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_compressed_array!",
    "page": "Docstrings",
    "title": "JLD2.read_compressed_array!",
    "category": "function",
    "text": "read_compressed_array!(v::Array, f::JLDFile, rr, data_length::Int)\n\nFill the array v with the compressed contents of JLDFile f at the current position, assuming a ReadRepresentation rr and that the compressed data has length data_length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_data",
    "page": "Docstrings",
    "title": "JLD2.read_data",
    "category": "function",
    "text": "read_data(f::JLDFile, dataspace::ReadDataspace, datatype_class::UInt8,\n          datatype_offset::Int64, data_offset::Int64[, filter_id::UInt16,\n          header_offset::RelOffset, attributes::Vector{ReadAttribute}])\n\nRead data from a file. If datatype_class is typemax(UInt8), the datatype is assumed to be committed, and datatype_offset points to the offset of the committed datatype\'s header. Otherwise, datatype_offset points to the offset of the datatype attribute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_scalar",
    "page": "Docstrings",
    "title": "JLD2.read_scalar",
    "category": "function",
    "text": "read_scalar(f::JLDFile, rr, header_offset::RelOffset)\n\nRead raw data representing a scalar with read representation rr from the current position of JLDFile f. header_offset is the RelOffset of the object header, used to resolve cycles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_size",
    "page": "Docstrings",
    "title": "JLD2.read_size",
    "category": "function",
    "text": "read_size(io::IO, flags::UInt8)\n\nLoads a variable-length size according to flags Expects that the first two bits of flags mean: 0   The size of the Length of Link Name field is 1 byte. 1   The size of the Length of Link Name field is 2 bytes. 2   The size of the Length of Link Name field is 4 bytes. 3   The size of the Length of Link Name field is 8 bytes. Returns the size as an Int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.save_group",
    "page": "Docstrings",
    "title": "JLD2.save_group",
    "category": "function",
    "text": "save_group(g::Group) -> RelOffset\n\nStores a group to a file, updating it if it has already been saved. Returns UNDEFINED_ADDRESS if the group was already stored, or the offset of the new group otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.symbol_length",
    "page": "Docstrings",
    "title": "JLD2.symbol_length",
    "category": "function",
    "text": "symbol_length(x::Symbol)\n\nReturns the length of the string represented by x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JLD2.@loadJLD2.@lookup_committedJLD2.@read_datatypeJLD2.@saveJLD2.AttributeHeaderJLD2.BOXED_READ_DATASPACEJLD2.BasicDatatypeJLD2.BufferedReaderJLD2.BufferedWriterJLD2.CHECKSUM_POSJLD2.CSET_ASCIIJLD2.CSET_UTF8JLD2.CURRENT_VERSIONJLD2.CharacterSetJLD2.CommittedDatatypeJLD2.CompactStorageMessageJLD2.CompoundDatatypeJLD2.ContiguousStorageMessageJLD2.CustomSerializationJLD2.DEFAULT_BUFFER_SIZEJLD2.DEFLATE_PIPELINE_MESSAGEJLD2.DS_NULLJLD2.DS_SCALARJLD2.DS_SIMPLEJLD2.DT_ARRAYJLD2.DT_BITFIELDJLD2.DT_COMPOUNDJLD2.DT_ENUMERATEDJLD2.DT_FIXED_POINTJLD2.DT_FLOATING_POINTJLD2.DT_OPAQUEJLD2.DT_REFERENCEJLD2.DT_STRINGJLD2.DT_TIMEJLD2.DT_VARIABLE_LENGTHJLD2.DataModeJLD2.DataTypeODRJLD2.DataspaceStartJLD2.EMPTY_DIMENSIONSJLD2.EMPTY_READ_ATTRIBUTESJLD2.FILE_GROW_SIZEJLD2.FILE_HEADERJLD2.FILE_HEADER_LENGTHJLD2.FixedLengthStringJLD2.FixedPointDatatypeJLD2.FloatTypesJLD2.FloatingPointDatatypeJLD2.GLOBAL_HEAP_SIGNATUREJLD2.GlobalHeapJLD2.GlobalHeapIDJLD2.GroupJLD2.H5DatatypeJLD2.H5TYPE_DATATYPEJLD2.H5TYPE_UNIONJLD2.H5TYPE_VLEN_UTF8JLD2.HM_ATTRIBUTEJLD2.HM_ATTRIBUTE_INFOJLD2.HM_BOGUSJLD2.HM_BTREE_K_VALUESJLD2.HM_DATASPACEJLD2.HM_DATATYPEJLD2.HM_DATA_LAYOUTJLD2.HM_DRIVER_INFOJLD2.HM_EXTERNAL_FILE_LISTJLD2.HM_FILL_VALUEJLD2.HM_FILL_VALUE_OLDJLD2.HM_FILTER_PIPELINEJLD2.HM_GROUP_INFOJLD2.HM_LINK_INFOJLD2.HM_LINK_MESSAGEJLD2.HM_MODIFICATION_TIMEJLD2.HM_NILJLD2.HM_OBJECT_COMMENTJLD2.HM_OBJECT_HEADER_CONTINUATIONJLD2.HM_REFERENCE_COUNTJLD2.HM_SHARED_MESSAGE_TABLEJLD2.HM_SYMBOL_TABLEJLD2.HasReferencesJLD2.HeaderMessageJLD2.IndirectPointerJLD2.InitializedJLD2.InternalErrorJLD2.InvalidDataExceptionJLD2.JLD2JLD2.JLDFileJLD2.JLDWriteSessionJLD2.LC_CHUNKED_STORAGEJLD2.LC_COMPACT_STORAGEJLD2.LC_CONTIGUOUS_STORAGEJLD2.LM_CREATION_ORDER_PRESENTJLD2.LM_LINK_NAME_CHARACTER_SET_FIELD_PRESENTJLD2.LM_LINK_TYPE_FIELD_PRESENTJLD2.LengthJLD2.LinkInfoJLD2.Lookup3JLD2.MMAP_CUTOFFJLD2.MMAP_GROW_SIZEJLD2.MmapIOJLD2.NCHECKSUMJLD2.NULL_COMMITTED_DATATYPEJLD2.NULL_REFERENCEJLD2.OBJECT_HEADER_CONTINUATION_SIGNATUREJLD2.OBJECT_HEADER_SIGNATUREJLD2.OH_ATTRIBUTE_CREATION_ORDER_INDEXEDJLD2.OH_ATTRIBUTE_CREATION_ORDER_TRACKEDJLD2.OH_ATTRIBUTE_PHASE_CHANGE_VALUES_STOREDJLD2.OH_TIMES_STOREDJLD2.OPEN_FILESJLD2.ObjectStartJLD2.OnDiskRepresentationJLD2.OpaqueDatatypeJLD2.PlainJLD2.PlainTypeJLD2.PointerExceptionJLD2.PointersJLD2.PrimitiveTypeTypesJLD2.PrimitiveTypesJLD2.REQUIRED_FILE_HEADERJLD2.ReadAttributeJLD2.ReadDataspaceJLD2.ReadRepresentationJLD2.ReconstructedTypesJLD2.ReferenceDatatypeJLD2.ReferenceFreeJLD2.RelOffsetJLD2.SUPERBLOCK_SIGNATUREJLD2.SignedTypesJLD2.StringDatatypeJLD2.SuperblockJLD2.TypeMappingExceptionJLD2.UNDEFINED_ADDRESSJLD2.UndefinedFieldExceptionJLD2.UnknownTypeJLD2.UnsignedTypesJLD2.UnsupportedFeatureExceptionJLD2.UnsupportedVersionExceptionJLD2.VariableLengthDatatypeJLD2.VlenJLD2.WriteDataspaceJLD2.WrittenAttributeJLD2._odrJLD2._readJLD2._writeJLD2.adjust_position!JLD2.begin_checksum_readJLD2.begin_checksum_writeJLD2.beheadJLD2.check_emptyJLD2.check_writtenas_typeJLD2.chunked_storage_message_sizeJLD2.classJLD2.commitJLD2.commit_compoundJLD2.construct_arrayJLD2.constructrrJLD2.datamodeJLD2.define_packedJLD2.deflate_dataJLD2.end_checksumJLD2.ensureroomJLD2.evalJLD2.fieldnamesJLD2.fieldodrJLD2.fileoffsetJLD2.find_dimensions_attrJLD2.finish!JLD2.get_ndims_offsetJLD2.group_continuation_sizeJLD2.group_payload_sizeJLD2.growJLD2.h5convert!JLD2.h5convert_uninitialized!JLD2.h5fieldtypeJLD2.h5offsetJLD2.h5typeJLD2.hasdataJLD2.hasfielddataJLD2.heap_object_lengthJLD2.includeJLD2.isatendJLD2.isgroupJLD2.ismutabletypeJLD2.jlconvertJLD2.jlconvert_canbeuninitializedJLD2.jlconvert_isinitializedJLD2.jld_finalizerJLD2.jldopenJLD2.jltypeJLD2.link_sizeJLD2.links_sizeJLD2.loadJLD2.load_datasetJLD2.load_datatypesJLD2.load_groupJLD2.loadtodict!JLD2.lookup_offsetJLD2.mmap!JLD2.msyncJLD2.munmapJLD2.numelJLD2.objodrJLD2.odrJLD2.odr_sizeofJLD2.openfileJLD2.pathizeJLD2.payload_size_without_storage_messageJLD2.prewriteJLD2.raw_writeJLD2.rconvertJLD2.read_arrayJLD2.read_array!JLD2.read_attr_dataJLD2.read_attributeJLD2.read_bytestringJLD2.read_committed_datatypeJLD2.read_compressed_array!JLD2.read_dataJLD2.read_dataspace_messageJLD2.read_datatype_messageJLD2.read_emptyJLD2.read_field_datatypesJLD2.read_heap_objectJLD2.read_linkJLD2.read_obj_startJLD2.read_scalarJLD2.read_sizeJLD2.readmore!JLD2.reconstruct_bitstypeJLD2.reconstruct_compoundJLD2.reconstruct_odrJLD2.replace_exprJLD2.samelayoutJLD2.saveJLD2.save_groupJLD2.show_groupJLD2.size_flagJLD2.size_sizeJLD2.store_vlen!JLD2.symbol_lengthJLD2.track_weakref!JLD2.truncate_and_closeJLD2.typenameJLD2.typestringJLD2.unsafe_isdefinedJLD2.wconvertJLD2.write_attributeJLD2.write_chunked_storage_messageJLD2.write_dataJLD2.write_datasetJLD2.write_datatype_messageJLD2.write_heap_objectJLD2.write_object_header_and_dataspace_messageJLD2.write_refJLD2.write_ref_mutableJLD2.write_sizeJLD2.writeas"
},

]}
