var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EchoviewEcs.jl-1",
    "page": "Readme",
    "title": "EchoviewEcs.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Julia package for reading Echoview calibration supplement (.ECS) files. Scientific echosounder data requires calibration correction, and ECS is a popular storage file format for the correction parameters.using EchoviewEcs\ncalibrations = load(filename)calibrations is a Vector of Dict where Dict contains keys and values being configuration parameters. SourceCal settings inherit from FileSet settings but override such settings if specified explicitly."
},

{
    "location": "autodocs/#EchoviewEcs.FLOAT_LABELS",
    "page": "Docstrings",
    "title": "EchoviewEcs.FLOAT_LABELS",
    "category": "constant",
    "text": "FLOAT_LABELS\n\nList of known calibration fields that contain floating point values. Labels NOT in this list are assumed to be Strings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EchoviewEcs.load",
    "page": "Docstrings",
    "title": "EchoviewEcs.load",
    "category": "function",
    "text": "load(filename::AbstractString)\n\nLoads an Echoview calibration supplement file, returning a Vector of Dict. Each Dict represents a transducer calibration with keys and values containing the various calibration settings.\n\nSee Echoview calibration supplement files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EchoviewEcs.EchoviewEcsEchoviewEcs.FLOAT_LABELSEchoviewEcs.MYFLOATEchoviewEcs.evalEchoviewEcs.includeEchoviewEcs.load"
},

]}
