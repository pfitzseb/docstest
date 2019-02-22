var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimradRaw-1",
    "page": "Readme",
    "title": "SimradRaw",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Simrad echosounder RAW file format reader in Julia"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Simrad scientific echosounders such as EK60, EK80 and WBT save their data in datagram oriented, RAW format files as described in the reference manuals.This Julia library reads RAW format files, returning their contents as a series of Julia structs representing datagrams. It is intended to be used by higher level libraries such as https://github.com/EchoJulia/SimradEK60.jl, that interprete the data to provide matrices of volume backscatter etc."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "using SimradRaw\nusing SimradEK60TestData\nfilename = EK60_SAMPLE # or some other RAW file\ndatagrams = SimradRaw.load(filename)Also see the example scripts\\rawcat.jl, a command line program that dumps out RAW files in a somewhat readable format."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Simrad EK60 Context sensitive on-line help\nSimrad EK80 Wide band scientific echo sounder Reference Manual"
},

{
    "location": "autodocs/#SimradRaw.datagrams",
    "page": "Docstrings",
    "title": "SimradRaw.datagrams",
    "category": "function",
    "text": "datagrams(filename, datagramreader=readdatagram)\n\ndatagrams returns an iterator over the datagrams in the RAW file designated by filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradRaw.filetime",
    "page": "Docstrings",
    "title": "SimradRaw.filetime",
    "category": "function",
    "text": "Returns the filetime being the number of 100 nanosecond intervals since January 1, 1601 of a given DateTime.\n\n\n\n\n\nfiletime(d::DatagramHeader)\n\nReturns the filetime being the number of 100 nanosecond intervals since January 1, 1601 of a given DatagramHeader.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimradRaw.BinaryDatagramSimradRaw.ConfigurationDatagramSimradRaw.ConfigurationHeaderSimradRaw.ConfigurationTransducerSimradRaw.DatagramSimradRaw.DatagramHeaderSimradRaw.DateTimeSimradRaw.MRUDatagramSimradRaw.SampleDatagram0SimradRaw.SampleDatagram3SimradRaw.SimradRawSimradRaw.TextDatagramSimradRaw.XMLDatagramSimradRaw.datagramsSimradRaw.evalSimradRaw.filetimeSimradRaw.includeSimradRaw.loadSimradRaw.readbinarydatagramSimradRaw.readbytesSimradRaw.readcharsSimradRaw.readconfigurationdatagramSimradRaw.readconfigurationheaderSimradRaw.readconfigurationtransducerSimradRaw.readdatagramSimradRaw.readdatagramblockSimradRaw.readdatagrambodySimradRaw.readdatagramheaderSimradRaw.readdatetimeSimradRaw.readdwordSimradRaw.readencapsulateddatagramSimradRaw.readfloatSimradRaw.readfloatsSimradRaw.readint8sSimradRaw.readlongSimradRaw.readmrudatagramSimradRaw.readsamplebinarydatagram0SimradRaw.readsamplebinarydatagram3SimradRaw.readshortSimradRaw.readshortsSimradRaw.readstringSimradRaw.readtextdatagramSimradRaw.readushortsSimradRaw.readxmldatagram"
},

]}
