var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ObjectFile-1",
    "page": "Readme",
    "title": "ObjectFile",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage)This package provides basic functionality to read and analyze binary object files. It was written with ELF/MachO/COFF in mind, but should be easily adaptable to other object files as well.  While not originally intended as a package to enable the construction of a compiler/linker, the package authors welcome any and all efforts to extend the capabilities of this package toward synthesis of object files as well as the analysis of them."
},

{
    "location": "autodocs/#ObjectFile.@constants",
    "page": "Docstrings",
    "title": "ObjectFile.@constants",
    "category": "macro",
    "text": "@constants\n\nMacro to create intelligent enum arrays in Julia.  Defines not only variables mapping names to values within Julia, but also a dictionary mapping those values back to a string representation of the variable names itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.@derefmethod",
    "page": "Docstrings",
    "title": "ObjectFile.@derefmethod",
    "category": "macro",
    "text": "@derefmethod\n\nMacro to create a method that works on a reference type by generating a wrapper call to deref(x) where x is the first argument in the call.  Example:\n\n@derefmethod foo(x::SectionRef)\n\nWill generate the following code:\n\nfoo(x::SectionRef, args...) = foo(deref(x), args...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.@mustimplement",
    "page": "Docstrings",
    "title": "ObjectFile.@mustimplement",
    "category": "macro",
    "text": "@mustimplement\n\nMacro to create fallthrough implementations of basic functions such as readheader(oh::ObjectHandle); these fallthrough implementations are meant to be overridden by methods in packages such as ELF.jl or MachO.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.COFF.COFFHandle",
    "page": "Docstrings",
    "title": "ObjectFile.COFF.COFFHandle",
    "category": "type",
    "text": "COFFHandle\n\nAn ObjectHandle subclass for COFF files, this is the primary object by which client applications will interact with COFF files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.COFF.COFFRPath",
    "page": "Docstrings",
    "title": "ObjectFile.COFF.COFFRPath",
    "category": "type",
    "text": "COFFRPath\n\nCOFF RPath object; note that while COFF files do not have an RPath within them, they do seach the same directory as the loading binary (e.g. the $ORIGIN). We use COFFRPath to effect this, although strictly speaking there is no such thing as a \"COFF RPath\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.COFF.COFFStrTab",
    "page": "Docstrings",
    "title": "ObjectFile.COFF.COFFStrTab",
    "category": "type",
    "text": "COFFStrTab\n\nCOFF StrTab type, containing the metadata necessary to perform string table lookups, via the strtab_lookup() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.COFF.COFFSymbolRef",
    "page": "Docstrings",
    "title": "ObjectFile.COFF.COFFSymbolRef",
    "category": "type",
    "text": "COFFSymbolRef\n\nContains a reference to an COFFSymtabEntry, as well as an COFFSymbols, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.COFF.COFFSymbols",
    "page": "Docstrings",
    "title": "ObjectFile.COFF.COFFSymbols",
    "category": "type",
    "text": "COFFSymbols\n\nCOFF symbol table, contains the list of symbols defined within the object file.\n\nNote that because COFF Symbols are variable-length, we store a table of offsets at which the (non-auxilliary) symbols can be found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.DynamicLink",
    "page": "Docstrings",
    "title": "ObjectFile.DynamicLink",
    "category": "type",
    "text": "DynamicLink\n\nThis type encapsulates the linkage of one object file to another.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nDynamicLink()\n\nAccessors:\n\nDynamicLinks()\nhandle()\npath()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.DynamicLinks",
    "page": "Docstrings",
    "title": "ObjectFile.DynamicLinks",
    "category": "type",
    "text": "DynamicLinks\n\nThis type encapsulates the list of dynamic links within an object, holding a collection of DynamicLink objects.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nDynamicLinks()\n\nIteration\n\ngetindex()\nlastindex()\niterate()\neltype()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFDynEntries",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFDynEntries",
    "category": "function",
    "text": "ELFDynEntries(oh::ELFHandle)\n\nRead all ELFDynEntry objects from an ELF object, returning them as an array.\n\n\n\n\n\nELFDynEntries(oh::ELFHandle, kinds::Vector)\n\nRead all ELFDynEntry objects from an ELF object, returning them as an array if they are one of the kinds passed in, such as DT_NEEDED.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFDynEntry",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFDynEntry",
    "category": "type",
    "text": "ELFDynEntry\n\nELF Dynamic table entry type.  This is comprised by a d_tag member and a d_val member; the d_tag tells what kind of command this is to the dynamic linker (e.g. DT_NEEDED denotes a shared library that must be loaded for this ELF object to link properly), whereas d_val is a pointer to another data structure that contains more information.  (E.g. for a DT_NEEDED entry, d_val would represent an offset within the dynamic string table)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFDynamicLinks",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFDynamicLinks",
    "category": "type",
    "text": "ELFDynamicLinks\n\nELF dynamic linkage table, contains the list dynamic loader commands, see the ELFDynEntry type for an opaque and unhelpful detailing of these commands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFHandle",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFHandle",
    "category": "type",
    "text": "ELFHandle\n\nAn ObjectHandle subclass for ELF files, this is the primary object by which client applications will interact with ELF files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFHeader",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFHeader",
    "category": "type",
    "text": "ELFHeader\n\nELF Header type, containing metadata about the ELF object itself, such as its type, offsets for the Program and Section headers, the number of other header entries, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFInternal",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFInternal",
    "category": "type",
    "text": "ELFInternal\n\nInternal datastructure used within the ELF file format to convey fundamental information such as the endianness of the file, whether it\'s a 32-bit or 64-bit ELF file, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFRPath",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFRPath",
    "category": "type",
    "text": "ELFRPath\n\nStores the RPath entries from an ELF object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSection",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSection",
    "category": "type",
    "text": "ELFSection\n\nELF Section type, containing information about a Section within the ELF object, such as the Section\'s name, its size, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSectionRef",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSectionRef",
    "category": "type",
    "text": "ELFSectionRef\n\nELF SectionRef type, containing an ELFSection and important metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSections",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSections",
    "category": "type",
    "text": "ELFSections\n\nELF Section header table type, containing information about the number of sections within the ELF object, the location of the section headers, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSegment",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSegment",
    "category": "type",
    "text": "ELFSegment\n\nELF Segment type, also known as a program header, containing information about the virtual memory layout of a chunk of the program.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSegments",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSegments",
    "category": "type",
    "text": "ELFSegments\n\nELF segment header table type, containing information about the number of segments within the ELF object, the location of the segment headers, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFStrTab",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFStrTab",
    "category": "type",
    "text": "ELFStrTab\n\nELF string table type, containing information about a Section that contains a string table.  Note that an ELF file may contain multiple string tables, use the different constructors to reference the different string tables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSymbolRef",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSymbolRef",
    "category": "type",
    "text": "ELFSymbolRef\n\nContains a reference to an ELFSymtabEntry, as well as an ELFSymbols, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSymbols",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSymbols",
    "category": "type",
    "text": "ELFSymbols\n\nELF symbol table, contains the list of symbols defined within the object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.ELFSymtabEntry",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.ELFSymtabEntry",
    "category": "type",
    "text": "ELFSymtabEntry\n\nELF Symtab Entry type, contains the data relevant to a symbol defined within this ELF file, garnered from the symbol table (symtab)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachODynamicLink",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachODynamicLink",
    "category": "type",
    "text": "MachODynamicLink\n\nMachO type representing a dynamic link between a MachO file and one of its dynamic dependencies.  Although Mach-O encodes more than just the path of the dependency, in order to get at it you will need to dig into the LoadCmd that describes it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOIdDylibCmd",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOIdDylibCmd",
    "category": "type",
    "text": "MachOIdDylibCmd\n\nMachO dylibs have an \"identity\", analogous to the SONAME of an ELF shared library.  This Load Command tells the linker about the identity of this particular shared library.  The API of this object is identical to that of the MachOLoadDylibCmd object, as they are intrinsically identical, it is the semantic meaning behind the data that changes, and so this object is all but a typealias for MachOLoadDylibCmd.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOLoadCmd",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOLoadCmd",
    "category": "type",
    "text": "MachOLoadCmd\n\nAbstraction over all Load Commands that can exist within a Mach-O object file, containing subclasses such as MachOSegmentCmd or MachODySymtabCmd. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nMachOLoadCmd()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOLoadCmdHeader",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOLoadCmdHeader",
    "category": "type",
    "text": "MachOLoadCmdHeader\n\nAll MachO Load Commands have a common header, containing information about what kind of Load Command it is, and how large the load command is.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOLoadCmdRef",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOLoadCmdRef",
    "category": "type",
    "text": "MachOLoadCmdRef\n\nDatatype containing a Mach-O Load Command, its header, and a reference back to the MachOLoadCmds object it was garnered from\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOLoadCmds",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOLoadCmds",
    "category": "type",
    "text": "MachOLoadCmds\n\nAllows iteration over the LoadCmds within a Mach-O file.\n\nCreation\n\nMachOLoadCmds()\n\nIteration\n\ngetindex()\nlastindex()\niterate()\nlength()\neltype()\n\nAccess\n\nfind\n\nConvenience constructors\n\nSegments()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOLoadDylibCmd",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOLoadDylibCmd",
    "category": "type",
    "text": "MachOLoadDylibCmd\n\nThe Load Command that gives information about a dylib that must be loaded for this Mach-O file to link properly.  The API for this laod command is given as follows:\n\nCreation:\n\nMachOLoadCmd()\n\nAccessors:\n\ndylib_name()\ndylib_timestamp()\ndylib_version()\ndylib_compatibility()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSection",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSection",
    "category": "type",
    "text": "MachOSection\n\nMach-O Section type, containing information about the section name, segment name, size, address, etc... of the Section.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSectionRef",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSectionRef",
    "category": "type",
    "text": "MachOSectionRef\n\nMach-O SectionRef type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSections",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSections",
    "category": "type",
    "text": "MachOSections\n\nMach-O Section object collection type.  Mach-O sections are split out over multiple segments, one per load command.  As an example, most executables have at least two segments, __DATA and __TEXT, each of which have multiple sections embedded within them.  A MachOSections object is created from multiple segments (in this case, realized as multiple load commands) which contain the necessary sections, and these sections can then be accessed as desired.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSegment",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSegment",
    "category": "type",
    "text": "MachOSegment\n\nMachO Segment type which is returned from a MachOSegmentRef when it is dereferenced.  Note that this type exists only for the purposes of type conformity; all the real work is done within MachOSegmentCmd; but since that already inherits from MachOLoadCmd, it cannot also inherit from Segment. Thus, this wrapper type was born to bridge the type hierarchy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSegmentCmd",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSegmentCmd",
    "category": "type",
    "text": "MachOSegmentCmd\n\nMach-O Segment load command type, containing information about the virtual memory layout of a chunk of the program.  This type is very MachO-specific, so it is not comparable to other object file formats directly.  However, note that this data structure is the gateway through which the file sections are accessed, and while there is a convenience Sections(::MachOHandle) method that will abstract all that away for you, you can also directly call Sections(::MachOLoadCmdRef{MachOSegmentCmd}) to get the sections belonging to the given segment.  Note that the Sections call works only upon a MachOLoadCmdRef{MachOSegmentCmd}, it will not work on the MachOSegmentCmd itself directly.\n\nCreation:\n\nMachOSegmentCmd()\n\nFormat-specific properties:\n\nsegment_name()\nsegment_offset()\nsegmentfilesize()\nsegmentmemorysize()\nsegmentnumsections()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSegmentRef",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSegmentRef",
    "category": "type",
    "text": "MachOSegmentRef\n\nMachO SegmentRef type which is returned from a MachOSegments when it is indexed into.  Note that this type exists only for the purposes of type conformity; all the real work is done within MachOSegmentCmd; but since that already inherits from MachOLoadCmd, and we needed a MachOSegment type that would inherit from Segment, we figured might as well make a MachOSegmentRef as well to keep things nice and symmetric.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSegments",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSegments",
    "category": "type",
    "text": "MachOSegments\n\nSegments type that contains all load commands within a Mach-O file that contain segment commands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSymbols",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSymbols",
    "category": "type",
    "text": "MachOSymbols\n\nMachO container type for SymtabEntry objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.MachOSymtabEntry",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.MachOSymtabEntry",
    "category": "type",
    "text": "MachOSymtabEntry\n\nMachO Symbol Table entry type, internally represented as an nlist type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MagicMismatch",
    "page": "Docstrings",
    "title": "ObjectFile.MagicMismatch",
    "category": "type",
    "text": "MagicMismatch\n\nThis is an error type used to denote that readmeta() was called on a file that does not contain the proper magic at the beginning for the type of object file that was attempting to be loaded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ObjTypes",
    "page": "Docstrings",
    "title": "ObjectFile.ObjTypes",
    "category": "constant",
    "text": "ObjTypes::Vector{Type}\n\nObjTypes contains the registry of file formats that will be used to try and open a object file, (e.g. ELF, MachO, etc...).  This vector is initialized at __init__() time, and used within readmeta().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ObjectHandle",
    "page": "Docstrings",
    "title": "ObjectFile.ObjectHandle",
    "category": "type",
    "text": "ObjectHandle\n\nThe basic type that provides access to object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note tha \"must implement\" is a bit of a misnomer, if an Object file does not have need of a certain piece of this API (e.g. COFF files have no concept of Segments), leaving that chunk of the API undefined will simply cause errors if a user attempts to use methods that use that part of the API (in the example above, an error will be thrown if the user calls Segments(oh) where oh <: COFFHandle).\n\nCreation\n\nreadmeta()\n\nIOStream-like operations:\n\nseek()\nseekstart()\nskip()\nstartaddr()\niostream()\nposition()\nread()\nreaduntil()\neof()\nunpack()\n\nFormat-specific properties\n\nendianness()\nis64bit()\nisrelocatable()\nisexecutable()\nislibrary()\nisdynamic()\nmanglesectionname()\nmanglesymbolname()\nhandle()\nheader()\nformat_string()\n\nSection properties\n\nsectionheaderoffset()\nsectionheadersize()\nsectionheadertype()\n\nSegment properties\n\nsegmentheaderoffset()\nsegmentheadersize()\nsegmentheadertype()\n\nSymbol properties\n\nsymtabentryoffset()\nsymtabentrysize()\nsymtabentrytype()\n\nMisc\n\npath()\nshow()\nfind_library()\nfind_libraries()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.RPath",
    "page": "Docstrings",
    "title": "ObjectFile.RPath",
    "category": "type",
    "text": "RPath\n\nThis type encapsulates the search path used by an object file when looking for a shared library.  This class enables not only looking at the path, but querying the path for matches for given library names.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nRPath()\n\nUtility\n\nhandle()\n\nRPath operations\n\nrpaths()\ncanonical_rpaths()\nfind_library()\nlastindex()\niterate()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Section",
    "page": "Docstrings",
    "title": "ObjectFile.Section",
    "category": "type",
    "text": "Section\n\nAn abstraction over the concept of a Section within an object file.  Because many operations upon sections require global operations (access to the string table, knowledge of position within the file, etc...) some operations are defined only upon the SectionRef datatype.  As a user, the SectionRef type should be the primary method of interacting with sections, as a developer adding new object file formats, some methods must support Sections, others must support only SectionRefs.  Note that any method that works on a Section must also work with a SectionRef, see the @derefmethod macro for a convenient helper macro to generate SectionRef -> Section wrapper methods. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nread()\n\nUtility:\n\nderef()\n\nIO-like operations:\n\ncontents()\n\nFormat-specific properties:\n\nsection_name()\nsection_size()\nsection_offset()\nsection_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SectionRef",
    "page": "Docstrings",
    "title": "ObjectFile.SectionRef",
    "category": "type",
    "text": "SectionRef\n\nProvides a reference to a Section, along with a reference to the ObjectHandle this Section comes from.  This should be the primary method by which users interact with sections inside object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note that this overlaps heavily with the Section object API, this is by design as many of the methods are simply passthroughs to the underlying Section API calls for ease of use.\n\nCreation:\n\nSectionRef()\n\nUtility\n\nderef()\nhandle()\nSections()\n\nIO-like operations:\n\nread()\nseekstart()\nseek()\neof()\n\nFormat-specific properties:\n\nsection_name()\nsection_number()\nsection_type()\nsection_size()\nsection_offset()\nsection_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Sections",
    "page": "Docstrings",
    "title": "ObjectFile.Sections",
    "category": "type",
    "text": "Sections\n\nAn abstraction over the concept of a collection of Section types within an object file.  One can think of the Sections object containing the table of section headers within the object file, whereas the Section/SectionRef objects contain the actual section data itself.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nSections()\n\nIteration\n\ngetindex()\nlastindex()\nlength()\niterate()\neltype()\n\nSearch\n\nfindall()\nfindfirst()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Segment",
    "page": "Docstrings",
    "title": "ObjectFile.Segment",
    "category": "type",
    "text": "Segment\n\nAn abstraction over the concept of a Segment within an object file.  A Segment is a portion of an object file that is given instruction on its layout in virtual memory; this is in contrast to a Section, which delineates different portions of an object file on disk.  ELF files have the strictest separation here, with a single executable file containing multiple Segment and Section objects, with Sections being assigned to one or more Segments for virtual memory placement.  Mach-O files typically have two Segments, one called __TEXT, one called __DATA.  COFF files do not have Segment.\n\nJust like with Section objects, many operations upon segments require global operations (access to the string table, knowledge of position within the file, etc...) which causes some operations to be defined only upon the SegmentRef datatype.  As a user, the SegmentRef type should be the primary method of interacting with segments, as a developer adding new object file formats, some methods must support Segments, others must support only SegmentRefs. Note that any method that works on a Segment must also work with a SegmentRef, see the @derefmethod macro for a convenient helper macro to generate SegmentRef -> Section wrapper methods. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nread()\n\nUtility:\n\nderef()\n\nFormat-specific properties:\n\nsegment_name()\nsegment_offset()\nsegmentfilesize()\nsegmentmemorysize()\nsegment_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SegmentRef",
    "page": "Docstrings",
    "title": "ObjectFile.SegmentRef",
    "category": "type",
    "text": "SegmentRef\n\nProvides a reference to a Segment, along with a reference to the ObjectHandle this Segment comes from.  This should be the primary method by which users interact with segments inside object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note that this overlaps heavily with the Segment object API, this is by design as many of the methods are simply passthroughs to the underlying Segment API calls for ease of use.\n\nCreation:\n\nSegmentRef()\n\nUtility\n\nderef()\nSegments()\nhandle()\n\nFormat-specific properties:\n\nsegment_name()\nsegment_number()\nsegment_offset()\nsegmentfilesize()\nsegmentmemorysize()\nsegment_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Segments",
    "page": "Docstrings",
    "title": "ObjectFile.Segments",
    "category": "type",
    "text": "Segments\n\nAn abstraction over the concept of a collection of Segment types within an object file.  One can think of the Segments object containing the table of segment headers within the object file, whereas the Segment/SegmentRef objects contain the actual segment data itself.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nSegments()\n\nIteration\n\ngetindex()\nlastindex()\nlength()\niterate()\neltype()\n\nSearch\n\nfindall()\nfindfirst()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.StrTab",
    "page": "Docstrings",
    "title": "ObjectFile.StrTab",
    "category": "type",
    "text": "StrTab\n\nThis type encapsulates a string table within an object file, enabling queries against the string table for symbol names, section names, etc... The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nStrTab()\n\nAccessors\n\nhandle()\nstrtab_lookup()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SymbolRef",
    "page": "Docstrings",
    "title": "ObjectFile.SymbolRef",
    "category": "type",
    "text": "SymbolRef\n\nProvides a reference to a SymtabEntry, along with a reference to the ObjectHandle this SymtabEntry comes from.  This should be the primary method by which users interact with symbols inside object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note that this overlaps heavily with the SymtabEntry object API, this is by design as many of the methods are simply passthroughs to the underlying SymtabEntry API calls for ease of use.\n\nCreation:\n\nSymbolRef()\n\nUtil:\n\nderef()\nSymbols()\nhandle()\n\nProperties:\n\nsymbol_number()\nsymbol_name()\nsymbol_value()\nisundef()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Symbols",
    "page": "Docstrings",
    "title": "ObjectFile.Symbols",
    "category": "type",
    "text": "Symbols\n\nAn abstraction over the concept of a collection of symbol (SymtabEntry) types within an object file.  One can think of the Symbols object containing the table of symbols within the object file, whereas the SymtabEntry/SymbolRef objects contain the actual symbol data itself.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nSymbols()\n\nIteration\n\ngetindex()\nlastindex()\nlength()\niterate()\neltype()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SymtabEntry",
    "page": "Docstrings",
    "title": "ObjectFile.SymtabEntry",
    "category": "type",
    "text": "SymtabEntry\n\nAn abstraction over the concept of a symbol within an object file.  This type does not use the Symbol name as this would conflict with the builtin Julia Symbol type, so the name SymtabEntry is used instead.  As a user, the SymbolRef type should be the primary method of interacting with symbols, as a developer adding new object file formats, some methods must support SymtabEntrys, others must support only SymbolRefs.  Note that any method that works on a SymtabEntry must also work with a SymbolRef, see the @derefmethod macro for a convenient helper macro to generate SymbolRef -> SymtabEntry wrapper methods. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nSymtabEntry()\n\nUtil:\n\nderef()\n\nProperties:\n\nsymbol_name()\nsymbol_value()\nisundef()\nisglobal()\nislocal()\nisweak()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.canonical_rpaths",
    "page": "Docstrings",
    "title": "ObjectFile.canonical_rpaths",
    "category": "function",
    "text": "canonical_rpaths(rpath::RPath)\n\nReturn a canonicalized list of paths that will be searched.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.contents",
    "page": "Docstrings",
    "title": "ObjectFile.contents",
    "category": "function",
    "text": "contents(oh::ObjectHandle, section::Section)\n\nRead the contents of the section referred to by section from the given ObjectHandle, returning a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.deref",
    "page": "Docstrings",
    "title": "ObjectFile.deref",
    "category": "function",
    "text": "deref(section::SectionRef)\n\nDereference the given SectionRef object to a Section.\n\n\n\n\n\nderef(seg::SegmentRef)\n\nDereference the given SegmentRef object to a Segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.dylib_name",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.dylib_name",
    "category": "function",
    "text": "dylib_name(cmd)\n\nReturn the name of the dylib referred to by the given Load Command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.dylib_timestamp",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.dylib_timestamp",
    "category": "function",
    "text": "dylib_timestamp(cmd)\n\nReturn the build timestamp of the dylib referred to by the given Load Command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MachO.dylib_version",
    "page": "Docstrings",
    "title": "ObjectFile.MachO.dylib_version",
    "category": "function",
    "text": "dylib_version(cmd)\n\nReturn the version of the dylib referred to by the given Load Command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.dyn_entry_is_string",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.dyn_entry_is_string",
    "category": "function",
    "text": "dyn_entry_is_string(d::ELFDynEntry)\n\nReturn true if the given ELFDynEntry represents an offset within the dynamic string table, and therefore can be used in a strtab_lookup()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.dyn_entry_type",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.dyn_entry_type",
    "category": "function",
    "text": "dyn_entry_type(d::ELFDynEntry)\n\nReturn the type of the given ELFDynEntry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ELF.dyn_entry_type_string",
    "page": "Docstrings",
    "title": "ObjectFile.ELF.dyn_entry_type_string",
    "category": "function",
    "text": "dyn_entry_type_string(d::ELFDynEntry)\n\nReturn the given ELFDynEntry\'s type as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.endianness",
    "page": "Docstrings",
    "title": "ObjectFile.endianness",
    "category": "function",
    "text": "endianness(oh::ObjectHandle)\n\nReturns the endianness of the given ObjectHandle (e.g. :LittleEndian)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.eof",
    "page": "Docstrings",
    "title": "Base.eof",
    "category": "function",
    "text": "eof(section::SectionRef)\n\nReturns true if the ObjectHandle that this SectionRef refers to has read beyond the current section\'s extent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.find_libraries",
    "page": "Docstrings",
    "title": "ObjectFile.find_libraries",
    "category": "function",
    "text": "find_libraries(oh::ObjectHandle)\n\nReturn a mapping from sonames to absolute paths, containing all the sonames declared as beeing needed by the given ObjectHandle.  See the documentation for find_library(::RPath, ::String) and RPath for more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.find_library",
    "page": "Docstrings",
    "title": "ObjectFile.find_library",
    "category": "function",
    "text": "find_library(oh::ObjectHandle, soname::String)\n\nReturn the absolute path to the given soname, using the linker search path that the given ObjectHandle would use at runtime.  See the documentation for find_library(::RPath, ::String) for more details.\n\n\n\n\n\nfind_library(rpath::RPath, soname::String)\n\nReturn the full path to a library, searching the given RPath, and then the default library search paths.  This method takes the given soname and joins it to the end of every path within the given RPath, returning the resultant path if it exists, returning back the original soname if it doesn\'t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.findall",
    "page": "Docstrings",
    "title": "Base.findall",
    "category": "function",
    "text": "findall(sections::Sections, name::String)\n\nReturn a list of sections that match the given name.\n\n\n\n\n\nfindall(sections::Sections, name::String)\n\nReturn a list of sections that match one of the given names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.findfirst",
    "page": "Docstrings",
    "title": "Base.findfirst",
    "category": "function",
    "text": "findfirst(sections::Sections, name::String)\n\nReturn the first section that matches the given name.\n\n\n\n\n\nfindfirst(sections::Sections, names::Vector{String})\n\nReturn the first section that matches on of the given names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.fixed_string",
    "page": "Docstrings",
    "title": "ObjectFile.fixed_string",
    "category": "type",
    "text": "fixed_string{T}\n\nA fixed-byte string, stored as an integer type (e.g. T = UInt128, or T = UInt64) but displayed and treated as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.format_string",
    "page": "Docstrings",
    "title": "ObjectFile.format_string",
    "category": "function",
    "text": "format_string(::Type{H}) where {H <: ObjectHandle}\n\nReturn the string name of the given ObjectHandle, examples are \"ELF\", \"MachO\", \"COFF\", etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.getindex_ref",
    "page": "Docstrings",
    "title": "ObjectFile.getindex_ref",
    "category": "function",
    "text": "getindex_ref(collection, offset, stride, T, ref_type, idx)\n\nGiven a collection, such as Sections, DynamicLinks, etc... use the given offset, stride, and T parameters to read in and construct a ref_type object located at index idx.  Example invocation:\n\ngetindex_ref(\n    sections,\n    section_header_offset(oh),\n    section_header_size(oh),\n    section_header_type(oh),\n    SectionRef,\n    idx\n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "function",
    "text": "handle(sections::Sections)\n\nReturn the ObjectHandle that this Sections object belongs to\n\n\n\n\n\nhandle(section::SectionRef)\n\nReturn the ObjectHandle this SectionRef belongs to.  This method is SectionRef-only.\n\n\n\n\n\nhandle(seg::SegmentRef)\n\nReturn the ObjectHandle this SegmentRef belongs to.  This method is SegmentRef-only.\n\n\n\n\n\nhandle(s::StrTab)\n\nReturn the ObjectHandle this StrTab belongs to.\n\n\n\n\n\nhandle(sym::SymbolRef)\n\nReturn the ObjectHandle that this SymbolRef belongs to.\n\n\n\n\n\nhandle(rpath::RPath)\n\nReturn the handle that this RPath object refers to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.header",
    "page": "Docstrings",
    "title": "ObjectFile.header",
    "category": "function",
    "text": "header(oh::ObjectHandle)\n\nReturn the ObjectHandle\'s header object, whatever that may be for this particular object file format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.iostream",
    "page": "Docstrings",
    "title": "ObjectFile.iostream",
    "category": "function",
    "text": "iostream(oh::ObjectHandle)\n\nReturns the IOStream backing the ObjectHandle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.is64bit",
    "page": "Docstrings",
    "title": "ObjectFile.is64bit",
    "category": "function",
    "text": "is64bit(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents a 64-bit object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isdynamic",
    "page": "Docstrings",
    "title": "ObjectFile.isdynamic",
    "category": "function",
    "text": "isdynamic(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle makes use of dynamic linking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isexecutable",
    "page": "Docstrings",
    "title": "ObjectFile.isexecutable",
    "category": "function",
    "text": "isexecutable(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents an executable object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isglobal",
    "page": "Docstrings",
    "title": "ObjectFile.isglobal",
    "category": "function",
    "text": "isglobal(sym::SymtabEntry)\n\nReturn true if the given symbol is global\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.islibrary",
    "page": "Docstrings",
    "title": "ObjectFile.islibrary",
    "category": "function",
    "text": "islibrary(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents a shared library\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.islocal",
    "page": "Docstrings",
    "title": "ObjectFile.islocal",
    "category": "function",
    "text": "islocal(sym::SymtabEntry)\n\nReturn true if the given symbol is local\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isrelocatable",
    "page": "Docstrings",
    "title": "ObjectFile.isrelocatable",
    "category": "function",
    "text": "isrelocatable(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents a relocatable object file, e.g. an .o file as generated by gcc -c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isundef",
    "page": "Docstrings",
    "title": "ObjectFile.isundef",
    "category": "function",
    "text": "isundef(sym::SymtabEntry)\n\nReturn true if the given symbol is undefined\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isweak",
    "page": "Docstrings",
    "title": "ObjectFile.isweak",
    "category": "function",
    "text": "isweak(sym::SymtabEntry)\n\nReturn true if the given symbol is weak\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.mangle_section_name",
    "page": "Docstrings",
    "title": "ObjectFile.mangle_section_name",
    "category": "function",
    "text": "mangle_section_name(oh::ObjectHandle, name::AbstractString)\n\nTurn a section name into the object-format specific naming convention, e.g. returning \".bss\" for ELF/COFF files, and \"__bss\" for MachO files\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.mangle_symbol_name",
    "page": "Docstrings",
    "title": "ObjectFile.mangle_symbol_name",
    "category": "function",
    "text": "mangle_symbol_name(oh::ObjectHandle, name::AbstractString)\n\nMangle a symbol name using the object-format specific naming convention, e.g. prefixing \"_\" for MachO files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.path",
    "page": "Docstrings",
    "title": "ObjectFile.path",
    "category": "function",
    "text": "path(oh::ObjectHandle)\n\nReturn the absolute path to the given ObjectHandle, if it was a file loaded from the local disk.  If it was loaded from a general IOStream or in some other way such that the path is unknown or unknowable, return the empty string.\n\n\n\n\n\npath(io::IO)\n\nTry to guess the path of an IO object.  If it cannot be guessed, returns the empty string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.read",
    "page": "Docstrings",
    "title": "Base.read",
    "category": "function",
    "text": "read(section::SectionRef)\n\nRead the contents of the section referred to by section, returning a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.read_struct",
    "page": "Docstrings",
    "title": "ObjectFile.read_struct",
    "category": "function",
    "text": "read_struct(oh, type_func, size_func, name)\n\nGiven a Type, (such as ELFSection64), unpack() it from the given object and return it, throwing errors as appropriate, and skipping over any excess padding bytes as determined by type_func and size_func. Example invocation:\n\nreadstruct(oh, symtabentrytype, symtabentry_size, \"Symbol Entry\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.readmeta",
    "page": "Docstrings",
    "title": "ObjectFile.readmeta",
    "category": "function",
    "text": "readmeta(io::IO, ::ObjectHandle)\n\nRead an Object File out from an IOStream.  This is the first method you should call in order to manipulate object files.\n\n\n\n\n\nreadmeta(io::IO)\n\nRead an Object File out from an IOStream, guessing at the type of object within the stream by calling readmeta(io, T) for each T within ObjTypes, and returning the first that does not throw a MagicMismatch.\n\n\n\n\n\nreadmeta(f::Function, file::AbstractString)\n\nDo-block variant of readmeta().  Use via something like:\n\nreadmeta(\"libfoo.so\") do f\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.rpaths",
    "page": "Docstrings",
    "title": "ObjectFile.rpaths",
    "category": "function",
    "text": "rpaths(rpath::RPath)\n\nReturn the list of paths that will be searched for shared libraries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_address",
    "page": "Docstrings",
    "title": "ObjectFile.section_address",
    "category": "function",
    "text": "section_address(section::Section)\n\nThe address of the section in virtual memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_header_offset",
    "page": "Docstrings",
    "title": "ObjectFile.section_header_offset",
    "category": "function",
    "text": "section_header_offset(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the offset (in bytes) at which the sections start within the containing object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_header_size",
    "page": "Docstrings",
    "title": "ObjectFile.section_header_size",
    "category": "function",
    "text": "section_header_size(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the size of a section header (used for reading in the sections header when trying to load a Section object or iterating over a Sections object)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_header_type",
    "page": "Docstrings",
    "title": "ObjectFile.section_header_type",
    "category": "function",
    "text": "section_header_type(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the type of a section header (used for reading in the sections header when trying to load a Section object or iterating over a Sections object).  For instance, for a 64-bit ELF file, this would return the type ELFSection64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_name",
    "page": "Docstrings",
    "title": "ObjectFile.section_name",
    "category": "function",
    "text": "section_name(section::Section)\n\nReturn the name of the given section as a string.  In order to return a true name, it is necessary to perform a lookup within the object\'s string table, which cannot be done using just a Section object; use a SectionRef object instead if you need that.  For sanity sake, this method will return a string, but the contents of the string may be something like the offset within the string table pointing to this Section\'s name, e.g. \"@strtab.123\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_number",
    "page": "Docstrings",
    "title": "ObjectFile.section_number",
    "category": "function",
    "text": "section_number(section::SectionRef)\n\nThe index of the given section within the section header table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_offset",
    "page": "Docstrings",
    "title": "ObjectFile.section_offset",
    "category": "function",
    "text": "section_offset(section::Section)\n\nThe offset of the section in the file, in bytes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_size",
    "page": "Docstrings",
    "title": "ObjectFile.section_size",
    "category": "function",
    "text": "section_size(section::Section)\n\nThe size of the actual data contained in the section. This should exclude any padding mandated by the file format e.g. due to alignment rules\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.seek",
    "page": "Docstrings",
    "title": "Base.seek",
    "category": "function",
    "text": "seek(section::SectionRef, offset)\n\nSeek to offset relative to section in the ObjectHandle that this SectionRef refers to\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.seekstart",
    "page": "Docstrings",
    "title": "Base.seekstart",
    "category": "function",
    "text": "seekstart(section::SectionRef)\n\nSeek to the beginning of section in the ObjectHandle it was loaded from.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_header_offset",
    "page": "Docstrings",
    "title": "ObjectFile.segment_header_offset",
    "category": "function",
    "text": "segment_header_offset(oh::ELFHandle)\n\nReturn the offset of the segment header table within the given ELF object.\n\n\n\n\n\nsegment_header_offset(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the offset (in bytes) at which the segments start within the containing object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_header_size",
    "page": "Docstrings",
    "title": "ObjectFile.segment_header_size",
    "category": "function",
    "text": "segment_header_offset(oh::ELFHandle)\n\nReturn the size of a segment header within the given ELF object.\n\n\n\n\n\nsegment_header_size(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the size of a segment header (used for reading in the segments header when trying to load a Segment object or iterating over a Segments object)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_header_type",
    "page": "Docstrings",
    "title": "ObjectFile.segment_header_type",
    "category": "function",
    "text": "segment_header_type(oh::ELFHandle)\n\nReturn the type of a segment header within the given ELF object.  E.g. within a 64-bit ELF object, this will return ELFSegment64.\n\n\n\n\n\nsegment_header_type(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the type of a segment header (used for reading in the segments header when trying to load a Segment object or iterating over a Segments object).  For instance, for a 64-bit ELF file, this would return the type ELFSegment64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_name",
    "page": "Docstrings",
    "title": "ObjectFile.segment_name",
    "category": "function",
    "text": "segment_name(seg::SegmentRef)\n\nThe name of the given Segment, returned as a string.  This method often performs some kind of lookup within the string table of the object to get the full name of the segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_number",
    "page": "Docstrings",
    "title": "ObjectFile.segment_number",
    "category": "function",
    "text": "segment_number(seg::SegmentRef)\n\nReturn the index of the referred segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.show_collection",
    "page": "Docstrings",
    "title": "ObjectFile.show_collection",
    "category": "function",
    "text": "show_collection(io, collection, ::Type{H<:ObjectHandle})\n\nGiven a collection-like object, (Symbols, DynamicLinks, ``)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.startaddr",
    "page": "Docstrings",
    "title": "ObjectFile.startaddr",
    "category": "function",
    "text": "startaddr(oh::ObjectHandle)\n\nReturns the offset within the underlying IOStream at which this ObjectHandle is located.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.strtab_lookup",
    "page": "Docstrings",
    "title": "ObjectFile.strtab_lookup",
    "category": "function",
    "text": "strtab_lookup(s::StrTab, index)\n\nReads a string from the given StrTab at index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_name",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_name",
    "category": "function",
    "text": "symbol_name(sym::SymtabEntry)\n\nReturn the name of the given section as a string.  In order to return a true name, it is necessary to perform a lookup within the object\'s string table, which cannot be done using just a SymtabEntry object; use a SymbolRef object instead if you need that.  For sanity sake, this method will return a string, but the contents of the string may be something like the offset within the string table pointing to this SymtabEntry\'s name, e.g. \"@strtab.123\"\n\n\n\n\n\nsymbol_name(sym::SymbolRef)\n\nReturn the name of the given symbol as a string.  This method often performs some kind of lookup within the string table of the object to get the full name of the symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_number",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_number",
    "category": "function",
    "text": "symbol_number(sym::SymbolRef)\n\nReturn the number (index) of the given symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_value",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_value",
    "category": "function",
    "text": "symbol_value(sym::SymtabEntry)\n\nReturn the value of the given symbol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symtab_entry_offset",
    "page": "Docstrings",
    "title": "ObjectFile.symtab_entry_offset",
    "category": "function",
    "text": "symtab_entry_offset(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the offset (in bytes) at which the symbol table starts within the containing object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symtab_entry_size",
    "page": "Docstrings",
    "title": "ObjectFile.symtab_entry_size",
    "category": "function",
    "text": "symtab_entry_size(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the size of a symbol table entry (used for reading in the symbol table when trying to load a SymtabEntry object or iterating over a Symbols object).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symtab_entry_type",
    "page": "Docstrings",
    "title": "ObjectFile.symtab_entry_type",
    "category": "function",
    "text": "symtab_entry_type(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the type of a symbol table entry (used for reading in the symbol table when trying to load a SymtabEntry object or iterating over a Symbols object).  For instance, for a 64-bit ELF file, this would return the type ELFSymtabEntry64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ObjectFile.@constantsObjectFile.@derefmethodObjectFile.@mustimplementObjectFile.COFFObjectFile.COFFDataDirectoriesObjectFile.COFFDynamicLinkObjectFile.COFFDynamicLinksObjectFile.COFFHandleObjectFile.COFFHeaderObjectFile.COFFImageDataDirectoryObjectFile.COFFOptionalHeader32ObjectFile.COFFOptionalHeader64ObjectFile.COFFOptionalHeaderStandardObjectFile.COFFOptionalHeaderWindows32ObjectFile.COFFOptionalHeaderWindows64ObjectFile.COFFRPathObjectFile.COFFStrTabObjectFile.COFFSymbolRefObjectFile.COFFSymbolsObjectFile.COFFSymtabEntryObjectFile.DynamicLinkObjectFile.DynamicLinksObjectFile.ELFObjectFile.ELFDynEntriesObjectFile.ELFDynEntryObjectFile.ELFDynEntry32ObjectFile.ELFDynEntry64ObjectFile.ELFDynEntryRefObjectFile.ELFDynamicLinkObjectFile.ELFDynamicLinksObjectFile.ELFHandleObjectFile.ELFHeaderObjectFile.ELFHeader32ObjectFile.ELFHeader64ObjectFile.ELFInternalObjectFile.ELFRPathObjectFile.ELFSectionObjectFile.ELFSection32ObjectFile.ELFSection64ObjectFile.ELFSectionRefObjectFile.ELFSectionsObjectFile.ELFSegmentObjectFile.ELFSegment32ObjectFile.ELFSegment64ObjectFile.ELFSegmentsObjectFile.ELFStrTabObjectFile.ELFSymbolRefObjectFile.ELFSymbolsObjectFile.ELFSymtabEntryObjectFile.ELFSymtabEntry32ObjectFile.ELFSymtabEntry64ObjectFile.FatMachOHandleObjectFile.MachFatArchObjectFile.MachFatHeaderObjectFile.MachHeaderObjectFile.MachHeader32ObjectFile.MachHeader64ObjectFile.MachOObjectFile.MachODynamicLinkObjectFile.MachODynamicLinksObjectFile.MachOHandleObjectFile.MachOIdDylibCmdObjectFile.MachOLoadCmdObjectFile.MachOLoadCmdHeaderObjectFile.MachOLoadCmdRefObjectFile.MachOLoadCmdsObjectFile.MachOLoadDylibCmdObjectFile.MachORPathObjectFile.MachOSectionObjectFile.MachOSectionRefObjectFile.MachOSectionsObjectFile.MachOSegmentObjectFile.MachOSegment32CmdObjectFile.MachOSegment64CmdObjectFile.MachOSegmentCmdObjectFile.MachOSegmentRefObjectFile.MachOSegmentsObjectFile.MachOSymbolRefObjectFile.MachOSymbolsObjectFile.MachOSymtabEntryObjectFile.MagicMismatchObjectFile.ObjTypesObjectFile.ObjectFileObjectFile.ObjectHandleObjectFile.RPathObjectFile.SectionObjectFile.SectionRefObjectFile.SectionsObjectFile.SegmentObjectFile.SegmentRefObjectFile.SegmentsObjectFile.StrTabObjectFile.SymbolRefObjectFile.SymbolsObjectFile.SymtabEntryObjectFile.__init__ObjectFile.canonical_rpathsObjectFile.contentsObjectFile.derefObjectFile.dylib_compatibilityObjectFile.dylib_nameObjectFile.dylib_timestampObjectFile.dylib_versionObjectFile.dyn_entry_is_stringObjectFile.dyn_entry_typeObjectFile.dyn_entry_type_stringObjectFile.eltypeObjectFile.endiannessObjectFile.eofObjectFile.evalObjectFile.find_librariesObjectFile.find_libraryObjectFile.findallObjectFile.findfirstObjectFile.fixed_stringObjectFile.format_stringObjectFile.getindexObjectFile.getindex_refObjectFile.handleObjectFile.headerObjectFile.includeObjectFile.iostreamObjectFile.is64bitObjectFile.isdynamicObjectFile.isexecutableObjectFile.isglobalObjectFile.islibraryObjectFile.islocalObjectFile.isrelocatableObjectFile.isundefObjectFile.isweakObjectFile.iterateObjectFile.lastindexObjectFile.lengthObjectFile.mangle_section_nameObjectFile.mangle_symbol_nameObjectFile.pathObjectFile.positionObjectFile.readObjectFile.read_structObjectFile.readbytesObjectFile.readmetaObjectFile.readuntilObjectFile.rpathsObjectFile.section_addressObjectFile.section_header_offsetObjectFile.section_header_sizeObjectFile.section_header_typeObjectFile.section_nameObjectFile.section_numberObjectFile.section_offsetObjectFile.section_sizeObjectFile.section_typeObjectFile.seekObjectFile.seekstartObjectFile.segment_addressObjectFile.segment_file_sizeObjectFile.segment_header_offsetObjectFile.segment_header_sizeObjectFile.segment_header_typeObjectFile.segment_memory_sizeObjectFile.segment_nameObjectFile.segment_num_sectionsObjectFile.segment_numberObjectFile.segment_offsetObjectFile.segment_typeObjectFile.show_collectionObjectFile.skipObjectFile.startaddrObjectFile.strtab_lookupObjectFile.symbol_nameObjectFile.symbol_numberObjectFile.symbol_valueObjectFile.symtab_entry_offsetObjectFile.symtab_entry_sizeObjectFile.symtab_entry_typeObjectFile.write"
},

]}
