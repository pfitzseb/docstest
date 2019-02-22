var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#REPLTetris.jl-1",
    "page": "Readme",
    "title": "REPLTetris.jl",
    "category": "section",
    "text": "This started as an exercise to learn terminal rendering and key-input. Tile-colors, scoring, button-mapping, speed and levels are in accordance to the [Tetris Guideline][1]. T-spins and wall kicks are not yet available, but will be added soon.This is a screenshot playing in the VSCode REPL:(Image: Julia REPL Screenshot of a lost game of REPLTetris)"
},

{
    "location": "#Installation-and-Usage-1",
    "page": "Readme",
    "title": "Installation & Usage",
    "category": "section",
    "text": "The package is registered in Meta-Data. Simply install it using Pkg.add:julia> Pkg.add(\"REPLTetris\")After using the Package, you can start a game with tetris():julia> using REPLTetris\njulia> tetris()The game is controlled via arrow-keys, X, Z and space:Up: Rotate Clockwise\nLeft / Right / Down: Move Current Tile\nSpace: Drop Current Tile to Bottom\nX: Rotate Clockwise\nZ: Rotate Counter Clockwise\nC: Swap current tile with tile on hold\nCTRL-C: Abort Game[1]: http://tetris.wikia.com/wiki/Tetris_Guideline"
},

]}
