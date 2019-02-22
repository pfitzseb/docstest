var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Coverage Status)BDF.jl is a Julia module to read/write BIOSEMI 24-bit BDF files (used for storing electroencephalographic recordings)Usage:bdfHeader = readBDFHeader(\"res1.bdf\") #read the bdf header\nsampRate = bdfHeader[\"sampRate\"][1] #get the sampling rate\n#read the data, the event table, the trigger channel and the status channel\ndats, evtTab, trigs, statusChan = readBDF(\"res1.bdf\")Documentation is available here:http://samcarcagno.altervista.org/BDF/index.html"
},

{
    "location": "autodocs/#BDF.decodeStatusChannel",
    "page": "Docstrings",
    "title": "BDF.decodeStatusChannel",
    "category": "function",
    "text": "Decode the information stored in the status channel returned by readBDF.\n\ndecodeStatusChannel(statusChannel)\n\n\nArgs:\n\nstatusChannel: the status channel as returned by readBDF\n\nReturns:\n\ndecodedStatusChannel: dictionary with five fields\nnewEpoch: boolean array, true when a new epoch is started\nspeedMode: int8 array, the current speed mode\nCMSInRange: boolean array, true when CMS is in range\nbatteryLow : boolean array, true when battery is low\nisMK2: boolean array, true when system is MK2\n\nExamples:\n\ndats, evtTab, trigChan, statusChan = readBDF(\"res1.bdf\")\nstatusChanInfo = decodeStatusChannel(statusChanInfo)\nif length(findall(statusChanInfo[\"CMSInRange\"] .== false)) > 0\n   println(\"CMS was not in range during at least some portions of the recording\")\nelse\n   println(\"CMS was in range during the whole recording\")\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BDF.readBDF",
    "page": "Docstrings",
    "title": "BDF.readBDF",
    "category": "function",
    "text": "Read the data from a BDF file\n\nreadBDF(fName; from, to, channels, transposeData)\n\n\nArgs:\n\nfName: Name of the BDF file to read.\nfrom: Start time of data chunk to read (seconds).\nto: End time of data chunk to read (seconds).\nchannels: Channels to read (indices or channel names).\ntransposeData: If true, return transposed version of the dats array. Default is false.\n\nReturns:\n\ndats::Array{Float32, 2}: The matrix containing the data, this will be a nChannels X nDataPoints matrix if transposeData is false (default).                            If transposeData is true, however, it will be a nDataPoints X nChannels matrix.\neventTable: dictionary with three fields\ncode: trigger codes\nidx: trigger indexes\ndur: trigger durations\ntrigChannel: the raw trigger channel\nsyscodeChannel: the raw system codes channel\n\nExamples:\n\ndats, evtTab, trigChan, sysChan = readBDF(\"res1.bdf\")\ndats, evtTab, trigChan, sysChan = readBDF(\"res1.bdf\", channels=[1,3]) #read only channels 1 and 3\ndats, evtTab, trigChan, sysChan = readBDF(\"res1.bdf\", channels=[\"Fz\",\"RM\"]) #read only channels Fz and RM\ndats, evtTab, trigChan, sysChan = readBDF(\"res1.bdf\", transposeData=true) #return transposed data matrix (i.e. nDataPoints X nChannels)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BDF.readBDFHeader",
    "page": "Docstrings",
    "title": "BDF.readBDFHeader",
    "category": "function",
    "text": "Read the header of a BDF file\n\nreadBDFHeader(fName)\n\n\nArgs:\n\nfName: Name of the BDF file to read.\n\nReturns:\n\nbdfInfo::Dict{ASCIIString,Any}: dictionary with the following fields:\nidCode::ASCIIString: Identification code\nsubjID::ASCIIString`: Local subject identification\nrecID::ASCIIString: Local recording identification\nstartDate::ASCIIString: Recording start date\nstartTime::ASCIIString: Recording start time\nnBytes::Int: Number of bytes occupied by the BDF header\nversionDataFormat::ASCIIString: Version of data format\nnDataRecords::Int: Number of data records \"-1\" if unknown\nrecordDuration::FloatingPoint: Duration of a data record, in seconds\nnChannels::Int: Number of channels in data record\nchanLabels::Array{ASCIIString,1}: Channel labels\ntransducer::Array{ASCIIString,1}: Transducer type\nphysDim::ASCIIString: Physical dimension of channels\nphysMin::Array{Int64,1}: Physical minimum in units of physical dimension\nphysMax::Array{Int64,1}: Physical maximum in units of physical dimension\ndigMin::Array{Int64,1}: Digital minimum\ndigMax::Array{Int64,1}: Digital maximum\nprefilt::Array{ASCIIString,1}: Prefiltering\nnSampRec::Array{Int64,1}: Number of samples in each data record\nreserved::Array{ASCIIString,1}: Reserved\nscaleFactor::Array{Float32,1}: Scaling factor for digital to physical dimension\nsampRate::Array{Int64,1}: Recording sampling rate\n\nExamples\n\nbdfInfo = readBDFHeader(\"res1.bdf\")\nsampRate = bdfInfo[\"sampRate\"][1]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BDF.splitBDFAtTime",
    "page": "Docstrings",
    "title": "BDF.splitBDFAtTime",
    "category": "function",
    "text": "Split a BDF file at one or more time points into multiple files.\n\nsplitBDFAtTime(fName, timeSeconds; from, to)\n\n\nArgs:\n\nfName: Name of the BDF file to split.\ntimeSeconds: array listing the time(s) at which the BDF file should be split, in seconds. This can be either a single number or an array of time points.\nfrom: Start time of data chunk to read (seconds).\nto: End time of data chunk to read (seconds).\n\nExamples:\n\nsplitBDFAtTime(\"res1.bdf\", 50)\nsplitBDFAtTime(\"res2.bdf\", [50, 100, 150])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BDF.splitBDFAtTrigger",
    "page": "Docstrings",
    "title": "BDF.splitBDFAtTrigger",
    "category": "function",
    "text": "Split a BDF file at points marked by a trigger into multiple files.\n\nsplitBDFAtTrigger(fName, trigger; from, to, minTrigDur)\n\n\nArgs:\n\nfName: Name of the BDF file to split.\ntrigger: The trigger marking the split points.\nfrom: Start time of data chunk to read (seconds).\nto: End time of data chunk to read (seconds).\nminTrigDur: minimum duration of the trigger event, in seconds. Certain custom hardware configuration can generate spurious triggers that have a very short duration. The function will only split the file a triggers that last at least as long as minTrigDur, allowing to filter out spurious short triggers.\n\nExamples:\n\nsplitBDFAtTrigger(\"res1.bdf\", 202)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BDF.writeBDF",
    "page": "Docstrings",
    "title": "BDF.writeBDF",
    "category": "function",
    "text": "Write a BDF file\n\nwriteBDF(fName, data, trigChan, statusChan, sampRate; subjID, recID, startDate, startTime, versionDataFormat, chanLabels, transducer, physDim, physMin, physMax, prefilt, reserved)\n\n\nArgs:\n\nfName: Name of the BDF file to write.\ndata: The nChannelsXnDataPoints array to be written to the BDF file\ntrigChan: The triggers to be written to the BDF file (1XnDataPoints)\nstatusChan: The status channel codes to be written to the BDF file (1XnDataPoints)\nsampRate: The sampling rate of the recording\nsubjID: Subject identifier (80 characters max)\nrecID: Recording identifier (80 characters max)\nstartDate: Start date in \"dd.mm.yy\" format\nstartTime: Start time in \"hh.mm.ss\" format\nversionDataFormat: Version of data format\nchanLabels: Array of channel labels (1 for each channel)\ntransducer: Array of transducer type (1 for each channel)\nphysDim: Array of physical dimension of channels (1 for each channel)\nphysMin: Array of physical minimum in units of physical dimension (1 for each channel)\nphysMax: Array of physical maximum in units of physical dimension (1 for each channel)\nprefilt: Array of prefilter settings (1 for each channel)\nreserved: Array of \"reserved\" field (1 for each data channel + 1 for the status channel)\n\nNotes:\n\nOnly the first five arguments are required. The other arguments are optional and the corresponding BDF fields will be left empty or filled with defaults arguments.\n\nData records are written in 1-second units. If the number of data points passed to writeBDF is not an integer multiple of the sampling rate the data array, as well as the trigger and status channel arrays will be padded with zeros to fill the last data record before it is written to disk.\n\nExamples:\n\nsampRate = 2048\ndats = rand(2, sampRate*10)\ntrigs = rand(1:255, sampRate*10)\nstatChan = rand(1:255, sampRate*10)\nwriteBDF(\"bdfRec.bdf\", dats, trigs, statChan, sampRate)\n\n#add date and time info\nwriteBDF(\"bdfRec.bdf\", dats, trigs, statChan, sampRate, startDate=\"23.06.14\",\nstartTime=\"10.18.19\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BDF.BDFBDF.decodeStatusChannelBDF.evalBDF.includeBDF.readBDFBDF.readBDFHeaderBDF.splitBDFAtTimeBDF.splitBDFAtTriggerBDF.writeBDF"
},

]}
