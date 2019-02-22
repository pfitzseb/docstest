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
    "location": "#Installbr-1",
    "page": "Readme",
    "title": "Install<br>",
    "category": "section",
    "text": "julia> ] \njulia> add Jfire # need julia 0.7.0+"
},

{
    "location": "#Featurebr-1",
    "page": "Readme",
    "title": "Feature<br>",
    "category": "section",
    "text": "&nbsp;&nbsp;&nbsp;&nbsp;1. support call single/multiple Function or single/multiple Module. <br>"
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
    "text": "julia 0.7.0/1.0.3/1.1.0-rc1"
},

{
    "location": "#Usagebr-1",
    "page": "Readme",
    "title": "Usage<br>",
    "category": "section",
    "text": "doc/myth.jl is an example call from single Module:<br>using Jfire\n\nmodule myth\nexport hello\nfunction hello(;name::String=\"myth\", greet::String=\"how is the weather?\", number::Number=3)\n	println(\"hello, $name. $greet. $number\")\nend\nend\n\nif abspath(PROGRAM_FILE) == @__FILE__\n	Jfire.Fire(myth, time=true, color=:yellow, info=false)\nendthen run :$ julia myth.jl hello --name world --number Int::5\nhello, world. how is the weather?. 5\n  0.032762 seconds (69.26 k allocations: 3.502 MiB)doc/myths.jl is an example call from multiple Module:<br>using Jfire\n\nmodule myth1\nexport hello1\nfunction hello1(;name::String=\"myth\", greet::String=\"how is the weather?\", number::Number=3)\n	println(\"hello, $name. $greet. $number\")\nend\nend\n\nmodule myth2\nexport hello2\nfunction hello2(;name::String=\"myth\", greet::String=\"how is the weather?\", number::Float32=3.0)\n	println(\"hello, $name. $greet. $number\")\nend\nend\n\nif abspath(PROGRAM_FILE) == @__FILE__\n	ms = (myth1, myth2)\n	Jfire.Fire(ms, info=false,  time=false)\nendthen run :$ julia myths.jl  myth1.hello1 --name world --number Int::5\nhello, world. how is the weather?. 5doc/func.jl is an example call from single Function:<br>using Jfire\nfunction myth_func1(wow::String;name::String=\"myth\", greet::String=\"how is the weather?\")\n	println(\"$wow, hello, $name ~ $greet\")\nend\nif abspath(PROGRAM_FILE) == @__FILE__\n	Jfire.Fire(myth_func1, info=false)\nendthen run :$ julia  func.jl wow\nwow, hello, myth ~ how is the weather?doc/funcs.jl is an example call from multiple Function:<br>using Jfire\nfunction myth_func1(wow;name::String=\"myth\", greet::String=\"how is the weather?\", fishing::Bool=true)\n	if fishing\n		fish = \"\"\n	else\n		fish = \"not\"\n	end\n	println(\"$wow, hello, $name ~ $greet, I will $fish go fishing today~\")\nend\nfunction myth_func2(wow;name::String=\"myth\", greet::String=\"how is the weather?\")\n	println(\"$wow, hello, $name ~ $greet\")\nend\n\nif abspath(PROGRAM_FILE) == @__FILE__\n	Jfire.Fire((myth_func1,myth_func2), time=true, color=:yellow)\nendthen run :$ julia  funcs.jl  myth_func1 well --greet \'nice day\' --fishing Bool::true\n[33mJfire version 0.1.0[39m\n[33m2019-01-22T12:51:52.847 ... start fire[39m\nposition arguments: (\"well\",)\noptional arguments: (greet = \"nice day\", fishing = true)\n\nwell, hello, myth ~ nice day, I will  go fishing today~\n  0.024783 seconds (41.69 k allocations: 2.172 MiB, 27.47% gc time)\n[33m2019-01-22T12:51:53.6 ... end fire[39m<br> detail test script is doc/test.sh<br>"
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
    "text": "Jfire.FireJfire.JfireJfire.call_functionJfire.call_moduleJfire.check_called_typeJfire.convert_typeJfire.evalJfire.function_helpJfire.get_helpJfire.helpJfire.help_infoJfire.includeJfire.module_helpJfire.myexitJfire.occur_helpJfire.parse_argsJfire.parse_kwsJfire.show_function_infoJfire.show_info"
},

]}
