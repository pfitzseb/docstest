var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FilePathsBase.jl-1",
    "page": "Readme",
    "title": "FilePathsBase.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)FilePathsBase.jl provides a type based approach to working with filesystem paths in julia."
},

{
    "location": "#Intallation:-1",
    "page": "Readme",
    "title": "Intallation:",
    "category": "section",
    "text": "FilePathsBase.jl is registered, so you can to use Pkg.add to install it.julia> Pkg.add(\"FilePaths\")"
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "julia> using FilePathsBaseThe first important difference about working with paths in FilePathsBase.jl is that a path is an immutable list (Tuple) of strings, rather than simple a string.Path creation:julia> Path(\"~/repos/FilePathsBase.jl/\")\nPaths.PosixPath((\"~\",\"repos\",\"FilePathsBase.jl\",\"\"))orjulia> p\"~/repos/FilePathsBase.jl/\"\nPaths.PosixPath((\"~\",\"repos\",\"FilePathsBase.jl\",\"\"))Human readable file status info:julia> stat(p\"README.md\")\nStatus(\n  device = 16777220,\n  inode = 48428965,\n  mode = -rw-r--r--,\n  nlink = 1,\n  uid = 501,\n  gid = 20,\n  rdev = 0,\n  size = 1880 (1.8K),\n  blksize = 4096 (4.0K),\n  blocks = 8,\n  mtime = 2016-02-16T00:49:27,\n  ctime = 2016-02-16T00:49:27,\n)Working with permissions:julia> m = mode(p\"README.md\")\n-rw-r--r--\n\njulia> m - readable(:ALL)\n--w-------\n\njulia> m + executable(:ALL)\n-rwxr-xr-x\n\njulia> chmod(p\"README.md\", \"+x\")\n\njulia> mode(p\"README.md\")\n-rwxr-xr-x\n\njulia> chmod(p\"README.md\", m)\n\njulia> m = mode(p\"README.md\")\n-rw-r--r--\n\njulia> chmod(p\"README.md\", user=(READ+WRITE+EXEC), group=(READ+WRITE), other=READ)\n\njulia> mode(p\"README.md\")\n-rwxrw-r--\nReading and writing directly to file paths:julia> write(p\"testfile\", \"foobar\")\n6\n\njulia> read(p\"testfile\")\n\"foobar\"All the standard methods for working with paths in base julia exist in the FilePathsBase.jl. The following describes the rough mapping of method names. Use ? at the REPL to get the documentation and arguments as they may be different than the base implementations.Base FilePathsBase.jl\npwd() cwd()\nhomedir() home()\ncd() cd()\njoinpath() joinpath()\nbasename() basename()\nsplitext(basename())[1] filename\nsplitext(basename())[2] extension\nN/A extensions\nispath exists\nrealpath real\nnormpath norm\nabspath abs\nrelpath relative\nstat stat\nlstat lstat\nfilemode mode\nmtime modified\nctime created\nisdir isdir\nisfile isfile\nislink islink\nissocket issocket\nisfifo isfifo\nischardev ischardev\nisblockdev isblockdev\nisexecutable (deprecated) isexecutable\niswritable (deprecated) iswritable\nisreadable (deprecated) isreadable\nismount ismount\nisabspath isabs\nsplitdrive()[1] drive\nN/A root\nexpanduser expanduser\nmkdir mkdir\nmkpath N/A (use mkdir)\nsymlink symlink\ncp copy\nmv move\nrm remove\ntouch touch\ntempname tmpname\ntempdir tmpdir\nmktemp mktmp\nmktempdir mktmpdir\nchmod chmod (recursive unix-only)\nchown (unix only) chown (unix only)\nN/A read\nN/A write\n@DIR @PATH\n@FILE @FILEPATH"
},

{
    "location": "#TODO:-1",
    "page": "Readme",
    "title": "TODO:",
    "category": "section",
    "text": "cross platform chmod and chown"
},

{
    "location": "autodocs/#FilePathsBase.@LOCAL",
    "page": "Docstrings",
    "title": "FilePathsBase.@LOCAL",
    "category": "macro",
    "text": "@LOCAL(filespec)\n\nConstruct an absolute path to filespec relative to the source file containing the macro call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.@__FILEPATH__",
    "page": "Docstrings",
    "title": "FilePathsBase.@__FILEPATH__",
    "category": "macro",
    "text": "@__FILEPATH__ -> AbstractPath\n\n@FILEPATH expands to a path with the absolute file path of the file containing the macro. Returns an empty Path if run from a REPL or if evaluated by julia -e <expr>.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.@__PATH__",
    "page": "Docstrings",
    "title": "FilePathsBase.@__PATH__",
    "category": "macro",
    "text": "@__PATH__ -> AbstractPath\n\n@PATH expands to a path with the directory part of the absolute path of the file containing the macro. Returns an empty Path if run from a REPL or if evaluated by julia -e <expr>.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.@p_str",
    "page": "Docstrings",
    "title": "FilePathsBase.@p_str",
    "category": "macro",
    "text": "@p_str -> Path\n\nConstructs a Path (platform specific subtype of AbstractPath), such as p\"~/.juliarc.jl\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.Mode",
    "page": "Docstrings",
    "title": "FilePathsBase.Mode",
    "category": "type",
    "text": "The following file contains simple abstractions to make working with posix permissions easier in julia.\n\nFor now we\'re focused on user permissions.\n\nA lot of the low level permissions code below and the corresponding constants have been translated from cpython\'s Lib/stat.py file.\n\nhttps://github.com/python/cpython/blob/master/Lib/stat.py\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.Path",
    "page": "Docstrings",
    "title": "FilePathsBase.Path",
    "category": "function",
    "text": "Path()\nPath(path::AbstractPath)\nPath(path::Tuple)\nPath(path::AbstractString)\n\nResponsible for creating the appropriate platform specific path (e.g., PosixPath and WindowsPath for Unix and Windows systems respectively)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase._meta",
    "page": "Docstrings",
    "title": "FilePathsBase._meta",
    "category": "function",
    "text": "Return the portion of the file\'s mode that describes the file type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase._mode",
    "page": "Docstrings",
    "title": "FilePathsBase._mode",
    "category": "function",
    "text": "Return the portion of the file\'s mode that can be set by os.chmod().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.chown",
    "page": "Docstrings",
    "title": "Base.Filesystem.chown",
    "category": "function",
    "text": "chown(path::AbstractPath, user::AbstractString, group::AbstractString; recursive=false)\n\nChange the user and group of the path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.created",
    "page": "Docstrings",
    "title": "FilePathsBase.created",
    "category": "function",
    "text": "created(path::AbstractPath) -> DateTime\n\nReturns the creation date for the path.\n\nExample\n\njulia> created(p\"src/FilePathsBase.jl\")\n2017-06-20T04:01:09\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.exists",
    "page": "Docstrings",
    "title": "FilePathsBase.exists",
    "category": "function",
    "text": "exists(path::AbstractPath) -> Bool\n\nReturns whether the path actually exists on the system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.extension",
    "page": "Docstrings",
    "title": "FilePathsBase.extension",
    "category": "function",
    "text": "extension(path::AbstractPath) -> AbstractString\n\nExtracts the last extension from a filename if there any, otherwise it returns an empty string.\n\nExample\n\njulia> extension(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl\")\n\"jl\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.extensions",
    "page": "Docstrings",
    "title": "FilePathsBase.extensions",
    "category": "function",
    "text": "extensions(path::AbstractPath) -> AbstractString\n\nExtracts all extensions from a filename if there any, otherwise it returns an empty string.\n\nExample\n\njulia> extensions(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl.bak\")\n2-element Array{SubString{String},1}:\n \"jl\"\n \"bak\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.filename",
    "page": "Docstrings",
    "title": "FilePathsBase.filename",
    "category": "function",
    "text": "filename(path::AbstractPath) -> AbstractString\n\nExtracts the basename without any extensions.\n\nExample\n\njulia> filename(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl\")\n\"FilePathsBase\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.hasparent",
    "page": "Docstrings",
    "title": "FilePathsBase.hasparent",
    "category": "function",
    "text": "hasparent(path::AbstractPath) -> Bool\n\nReturns whether there is a parent directory component to the supplied path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.isexecutable",
    "page": "Docstrings",
    "title": "FilePathsBase.isexecutable",
    "category": "function",
    "text": "isexecutable(path::AbstractPath) -> Bool\n\nReturns whether the path is executable for the current user.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.mode",
    "page": "Docstrings",
    "title": "FilePathsBase.mode",
    "category": "function",
    "text": "mode(path::AbstractPath) -> Mode\n\nReturns the Mode for the specified path.\n\nExample\n\njulia> mode(p\"src/FilePathsBase.jl\")\n-rw-r--r--\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.modified",
    "page": "Docstrings",
    "title": "FilePathsBase.modified",
    "category": "function",
    "text": "modified(path::AbstractPath) -> DateTime\n\nReturns the last modified date for the path.\n\nExample\n\njulia> modified(p\"src/FilePathsBase.jl\")\n2017-06-20T04:01:09\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.parents",
    "page": "Docstrings",
    "title": "FilePathsBase.parents",
    "category": "function",
    "text": "parents{T<:AbstractPath}(path::T) -> Array{T}\n\nExample\n\njulia> parents(p\"~/.julia/v0.6/REQUIRE\") 3-element Array{FilePathsBase.PosixPath,1}:  p\"~\"  p\"~/.julia\"  p\"~/.julia/v0.6\"\n\nThrows\n\nErrorException: if path doesn\'t have a parent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.relative",
    "page": "Docstrings",
    "title": "FilePathsBase.relative",
    "category": "function",
    "text": "relative{T<:AbstractPath}(path::T, start::T=T(\".\"))\n\nCreates a relative path from either the current directory or an arbitrary start directory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FilePathsBase.@LOCALFilePathsBase.@__FILEPATH__FilePathsBase.@__PATH__FilePathsBase.@p_strFilePathsBase.AbstractPathFilePathsBase.CgroupFilePathsBase.CpasswdFilePathsBase.DATA_SUFFIXFilePathsBase.EXECFilePathsBase.FILEMODE_TABLEFilePathsBase.FilePathsBaseFilePathsBase.GROUP_COEFFFilePathsBase.GroupFilePathsBase.ModeFilePathsBase.OTHER_COEFFFilePathsBase.PATH_TYPESFilePathsBase.POSIX_PATH_ABSOLUTE_REFilePathsBase.POSIX_PATH_DIRECTORY_REFilePathsBase.POSIX_PATH_DIR_SPLITTERFilePathsBase.POSIX_PATH_EXT_SPLITTERFilePathsBase.POSIX_PATH_SEPARATORFilePathsBase.POSIX_PATH_SEPARATOR_REFilePathsBase.PathFilePathsBase.PosixPathFilePathsBase.READFilePathsBase.S_ENFMTFilePathsBase.S_IEXECFilePathsBase.S_IFBLKFilePathsBase.S_IFCHRFilePathsBase.S_IFDIRFilePathsBase.S_IFIFOFilePathsBase.S_IFLNKFilePathsBase.S_IFREGFilePathsBase.S_IFSOCKFilePathsBase.S_IREADFilePathsBase.S_IRGRPFilePathsBase.S_IROTHFilePathsBase.S_IRUSRFilePathsBase.S_IRWXGFilePathsBase.S_IRWXOFilePathsBase.S_IRWXUFilePathsBase.S_ISGIDFilePathsBase.S_ISUIDFilePathsBase.S_ISVTXFilePathsBase.S_IWGRPFilePathsBase.S_IWOTHFilePathsBase.S_IWRITEFilePathsBase.S_IWUSRFilePathsBase.S_IXGRPFilePathsBase.S_IXOTHFilePathsBase.S_IXUSRFilePathsBase.StatusFilePathsBase.USER_COEFFFilePathsBase.UserFilePathsBase.WIN_PATH_ABSOLUTE_REFilePathsBase.WIN_PATH_DIRECTORY_REFilePathsBase.WIN_PATH_DIR_SPLITTERFilePathsBase.WIN_PATH_EXT_SPLITTERFilePathsBase.WIN_PATH_SEPARATORFilePathsBase.WIN_PATH_SEPARATOR_REFilePathsBase.WRITEFilePathsBase.WindowsPathFilePathsBase.__init__FilePathsBase._datasizeFilePathsBase._metaFilePathsBase._modeFilePathsBase._win_splitdriveFilePathsBase.abspathFilePathsBase.anchorFilePathsBase.chownFilePathsBase.createdFilePathsBase.cwdFilePathsBase.dirnameFilePathsBase.driveFilePathsBase.evalFilePathsBase.executableFilePathsBase.existsFilePathsBase.expanduserFilePathsBase.extensionFilePathsBase.extensionsFilePathsBase.filemodeFilePathsBase.filenameFilePathsBase.hasparentFilePathsBase.homeFilePathsBase.includeFilePathsBase.isabsFilePathsBase.isabspathFilePathsBase.isexecutableFilePathsBase.ispathFilePathsBase.ispathtypeFilePathsBase.mkpathFilePathsBase.mktmpFilePathsBase.mktmpdirFilePathsBase.modeFilePathsBase.modifiedFilePathsBase.moveFilePathsBase.mvFilePathsBase.normpathFilePathsBase.parentsFilePathsBase.partsFilePathsBase.rawFilePathsBase.readableFilePathsBase.realpathFilePathsBase.registerFilePathsBase.relativeFilePathsBase.relpathFilePathsBase.removeFilePathsBase.rmFilePathsBase.rootFilePathsBase.tmpdirFilePathsBase.tmpnameFilePathsBase.writable"
},

]}
