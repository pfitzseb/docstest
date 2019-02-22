var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)"
},

{
    "location": "#REPLMaker-1",
    "page": "Readme",
    "title": "REPLMaker",
    "category": "section",
    "text": "The idea here is to make a tool for people making (domain specific) languages in julia.  A user of this package will be required to give a function that parses code from whatever langauge the user has  implemented and turns it into Julia code which is then executed by Julia. LangKit will then create a repl mode where end users  just type code from the implemented language and have it be parsed into Julia code automatically. My hope is for this to be useful to someone who implements a full language or DSL in Julia that uses syntax not supported by Julia\'s parser and doesn\'t want to deal with the headache of making their own REPL mode. To add it,pkg> add git@github.com:MasonProtter/ReplMaker.jl.git"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Example-1:-Expr-Mode-1",
    "page": "Readme",
    "title": "Example 1: Expr Mode",
    "category": "section",
    "text": "Suppose we want to make a very simple REPL mode which just takes whatever input we provide and returns its quoted Expr form. We first make a parsing function,julia> using ReplMaker\n\njulia> function parse_to_expr(s)\n           quote parse($s) end\n       end\ntest_parser (generic function with 1 method)Now, we can simply provide that parser to the initrepl functionjulia> initrepl(parse_to_expr, \n                prompt_text=\"Expr> \",\n                prompt_color = :blue, \n                start_key=\')\', \n                mode_name=\"Expr_mode\")\nREPL mode Expr_mode initialized. Press ) to enter and backspace to exit.As instructed, we simply press the ) key and the julia> prompt is replacedExpr>  and as desired, we now can enter Julia code and be shown its quoted version.Expr> 1 + 1\n:(1 + 1)\n\nExpr> x ^ 2 + 5\n:(x ^ 2 + 5)"
},

{
    "location": "#Example-2:-Bad-Parser-Mode-1",
    "page": "Readme",
    "title": "Example 2: Bad Parser Mode",
    "category": "section",
    "text": "Lets say we\'re feeling a bit maniacal and want an insane version of Julia where any input has multiplication and addition switched. We first just make a function which takes expressions and if the first argument is :+ replaces it with :* and vice versa. On all other inputs, this function is just an identity operationfunction switch_mult_add(expr::Expr)\n    if expr.args[1] == :+\n        expr.args[1] = :*\n        return expr\n    elseif expr.args[1] == :*\n        expr.args[1] = :+\n        return expr\n    else\n        return expr\n    end\nend\nswitch_mult_add(s) = sWe now just borrow the postwalk function from MacroTools and use it in our parsing function to recursively look through and input expression tree and apply switch_mult_add and use that parser in a new REPL mode.using MacroTools: postwalk\n\nfunction bad_julia_parser(s)\n    expr = parse(s)\n    postwalk(switch_mult_add, expr)\nend\n\ninitrepl(bad_julia_parser, \n         prompt_text=\"bad_parser> \",\n         prompt_color = :red, \n         start_key=\'}\', \n         mode_name=\"bad_parser_mode\")now by pressing } we enter bad_parser_mode!bad_parser> 5 + 5\n25\n\nbad_parser> (5 * 5)^2\n100"
},

{
    "location": "autodocs/#ReplMaker.initrepl",
    "page": "Docstrings",
    "title": "ReplMaker.initrepl",
    "category": "function",
    "text": "         initrepl(parser::Function;\n                  prompt_text = \"myrepl> \",\n                  prompt_color = :blue,\n                  start_key = \')\',\n                  repl = Base.active_repl,\n                  mode_name = :mylang,\n                  valid_input_checker::Function = (s -> true),\n                  keymap::Dict = REPL.LineEdit.default_keymap_dict,\n                  completion_provider = REPL.REPLCompletionProvider(),\n                  sticky = true,\n                  startup_text=true\n                  )\n\ncreates a custom repl mode which takes in code and parses it according to whatever parsing function you  provide in the argument parser. Choose which key initializes the repl mode with start_key, the name of  your repl mode with mode_name and optionally provide a function which checks if a given repl input is valid before parsing with valid_input_checker. Autocompletion options are supplied through the argument completion_provider which defaults to the standard julia REPL TAB completions. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReplMaker.ReplMakerReplMaker.evalReplMaker.includeReplMaker.initrepl"
},

]}
