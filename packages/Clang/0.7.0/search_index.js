var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Clang.jl-1",
    "page": "Readme",
    "title": "Clang.jl",
    "category": "section",
    "text": "(Image: Build status)Clang.jl provides a Julia language wrapper for libclang: the stable, C-exported interface to (a subset of) the LLVM Clang compiler. The libclang API documentation provides background on the functionality available through libclang, and thus through the Julia wrapper. The Clang.jl repository also hosts related tools built on top of libclang functionality.If you are unfamiliar with the Clang AST and plan to access the internals of this library (as opposed to accessing the \'wrap-c\' bindings), a good starting point is the Introduction to the Clang AST."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Before installing Clang.jl, you might need to install libclang related packages(llvm-6.0, llvm-6.0-tools, libclang-6.0-dev) on Linux. To use your LLVM/Clang in other places, you could set an environment variable LLVM_CONFIG to that path. On Windows, you need to install LLVM officially released prebuild binaries and the corresponding environment variable is LLVM_WINDOWS.pkg> add Clang"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "Installation requirements are listed down page.Clang.jl Documentation"
},

{
    "location": "#Example-notebooks:-1",
    "page": "Readme",
    "title": "Example notebooks:",
    "category": "section",
    "text": "Usage ExamplesParsing C with Clang and Julia"
},

{
    "location": "#C-wrapper-generator-1",
    "page": "Readme",
    "title": "C wrapper generator",
    "category": "section",
    "text": "Clang.jl includes a generator to create Julia wrappers for C libraries from a collection of header files. The following declarations are currently supported:function: translated to Julia ccall, with full type translation\ntypedef: translated to Julia typealias to underlying intrinsic type\nenum: translated to const value symbol\nstruct: partial struct support may be enabled by setting WrapContext.options.wrap_structs = true"
},

{
    "location": "#Users-1",
    "page": "Readme",
    "title": "Users",
    "category": "section",
    "text": "Clang.jl tends to be used on large codebases, often with multiple API versions to support. Building a generator requires some customization effort, so for small libraries the initial investment may not pay off.Gtk.jl: Julia Gtk bindings (uses heavily customized generator)\nCUDArt.jl: Bindings to the CUDA Runtime library\nCUFFT.jl: Bindings to CUDA FFT library\nSundials.jl: interface to the LLNL \"SUite of Nonlinear and DIfferential/ALgebraic equation Solvers\" package\nLibCURL.jl: wrapper of cURL\nVideoIO.jl: Julia bindings for libav/ffmpeg\nWCSLIB.jl\nNIDAQ.jl: wrapper for NIDAQ data acquisition library"
},

{
    "location": "#Background-Information-1",
    "page": "Readme",
    "title": "Background Information",
    "category": "section",
    "text": ""
},

{
    "location": "#libclang-wrapper-status-1",
    "page": "Readme",
    "title": "libclang wrapper status",
    "category": "section",
    "text": "The cindex.jl libclang wrapper encompasses most CXType, CXCursor, and C++ related functions. A small convenience API is provided for basic tasks related to index generation, and retrieval of cursor kind and type information."
},

{
    "location": "#cindex.jl-Usage-1",
    "page": "Readme",
    "title": "cindex.jl Usage",
    "category": "section",
    "text": "using Clang.cindex\n\njulia> topcu = cindex.parse_header(\"Index.h\") # Parse Index.h, returning the root cursor\njulia> children(topcu).size\n2148\n\njulia> cu = cindex.search(top, \"clang_parseTranslationUnit\")[1]\njulia> cu_kind(cu) == CIndex.CurKind.FUNCTIONDECL\ntrue\njulia> name(cu)\n\"clang_parseTranslationUnit(CXIndex, const char *, const char *const *, int, struct CXUnsavedFile *, unsigned int, unsigned int)\"\n\njulia> tkl = tokenize(cu)\njulia> for tk in tkl\n           println(tk) # use tk.text to get underlying string\n       end\nIdentifier(\"CXTranslationUnit\")\nIdentifier(\"clang_parseTranslationUnit\")\nPunctuation(\"(\")\nIdentifier(\"CXIndex\")\nIdentifier(\"CIdx\")\nPunctuation(\",\")\nKeyword(\"const\")\nKeyword(\"char\")\nPunctuation(\"*\")\nIdentifier(\"source_filename\")See the examples folder for further usage scenarios. Clang.jl is partially self-generating, including parsing of the enums.There is a small convenience API exported by CIndex:  tu_init     # init and parse file to TranslationUnit\n  tu_cursor   # get top cursor from TranslationUnit\n  children    # gets CXCursor children; accessed by ref.\n  cu_kind     # CIndex.CurKind enum\n  ty_kind     # CIndex.TypKind enum\n  name        # get the DisplayName of a CXCursor\n  spelling    # get spelling of a CXCursor or CXType\n  cu_file     # file in which cursor was declared\n  is_function # CXCursor or CXType\n  is_null     # CXCursor\n  tokenize    # get tokens underlying given cursorFor documentation of wrapped CIndex functions, see:http://clang.llvm.org/doxygen/group__CINDEX.htmlFor a nice introduction to some capabilities and limitations (fewer now) of the libclang API, see this post:http://eli.thegreenplace.net/2011/07/03/parsing-c-in-python-with-clang/"
},

]}
