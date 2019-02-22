var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TerminalMenus-1",
    "page": "Readme",
    "title": "TerminalMenus",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: Demo)TerminalMenus.jl enables small, low-profile interactive menus in the terminal."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "TerminalMenus requires Julia 0.6. Use Pkg to install:Pkg.add(\"TerminalMenus\")"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "using TerminalMenus\n\noptions = [\"apple\", \"orange\", \"grape\", \"strawberry\",\n            \"blueberry\", \"peach\", \"lemon\", \"lime\"]\n"
},

{
    "location": "#RadioMenu-1",
    "page": "Readme",
    "title": "RadioMenu",
    "category": "section",
    "text": "The RadioMenu allows the user to select one option from the list. The request function displays the interactive menu and returns the index of the selected choice. If a user presses \'q\' or ctrl-c, request will return a -1.# `pagesize` is the number of items to be displayed at a time.\n#  The UI will scroll if the number of options is greater\n#   than the `pagesize`\nmenu = RadioMenu(options, pagesize=4)\n\n# `request` displays the menu and returns the index after the\n#   user has selected a choice\nchoice = request(\"Choose your favorite fruit:\", menu)\n\nif choice != -1\n    println(\"Your favorite fruit is \", options[choice], \"!\")\nelse\n    println(\"Menu canceled.\")\nend\nOutput:Choose your favorite fruit:\n^  grape\n   strawberry\n > blueberry\nv  peach\nYour favorite fruit is blueberry!"
},

{
    "location": "#MultiSelectMenu-1",
    "page": "Readme",
    "title": "MultiSelectMenu",
    "category": "section",
    "text": "The MultiSelectMenu allows users to select many choices from a list.# here we use the default `pagesize` 10\nmenu = MultiSelectMenu(options)\n\n# `request` returns a `Set` of selected indices\n# if the menu us canceled (ctrl-c or q), return an empty set\nchoices = request(\"Select the fruits you like:\", menu)\n\nif length(choices) > 0\n    println(\"You like the following fruits:\")\n    for i in choices\n        println(\"  - \", options[i])\n    end\nelse\n    println(\"Menu canceled.\")\nendOutput:Select the fruits you like:\n[press: d=done, a=all, n=none]\n   [ ] apple\n > [X] orange\n   [X] grape\n   [ ] strawberry\n   [ ] blueberry\n   [X] peach\n   [ ] lemon\n   [ ] lime\nYou like the following fruits:\n  - orange\n  - grape\n  - peach"
},

{
    "location": "#Customization-/-Configuation-1",
    "page": "Readme",
    "title": "Customization / Configuation",
    "category": "section",
    "text": "All interface customization is done through the keyword only TerminalMenus.config() function."
},

{
    "location": "#Arguments-1",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "charset::Symbol=:na: ui characters to use (:ascii or :unicode); overridden by other arguments\ncursor::Char=\'>\'|\'→\': character to use for cursor\nup_arrow::Char=\'^\'|\'↑\': character to use for up arrow\ndown_arrow::Char=\'v\'|\'↓\': character to use for down arrow\nchecked::String=\"[X]\"|\"✓\": string to use for checked\nunchecked::String=\"[ ]\"|\"⬚\"): string to use for unchecked\nscroll::Symbol=:na: If :wrap then wrap the cursor around top and bottom, if :nowrap do not wrap cursor\nsupress_output::Bool=false: For testing. If true, menu will not be printed to console.\nctrl_c_interrupt::Bool=true: If false, return empty on ^C, if true throw InterruptException() on ^C"
},

{
    "location": "#Examples-2",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> menu = MultiSelectMenu(options, pagesize=5);\n\njulia> request(menu) # ASCII is used by default\n[press: d=done, a=all, n=none]\n   [ ] apple\n   [X] orange\n   [ ] grape\n > [X] strawberry\nv  [ ] blueberry\nSet([4, 2])\n\njulia> TerminalMenus.config(charset=:unicode)\n\njulia> request(menu)\n[press: d=done, a=all, n=none]\n   ⬚ apple\n   ✓ orange\n   ⬚ grape\n → ✓ strawberry\n↓  ⬚ blueberry\nSet([4, 2])\n\njulia> TerminalMenus.config(checked=\"YEP!\", unchecked=\"NOPE\", cursor=\'⧐\')\n\njulia> request(menu)\n[press: d=done, a=all, n=none]\n   NOPE apple\n   YEP! orange\n   NOPE grape\n ⧐ YEP! strawberry\n↓  NOPE blueberry\nSet([4, 2])\n"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "Nested menus\nMore customization?The interactive menu has been tested on Ubuntu 16.04 and windows 7, 8, & 10. If there are any issues on your platform, please submit an issue or a pull request."
},

{
    "location": "autodocs/#TerminalMenus.AbstractMenu",
    "page": "Docstrings",
    "title": "TerminalMenus.AbstractMenu",
    "category": "type",
    "text": "AbstractMenu\n\nThe supertype for all Menu types. See AbstractMenu.jl for descriptions of functions mentioned in this doc string.\n\nFunctions\n\nThe following functions can be called on all <:AbstractMenu types.\n\nExported\n\nrequest(m::AbstractMenu)\nrequest(msg::AbstractString, m::AbstractMenu)\n\nHidden\n\nprintMenu(m::AbstractMenu, cursor::Int; init::Bool=false)\n\nSubtypes\n\nAll subtypes must contain the feilds pagesize::Int and pageoffset::Int. They must also implement the following functions.\n\nNecessary Functions\n\nThese functions must be implemented for all subtypes of AbstractMenu.\n\npick(m::AbstractMenu, cursor::Int)\ncancel(m::AbstractMenu)\noptions(m::AbstractMenu)\nwriteLine(buf::IOBuffer, m::AbstractMenu, idx::Int, cur::Bool, term_width::Int)\n\nOptional Functions\n\nThese functions do not need to be implemented for all AbstractMenu subtypes.\n\nheader(m::AbstractMenu)\nkeypress(m::AbstractMenu, i::UInt32)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TerminalMenus.CONFIG",
    "page": "Docstrings",
    "title": "TerminalMenus.CONFIG",
    "category": "constant",
    "text": "global menu configuration parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TerminalMenus.MultiSelectMenu",
    "page": "Docstrings",
    "title": "TerminalMenus.MultiSelectMenu",
    "category": "type",
    "text": "MultiSelectMenu\n\nA menu that allows a user to select a multiple options from a list.\n\nSample Output\n\njulia> request(MultiSelectMenu(options))\nSelect the fruits you like:\n[press: d=done, a=all, n=none, <enter>=select]\n   [ ] apple\n > [X] orange\n   [X] grape\n   [ ] strawberry\n   [ ] blueberry\n   [X] peach\n   [ ] lemon\n   [ ] lime\nYou like the following fruits:\n  - orange\n  - grape\n  - peach\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TerminalMenus.RadioMenu",
    "page": "Docstrings",
    "title": "TerminalMenus.RadioMenu",
    "category": "type",
    "text": "RadioMenu\n\nA menu that allows a user to select a single option from a list.\n\nSample Output\n\njulia> request(RadioMenu(options, pagesize=4))\nChoose your favorite fruit:\n^  grape\n   strawberry\n > blueberry\nv  peach\nYour favorite fruit is blueberry!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TerminalMenus.config",
    "page": "Docstrings",
    "title": "TerminalMenus.config",
    "category": "function",
    "text": "config( <see arguments> )\n\nKeyword-only function to configure global menu parameters\n\nArguments\n\ncharset::Symbol=:na: ui characters to use (:ascii or :unicode); overridden by other arguments\ncursor::Char=\'>\'|\'→\': character to use for cursor\nup_arrow::Char=\'^\'|\'↑\': character to use for up arrow\ndown_arrow::Char=\'v\'|\'↓\': character to use for down arrow\nchecked::String=\"[X]\"|\"✓\": string to use for checked\nunchecked::String=\"[ ]\"|\"⬚\"): string to use for unchecked\nscroll::Symbol=:nowrap: If :wrap then wrap the cursor around top and bottom, if :nowrap do not wrap cursor\nsupress_output::Bool=false: For testing. If true, menu will not be printed to console.\nctrl_c_interrupt::Bool=true: If false, return empty on ^C, if true throw InterruptException() on ^C\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TerminalMenus.request",
    "page": "Docstrings",
    "title": "TerminalMenus.request",
    "category": "function",
    "text": "request(m::AbstractMenu)\n\nDisplay the menu and enter interactive mode. Returns m.selected which varies based on menu type.\n\n\n\n\n\nrequest([term,] msg::AbstractString, m::AbstractMenu)\n\nShorthand for println(msg); request(m).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TerminalMenus.ARROW_DOWNTerminalMenus.ARROW_LEFTTerminalMenus.ARROW_RIGHTTerminalMenus.ARROW_UPTerminalMenus.AbstractMenuTerminalMenus.CONFIGTerminalMenus.DEL_KEYTerminalMenus.END_KEYTerminalMenus.HOME_KEYTerminalMenus.KeyTerminalMenus.MultiSelectMenuTerminalMenus.PAGE_DOWNTerminalMenus.PAGE_UPTerminalMenus.RadioMenuTerminalMenus.TerminalMenusTerminalMenus.__init__TerminalMenus.cancelTerminalMenus.configTerminalMenus.disableRawModeTerminalMenus.enableRawModeTerminalMenus.evalTerminalMenus.headerTerminalMenus.includeTerminalMenus.keypressTerminalMenus.optionsTerminalMenus.pickTerminalMenus.printMenuTerminalMenus.readKeyTerminalMenus.readNextCharTerminalMenus.requestTerminalMenus.terminalTerminalMenus.trimWidthTerminalMenus.writeLine"
},

]}
