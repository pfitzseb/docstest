var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TwentyFour-1",
    "page": "Readme",
    "title": "TwentyFour",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Twenty Four is a number game. The player is presented with a card containing four numbers. The object is to use those four numbers to make the value 24 using the four standard arithmetic operations (plus, minus, times, divide). This Julia module provide solves these puzzles."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Use the solve function to find solutions to Twenty Four puzzles. Simply provide two or more values (either integers or rationals).julia> solve(3,4,5,8)\n\"(4*8)-(3+5)\"\n\njulia> solve(5,5,5,1)\n\"5*(5-(1/5))\"\n\njulia> solve(5,5,5,2)\n\"No solution\"\n\njulia> solve(1//2, 1//3, 7, 3)\n\"(7-3)/(1/2-1/3)\""
},

{
    "location": "#To-do-list-1",
    "page": "Readme",
    "title": "To do list",
    "category": "section",
    "text": "Permit alternative goals besides 24.\nOur code might give a solution in which some of the intermediatevalues are negative. One can prove this can always be avoided (assuming the given numbers are all positive). Modify the code so all intermediate values are nonnegative."
},

{
    "location": "autodocs/#TwentyFour.DEFAULT_GOAL",
    "page": "Docstrings",
    "title": "TwentyFour.DEFAULT_GOAL",
    "category": "constant",
    "text": "The default goal of a Twenty Four problem is 24.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TwentyFour.XXIV",
    "page": "Docstrings",
    "title": "TwentyFour.XXIV",
    "category": "type",
    "text": "XXIV is an instance of a Twenty Four problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TwentyFour.get_goal",
    "page": "Docstrings",
    "title": "TwentyFour.get_goal",
    "category": "function",
    "text": "get_goal(X::XXIV) returns the targe goal of this instance of a Twenty Four problem. This is typically 24.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TwentyFour.set_goal",
    "page": "Docstrings",
    "title": "TwentyFour.set_goal",
    "category": "function",
    "text": "set_goal(X::XXIV, g) sets the goal of this Twenty Four problem to g. Default g is 24.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TwentyFour.solve",
    "page": "Docstrings",
    "title": "TwentyFour.solve",
    "category": "function",
    "text": "solve(nums...) solves a Twenty-Four puzzle for the given numbers. Returns a String giving the solution. Example:\n\njulia> solve(4,2,5,1)\n\"(4+2)*(5-1)\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TwentyFour.str",
    "page": "Docstrings",
    "title": "TwentyFour.str",
    "category": "function",
    "text": "str(x::Rational{Int}) returns a nice string form of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TwentyFour.DEFAULT_GOALTwentyFour.OPSTwentyFour.OP_SYMSTwentyFour.TwentyFourTwentyFour.XXIVTwentyFour.evalTwentyFour.get_goalTwentyFour.includeTwentyFour.set_goalTwentyFour.solveTwentyFour.solverTwentyFour.str"
},

]}
