var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TypeStability.jl-1",
    "page": "Readme",
    "title": "TypeStability.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Stable Docs) (Image: Latest Docs)This package provides functions to automate checking functions for type stability.  The checks are only run when enabled, which allows the function signatures that need to perform well to be located with the actual code without hurting runtime performance.TypeStability.jl is tested on Julia versions 0.6.0, 0.6.4, 0.7.0 and 1.0.0."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "TypeStability.jl is licensed under the MIT \"Expat\" license.  See LICENSE.md for more information."
},

{
    "location": "#Setup-1",
    "page": "Readme",
    "title": "Setup",
    "category": "section",
    "text": "Run Pkg.add(TypeStability) to install the latest stable version of TypeStability.  Then TypeStability can be usinged or imported."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Documentation is located at https://collegeville.github.io/TypeStability.jl/stable/ or, for the latest version, https://collegeville.github.io/TypeStability.jl/latest/The function enable_inline_stability_checks(::Bool) enables running the stability checks, while the macro @stablefunction(signatures, function) handles running the checks.julia> using TypeStability\n\njulia> enable_inline_stability_checks(true)\ntrue\n\njulia> @stable_function [(Float64,)] function f(x)\n                          if x > 0\n                              x\n                          else\n                              Int(0)\n                          end\n                      end\nf(Float64) is not stable\n  return is of type Union{Float64, Int64}\n\njulia> f\nf (generic function with 1 method)\n\njulia> @stable_function [(Float64,)] function g(x)\n                          if x > 0\n                              x\n                          else\n                             0.0\n                          end\n                      end\n\njulia> g\ng (generic function with 1 method)"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "See CONTRIBUTING.md for instructions on contrinbuting to TypeStability.jl."
},

{
    "location": "autodocs/#TypeStability.@stable_function",
    "page": "Docstrings",
    "title": "TypeStability.@stable_function",
    "category": "macro",
    "text": "@stable_function arg_lists function_name\n@stable_function arg_lists function_definition(s)\n@stable_function arg_lists acceptable_instability function_name\n@stable_function arg_lists acceptable_instability function_definitions(s)\n\nChecks the type stability of the function under the given argument lists.\n\nIf the second value is a function definition, the function is defined before checking type stability.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.RegexDict",
    "page": "Docstrings",
    "title": "TypeStability.RegexDict",
    "category": "type",
    "text": "RegexDict(::Tuple{Union{Regex, String}, T}...)\n\nCreates a dictionary that uses Regexes as keys and tests against those when looking up keys. Symbols can be used as lookup keys, by using their name. If multiple Regexes match a key, the value associated with any of them may be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.StabilityReport",
    "page": "Docstrings",
    "title": "TypeStability.StabilityReport",
    "category": "type",
    "text": "StabilityReport()\nStabilityReport(unstable_variables::Vector{Tuple{Symbol, Type}})\n\nHolds information about the stability of a method.\n\nIf unstable_vars is present, set the fields.  Otherwise, creates an empty set.\n\nSee is_stable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.check_function",
    "page": "Docstrings",
    "title": "TypeStability.check_function",
    "category": "function",
    "text": "check_function(func, signatures, acceptable_instability=Dict())\n\nCheck that the function is stable under each of the given signatures.\n\nReturn an array of method signature-StabilityReport pairs from check_method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.check_method",
    "page": "Docstrings",
    "title": "TypeStability.check_method",
    "category": "function",
    "text": "check_method(func, signature, acceptable_instability=Dict())\n\nCreate a StabilityReport object describing the type stability of the method.\n\nCompute non-concrete types of variables and return value, returning them in a StabilityReport Object\n\nacceptable_instability, if present, is a mapping of variables that are allowed be non-concrete types.  get is called with the mapping, the variable\'s symbol and Bool to get the variable\'s allowed type.  Additionally, the return value is checked using :return as the symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.enable_inline_stability_checks",
    "page": "Docstrings",
    "title": "TypeStability.enable_inline_stability_checks",
    "category": "function",
    "text": "enable_inline_stability_checks(::Bool)\n\nSets whether to run inline stability checks from @stable_function.\n\nIf it is set to false (the default value), @stable_function does not perform any type stability checks.\n\nThe value is checked when @stable_function is evaluated, so this should useually be set at the begining of a package definition.\n\nSee inline_stability_checks_enabled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.inline_stability_checks_enabled",
    "page": "Docstrings",
    "title": "TypeStability.inline_stability_checks_enabled",
    "category": "function",
    "text": "inline_stability_checks_enabled()::Bool\n\nReturns whether inline stability checks are enabled.\n\nSee enable_inline_stability_checks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.is_stable",
    "page": "Docstrings",
    "title": "TypeStability.is_stable",
    "category": "function",
    "text": "is_stable(report::StabilityReport)::Bool\nis_stable(reports::AbstractArray{Tuple{Any, StabilityReport}})::Bool\n\nCheck if the given StabilityReports don\'t have any unstable types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.parsebody",
    "page": "Docstrings",
    "title": "TypeStability.parsebody",
    "category": "function",
    "text": "parsebody(body, mod::Any)\n\nInternal method to parse the last argument of @stable_function mod should be a Module in Julia 0.7+, but don\'t matter on Julia 0.6 due to changes in macroexpand\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypeStability.stability_warn",
    "page": "Docstrings",
    "title": "TypeStability.stability_warn",
    "category": "function",
    "text": "stability_warn(func_name, report)\n\nDisplays warnings about the function if any of the reports are not stable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TypeStability.@stable_functionTypeStability.RegexDictTypeStability.StabilityReportTypeStability.TypeStabilityTypeStability.check_functionTypeStability.check_methodTypeStability.enable_inline_stability_checksTypeStability.evalTypeStability.includeTypeStability.inline_stability_checks_enabledTypeStability.is_stableTypeStability.parsebodyTypeStability.run_inline_stability_checksTypeStability.stability_warn"
},

]}
