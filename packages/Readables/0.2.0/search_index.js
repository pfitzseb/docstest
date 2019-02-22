var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Readables.jl-1",
    "page": "Readme",
    "title": "Readables.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Make-extended-precision-numbers-readable.-1",
    "page": "Readme",
    "title": "Make extended precision numbers readable.",
    "category": "section",
    "text": "| Copyright © 2018 by Jeffrey Sarnoff.  | This work is made available under The MIT License. | |:–––––––––––––––––––|:––––––––––––––––––––––––:|(Image: Build Status)"
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "julia> using Readables\n\njulia> setprecision(BigFloat, 160);\njulia> prn(val) = println(\"\\n\\t\", string(val), \"\\n\\t\", readable(val));\n\njulia> val = (pi/2)^9; prn(val)\n\n	58.22089713563711\n	58.22089_71356_3711\n\njulia> val= (BigFloat(pi)/2)^9; prn(val)\n\n	5.8220897135637132161151176564921201882554800340637e+01\n	5.82208_97135_63713_21611_51176_56492_12018_82554_80034_0637e+01\n\njulia> setprecision(BigFloat,192);\n\njulia> val = (BigFloat(pi))^115; ival = trunc(BigInt, val); prn(ival)\n\n	1486741142588149449007460570055579083524909316281177999404\n	1,486,741,142,588,149,449,007,460,570,055,579,083,524,909,316,281,177,999,404\n"
},

{
    "location": "#Customize-1",
    "page": "Readme",
    "title": "Customize",
    "category": "section",
    "text": "\njulia> config = setintsep(setintgroup(12), \'.\');\n\njulia> ival = trunc(BigInt, (BigFloat(pi))^64);\n\njulia> readable(config, ival)\n\"65704006.445717084572.022626334540\""
},

{
    "location": "#Configure-1",
    "page": "Readme",
    "title": "Configure",
    "category": "section",
    "text": "We assume a Real value has an integer componant and a fractional componant (either may be zero).intgroup, fracgroup is the number of digits used to form digit subsequences in the integer and fractional partsintsep, fracsep is the Char used to separate groups in the integer and fractional parts"
},

{
    "location": "#exported-configurables-1",
    "page": "Readme",
    "title": "exported configurables",
    "category": "section",
    "text": "decpoint, setdecpoint\nintsep, fracsep, setintsep, setfracsep\nintgroup, fracgroup, setintgroup, setfracgroup"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Readables.DUAL_UNIT_STRReadables.IMAG_UNIT_STRReadables.READABLEReadables.ReadableReadables.ReadablesReadables.baseprefixReadables.baseprefixesReadables.decpointReadables.evalReadables.fracgroupReadables.fracsepReadables.includeReadables.intgroupReadables.intsepReadables.readableReadables.readable_fracReadables.readable_intReadables.readablestringReadables.setdecpointReadables.setfracgroupReadables.setfracsepReadables.setintgroupReadables.setintsepReadables.splitstrReadables.stripstr"
},

]}
