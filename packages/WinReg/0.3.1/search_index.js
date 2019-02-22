var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WinReg.jl-1",
    "page": "Readme",
    "title": "WinReg.jl",
    "category": "section",
    "text": "(Image: Build status)Julia interface to the Windows registry."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "At the moment, this just exports one function, querykey, which queries the Windows registry.querykey(base, path, valuename)wherebase is one of the base paths:\nWinReg.HKEY_CLASSES_ROOT\nWinReg.HKEY_CURRENT_USER\nWinReg.HKEY_LOCAL_MACHINE\nWinReg.HKEY_USERS\nWinReg.HKEY_PERFORMANCE_DATA\nWinReg.HKEY_CURRENT_CONFIG\nWinReg.HKEY_DYN_DATA\npath is the the path from base to the desired key\nvaluename is the name of the value to retrieve"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using WinReg\n\nquerykey(WinReg.HKEY_LOCAL_MACHINE,\"System\\\\CurrentControlSet\\\\Control\\\\Session Manager\\\\Environment\",\"PROCESSOR_ARCHITECTURE\")"
},

{
    "location": "#Suggested-use-as-a-package-dependency-1",
    "page": "Readme",
    "title": "Suggested use as a package dependency",
    "category": "section",
    "text": "If WinReg is to be used as part of another package which supports multiple operating systems, I suggest the following approach:"
},

{
    "location": "#.-Add-the-following-line-to-the-REQUIRE-file:-1",
    "page": "Readme",
    "title": "1. Add the following line to the REQUIRE file:",
    "category": "section",
    "text": "@windows WinReg 0.3"
},

{
    "location": "#.-In-the-package-code:-1",
    "page": "Readme",
    "title": "2. In the package code:",
    "category": "section",
    "text": "@static if is_windows()\n    using WinReg # or import WinReg\n\n    # code calling WinReg functionality goes here\nend"
},

{
    "location": "#Requests-1",
    "page": "Readme",
    "title": "Requests",
    "category": "section",
    "text": "If further functionality is required, please open an issue."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WinReg.HKEY_CLASSES_ROOTWinReg.HKEY_CURRENT_CONFIGWinReg.HKEY_CURRENT_USERWinReg.HKEY_DYN_DATAWinReg.HKEY_LOCAL_MACHINEWinReg.HKEY_PERFORMANCE_DATAWinReg.HKEY_USERSWinReg.KEY_ALL_ACCESSWinReg.KEY_CREATE_LINKWinReg.KEY_CREATE_SUB_KEYWinReg.KEY_ENUMERATE_SUB_KEYSWinReg.KEY_EXECUTEWinReg.KEY_NOTIFYWinReg.KEY_QUERY_VALUEWinReg.KEY_READWinReg.KEY_SET_VALUEWinReg.KEY_WOW64_32KEYWinReg.KEY_WOW64_64KEYWinReg.KEY_WRITEWinReg.REG_BINARYWinReg.REG_DWORDWinReg.REG_DWORD_BIG_ENDIANWinReg.REG_DWORD_LITTLE_ENDIANWinReg.REG_EXPAND_SZWinReg.REG_FULL_RESOURCE_DESCRIPTORWinReg.REG_LINKWinReg.REG_MULTI_SZWinReg.REG_NONEWinReg.REG_QWORDWinReg.REG_QWORD_LITTLE_ENDIANWinReg.REG_RESOURCE_LISTWinReg.REG_RESOURCE_REQUIREMENTS_LISTWinReg.REG_SZWinReg.WinRegWinReg.closekeyWinReg.evalWinReg.includeWinReg.openkeyWinReg.querykey"
},

]}
