var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimradEK60.jl-1",
    "page": "Readme",
    "title": "SimradEK60.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Based on SimradRaw.jl, this project reads and intepretes Simrad EK60 RAW files, extracting power and phase angle information and allowing calculation of volume backscatter, Sv."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using SimradEK60\nusing SimradEK60TestData\nfilename = EK60_SAMPLE\nps = SimradEK60.load(filename)\nps38 = [p for p in ps if p.frequency == 38000]\nSv38 = Sv(ps38) # Volume backscatter\nal38 = alongshipangle(ps38) # Split beam angle\nat38 = athwartshipangle(ps38)\n_R = R(ps38) # Range / depth\n_t = filetime(ps38) # timestamps"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Simrad EK60 Context sensitive on-line help\nMacLennan, David, and E. John Simmonds. Fisheries acoustics. Vol. 5. Springer Science & Business Media, 2013.\nEchoview documentation, http://bit.ly/2o1oOrq  http://bit.ly/2pqzS2D"
},

{
    "location": "autodocs/#SimradEK60.R",
    "page": "Docstrings",
    "title": "SimradEK60.R",
    "category": "function",
    "text": "R(r, s, T)\n\nTVG range correction for Ex60\n\nR is the corrected range (m)\n\nr the uncorrected range (m)\n\ns is the TvgRangeCorrectionOffset value, See Echoview documentation, Simrad Time Varied Gain (TVG) range correction, http://bit.ly/2pqzS2D\n\nT is the sample thickness (m)\n\n\n\n\n\nR(ping::EK60Ping; soundvelocity = nothing, rangecorrectionoffset=2)\n\nReturns the corrected range (depth) of samples in ping.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.Sv",
    "page": "Docstrings",
    "title": "SimradEK60.Sv",
    "category": "function",
    "text": "Sv(Pr, λ, G, Ψ, c, α, Pt, τ, Sa, R)\n\nwhere:\n\nR = the corrected range (m) - see TVG Range Correction\n\nPr = received power (dB re 1 W) - see Simrad EK numbers to Power\n\nPt = transmitted power (W)\n\nα = absorption coefficient (dB/m)\n\nG0 = transducer peak gain (non-dimensional) calculated as 10^(G/10)\n\nG is the Transducer gain (dB re 1)\n\nλ = wavelength (m) = c/f\n\nf = frequency (Hz)\n\nc = sound speed (m/s)\n\nτ = transmit pulse duration (s) - also known as the TransmittedPulseLength\n\nψ = Equivalent Two-way beam angle (Steradians) calculated as 10^(Ψ/10)\n\nΨ is the Two-way beam angle (dB re 1 Steradian)\n\nSa = Simrad correction factor (dB re 1m−1) determined during calibration. This represents the correction required to the Sv constant to harmonize the TS and NASC measurements.\n\n\n\n\n\nSv(ping::EK60Ping;\n        frequency=nothing,\n        gain=nothing,\n        equivalentbeamangle=nothing,\n        soundvelocity=nothing,\n        absorptioncoefficient=nothing,\n        transmitpower=nothing,\n        pulselength=nothing,\n        sacorrection=nothing,\n        rangecorrectionoffset=2)\n\nReturns a Vector of Sv, the (Mean) Volume backscattering strength (MVBS) in (dB re 1 m-1) for a given ping.\n\nThe function accepts a number of optional arguments which, if specified, override the ping\'s own settings. This facilitates external calibration.\n\n\n\n\n\nSv(pings::Vector{EK60Ping};\n    frequency=nothing,\n    gain=nothing,\n    equivalentbeamangle=nothing,\n    soundvelocity=nothing,\n    absorptioncoefficient=nothing,\n    transmitpower=nothing,\n    pulselength=nothing,\n    sacorrection=nothing,\n    rangecorrectionoffset=2)\n\nReturns an Array of Sv, the Volume backscattering strength in (dB re 1 m-1) for a set of contiguous pings.\n\nThe function accepts a number of optional arguments which, if specified, override the pings\' own settings. This facilitates external calibration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.TS",
    "page": "Docstrings",
    "title": "SimradEK60.TS",
    "category": "function",
    "text": " TS(Pr, λ, G, α, Pt, R)\n\nTarget strength\n\nPr = received power (dB re 1 W) - see Simrad EK numbers to Power\n\nG is the Transducer gain (dB re 1)\n\nα = absorption coefficient (dB/m)\n\nPt = transmitted power (W)\n\nR = the corrected range (m) - see TVG Range Correction\n\n\n\n\n\nTS(ping::EK60Ping;\n        frequency=nothing,\n        gain=nothing,\n        soundvelocity=nothing,\n        absorptioncoefficient=nothing,\n        transmitpower=nothing,\n        rangecorrectionoffset=0)\n\nTarget strength\n\n\n\n\n\nTS(pings::Vector{EK60Ping};\n        frequency=nothing,\n        gain=nothing,\n        soundvelocity=nothing,\n        absorptioncoefficient=nothing,\n        transmitpower=nothing,\n        rangecorrectionoffset=0)\n\nTarget strength\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.alongshipangle",
    "page": "Docstrings",
    "title": "SimradEK60.alongshipangle",
    "category": "function",
    "text": "alongshipangle(ping::EK60Ping)\n\nReturns the alongship phase angle difference vector for the given ping.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.athwartshipangle",
    "page": "Docstrings",
    "title": "SimradEK60.athwartshipangle",
    "category": "function",
    "text": "athwartshipangle(ping::EK60Ping)\n\nReturns the athwartship phase angle difference vector for the given ping.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.filetime",
    "page": "Docstrings",
    "title": "SimradEK60.filetime",
    "category": "function",
    "text": "filetime(ping::EK60Ping)\n\nReturns the FILETIME timestamp for a ping\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.octet2deg",
    "page": "Docstrings",
    "title": "SimradEK60.octet2deg",
    "category": "function",
    "text": "octet2deg(x)\n\nEK60 split beam angles are stored as signed octets with a resolution of 180/128.  Convert from octet to degrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.pings",
    "page": "Docstrings",
    "title": "SimradEK60.pings",
    "category": "function",
    "text": "pings(datagrams::Channel{SimradRaw.Datagram})\n\nReturns a Channel of Pings from a Channel of Datagrams.\n\n\n\n\n\npings(filename::AbstractString)\n\nReturns a Channel over Pings from the RAW file designated by filename.\n\n\n\n\n\npings(filenames::Vector{AbstractString}})\n\nReturns a Channel of Pings from the RAW files designated by filenames.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.power",
    "page": "Docstrings",
    "title": "SimradEK60.power",
    "category": "function",
    "text": "power(ping::EK60Ping)\n\nReturns power data for a ping in manufacturer units. For decibels, see powerdb.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.power2db",
    "page": "Docstrings",
    "title": "SimradEK60.power2db",
    "category": "function",
    "text": "power2db(x)\n\nEK60 power data is stored in a \"compressed\", manufacturer specific format. This function converts to decibels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimradEK60.powerdb",
    "page": "Docstrings",
    "title": "SimradEK60.powerdb",
    "category": "function",
    "text": "powerdb(x)\n\nReturns power data in decibels. x is one or more Pings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimradEK60.EK60PingSimradEK60.FLOAT_TYPESimradEK60.POWER_MULTIPLIERSimradEK60.RSimradEK60.SimradEK60SimradEK60.SvSimradEK60.TSSimradEK60.alongshipangleSimradEK60.alongshipanglematrixSimradEK60.athwartshipangleSimradEK60.athwartshipanglematrixSimradEK60.evalSimradEK60.filetimeSimradEK60.includeSimradEK60.loadSimradEK60.myhcatSimradEK60.octet2degSimradEK60.pingsSimradEK60.powerSimradEK60.power2dbSimradEK60.powerdb"
},

]}
