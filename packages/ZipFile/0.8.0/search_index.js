var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This module provides support for reading and writing ZIP archives in Julia.(Image: Build Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install via the Julia package manager, Pkg.add(\"ZipFile\")."
},

{
    "location": "autodocs/#ZipFile.Deflate",
    "page": "Docstrings",
    "title": "ZipFile.Deflate",
    "category": "constant",
    "text": "Deflate compression method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.Dir",
    "page": "Docstrings",
    "title": "ZipFile.Dir",
    "category": "type",
    "text": "Reader represents a ZIP file open for reading.\n\nReader(io::IO)\nReader(filename::AbstractString)\n\nRead a ZIP file from io or the file named filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.Reader",
    "page": "Docstrings",
    "title": "ZipFile.Reader",
    "category": "type",
    "text": "Reader represents a ZIP file open for reading.\n\nReader(io::IO)\nReader(filename::AbstractString)\n\nRead a ZIP file from io or the file named filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.Store",
    "page": "Docstrings",
    "title": "ZipFile.Store",
    "category": "constant",
    "text": "Compression method that does no compression\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.WritableDir",
    "page": "Docstrings",
    "title": "ZipFile.WritableDir",
    "category": "type",
    "text": "Reader represents a ZIP file open for writing.\n\nWriter(io::IO)\nWriter(filename::AbstractString)\n\nCreate a new ZIP file that will be written to io or the file named filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.Writer",
    "page": "Docstrings",
    "title": "ZipFile.Writer",
    "category": "type",
    "text": "Reader represents a ZIP file open for writing.\n\nWriter(io::IO)\nWriter(filename::AbstractString)\n\nCreate a new ZIP file that will be written to io or the file named filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.ZipFile",
    "page": "Docstrings",
    "title": "ZipFile.ZipFile",
    "category": "module",
    "text": "A Julia package for reading/writing ZIP archive files\n\nThis package provides support for reading and writing ZIP archives in Julia. Install it via the Julia package manager using Pkgadd(ZipFile).\n\nThe ZIP file format is described in http://www.pkware.com/documents/casestudies/APPNOTE.TXT\n\nExample\n\nThe example below writes a new ZIP file and then reads back the contents.\n\njulia> using ZipFile\njulia> w = ZipFile.Writer(\"/tmp/example.zip\");\njulia> f = ZipFile.addfile(w, \"hello.txt\");\njulia> write(f, \"hello world!\n\");\njulia> f = ZipFile.addfile(w, \"julia.txt\", method=ZipFile.Deflate);\njulia> write(f, \"Julia\n\"^5);\njulia> close(w)\njulia> r = ZipFile.Reader(\"/tmp/example.zip\");\njulia> for f in r.files\n          println(\"Filename: $(f.name)\")\n          write(stdout, readstring(f));\n       end\njulia> close(r)\nFilename: hello.txt\nhello world!\nFilename: julia.txt\nJulia\nJulia\nJulia\nJulia\nJulia\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.addfile",
    "page": "Docstrings",
    "title": "ZipFile.addfile",
    "category": "function",
    "text": "addfile(w::Writer, name::AbstractString; method::Integer=Store, mtime::Float64=-1.0)\n\nAdd a new file named name into the ZIP file writer w, and return the WritableFile for the new file. We don\'t allow concurrrent writes, thus the file previously added using this function will be closed.\n\nMethod specifies the compression method that will be used (Store for uncompressed or Deflate for compressed).\n\nMtime is the modification time of the file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZipFile.getindex_u32le",
    "page": "Docstrings",
    "title": "ZipFile.getindex_u32le",
    "category": "function",
    "text": "Load a little endian UInt32 from a UInt8 vector b starting from index i\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ZipFile.DeflateZipFile.DirZipFile.FileZipFile.ReadableFileZipFile.ReaderZipFile.StoreZipFile.WritableDirZipFile.WritableFileZipFile.WriterZipFile.ZipFileZipFile.ZlibZipFile._CentralDirSigZipFile._EndCentralDirSigZipFile._LocalFileHdrSigZipFile._Method2StrZipFile._ZipVersionZipFile._find_diroffsetZipFile._find_enddiroffsetZipFile._getfilesZipFile._msdostimeZipFile._mtimeZipFile._writeleZipFile.addfileZipFile.closeZipFile.eofZipFile.evalZipFile.getindex_u32leZipFile.includeZipFile.mtimeZipFile.openZipFile.positionZipFile.readZipFile.readleZipFile.showZipFile.utf8_validateZipFile.write"
},

]}
