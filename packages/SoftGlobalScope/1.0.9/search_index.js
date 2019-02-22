var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SoftGlobalScope-1",
    "page": "Readme",
    "title": "SoftGlobalScope",
    "category": "section",
    "text": "(Image: Build Status)SoftGlobalScope is a package for the Julia language that simplifies the variable scoping rules for code in global scope.   It is intended for interactive shells (the REPL, IJulia, etcetera) to make it easier to work interactively with Julia, especially for beginners.In particular, SoftGlobalScope provides a function softscope that can transform Julia code from using the default \"hard\" scoping rules to simpler \"soft\" scoping rules in global scope only."
},

{
    "location": "#Hard-and-soft-global-scopes-1",
    "page": "Readme",
    "title": "Hard and soft global scopes",
    "category": "section",
    "text": "Starting in Julia 0.7, when you assign to global variables in the context of an inner scope (a for loop or a let statement) you need to explicitly declare the variable as global in order to distinguish it from declaring a new variable.  We refer to this as \"hard\" scoping rules.  For example, the following code gives an warning in 0.7:julia> s = 0\n0\n\njulia> for i = 1:10\n           s = s + i\n       end\n┌ Warning: Deprecated syntax `implicit assignment to global variable `s``.\n└ Use `global s` instead.and an error in Julia 1.0:julia> s = 0\n0\n\njulia> for i = 1:10\n           s = s + i   # wrong: defines a new local variable s\n       end\nERROR: UndefVarError: s not definedTo make it work in 1.0, you need a global declaration:julia> for i = 1:10\n           global s = s + i\n       end\n\njulia> s      # should be 1 + 2 + ⋯ + 10 = 55\n55This only applies to global variables; similar code inside a function (or whenever s is a local variable) works fine without any added keyword:julia> function f(n)\n           s = 0\n           for i = 1:n\n               s = s + i\n           end\n           return s\n       end\nf (generic function with 1 method)\n\njulia> f(10)\n55There were various reasons for this scoping rule, e.g. to facilitate static analysis by the compiler, and it isn\'t too onerous in \"serious\" Julia code where little code executes in global scope.However, for interactive use, especially for new users, the necessity of the global keyword, and the difference between code in local and global scopes, can be confusing.   The SoftGlobalScope package exists to make it easier for interactive shells to automatically insert the global keyword in common cases, what we term \"soft\" global scope."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The SoftGlobalScope module exports two functions softscope and softscope_include_string, and a macro @softscope:You can transform the expression using softscope(module, expression) to automatically insert the necessary global keyword.  For example, assuming that the module Main has a global variable s (as above), you can do:julia> softscope(Main, :(for i = 1:10\n           s += i\n       end))\n:(for i = 1:10\n      #= REPL[3]:2 =#\n      global s += i\n  end)You can then execute the statement with eval. Alternatively, you can decorate the expression with the @softscope macro:julia> s = 0;\n\njulia> @softscope for i = 1:10\n           s += i\n       end\n\njulia> s\n55This macro should only be used in the global scope (e.g., via the REPL); using this macro within a function is likely to lead to unintended consequences.You can execute an entire sequence of statements using \"soft\" global scoping rules via softscope_include_string(module, string, filename=\"string\"):julia> softscope_include_string(Main, \"\"\"\n       s = 0\n       for i = 1:10\n           s += i\n       end\n       s\n       \"\"\")\n55(This function works like include_string, returning the value of the last evaluated expression.)In Julia 0.6, no code transformations are required, so softscope returns the original expression and softscope_include_string is equivalent to include_string."
},

{
    "location": "#Contact-1",
    "page": "Readme",
    "title": "Contact",
    "category": "section",
    "text": "SoftGlobalScope was written by Steven G. Johnson and is free/open-source software under the MIT/Expat license.  Please file bug reports and feature requests at the SoftGlobalScope github page."
},

{
    "location": "autodocs/#SoftGlobalScope.@softscope",
    "page": "Docstrings",
    "title": "SoftGlobalScope.@softscope",
    "category": "macro",
    "text": "@softscope(expr)\n\nApply \"soft\" scoping rules to the argument of the macro. For example\n\njulia> s = 0;\n\njulia> @softscope for i = 1:10\n           s += i\n       end\n\njulia> s\n55\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SoftGlobalScope.SoftGlobalScope",
    "page": "Docstrings",
    "title": "SoftGlobalScope.SoftGlobalScope",
    "category": "module",
    "text": "SoftGlobalScope is a package that simplifies the variable scoping rules for code in global scope.   It is intended for interactive shells (the REPL, IJulia, etcetera) to make it easier to work interactively with Julia, especially for beginners.\n\nIn particular, SoftGlobalScope provides a function softscope that can transform Julia code from using the default \"hard\" (local) scoping rules to simpler \"soft\" scoping rules in global scope, and a function softscope_include_string that can evaluate a whole string (similar to include_string) using these rules.\n\nFor example, if s is a global variable in the current module (e.g. Main), the following code is an error in Julia 1.0:\n\nfor i = 1:10\n    s += i     # declares a new local variable `s`\nend\n\nInstead, you can transform the expression using softscope to automatically insert the necessary global keyword:\n\njulia> softscope(Main, :(for i = 1:10\n           s += i\n       end))\n:(for i = 1:10\n      #= REPL[3]:2 =#\n      global s += i\n  end)\n\nYou can then execute the statement with eval. Alternatively, you can decorate the expression with the @softscope macro:\n\njulia> s = 0;\n\njulia> @softscope for i = 1:10\n           s += i\n       end\n\njulia> s\n55\n\nThis macro should only be used in the global scope (e.g., via the REPL); using this macro within a function is likely to lead to unintended consequences.\n\nYou can execute an entire sequence of statements using \"soft\" global scoping rules via softscope_include_string:\n\njulia> softscope_include_string(Main, \"\"\"\n       s = 0\n       for i = 1:10\n           s += i\n       end\n       s\n       \"\"\")\n55\n\n(This function works like include_string, returning the value of the last evaluated expression.)\n\nOn Julia 0.6, softscope is the identity and softscope_include_string is equivalent to include_string, since the global keyword is not needed there.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SoftGlobalScope.softscope",
    "page": "Docstrings",
    "title": "SoftGlobalScope.softscope",
    "category": "function",
    "text": "softscope(m::Module, ast)\n\nTransform the abstract syntax tree ast (a quoted Julia expression) to use \"soft\" scoping rules for the global variables defined in m, returning the new expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SoftGlobalScope.softscope_include_string",
    "page": "Docstrings",
    "title": "SoftGlobalScope.softscope_include_string",
    "category": "function",
    "text": "softscope_include_string(m::Module, code::AbstractString, filename::AbstractString=\"string\")\n\nLike include_string, but evaluates code using \"soft\" scoping rules for the global variables defined in m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SoftGlobalScope.@softscopeSoftGlobalScope.SoftGlobalScopeSoftGlobalScope._add_linenumSoftGlobalScope._softscopeSoftGlobalScope.add_linenumSoftGlobalScope.assignmentsSoftGlobalScope.callsSoftGlobalScope.evalSoftGlobalScope.includeSoftGlobalScope.localassignmentSoftGlobalScope.localvarsSoftGlobalScope.shift_linenumSoftGlobalScope.softscopeSoftGlobalScope.softscope_include_stringSoftGlobalScope.toplevel_only"
},

]}
