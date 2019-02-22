var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "WinRPM is an installer for RPM packages provided by an RPM-md build system. The default RPM-md provider is the OpenSUSE build service, which builds 32- and 64-bit DLLs for libraries used by several Julia packages (note: builds are cross-compiled)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install WinRPM via the Julia package manager, use:Pkg.add(\"WinRPM\")"
},

{
    "location": "#Package-Availability-1",
    "page": "Readme",
    "title": "Package Availability",
    "category": "section",
    "text": "To search for a package from within Julia:using WinRPM\n\nWinRPM.search(\"packagename\")See also: upstream package information for Win64 and Win32"
},

{
    "location": "#Package-Installation-1",
    "page": "Readme",
    "title": "Package Installation",
    "category": "section",
    "text": "To install a library using WinRPM:WinRPM.install(\"gtk2\")\nWinRPM.install(\"win_iconv\",\"mingw32\")"
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "WinRPM will automatically install dependencies declared in the RPM-md package specification."
},

{
    "location": "#Package-Creation-1",
    "page": "Readme",
    "title": "Package Creation",
    "category": "section",
    "text": "Please see the OpenSUSE build service packaging guidelines for further information."
},

{
    "location": "#BinDeps-Integration-1",
    "page": "Readme",
    "title": "BinDeps Integration",
    "category": "section",
    "text": "WinRPM may be integrated with the BinDeps system by declaring a provides(WinRPM.RPM... line for each serviceable dependency.For example, in the Tk.jl package the following lines declare availability of the tcl and tk libraries from WinRPM:if is_windows()\n    using WinRPM\n    provides(WinRPM.RPM, \"tk\", tk, os=:Windows)\n    provides(WinRPM.RPM, \"tcl\", tcl, os=:Windows)\nendThese lines must be preceded by BinDeps.library_dependency declarations; please see the BinDeps documentation for more information.It may also be helpful to review usage examples in Tk.jl or other existing packages (see deps/build.jl): Nettle.jl Cairo.jl"
},

{
    "location": "#Stand-alone-Usage-1",
    "page": "Readme",
    "title": "Stand-alone Usage",
    "category": "section",
    "text": "For stand-alone use, add the following lines to your %APPDATA%/julia/.juliarc.jl file:RPMbindir = Pkg.dir(\"WinRPM\",\"deps\",\"usr\",\"$(Sys.ARCH)-w64-mingw32\",\"sys-root\",\"mingw\",\"bin\")\npush!(Libdl.DL_LOAD_PATH,RPMbindir)\nENV[\"PATH\"]=ENV[\"PATH\"]*\";\"*RPMbindir"
},

{
    "location": "#Full-API-1",
    "page": "Readme",
    "title": "Full API",
    "category": "section",
    "text": "RPM-md provides the following functions for general usage: update, whatprovides, search, lookup, and installupdate() – download the new metadata from the hosts. Additional hosts can be added by editing the file sources.list.whatprovides(file) – given a part of a filename or file-path, returns a list of packages that includesearch(string) – search for a string in the package description, summary, or name fields and returns a list of matching packageslookup(name) – search for a package by nameinstall(pkg) – install a package (by name or package identifier), including dependencies, into the deps folderThe functions typically take a second parameter \"arch\" specifying the package architecture for search, defaulting to the current operating system. It also offers the keyword argument yes which should be set to true if no prompt is desired."
},

{
    "location": "#Usage-Example-1",
    "page": "Readme",
    "title": "Usage Example",
    "category": "section",
    "text": "Package lists can be further filtered and analyzed, as the following example demonstrates:julia> using WinRPM\n\njulia> gtk3_candidates = WinRPM.search(\"gtk3\", \"mingw32\")\n1. webkitgtk3-debug (mingw32) - Debug information for package mingw32-webkitgtk3\n2. webkitgtk3-lang (mingw32) - Languages for package mingw32-webkitgtk3\n3. webkitgtk3-tools (mingw32) - Library for rendering web content, GTK+ 3 Port (tools)\n4. gtk3-data (mingw32) - The GTK+ toolkit library (version 3) -- Data Files\n5. gtk3-lang (mingw32) - Languages for package mingw32-gtk3\n6. gtk3 (mingw32) - The GTK+ toolkit library (version 3)\n7. gtk3-devel (mingw32) - The GTK+ toolkit library (version 3) -- Development Files\n8. gtk3-debug (mingw32) - Debug information for package mingw32-gtk3\n9. gtk3-tools (mingw32) - The GTK+ toolkit library (version 3) -- Tools\n10. libwebkitgtk3 (mingw32) - Library for rendering web content, GTK+ 3 Port\n11. libwebkitgtk3-devel (mingw32) - Library for rendering web content, GTK+ 3 Port (development files)\n\njulia> gtk3_pkg = gtk3_candidates[6]\nName: gtk3\nSummary: The GTK+ toolkit library (version 3)\nVersion: 3.8.1 (rel 1.31)\nArch: mingw32\nURL: http://www.gtk.org/\nLicense: LGPL-2.0+\nDescription: GTK+ is a multi-platform toolkit for creating graphical user interfaces.\nOffering a complete set of widgets, GTK+ is suitable for projects\nranging from small one-off projects to complete application suites.\n\njulia> WinRPM.install(gtk3_pkg)\nMESSAGE: Installing: libxml2, atk, gdk-pixbuf, liblzma, zlib, libpng, libtiff, pixman, freetype, libffi, glib2-lang, atk-lang, libjpeg, gdk-pixbuf-lang, libharfbuzz, glib2, fontconfig, libcairo2, libjasper, libgcc, libintl, gtk3\nMESSAGE: Downloading: libxml2\nMESSAGE: Extracting: libxml2\n2286 blocks\nMESSAGE: Downloading: atk\nMESSAGE: Extracting: atk\n263 blocks\n...\nMESSAGE: Downloading: gtk3\nMESSAGE: Extracting: gtk3\n9614 blocks\nMESSAGE: Success\n\njulia> # or we can just install it directly\njulia> WinRPM.install(\"gtk3\")"
},

]}
