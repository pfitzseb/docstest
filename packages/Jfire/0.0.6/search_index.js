var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Jfire-1",
    "page": "Readme",
    "title": "Jfire",
    "category": "section",
    "text": ""
},

{
    "location": "#Why-Jfire-br-1",
    "page": "Readme",
    "title": "Why Jfire <br>",
    "category": "section",
    "text": "&nbsp;&nbsp;&nbsp;&nbsp;inspired by python-fire(https://github.com/google/python-fire) and Fire(https://github.com/ylxdzsw/Fire.jl) <br>"
},

{
    "location": "#Featurebr-1",
    "page": "Readme",
    "title": "Feature<br>",
    "category": "section",
    "text": "&nbsp;&nbsp;&nbsp;&nbsp;1. only support fire Function or Module yet, then call only one funciton in command line. <br>"
},

{
    "location": "#Thanksbr-1",
    "page": "Readme",
    "title": "Thanks<br>",
    "category": "section",
    "text": "&nbsp;&nbsp;&nbsp;&nbsp;thanks the  people: I learned from https://discourse.julialang.org/t/how-to-set-variable-to-key-of-keyword-arguments-of-function/18995/7, after that, I tried to write Jfire. <br>"
},

{
    "location": "#Dependencebr-1",
    "page": "Readme",
    "title": "Dependence<br>",
    "category": "section",
    "text": "julia v1.02"
},

{
    "location": "#Usagebr-1",
    "page": "Readme",
    "title": "Usage<br>",
    "category": "section",
    "text": "doc/myth.jl is an example call from Module:<br>#include(\"../Jfire.jl\")\nusing Jfire\nmodule myth\n\nexport hello\nfunction hello(;name::String=\"sikaiwei\", greet::String=\"how is the weather?\", number::Number=3)\n	println(\"hello, $name. $greet\")\nend\n\nend\n\nif abspath(PROGRAM_FILE) == @__FILE__\n	Jfire.Fire(myth)\nendthen run command line like this:<br>$ julia  doc/myth.jl hello --name myth --greet \'what a good day!\' --number Float32::3\n... start fire\noptional arguments: (name = \"myth\", greet = \"what a good day!\", number = 3.0f0)\n\nhello, myth. what a good day!. 3.0\n... end firedoc/func.jl is an example call form Function directly:<br>using Jfire\nfunction myth_func(wow::String;name::String=\"sikaiwei\", greet::String=\"how is the weather?\", number::Int=8)\n	println(\"$wow, hello, $name ~ $greet\")\nend\n\nif abspath(PROGRAM_FILE) == @__FILE__\n	Jfire.Fire(myth_func)\nendthen run this:<br>$ julia doc/func.jl  wow\n... start fire\nposition arguments: (\"wow\",)\n\nwow, hello, sikaiwei ~ how is the weather?\n... end fire\n\n$ julia doc/func.jl  wow --name wold --greet \' nice day! \'\n... start fire\nposition arguments: (\"wow\",)\noptional arguments: (name = \"wold\", greet = \" nice day! \")\n\nwow, hello, wold ~  nice day!\n... end fire<br>"
},

{
    "location": "#Support-function-parameter-types:br-1",
    "page": "Readme",
    "title": "Support function parameter types:<br>",
    "category": "section",
    "text": "&nbsp;&nbsp;&nbsp;&nbsp;default is String,you also can specify the type, like –parameter Int::32, support julia build-in type which is argument of parse(), like Int,Float32,Float64,etc<br> &nbsp;&nbsp;&nbsp;&nbsp;position arguments or optional keywords argument<br>"
},

{
    "location": "#Not-support-function-parameter-types:br-1",
    "page": "Readme",
    "title": "Not support function parameter types:<br>",
    "category": "section",
    "text": "&nbsp;&nbsp;&nbsp;&nbsp;–help<br>"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Jfire.FireJfire.JfireJfire.call_functionJfire.call_moduleJfire.convert_typeJfire.evalJfire.get_helpJfire.helpJfire.includeJfire.parse_argsJfire.parse_kwsJfire.str2number"
},

]}
