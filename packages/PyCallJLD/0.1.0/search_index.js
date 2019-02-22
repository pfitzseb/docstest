var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PyCallJLD.jl-1",
    "page": "Readme",
    "title": "PyCallJLD.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)PyCallJLD enables saving and loading PyCall\'s PyObjects using JLD.jl. Example:using PyCall, JLD, PyCallJLD\n\n@pyimport sklearn.linear_model as lm\n\n# Create some Python objects\nm1 = lm.LinearRegression()\nm2 = lm.ARDRegression()\n\n# Save them to models.jld\nJLD.save(\"models.jld\", \"mods\", [m1, m2])\n\n# Load them back\nmodels = JLD.load(\"models.jld\", \"mods\")The objects are serialized using cPickle.dumpsSee PyCall\'s and JLD\'s documentation for details."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PyCallJLD.PyCallJLDPyCallJLD.PyObjectSerializationPyCallJLD.__init__PyCallJLD.dumpsPyCallJLD.evalPyCallJLD.includePyCallJLD.loads"
},

]}
