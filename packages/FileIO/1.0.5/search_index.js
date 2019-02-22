var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FileIO-1",
    "page": "Readme",
    "title": "FileIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)FileIO aims to provide a common framework for detecting file formats and dispatching to appropriate readers/writers.  The two core functions in this package are called load and save, and offer high-level support for formatted files (in contrast with julia\'s low-level read and write).  To avoid name conflicts, packages that provide support for standard file formats through functions named load and save are encouraged to extend the definitions here. Supported Files"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install FileIO via Pkg.add(\"FileIO\")."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "If your format has been registered, it might be as simple asusing FileIO\nobj = load(filename)to read data from a formatted file.  Likewise, saving might be as simple assave(filename, obj)If you just want to inspect a file to determine its format, thenfile = query(filename)\ns = query(io)   # io is a streamwill return a File or Stream object that also encodes the detected file format.Sometimes you want to read or write files that are larger than your available memory, or might be an unknown or infinite length (e.g. reading an audio or video stream from a socket). In these cases it might not make sense to process the whole file at once, but instead process it a chunk at a time. For these situations FileIO provides the loadstreaming and savestreaming functions, which return an object that you can read or write, rather than the file data itself.This would look something like:using FileIO\naudio = loadstreaming(\"bigfile.wav\")\ntry\n    while !eof(audio)\n        chunk = read(audio, 4096) # read 4096 frames\n        # process the chunk\n    end\nfinally\n    close(audio)\nendor use do syntax to auto-close the stream:using FileIO\nloadstreaming(\"bigfile.wav\") do audio\n    while !eof(audio)\n        chunk = read(audio, 4096) # read 4096 frames\n        # process the chunk\n    end\nendNote that in these cases you may want to use read! with a pre-allocated buffer for maximum efficiency."
},

{
    "location": "#Adding-new-formats-1",
    "page": "Readme",
    "title": "Adding new formats",
    "category": "section",
    "text": "You register a new format by adding add_format(fmt, magic, extension) to the registry. To do so, please just open a pull request (you can just edit the file in Github). fmt is a DataFormat type, most conveniently created as format\"IDENTIFIER\".  magic typically contains the magic bytes that identify the format.  Here are some examples:# A straightforward format\nadd_format(format\"PNG\", [0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a], \".png\")\n\n# A format that uses only ASCII characters in its magic bytes, and can\n# have one of two possible file extensions\nadd_format(format\"NRRD\", \"NRRD\", [\".nrrd\",\".nhdr\"])\n\n# A format whose magic bytes might not be at the beginning of the file,\n# necessitating a custom function `detecthdf5` to find them\nadd_format(format\"HDF5\", detecthdf5, [\".h5\", \".hdf5\"])\n\n# A fictitious format that, unfortunately, provides no magic\n# bytes. Here we have to place our faith in the file extension.\nadd_format(format\"DICEY\", (), \".dcy\")You can also declare that certain formats require certain packages for I/O support:add_loader(format\"HDF5\", :HDF5)\nadd_saver(format\"PNG\", :ImageMagick)These packages will be automatically loaded as needed. You can also define the loaders and savers in a short form like this:add_format(format\"OFF\", \"OFF\", \".off\", [:MeshIO])This means MeshIO supports loading and saving of the off format. You can add multiple loaders and specifiers like this:add_format(\n    format\"BMP\",\n    UInt8[0x42,0x4d],\n    \".bmp\",\n    [:OSXNativeIO, LOAD, OSX],\n    [:ImageMagick]\n)This means, OSXNative has first priority (gets loaded first) and only supports loading bmp on OSX. So on windows, OSXNativeIO will be ignored and ImageMagick has first priority. You can add any combination of LOAD, SAVE, OSX, Unix, Windows and Linux.Users are encouraged to contribute these definitions to the registry.jl file of this package, so that information about file formats exists in a centralized location."
},

{
    "location": "#Implementing-loaders/savers-1",
    "page": "Readme",
    "title": "Implementing loaders/savers",
    "category": "section",
    "text": "In your package, write code like the following:using FileIO\n\n# See important note about scope below\nfunction load(f::File{format\"PNG\"})\n    open(f) do s\n        skipmagic(s)  # skip over the magic bytes\n        # You can just call the method below...\n        ret = load(s)\n        # ...or implement everything here instead\n    end\nend\n\n# You can support streams and add keywords:\nfunction load(s::Stream{format\"PNG\"}; keywords...)\n    # s is already positioned after the magic bytes\n    # Do the stuff to read a PNG file\n    chunklength = read(s, UInt32)\n    ...\nend\n\nfunction save(f::File{format\"PNG\"}, data)\n    open(f, \"w\") do s\n        # Don\'t forget to write the magic bytes!\n        write(s, magic(format\"PNG\"))\n        # Do the rest of the stuff needed to save in PNG format\n    end\nendNote that these are load and save, not FileIO.load and FileIO.save. Because a given format might have multiple packages that are capable of reading it, FileIO will dispatch to these using module-scoping, e.g., SomePkg.load(args...). Consequently, packages should define \"private\" load and save methods (also loadstreaming and savestreaming if you implement them), and not extend (import) FileIO\'s.If you run into a naming conflict with the load and save functions (for example, you already have another function in your package that has one of these names), you can instead name your loaders fileio_load,  fileio_save etc. Note that you cannot mix and match these styles: either all your loaders have to be named load, or all of them should be called fileio_load, but you cannot use both conventions in one module.load(::File) and save(::File) should close any streams they open.  (If you use the do syntax, this happens for you automatically even if the code inside the do scope throws an error.) Conversely, load(::Stream) and save(::Stream) should not close the input stream.loadstreaming and savestreaming use the same query mechanism, but return a decoded stream that users can read or write. You should also implement a close method on your reader or writer type. Just like with load and save, if the user provided a filename, your close method should be responsible for closing any streams you opened in order to read or write the file. If you are given a Stream, your close method should only do the clean up for your reader or writer type, not close the stream.struct WAVReader\n    io::IO\n    ownstream::Bool\nend\n\nfunction Base.read(reader::WAVReader, frames::Int)\n    # read and decode audio samples from reader.io\nend\n\nfunction Base.close(reader::WAVReader)\n    # do whatever cleanup the reader needs\n    reader.ownstream && close(reader.io)\nend\n\n# FileIO has fallback functions that make these work using `do` syntax as well,\n# and will automatically call `close` on the returned object.\nloadstreaming(f::File{format\"WAV\"}) = WAVReader(open(f), true)\nloadstreaming(s::Stream{format\"WAV\"}) = WAVReader(s, false)If you choose to implement loadstreaming and savestreaming in your package, you can easily add save and load methods in the form of:function save(q::Formatted{format\"WAV\"}, data, args...; kwargs...)\n    savestreaming(q, args...; kwargs...) do stream\n        write(stream, data)\n    end\nend\n\nfunction load(q::Formatted{format\"WAV\"}, args...; kwargs...)\n    loadstreaming(q, args...; kwargs...) do stream\n        read(stream)\n    end\nend"
},

{
    "location": "#Help-1",
    "page": "Readme",
    "title": "Help",
    "category": "section",
    "text": "You can get an API overview by typing ?FileIO at the REPL prompt. Individual functions have their own help too, e.g., ?add_format."
},

{
    "location": "autodocs/#FileIO.DataFormat",
    "page": "Docstrings",
    "title": "FileIO.DataFormat",
    "category": "type",
    "text": "DataFormat{sym}() indicates a known binary or text format of kind sym, where sym is always a symbol. For example, a .csv file might have DataFormat{:CSV}().\n\nAn easy way to write DataFormat{:CSV} is format\"CSV\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.File",
    "page": "Docstrings",
    "title": "FileIO.File",
    "category": "type",
    "text": "File(fmt, filename) indicates that filename is a file of known DataFormat fmt.  For example, File{fmtpng}(filename) would indicate a PNG file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.FileIO",
    "page": "Docstrings",
    "title": "FileIO.FileIO",
    "category": "module",
    "text": "FileIO API (brief summary, see individual functions for more detail):\n\nformat\"PNG\": specifies a particular defined format\nFile{fmt} and Stream{fmt}: types of objects that declare that a resource has a particular format fmt\nload([filename|stream]): read data in formatted file, inferring the format\nload(File(format\"PNG\",filename)): specify the format manually\nloadstreaming([filename|stream]): similar to load, except that it returns an object that can be read from\nsave(filename, data...) for similar operations involving saving data\nsavestreaming([filename|stream]): similar to save, except that it returns an object that can be written to\nio = open(f::File, args...) opens a file\nio = stream(s::Stream) returns the IOStream from the query object s\nquery([filename|stream]): attempt to infer the format of filename\nunknown(q) returns true if a query can\'t be resolved\nskipmagic(io, fmt) sets the position of io to just after the magic bytes\nmagic(fmt) returns the magic bytes for format fmt\ninfo(fmt) returns (magic, extensions) for format fmt\nadd_format(fmt, magic, extension): register a new format\nadd_loader(fmt, :Package): indicate that Package supports loading files of type fmt\nadd_saver(fmt, :Package): indicate that Package supports saving files of type fmt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.LoaderError",
    "page": "Docstrings",
    "title": "FileIO.LoaderError",
    "category": "type",
    "text": "LoaderError should be thrown when loader library code fails, and other libraries should be given the chance to recover from the error.  Reports the library name and an error message: LoaderError(\"ImageMagick\", \"Foo not available\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.NotInstalledError",
    "page": "Docstrings",
    "title": "FileIO.NotInstalledError",
    "category": "type",
    "text": "NotInstalledError should be thrown when a library is currently not installed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.Stream",
    "page": "Docstrings",
    "title": "FileIO.Stream",
    "category": "type",
    "text": "Stream(fmt, io, [filename]) indicates that the stream io is written in known Format.  For example, Stream{PNG}(io) would indicate PNG format.  If known, the optional filename argument can be used to improve error messages, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.UnknownFormat",
    "page": "Docstrings",
    "title": "FileIO.UnknownFormat",
    "category": "type",
    "text": "UnknownFormat gets thrown when FileIO can\'t recognize the format of a file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.WriterError",
    "page": "Docstrings",
    "title": "FileIO.WriterError",
    "category": "type",
    "text": "WriterError should be thrown when writer library code fails, and other libraries should be given the chance to recover from the error.  Reports the library name and an error message: WriterError(\"ImageMagick\", \"Foo not available\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.add_format",
    "page": "Docstrings",
    "title": "FileIO.add_format",
    "category": "function",
    "text": "add_format(fmt, magic, extention) registers a new DataFormat. For example:\n\nadd_format(format\"PNG\", (UInt8[0x4d,0x4d,0x00,0x2b], UInt8[0x49,0x49,0x2a,0x00]), [\".tiff\", \".tif\"])\nadd_format(format\"PNG\", [0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a], \".png\")\nadd_format(format\"NRRD\", \"NRRD\", [\".nrrd\",\".nhdr\"])\n\nNote that extensions, magic numbers, and format-identifiers are case-sensitive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.add_loader",
    "page": "Docstrings",
    "title": "FileIO.add_loader",
    "category": "function",
    "text": "add_loader(fmt, :Package) triggers using Package before loading format fmt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.add_saver",
    "page": "Docstrings",
    "title": "FileIO.add_saver",
    "category": "function",
    "text": "add_saver(fmt, :Package) triggers using Package before saving format fmt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.del_format",
    "page": "Docstrings",
    "title": "FileIO.del_format",
    "category": "function",
    "text": "del_format(fmt::DataFormat) deletes fmt from the format registry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.file_extension",
    "page": "Docstrings",
    "title": "FileIO.file_extension",
    "category": "function",
    "text": "file_extension(file) returns the file extension associated with File file.\n\n\n\n\n\nfile_extension(file) returns a nullable-string for the file extension associated with Stream stream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.filename",
    "page": "Docstrings",
    "title": "FileIO.filename",
    "category": "function",
    "text": "filename(file) returns the filename associated with File file.\n\n\n\n\n\nfilename(stream) returns a string of the filename associated with Stream stream, or nothing if there is no file associated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.handle_current_error",
    "page": "Docstrings",
    "title": "FileIO.handle_current_error",
    "category": "function",
    "text": "Handles error as soon as they get thrown while doing IO\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.handle_exceptions",
    "page": "Docstrings",
    "title": "FileIO.handle_exceptions",
    "category": "function",
    "text": "Handles a list of thrown errors after no IO library was found working\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.info",
    "page": "Docstrings",
    "title": "FileIO.info",
    "category": "function",
    "text": "info(fmt) returns the magic bytes/extension information for DataFormat fmt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.load",
    "page": "Docstrings",
    "title": "FileIO.load",
    "category": "function",
    "text": "load(filename) loads the contents of a formatted file, trying to infer\n\nthe format from filename and/or magic bytes in the file.\n\nload(strm) loads from an IOStream or similar object. In this case,\n\nthere is no filename extension, so we rely on the magic bytes for format identification.\n\nload(File(format\"PNG\", filename)) specifies the format directly, and bypasses inference.\nload(Stream(format\"PNG\", io)) specifies the format directly, and bypasses inference.\nload(f; options...) passes keyword arguments on to the loader.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.loadstreaming",
    "page": "Docstrings",
    "title": "FileIO.loadstreaming",
    "category": "function",
    "text": "Some packages may implement a streaming API, where the contents of the file can be read in chunks and processed, rather than all at once. Reading from these higher-level streams should return a formatted object, like an image or chunk of video or audio.\n\nloadstreaming(filename) loads the contents of a formatted file, trying to infer\n\nthe format from filename and/or magic bytes in the file. It returns a streaming type that can be read from in chunks, rather than loading the whole contents all at once\n\nloadstreaming(strm) loads the stream from an IOStream or similar object.\n\nIn this case, there is no filename extension, so we rely on the magic bytes for format identification.\n\nloadstreaming(File(format\"WAV\",filename)) specifies the format directly, and\n\nbypasses inference.\n\nloadstreaming(Stream(format\"WAV\", io)) specifies the format directly, and\n\nbypasses inference.\n\nloadstreaming(f; options...) passes keyword arguments on to the loader.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.magic",
    "page": "Docstrings",
    "title": "FileIO.magic",
    "category": "function",
    "text": "magic(fmt) returns the magic bytes of format fmt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.query",
    "page": "Docstrings",
    "title": "FileIO.query",
    "category": "function",
    "text": "query(filename) returns a File object with information about the format inferred from the file\'s extension and/or magic bytes.\n\n\n\n\n\nquery(io, [filename]) returns a Stream object with information about the format inferred from the magic bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.save",
    "page": "Docstrings",
    "title": "FileIO.save",
    "category": "function",
    "text": "save(filename, data...) saves the contents of a formatted file,\n\ntrying to infer the format from filename.\n\nsave(Stream(format\"PNG\",io), data...) specifies the format directly, and bypasses inference.\nsave(File(format\"PNG\",filename), data...) specifies the format directly, and bypasses inference.\nsave(f, data...; options...) passes keyword arguments on to the saver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.savestreaming",
    "page": "Docstrings",
    "title": "FileIO.savestreaming",
    "category": "function",
    "text": "Some packages may implement a streaming API, where the contents of the file can be written in chunks, rather than all at once. These higher-level streams should accept formatted objects, like an image or chunk of video or audio.\n\nsavestreaming(filename, data...) saves the contents of a formatted file,\n\ntrying to infer the format from filename.\n\nsavestreaming(File(format\"WAV\",filename)) specifies the format directly, and\n\nbypasses inference.\n\nsavestreaming(Stream(format\"WAV\", io)) specifies the format directly, and\n\nbypasses inference.\n\nsavestreaming(f, data...; options...) passes keyword arguments on to the saver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.skipmagic",
    "page": "Docstrings",
    "title": "FileIO.skipmagic",
    "category": "function",
    "text": "skipmagic(s) sets the position of Stream s to be just after the magic bytes. For a plain IO object, you can use skipmagic(io, fmt).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.stream",
    "page": "Docstrings",
    "title": "FileIO.stream",
    "category": "function",
    "text": "stream(s) returns the stream associated with Stream s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.unknown",
    "page": "Docstrings",
    "title": "FileIO.unknown",
    "category": "function",
    "text": "unknown(f) returns true if the format of f is unknown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FileIO.unknown_df",
    "page": "Docstrings",
    "title": "FileIO.unknown_df",
    "category": "type",
    "text": "DataFormat{sym}() indicates a known binary or text format of kind sym, where sym is always a symbol. For example, a .csv file might have DataFormat{:CSV}().\n\nAn easy way to write DataFormat{:CSV} is format\"CSV\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FileIO.@format_strFileIO.DataFormatFileIO.FileFileIO.FileIOFileIO.FormattedFileIO.LOADFileIO.LinuxFileIO.LoaderErrorFileIO.MimeWriterFileIO.NotInstalledErrorFileIO.OSFileIO.OSXFileIO.SAVEFileIO.StreamFileIO.UnixFileIO.UnknownFormatFileIO.WindowsFileIO.WriterErrorFileIO._findmodFileIO.add_extensionFileIO.add_formatFileIO.add_loaderFileIO.add_loadsaveFileIO.add_saverFileIO.applicable_loadersFileIO.applicable_saversFileIO.applies_to_osFileIO.canonicalize_magicFileIO.checked_importFileIO.del_extensionFileIO.del_formatFileIO.del_magicFileIO.detect_bedgraphFileIO.detect_noometiffFileIO.detect_ometiffFileIO.detect_rdataFileIO.detect_rdata_singleFileIO.detect_stlasciiFileIO.detect_stlbinaryFileIO.detectaviFileIO.detecthdf5FileIO.detecttiffFileIO.detectwavFileIO.evalFileIO.ext2symFileIO.file!FileIO.file_extensionFileIO.filenameFileIO.getmoduleFileIO.h5magicFileIO.handle_current_errorFileIO.handle_errorFileIO.handle_exceptionsFileIO.has_method_fromFileIO.hasfunctionFileIO.hasmagicFileIO.includeFileIO.infoFileIO.is_installedFileIO.iter_eqFileIO.lensymFileIO.loadFileIO.loadstreamingFileIO.magicFileIO.magic_cmpFileIO.magic_equalFileIO.magic_funcFileIO.magic_listFileIO.metadataFileIO.queryFileIO.saveFileIO.savestreamingFileIO.seekableFileIO.skipmagicFileIO.split_predicatesFileIO.streamFileIO.sym2infoFileIO.sym2loaderFileIO.sym2saverFileIO.tiff_magicFileIO.topimportFileIO.unknownFileIO.unknown_df"
},

]}
