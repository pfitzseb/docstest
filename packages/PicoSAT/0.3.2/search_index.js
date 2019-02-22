var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PicoSAT.jl-1",
    "page": "Readme",
    "title": "PicoSAT.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)PicoSAT.jl provides Julia bindings to the popular SAT solver picosat by Armin Biere.  It is based off the Python pycosat and Go pigosat bindings written by Ilan Schnell and Willam Schwartz."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install, run Pkg.add(\"PicoSAT\") in Julia.  The entire picosat library (v960) is shipped with the package to make building the library easier.  Windows builds are currently not supported at the moment."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The PicoSAT module exports two functions solve and itersolve.  Both functions take an iterable of clauses as a required argument.  Each clause is represented as an iterable of non-zero integers.Both methods take the following optional keyword arguments:vars - the number of variables\nverbose - prints solver logs to STDOUT when verbose > 0 with increasing detail.\nproplimit - helps to bound the execution time.  The number of propagations and the solution time are roughly linearly related.  A value of 0 (default) allows for an unbounded number of propagations.solve(clauses; vars::Integer=-1, verbose::Integer=0, proplimit::Integer=0)Returns a solution if the problem is satisfiable.  Satisfiable solutions are represented as a vector of signed integers.  If the problem is not satisfiable the method returns an :unsatisfiable symbol.  If a solution cannot be found within the defined propagation limit, an :unknown symbol is returned.julia> import PicoSAT\njulia> cnf = Any[[1, -5, 4], [-1, 5, 3, 4], [-3, -4]];\njulia> PicoSAT.solve(cnf)\n5-element Array{Int64,1}:\n   1\n  -2\n  -3\n  -4\n   5The absolute values of the solution vector represent the ith variable.  The sign of the ith variable represents the boolean values true (+) and false (-).itersolve(clauses; vars::Integer=-1, verbose::Integer=0, proplimit::Integer=0)Returns an iterable object over all solutions.  When a user-defined propagation limit is specified, the iterator may not produce all feasible solutions.julia> import PicoSAT\njulia> cnf = Any[[1, -5, 4], [-1, 5, 3, 4], [-3, -4]];\njulia> PicoSAT.itersolve(cnf)\njulia> for sol in PicoSAT.itersolve(cnf)\n           println(sol)\n       end\n[1,-2,-3,-4,5]\n[1,-2,-3,4,-5]\n[1,-2,-3,4,5]\n[1,-2,3,-4,-5]\n..."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "PicoSAT.jl and the original picosat C-library are licensed under the MIT \"Expat\" license."
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "Jake Bolewski - @jakebolewski\nCarlo Lucibello - @CarloLucibello"
},

{
    "location": "autodocs/#PicoSAT.itersolve",
    "page": "Docstrings",
    "title": "PicoSAT.itersolve",
    "category": "function",
    "text": "itersolve(clauses; vars::Integer=-1, verbose::Integer=0, proplimit::Integer=0)\n\nvars - the number of variables\nverbose - prints solver logs to STDOUT when verbose > 0 with increasing detail.\nproplimit - helps to bound the execution time.  The number of propagations and the solution time are roughly linearly related.  A value of 0 (default) allows for an unbounded number of propagations.\n\nReturns an iterable object over all solutions. When a user-defined propagation limit is specified, the iterator may not produce all feasible solutions.\n\njulia> import PicoSAT\njulia> cnf = Any[[1, -5, 4], [-1, 5, 3, 4], [-3, -4]];\njulia> PicoSAT.itersolve(cnf)\njulia> for sol in PicoSAT.itersolve(cnf)\n           println(sol)\n       end\n[1,-2,-3,-4,5]\n[1,-2,-3,4,-5]\n[1,-2,-3,4,5]\n[1,-2,3,-4,-5]\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_add",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_add",
    "category": "function",
    "text": "Add a literal of the next clause.  A zero terminates the clause.  The solver is incremental.  Adding a new literal will reset the previous assignment.   The return value is the original clause index to which this literal respectively the trailing zero belong starting at 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_adjust",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_adjust",
    "category": "function",
    "text": "If you know a good estimate on how many variables you are going to use then calling this function before adding literals will result in less resizing of the variable table.  But this is just a minor optimization. Beside exactly allocating enough variables it has the same effect as calling \'picosatincmax_var\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_deref",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_deref",
    "category": "function",
    "text": "After \'picosatsat\' was called and returned \'PICOSATSATISFIABLE\', then the satisfying assignment can be obtained by \'dereferencing\' literals. The value of the literal is return as \'1\' for \'true\',  \'-1\' for \'false\' and \'0\' for an unknown value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_measure_all_calls",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_measure_all_calls",
    "category": "function",
    "text": "Measure all time spent in all calls in the solver.  By default only the time spent in \'picosatsat\' is measured.  Enabling this function might for instance triple the time needed to add large CNFs, since every call to \'picosatadd\' will trigger a call to \'getrusage\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_sat",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_sat",
    "category": "function",
    "text": "Call the main SAT solver. A negative decision limit sets no limit on the number of decisions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_set_plain",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_set_plain",
    "category": "function",
    "text": "Disable (set_plain == true) / Enable all prerocessing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_set_prefix",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_set_prefix",
    "category": "function",
    "text": "Set the prefix used for printing verbose messages and statistics. (Default is \"c \")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_set_propagation_limit",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_set_propagation_limit",
    "category": "function",
    "text": "As alternative to a decision limit you can use the number of propagations as limit. This is more linearly related to execution time. This has to be called after \'picosatinit\' and before \'picosatsat\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_set_verbosity",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_set_verbosity",
    "category": "function",
    "text": "Set verbosity level A verbosity level >= 1 prints more and more detailed progress reports to the output file. Verbose messages are prefixed with the string set by \'picosatsetprefix\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.picosat_variables",
    "page": "Docstrings",
    "title": "PicoSAT.picosat_variables",
    "category": "function",
    "text": "p cnf <m> n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PicoSAT.solve",
    "page": "Docstrings",
    "title": "PicoSAT.solve",
    "category": "function",
    "text": "solve(clauses; vars::Integer=-1, verbose::Integer=0, proplimit::Integer=0)\n\nvars - the number of variables\nverbose - prints solver logs to STDOUT when verbose > 0 with increasing detail.\nproplimit - helps to bound the execution time.  The number of propagations and the solution time are roughly linearly related.  A value of 0 (default) allows for an unbounded number of propagations.\n\nReturns a solution if the problem is satisfiable. Satisfiable solutions are represented as a vector of signed integers. If the problem is not satisfiable the method returns an :unsatisfiable symbol. If a solution cannot be found within the defined propagation limit, an :unknown symbol is returned.\n\njulia> import PicoSAT\njulia> cnf = Any[[1, -5, 4], [-1, 5, 3, 4], [-3, -4]];\njulia> PicoSAT.solve(cnf)\n5-element Array{Int64,1}:\n   1\n  -2\n  -3\n  -4\n   5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PicoSAT.PicoPtrPicoSAT.PicoSATPicoSAT.PicoSolIteratorPicoSAT.SATISFIABLEPicoSAT.UNKNOWNPicoSAT.UNSATISFIABLEPicoSAT.add_clausePicoSAT.add_clausesPicoSAT.blocksolPicoSAT.configPicoSAT.copyrightPicoSAT.evalPicoSAT.get_solutionPicoSAT.includePicoSAT.itersolvePicoSAT.libpicosatPicoSAT.next_solutionPicoSAT.picosat_addPicoSAT.picosat_adjustPicoSAT.picosat_derefPicoSAT.picosat_initPicoSAT.picosat_measure_all_callsPicoSAT.picosat_resetPicoSAT.picosat_satPicoSAT.picosat_set_plainPicoSAT.picosat_set_prefixPicoSAT.picosat_set_propagation_limitPicoSAT.picosat_set_verbosityPicoSAT.picosat_setupPicoSAT.picosat_variablesPicoSAT.satisfiablePicoSAT.solvePicoSAT.version"
},

]}
