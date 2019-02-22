var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Support-for-reading-and-writing-MATLAB-files-in-Julia.-1",
    "page": "Readme",
    "title": "Support for reading and writing MATLAB files in Julia.",
    "category": "section",
    "text": "(Image: Build Status)This library can read MATLAB .mat files, both in the older v5/v6/v7 format, as well as the newer v7.3 format."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, use the package manager:Pkg.add(\"MAT\")See also the requirements for the HDF5 module, used for \"v7.3\" files and for writing *.mat files."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To load the module:using MATTo read a single variable from a MAT file:file = matopen(\"matfile.mat\")\nread(file, \"varname\") # note that this does NOT introduce a variable ``varname`` into scope\nclose(file)To write a variable to a MAT file:file = matopen(\"matfile.mat\", \"w\")\nwrite(file, \"varname\", variable)\nclose(file)To read all variables from a MAT file as a Dict:vars = matread(\"matfile.mat\")To write a Dict to a MAT file, using its keys as variable names:matwrite(\"matfile.mat\", Dict(\n	\"myvar1\" => 0,\n	\"myvar2\" => 1\n))To get a list of variable names in a MAT file:file = matopen(\"matfile.mat\")\nvarnames = names(file)\nclose(file)To check for the presence of a variable name in a MAT file:file = matopen(\"matfile.mat\")\nif exists(file, \"variable\")\n    # something\nend\nclose(file)"
},

{
    "location": "#Caveats-1",
    "page": "Readme",
    "title": "Caveats",
    "category": "section",
    "text": "All files are written in MATLAB v7.3 format.\nMATLAB v4 files are not currently supported."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "The MATHDF5 module, which provides read/write support for MATLAB v7.3 files, was written primarily by Tim Holy. The MATv5 module, which provides read support for MATLAB v5/v6/v7 files, was written primarily by Simon Kornblith."
},

{
    "location": "autodocs/#HDF5.exists",
    "page": "Docstrings",
    "title": "HDF5.exists",
    "category": "function",
    "text": "exists(matfile_handle, varname) -> Bool\n\nReturn true if a variable is present in an opened Matlab file.\n\nSee matopen.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MAT.matopen",
    "page": "Docstrings",
    "title": "MAT.matopen",
    "category": "function",
    "text": "matopen(filename [, mode]) -> handle\nmatopen(f::Function, filename [, mode]) -> f(handle)\n\nMode defaults to \"r\" for read.  It can also be \"w\" for write, or \"r+\" for read or write without creation or truncation.\n\nUse with read, write, close, names, and exists.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MAT.matread",
    "page": "Docstrings",
    "title": "MAT.matread",
    "category": "function",
    "text": "matread(filename) -> Dict\n\nReturn a dictionary of all the variables and values in a Matlab file, opening and closing it automatically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MAT.matwrite",
    "page": "Docstrings",
    "title": "MAT.matwrite",
    "category": "function",
    "text": "matwrite(filename, d::Dict)\n\nWrite a dictionary containing variable names as keys and values as values to a Matlab file, opening and closing it automatically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.names",
    "page": "Docstrings",
    "title": "Base.names",
    "category": "function",
    "text": "names(matfile_handle) -> Vector{String}\n\nReturn a list of variables in an opened Matlab file.\n\nSee matopen.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MAT.@readMAT.@writeMAT.HDF5_HEADERMAT.MATMAT.MAT_HDF5MAT.MAT_v5MAT.evalMAT.existsMAT.includeMAT.matopenMAT.matreadMAT.matwriteMAT.names"
},

]}
