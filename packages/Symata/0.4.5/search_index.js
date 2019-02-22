var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Symata.jl-1",
    "page": "Readme",
    "title": "Symata.jl",
    "category": "section",
    "text": "Symbolic mathematics languageLinux, OSX: (Image: Build Status) &nbsp; Windows: (Image: Build Status) &nbsp; &nbsp; &nbsp; (Image: Coverage Status) (Image: codecov.io)(Image: Symata) (Image: Symata)"
},

{
    "location": "#Symata-and-Julia-versions-1",
    "page": "Readme",
    "title": "Symata and Julia versions",
    "category": "section",
    "text": "The master branch, and tagged versions 0.4.0 and later, support only Julia v0.7 and greater.The last version to support Julia v0.6.3 is tagged v0.3.0. Three percent of the tests fail.For Julia v0.5, install branch jv0.5only."
},

{
    "location": "#Syntax-change-in-v0.4.0-1",
    "page": "Readme",
    "title": "Syntax change in v0.4.0",
    "category": "section",
    "text": "The syntax for PatternTest was changed in Symata v0.4.0. See \"./symatatest/patterntest.sj\" for information on the new syntax."
},

{
    "location": "#Examples-and-help-1",
    "page": "Readme",
    "title": "Examples and help",
    "category": "section",
    "text": "Static snapshots of Symata tutorial notebooks  at nbviewer.jupyter.org. These are the same notebooks found in the TutorialNotebooks directory  in this repositoy. But the rendering at nbviewer is better.\nSymata-language test directory (note this is symata_test, not test)\nSymata functions written in Symata.\nWhen running Symata\nTAB completion\n? Topic (with completion)\nh\"word\" regular expression search\nHelp() and Help(topic)\nNumericalMethodsforEngineers.jl uses  Symata. Example code is found in\nexamples/ch04/\nEx.7.13.function.jl\nSeveral files in the test directory   \nIf you have a question or a request, or want to contribute,  please open an issue here on github."
},

{
    "location": "#Symata-is-1",
    "page": "Readme",
    "title": "Symata is",
    "category": "section",
    "text": "a language for symbolic computations and mathematics, where, forthe most part, \"mathematics\" means what it typically does for a scientist or engineer.a language based mostly on expressions, on \"evaluating\" andrewriting them, like Wolfram, Maple, or Maxima. It is neither a language, nor an extension of a language, that is mostly procedural, or designed around data types and functions, or a hierarchy of classes, etc., like C or Python or Java. Nor is it language like Sage; that is, one meant to provide a unifying interface to a number of mathematics languages with various programming models.meant to be useful to people who do not like to program computers, aswell as those who do. The former includes people who prefer not to think about classes, methods, objects, dispatch, stack traces, etc.Symata is largely modeled on the pattern matching and evaluation sequence of Mathematica. Evaluation, pattern matching, flow control, etc. are written in Julia. Much of the mathematics and symbolic manipulation is achieved by wrapping SymPy. There are more than 600 functions implemented, including integration, transformation of special functions, expression manipulation, writing and reading expressions to and from a file etc."
},

{
    "location": "#Mathematica-syntax.-1",
    "page": "Readme",
    "title": "Mathematica syntax.",
    "category": "section",
    "text": "You can use Symata with Mathematica syntax in addition to the usual Julia-like syntax. To use Mathematica syntax, install the SymataSyntax.jl package."
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "Symata is a registered module. It can be installed like this(v0.7) pkg> add Symata\njulia> using Symata\nsymata> Help()    # type \'=\' alone on a line to enter symata modeSymata can be installed on Linux, OSX, and Windows.Symata depends on the PyCall package and the python SymPy module. You can install SymPy via pip install sympy. Symata is compatible with SymPy v1.0 and v1.2 (and probably v1.1).Alternatively, you may install SymPy via Conda.jl. When you load Symata with using Symata, sympy is installed automatically via PyCall, which uses Conda. However, to do this, PyCall must be configured to not use you system version of python. If you do not have PyCall installed, do thisjulia> ENV[\"PYTHON\"]=\"\"\njulia> Pkg.add(\"PyCall\")If you do have PyCall installed, but it is configured to use your system python, reconfigure it like this.julia> ENV[\"PYTHON\"]=\"\"\njulia> Pkg.build(\"PyCall\")If you use linux, you may have your distribution\'s sympy package installed and it may be out of date. In this case, try the procedure above, and/or try removing your distribution\'s sympy package."
},

{
    "location": "#note-1",
    "page": "Readme",
    "title": "note",
    "category": "section",
    "text": "SymPy, or sympy, here refers to the python SymPy distribution (sometimes called sympy), not the Julia package SymPy. Symata does not require the Julia package SymPy.jl, which has a different goal.Symata requires mpmath package for python. This should be automatically installed when installing sympy via PyCall as described above. This also works on OSX. However, if you use pip, you should just be able to run pip install mpmath."
},

{
    "location": "#Running-Symata-1",
    "page": "Readme",
    "title": "Running Symata",
    "category": "section",
    "text": "Three environments for running Symata are supported: the Julia REPL, Jupyter, and a dumb terminal."
},

{
    "location": "#Symata-REPL-mode-1",
    "page": "Readme",
    "title": "Symata REPL mode",
    "category": "section",
    "text": "A Symata mode is added to the Julia REPL. Enter the mode by typing = as the first character. Exit the mode by typing backspace as the first character.julia> using Symata\n\nsymata 1>     # after entering `=`There is an executable symata included in top level directory of this distribution. It is a (UNIX sh) shell script that just starts julia, loads the module, and enters Symata mode. Switch between Julia and Symata modes by typing =, or backspace, as the first character on a line. You can do tab completion to see a list of functions and symbols."
},

{
    "location": "#Jupyter-/-IJulia-1",
    "page": "Readme",
    "title": "Jupyter / IJulia",
    "category": "section",
    "text": "In [1]:  using Symata\n\nIn [2]:  Expand((a+b)^2)\n\nOut[2]:  a^2 + 2a*b + b^2\n\nIn [3]:  Julia()   # return to Julia modeIn Jupyter, the Symata expressions In(n) and Out(n) reevaluate the input and output cells. TAB completion works in Jupyter. To see a list of all possible completions, type *[TAB]."
},

{
    "location": "#Dumb-terminal-1",
    "page": "Readme",
    "title": "Dumb terminal",
    "category": "section",
    "text": "If you do using Symata in a dumb terminal, the Symata prompt should appear automatically."
},

{
    "location": "#sympy-shell-1",
    "page": "Readme",
    "title": "sympy shell",
    "category": "section",
    "text": "From the julia prompt, type isympy() to enter the sympy shell."
},

{
    "location": "#Tests-1",
    "page": "Readme",
    "title": "Tests",
    "category": "section",
    "text": "Run the test suite from the symata prompt with Tests(). This runs tests in the symata_test directory Pkg.test(\"Symata\") runs the same test suite from Julia and some Julia-level unit tests, as well.<!–  LocalWords:  Mathematica SymPy julia symata PyCall Mma src REPL  –> <!–  LocalWords:  EvenQ countprimes PrimeQ HoldXXX Maxima eval regex  –> <!–  LocalWords:  Mathics Symata\'s backend ExpandA BigInt ClearAll  –> <!–  LocalWords:  tryrule downvalue upvalue BuiltIns BuiltIn SymName  –> <!–  LocalWords:  Symname addone lexically FloatingPoint cossinrule  –> <!–  LocalWords:  TrigSimp Upvalues Symata symata_test docstring builtin  –> <!–  LocalWords:  oo conds th HistoryLength BigIntInput RuleDelayed  –> <!–  LocalWords:  UpSetDelayed SetDelayed UpSet frontend FresnelC jl  –> <!–  LocalWords:  OSX nbsp codecov io jv PatternTest nbviewer github  –> <!–  LocalWords:  symsrc SymataSyntax IJulia sympy Conda ENV linux  –> <!–  LocalWords:  mpmath Jupyter isympy  –>"
},

]}
