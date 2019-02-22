var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VT100-A-pure-julia-terminal-emulator-1",
    "page": "Readme",
    "title": "VT100 - A pure julia terminal emulator",
    "category": "section",
    "text": "(Image: Build Status)VT100.jl attempts to implement a small and hackable terminal emulator, mostly intended for automatic verification of Terminal based UIs. The current implementation is very simple and ignores most of the more complicated ascepts of terminal emulation, including colors, attributes and Unicode combining characters, but is nevertheless useful for UI validation in regression tests. Support for those features will be added as the need arises"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "# Create an Emulator\nem = VT100.Emulator()\n# Feed the emulator some io\nVT100.parse!(em, IOBuffer(\"\\e[37mHello World\\n\"))\n# Create an actual fake terminal\npty = VT100.create_pty()\n# [Should pass pty.slave to C library, e.g. ncurses here]\n# Now obtain a debug dump of the screen state\nbuf = IOBuffer()\nVT100.dump(buf,devnull,em)\n# buf now contains the screen contents of the emulatorFor more examples, see the test directory."
},

{
    "location": "#Usage-for-terminal-regression-tests-1",
    "page": "Readme",
    "title": "Usage for terminal regression tests",
    "category": "section",
    "text": "VT100 ships with the test/TerminalRegressionTests.jl collection of utilities to simplify writing regression tests for terminal applications. The API for this is currently in flux, but you may find it useful."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VT100.AttributesVT100.CellVT100.CursorVT100.EmulatorVT100.ExtendedContentsVT100.FlagsVT100.LineVT100.LineDrawingVT100.LineEmulatorVT100.O_NOCTTYVT100.O_RDWRVT100.PTYVT100.RGB8VT100.ScreenEmulatorVT100.SizeVT100.StateVT100.VT100VT100.add_line!VT100.charVT100.cmoveVT100.cmove_colVT100.cmove_downVT100.cmove_upVT100.colorVT100.color_for_intVT100.colorlistVT100.create_cellVT100.create_ptyVT100.cur_cellVT100.decbufVT100.decode_colorVT100.default_decoratorsVT100.dumpVT100.erase_bosVT100.erase_eolVT100.erase_lineVT100.erase_nVT100.erase_screenVT100.erase_solVT100.erase_tosVT100.evalVT100.fill_linesVT100.fill_space!VT100.get_image_cellVT100.includeVT100.insert_cell!VT100.insert_line!VT100.parse!VT100.parseSGR!VT100.parse_cell!VT100.parseall!VT100.pos_for_image_cellVT100.readdecVT100.renderVT100.set_cur_cell"
},

]}
