var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TerminalRegressionTests-Test-your-terminal-UIs-for-regressions-1",
    "page": "Readme",
    "title": "TerminalRegressionTests - Test your terminal UIs for regressions",
    "category": "section",
    "text": "(Image: Build Status)This package builds upon the VT100.jl package to provide automated testing of terminal based application. Both plain text and formatted output is supported. Each test consists ofThe system under test (specified as a callback)\nA file specifying the expected output\nA series of input promptsThe main interface is the automated_test function, which takes these three components as arguemnts. There is also the create_automated_test function, which has the same interface, but will create the output file rather than verifying against it. The operation of the test is fairly simple:An input is popped from the list of inputs\nThe input is provided to the system under test\nThe system under test is allowed to process the input until the system is done processing the input and has started blocking until new input is available\nThe output that the system writes is compared to the output file.\nRepeat"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Consider the following example:TerminalRegressionTests.automated_test(\n                joinpath(thisdir,\"TRT.multiout\"),\n                [\"Julia\\n\",\"Yes!!\\n\"]) do emuterm\n    print(emuterm, \"Please enter your name: \")\n    name = strip(readline(emuterm))\n    print(emuterm, \"\\nHello $name. Do you like tests? \")\n    resp = strip(readline(emuterm))\n    @assert resp == \"Yes!!\"\nendNote that the callback gets an emuterm as an argument. This is an emulated VT100 terminal and supports the usual operation. Note that this terminal is the view from the program under test (i.e. reads from this terminal will obtain the specified input data)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TerminalRegressionTests.EmulatedTerminalTerminalRegressionTests.TerminalRegressionTestsTerminalRegressionTests._compareTerminalRegressionTests.automated_testTerminalRegressionTests.compareTerminalRegressionTests.create_automated_testTerminalRegressionTests.evalTerminalRegressionTests.includeTerminalRegressionTests.load_outputsTerminalRegressionTests.process_all_buffered"
},

]}
