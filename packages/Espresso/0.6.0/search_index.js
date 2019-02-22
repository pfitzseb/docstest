var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Espresso-1",
    "page": "Readme",
    "title": "Espresso",
    "category": "section",
    "text": "(Image: Build Status)Expression transformation package. (Image: ) (Image: )"
},

{
    "location": "autodocs/#Espresso.@get",
    "page": "Docstrings",
    "title": "Espresso.@get",
    "category": "macro",
    "text": "Same as get function, but evaluates default_expr only if needed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.@get_array",
    "page": "Docstrings",
    "title": "Espresso.@get_array",
    "category": "macro",
    "text": "Get array of size sz from a dict by key. If element doesn\'t exist or its size is not equal to sz, create and return new array using default_expr. If element exists, but is not an error, throw ArgumentError.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.@get_or_create",
    "page": "Docstrings",
    "title": "Espresso.@get_or_create",
    "category": "macro",
    "text": "Same as @get, but creates new object from default_expr if it didn\'t exist before\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.@get_or_return",
    "page": "Docstrings",
    "title": "Espresso.@get_or_return",
    "category": "macro",
    "text": "Same as @get, but immediately exits function and return default_expr if key doesn\'t exist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.@simple_rule",
    "page": "Docstrings",
    "title": "Espresso.@simple_rule",
    "category": "macro",
    "text": "Macro to add simplification rules. Example:\n\n@simple_rule (-x * -y) (x * y)\n\nwhere (-x * -y) is a pattern to match expression and (x * y) is what it should be transformed to (see rewrite() to understand expression rewriting). Symbols Set(Symbol[:a, :b, :y, :x]) may be used as placeholders when defining new rules, all other symbols will be taken literally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.@tracked",
    "page": "Docstrings",
    "title": "Espresso.@tracked",
    "category": "macro",
    "text": "Define a function or broadcasting rule for the specified signature which computes the result as for ordinary (not tracked) data and writes it to the graph.\n\nNote: this function expects at least 1 parameter of TrackedReal or TrackedArray type with name x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.assign_chain",
    "page": "Docstrings",
    "title": "Espresso.assign_chain",
    "category": "function",
    "text": "Collect all replacable variables from a chain of assignments in a graph. Variables y and x are considered replacable if there\'s a node y = x and both variables have the same set of guards. Note that this allows nodes to have different sets of indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.canonical",
    "page": "Docstrings",
    "title": "Espresso.canonical",
    "category": "function",
    "text": "Return canonical representation of a function name, e.g.:\n\nBase.+  ==> +\nMain.+  ==> + (resolved to Base.+)\nBase.LinAlg.exp ==> exp\nMod.foo ==> Mod.foo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.dependencies",
    "page": "Docstrings",
    "title": "Espresso.dependencies",
    "category": "function",
    "text": "Get names of dependenices of this node\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.dependents",
    "page": "Docstrings",
    "title": "Espresso.dependents",
    "category": "function",
    "text": "For each variable in graph, calculate all variables that depend on it. This is essentially the opposite of dependencies(nd::ExNode), but operates on variable names rather than nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.destruct",
    "page": "Docstrings",
    "title": "Espresso.destruct",
    "category": "function",
    "text": "Replace all struct arguments by a list of their plain analogues. Example:\n\nargs = [:m, :x, :y]\ntypes = (Linear, Matrix{Float64}, Matrix{Float64})\nex = :(sum((m.W * x .+ m.b) - y))\n\ndestruct(args, types, ex)\n# ==>\n# ([:m_W, :m_b, :x, :y],\n#  :(sum((m_W * x .+ m_b) - y)),\n#  Dict(:(m.W) => :m_W, :(m.b) => :m_b))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.dot_expr",
    "page": "Docstrings",
    "title": "Espresso.dot_expr",
    "category": "function",
    "text": "Given a list of symbols such as [:x, :y, :z] constructs expression x.y.z. This is useful for building expressions of qualified names such as Base.LinAlg.exp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.eval_codegen",
    "page": "Docstrings",
    "title": "Espresso.eval_codegen",
    "category": "function",
    "text": "For buffered codegens, return unbuffered version that can be used in evaluate!()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.evaluate!",
    "page": "Docstrings",
    "title": "Espresso.evaluate!",
    "category": "function",
    "text": "Evaluate node, i.e. fill its val by evaluating node\'s expression using values of its dependencies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.expand_const",
    "page": "Docstrings",
    "title": "Espresso.expand_const",
    "category": "function",
    "text": "Expand all constant vars in a given expression\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.expand_fixed_sequences",
    "page": "Docstrings",
    "title": "Espresso.expand_fixed_sequences",
    "category": "function",
    "text": "Look at each node\'s dependencies and, if there are known pattern sequences, rewrite them in a more optimal way.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.find_vars",
    "page": "Docstrings",
    "title": "Espresso.find_vars",
    "category": "function",
    "text": "find_vars(ex; rec=true)\n\nSame as get_vars(), but recursive by default\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.findex",
    "page": "Docstrings",
    "title": "Espresso.findex",
    "category": "function",
    "text": "Find sub-expressions matching a pattern. Example:\n\nex = :(a * f(x) + b * f(y))\npat = :(f(_))\nfindex(pat, ex)   # ==> [:(f(x)), :(f(y))]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.flatten",
    "page": "Docstrings",
    "title": "Espresso.flatten",
    "category": "function",
    "text": "Flattenx vector of vectors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.flatten!",
    "page": "Docstrings",
    "title": "Espresso.flatten!",
    "category": "function",
    "text": "Flatten vector of vectors in-place\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.flatten1",
    "page": "Docstrings",
    "title": "Espresso.flatten1",
    "category": "function",
    "text": "Flatten one level of nested vectors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.flatten_dots",
    "page": "Docstrings",
    "title": "Espresso.flatten_dots",
    "category": "function",
    "text": "Given a list of expression arguments, flatten the dotted ones. Example:\n\nargs = [:foo, :([a, b, c]...)]\nflatten_dots(args)\n# ==> [:foo, :a, :b, :c]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.fuse_assigned",
    "page": "Docstrings",
    "title": "Espresso.fuse_assigned",
    "category": "function",
    "text": "Collapse unnecessary assignment nodes, rewriting all affected nodes. Example:\n\ntmp1 = x * y\nz = tmp1\n\nwill be rewritten to\n\nz = x * y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.genname",
    "page": "Docstrings",
    "title": "Espresso.genname",
    "category": "function",
    "text": "Generate a new unique name for intermediate variable in graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.get_source_at",
    "page": "Docstrings",
    "title": "Espresso.get_source_at",
    "category": "function",
    "text": "Looks up the source of method in the file path found in method. Returns the AST and source string, might throw an LoadError if file not found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.get_vars",
    "page": "Docstrings",
    "title": "Espresso.get_vars",
    "category": "function",
    "text": "Get variables (Symbol or Expr(:ref)) involved in exprssion\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.graph_hash",
    "page": "Docstrings",
    "title": "Espresso.graph_hash",
    "category": "function",
    "text": "A single number to represent a graph. Insensitive to variable names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.inc_var_name",
    "page": "Docstrings",
    "title": "Espresso.inc_var_name",
    "category": "function",
    "text": "Given a symbolic name, either adds 2 to the end or increment existing number. Example:\n\ninc_var_name(:x)   # ==> x2\ninc_var_name(:x2)  # ==> x3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.is_bcast",
    "page": "Docstrings",
    "title": "Espresso.is_bcast",
    "category": "function",
    "text": "Check if all operations in this expression are broadcasting\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.isstruct",
    "page": "Docstrings",
    "title": "Espresso.isstruct",
    "category": "function",
    "text": "Check if an object is of a struct type, i.e. not a number or array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.make_call_expr",
    "page": "Docstrings",
    "title": "Espresso.make_call_expr",
    "category": "function",
    "text": "Make call expression from function name, ordinary and keyword arguments.\n\nThe reverse of this operation is parsecallexpr()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.make_indexed",
    "page": "Docstrings",
    "title": "Espresso.make_indexed",
    "category": "function",
    "text": "Make indexed variable. Examples:\n\nmake_indexed(:x, [])       ==> :x\nmake_indexed(:x, [:i,:j])  ==> :(x[i,j])\n\nSee also: split_indexed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.make_subgraph",
    "page": "Docstrings",
    "title": "Espresso.make_subgraph",
    "category": "function",
    "text": "Find definition of a called function and build its subgraph ready for inlining\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.matchex",
    "page": "Docstrings",
    "title": "Espresso.matchex",
    "category": "function",
    "text": "Match expression ex to a pattern pat, return nullable dictionary of matched symbols or rpatpressions. Example:\n\nex = :(u ^ v)\npat = :(_x ^ _n)\nmatchex(pat, ex)\n# ==> Union{ Dict{Symbol,Any}(:_n=>:v,:_x=>:u), Void }\n\nNOTE: two symbols match if they are equal or symbol in pattern is a placeholder. Placeholder is any symbol that starts with \'\'. It\'s also possible to pass list of placeholder names (not necessarily starting wiht \'\') via phs parameter:\n\nex = :(u ^ v)\npat = :(x ^ n)\nmatchex(pat, ex; phs=Set([:x, :n]))\n# ==> Union{ Dict{Symbol,Any}(:n=>:v,:x=>:u), Void } \n\nSeveral elements may be matched using ... expression, e.g.:\n\nex = :(A[i, j, k])\npat = :(x[I...])\nmatchex(pat, ex; phs=Set([:x, :I]))\n# ==> Union{ Dict(:x=>:A, :I=>[:i,:j,:k]), Void }\n\nOptional parameters:\n\nphs::Set{Symbol} = DEFAULT_PHS[1]     A set of placeholder symbols\nallow_ex::Boolean = true     Allow matchinng of symbol pattern to an expression. Example:\n    matchex(:(_x + 1), :(a*b + 1); allow_ex=true)  # ==> matches\n    matchex(:(_x + 1), :(a*b + 1); allow_ex=false)  # ==> doesn\'t match\nexact::Boolean = false     Allow matching of the same expression to different keys\n    matchex(:(_x + _y), :(a + a); exact=false) # ==> matches\n    matchex(:(_x = _y), :(a + a); exact=true)  # ==> doesn\'t match\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.matchingex",
    "page": "Docstrings",
    "title": "Espresso.matchingex",
    "category": "function",
    "text": "Check if expression matches pattern. See matchex() for details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.parse!",
    "page": "Docstrings",
    "title": "Espresso.parse!",
    "category": "function",
    "text": "Parse Julia expression and build ExGraph in-place. Return the the output variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.parse_call_args",
    "page": "Docstrings",
    "title": "Espresso.parse_call_args",
    "category": "function",
    "text": "Given a call expression, parse regular and keyword arguments\n\nSee also: split_params\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.parse_call_expr",
    "page": "Docstrings",
    "title": "Espresso.parse_call_expr",
    "category": "function",
    "text": "Parse call expression into function name, ordinary and keyword arguments. :kw and :parameters arguments are treated the same way.\n\nThe reverse of this operation is makecallexpr()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.prop_subs",
    "page": "Docstrings",
    "title": "Espresso.prop_subs",
    "category": "function",
    "text": "Propagate substitution rules. Example:\n\nDict(\n    :x => y,\n    :y => z\n)\n\nis transformed into:\n\nDict(\n    :x => z,\n    :y => z\n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.recover_lowered",
    "page": "Docstrings",
    "title": "Espresso.recover_lowered",
    "category": "function",
    "text": "Try to recover an expression from a lowered form. Example:\n\nex = (Main.sum)((Base.literal_pow)(Main.^, (Base.broadcast)(Main.-, (Main.predict)(W, b, x), y), (Core.apply_type)(Base.Val, 2)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.remove_unused",
    "page": "Docstrings",
    "title": "Espresso.remove_unused",
    "category": "function",
    "text": "Removes unused variables from multiline expressions, e.g. in:\n\nx = u * v\ny = x + 1\nz = 2x\n\ny isn\'t used to compute output variable z, so it\'s removed:\n\nx = u * v\nz = 2x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.replace_inner_constr",
    "page": "Docstrings",
    "title": "Espresso.replace_inner_constr",
    "category": "function",
    "text": "Replace all calls to an inner constructor with the corresponding outer constructor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.rewrite",
    "page": "Docstrings",
    "title": "Espresso.rewrite",
    "category": "function",
    "text": "rewrite(ex, pat, rpat)\n\nRewrite expression ex according to a transform from pattern pat to a substituting expression rpat. Example (derivative of x^n):\n\nex = :(u ^ v)\npat = :(_x ^ _n)\nrpat = :(_n * _x ^ (_n - 1))\nrewrite(ex, pat, rpat) # ==> :(v * u ^ (v - 1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.rewrite_all",
    "page": "Docstrings",
    "title": "Espresso.rewrite_all",
    "category": "function",
    "text": "rewrite_all(ex, rules)\n\nRecursively rewrite an expression according to a list of rules like [pat => rpat] Example:\n\nex = :(foo(bar(foo(A))))\nrules = [:(foo(x)) => :(quux(x)),\n         :(bar(x)) => :(baz(x))]\nrewrite_all(ex, rules; phs=[:x])\n# ==> :(quux(baz(quux(A))))\n\n\n\n\n\nrewrite_all(ex, pat, rpat)\n\nRecursively rewrite all occurrences of a pattern in an expression. Example:\n\nex = :(foo(bar(foo(A))))\npat = :(foo(x))\nrpat = :(quux(x))\nrewrite_all(ex, pat, rpat; phs=[:x])\n# ==> :(quux(bar(quux(A))))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.simplify",
    "page": "Docstrings",
    "title": "Espresso.simplify",
    "category": "function",
    "text": "Simplify expression x by applying a set of rules. Common examples of simplification include calculation of fully numeric subexpressions, removing needless multiplication by 1, etc.\n\nUse macro @simple_rule to add new simplification rules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.split_indexed",
    "page": "Docstrings",
    "title": "Espresso.split_indexed",
    "category": "function",
    "text": "Split possibly indexed variable into a name and indices. Examples:\n\nsplit_indexed(:x)         ==> (:x, [])\nsplit_indexed(:(x[i,j]))  ==> (:x, [:i,:j])\n\nSee also: make_indexed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.split_params",
    "page": "Docstrings",
    "title": "Espresso.split_params",
    "category": "function",
    "text": "Split parameters of a function signature, returning a list of (param name, param type) tuples and a list of keyword parameters.\n\nSee also: parsecallargs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.subs",
    "page": "Docstrings",
    "title": "Espresso.subs",
    "category": "function",
    "text": "Substitute symbols in ex according to substitute table st. Example:\n\nex = :(x ^ n)\nsubs(ex, x=2)            # ==> :(2 ^ n)\n\nalternatively:\n\nsubs(ex, Dict(:x => 2))  # ==> :(2 ^ n)\n\nIf ex contains a :(xs...) argument and st contains an array-valued sabstitute for it, the substitute will be flattened:\n\nex = :(foo(xs...))\nsubs(ex, Dict(:xs => [:a, :b, :c]))\n# ==> :(foo(a, b, c))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.to_einsum_expr",
    "page": "Docstrings",
    "title": "Espresso.to_einsum_expr",
    "category": "function",
    "text": "Convert ExNode to a fortmat compatible with Einsum.jl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.to_expr",
    "page": "Docstrings",
    "title": "Espresso.to_expr",
    "category": "function",
    "text": "Convert ExNode to a full expression, e.g. for vectorized notation:\n\nz = x + y\n\nor for indexed notation:\n\nz[i] = x[i] + y[i]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.to_expr_kw",
    "page": "Docstrings",
    "title": "Espresso.to_expr_kw",
    "category": "function",
    "text": "Same as to_expr(ExNode), but includes keyword arguments if any\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.topsort",
    "page": "Docstrings",
    "title": "Espresso.topsort",
    "category": "function",
    "text": "Sort graph topologically\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.tryrewrite",
    "page": "Docstrings",
    "title": "Espresso.tryrewrite",
    "category": "function",
    "text": "Same as rewrite, but returns Union{Expr, Void} and doesn\'t throw an error when expression doesn\'t match pattern\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.with_indices",
    "page": "Docstrings",
    "title": "Espresso.with_indices",
    "category": "function",
    "text": "Generate index names and make an indexed variable using them\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.without",
    "page": "Docstrings",
    "title": "Espresso.without",
    "category": "function",
    "text": "Remove rpatpression conforming to a pattern. Example:\n\nex = :(x * (m == n))\npat = :(_i == _j)\nex = without(ex, pat)  # ==> :x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Espresso.without_keywords",
    "page": "Docstrings",
    "title": "Espresso.without_keywords",
    "category": "function",
    "text": "Remove all :kw and :parameters nodes from a call expression\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Espresso.@getEspresso.@get_arrayEspresso.@get_or_createEspresso.@get_or_returnEspresso.@inplaceruleEspresso.@simple_ruleEspresso.@trackedEspresso.AbstractExGraphEspresso.BufCodeGenEspresso.CONST_OPSEspresso.CUDA_NATIVE_RULESEspresso.CuCodeGenEspresso.CuVecCodeGenEspresso.DEFAULT_GRAPHEspresso.DEFAULT_PHSEspresso.DOT_OPSEspresso.EspressoEspresso.ExGraphEspresso.ExHEspresso.ExNodeEspresso.FTEspresso.GPUCodeGenEspresso.INPLACE_PHSEspresso.INPLACE_RULESEspresso.KNOWN_MODULESEspresso.MatEspresso.NumEspresso.NumericEspresso.OLD_BCAST_OPSEspresso.OPT_PHSEspresso.OPT_VEC_RULESEspresso.OpNameEspresso.PREPROCESS_RULESEspresso.RECOVER_LOWERED_RULESEspresso.SIMPLE_PHSEspresso.SIMPLE_RULESEspresso.SIMPLE_TO_DOTEspresso.SymbolicEspresso.TrackedArrayEspresso.TrackedRealEspresso.VecEspresso.VectorCodeGenEspresso.__constructEspresso.__construct_immutableEspresso._simplifyEspresso.add_inplace_ruleEspresso.add_renaming!Espresso.arg_namesEspresso.arg_typesEspresso.assign_chainEspresso.assign_chain!Espresso.assign_chain_index_replacementsEspresso.autoselect_codegenEspresso.buffer_exprEspresso.canonicalEspresso.canonical_callsEspresso.catEspresso.collect_depsEspresso.collect_deps!Espresso.concretise_typesEspresso.convert_callEspresso.cosEspresso.cuda_buffer_exprEspresso.dependenciesEspresso.dependentsEspresso.depwarn_eingraphEspresso.destructEspresso.destruct_inputsEspresso.dot_exprEspresso.eliminate_commonEspresso.evalEspresso.eval_codegenEspresso.eval_tracked!Espresso.evaluate!Espresso.expand_constEspresso.expand_depsEspresso.expand_deps!Espresso.expand_fixed_sequencesEspresso.expr_likeEspresso.external_varsEspresso.field_valuesEspresso.find_indicesEspresso.find_keyEspresso.find_var_namesEspresso.find_varsEspresso.findexEspresso.findex!Espresso.flattenEspresso.flatten!Espresso.flatten1Espresso.flatten_dotsEspresso.flipEspresso.forall_indicesEspresso.forall_sum_indicesEspresso.force_bitnessEspresso.func_exprEspresso.func_modEspresso.func_nameEspresso.funexprEspresso.fuse_assignedEspresso.fuse_broadcastingEspresso.fuse_broadcasting_nodeEspresso.generate_codeEspresso.gennameEspresso.gennamesEspresso.get_arg_namesEspresso.get_arg_typesEspresso.get_caller_moduleEspresso.get_default_graphEspresso.get_indicesEspresso.get_methodEspresso.get_or_generate_argnamesEspresso.get_source_atEspresso.get_source_fileEspresso.get_var_namesEspresso.get_varsEspresso.get_vars!Espresso.getcategoryEspresso.getexprEspresso.getexpr_kwEspresso.getguardsEspresso.getsizeEspresso.getvalueEspresso.getvarEspresso.gpu_buffer_exprEspresso.graph_hashEspresso.inc_var_nameEspresso.includeEspresso.indexofEspresso.inline_nodesEspresso.inline_subgraphsEspresso.is_bcastEspresso.is_bcast_vecEspresso.is_calculableEspresso.iscallEspresso.isconvEspresso.isindexedEspresso.isparametersEspresso.isplaceholderEspresso.isrefEspresso.isstructEspresso.istempEspresso.istrackedEspresso.jlhomeEspresso.juliabasepathEspresso.make_call_exprEspresso.make_elementwiseEspresso.make_func_exprEspresso.make_indexedEspresso.make_kw_paramsEspresso.make_subgraphEspresso.matchexEspresso.matchex!Espresso.matchingexEspresso.mergeexEspresso.mk_eval_exprEspresso.mul!Espresso.named_field_valuesEspresso.parse!Espresso.parse_call_argsEspresso.parse_call_exprEspresso.preprocessEspresso.prop_subsEspresso.recover_loweredEspresso.recover_lowered_recEspresso.reindex_from_beginningEspresso.remember_size!Espresso.remove_unusedEspresso.renameEspresso.rename!Espresso.rename_from_beginningEspresso.rename_repeatedEspresso.reparseEspresso.replace_inner_constrEspresso.replace_slotsEspresso.reset_default_graph!Espresso.reset_tapeEspresso.rewriteEspresso.rewrite_allEspresso.safe_sizeEspresso.sanitizeEspresso.set_default_graphEspresso.set_default_placeholdersEspresso.setexpr!Espresso.setexpr_kw!Espresso.setguards!Espresso.setvalue!Espresso.setvar!Espresso.simplifyEspresso.sinEspresso.split_indexedEspresso.split_paramsEspresso.squeeze_sumEspresso.squeeze_sum_1Espresso.squeeze_sum_2Espresso.struct_likeEspresso.subgraph_interm_subs_tableEspresso.subsEspresso.subs_bcast_with_dotEspresso.sum_1Espresso.sum_2Espresso.sum_indicesEspresso.swap_default_graph!Espresso.to_blockEspresso.to_bufferedEspresso.to_contextEspresso.to_dictEspresso.to_einsum_exprEspresso.to_exprEspresso.to_expr_kwEspresso.to_inplaceEspresso.topsortEspresso.topsort_visit!Espresso.track_bcastEspresso.track_callEspresso.trackedEspresso.tracked_exgraphEspresso.tracked_valEspresso.tryevalEspresso.tryoptimizeEspresso.tryrewriteEspresso.unzipEspresso.valueEspresso.varidxsEspresso.varnameEspresso.with_guardsEspresso.with_indicesEspresso.with_keywordsEspresso.withoutEspresso.without_keywordsEspresso.without_types"
},

]}
