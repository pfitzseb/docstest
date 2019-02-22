var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ExprRules.jl-1",
    "page": "Readme",
    "title": "ExprRules.jl",
    "category": "section",
    "text": "Base functions for generating and optimizing Julia expressions from a grammar."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Please see the example notebook.Users may also be interested in expression optimization using ExprOptimization.jl."
},

{
    "location": "#Maintainers:-1",
    "page": "Readme",
    "title": "Maintainers:",
    "category": "section",
    "text": "Ritchie Lee, ritchie.lee@sv.cmu.edu\nTim Wheeler, tawheeler@stanford.edu\nMykel Kochenderfer, mykel@stanford.edu(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "autodocs/#ExprRules.@grammar",
    "page": "Docstrings",
    "title": "ExprRules.@grammar",
    "category": "macro",
    "text": "@grammar\n\nDefine a grammar and return it as a Grammar. For example:\n\ngrammar = @grammar begin\n    R = x\n    R = 1 | 2\n    R = R + R\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.ExpressionIterator",
    "page": "Docstrings",
    "title": "ExprRules.ExpressionIterator",
    "category": "type",
    "text": "ExpressionIterator(grammar::Grammar, max_depth::Int, sym::Symbol)\n\nAn iterator over all possible expressions of a grammar up to max_depth with start symbol sym.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.Grammar",
    "page": "Docstrings",
    "title": "ExprRules.Grammar",
    "category": "type",
    "text": "Grammar\n\nRepresents a grammar and its production rules. Use the @grammar macro to create a Grammar object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.Interpreter",
    "page": "Docstrings",
    "title": "ExprRules.Interpreter",
    "category": "module",
    "text": "Evaluates an expression without compiling it. Uses AST and symbol lookups. Only supports :call and :(=)  expressions at the moment. Example: tab = SymbolTable(:f => f, :x => x) ex = :(f(x)) interpret(tab, ex)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.NodeLoc",
    "page": "Docstrings",
    "title": "ExprRules.NodeLoc",
    "category": "type",
    "text": "NodeLoc\n\nA helper struct that points to a node in the tree via its parent such that the child can be easily swapped out. If i is 0 the node pointed to is the root node and parent is the node itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.NodeRecycler",
    "page": "Docstrings",
    "title": "ExprRules.NodeRecycler",
    "category": "type",
    "text": "Use a circular buffer to contain used RuleNodes to be recycled. First check the recycle bin to see if there are available RuleNodes, if not allocated a new one.  This helps minimize memory allocations and improves performance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.RuleNode",
    "page": "Docstrings",
    "title": "ExprRules.RuleNode",
    "category": "type",
    "text": "RuleNode\n\nType for representing nodes in an expression tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.Interpreter.SymbolTable",
    "page": "Docstrings",
    "title": "ExprRules.Interpreter.SymbolTable",
    "category": "type",
    "text": "Interpreter.SymbolTable(grammar::Grammar, mod::Module=Main)\n\nReturns a symbol table populated with mapping from symbols in grammar to symbols in module mod or Main, if defined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.child_types",
    "page": "Docstrings",
    "title": "ExprRules.child_types",
    "category": "function",
    "text": "child_types(grammar::Grammar, rule_index::Int)\n\nReturns the types of the children (nonterminals) of the production rule at rule_index.\n\n\n\n\n\nchild_types(grammar::Grammar, node::RuleNode)\n\nReturns the list of child types in the production rule used by node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.contains_returntype",
    "page": "Docstrings",
    "title": "ExprRules.contains_returntype",
    "category": "function",
    "text": "contains_returntype(node::RuleNode, grammar::Grammar, sym::Symbol, maxdepth::Int=typemax(Int))\n\nReturns true if the tree rooted at node contains at least one node at depth less than maxdepth with the given return type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.count_expressions",
    "page": "Docstrings",
    "title": "ExprRules.count_expressions",
    "category": "function",
    "text": "count_expressions(grammar::Grammar, max_depth::Int, sym::Symbol)\n\nCount the number of possible expressions of a grammar up to max_depth with start symbol sym.\n\n\n\n\n\ncount_expressions(iter::ExpressionIterator)\n\nCount the number of possible expressions in the expression iterator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.depth",
    "page": "Docstrings",
    "title": "ExprRules.depth",
    "category": "function",
    "text": "depth(root::RuleNode)\n\nReturn the depth of the expression tree rooted at root.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.get_childtypes",
    "page": "Docstrings",
    "title": "ExprRules.get_childtypes",
    "category": "function",
    "text": "get_childtypes(rule::Any, types::AbstractVector{Symbol})\n\nReturns the child types of a production rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.get_executable",
    "page": "Docstrings",
    "title": "ExprRules.get_executable",
    "category": "function",
    "text": "get_executable(rulenode::RuleNode, grammar::Grammar)\n\nReturns the executable julia expression represented in the expression tree with root rulenode.  The returned expression can be evaluated using eval().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.iseval",
    "page": "Docstrings",
    "title": "ExprRules.iseval",
    "category": "function",
    "text": "iseval(rule::Any)\n\nReturns true if the rule is the special evaluate immediately function, i.e., _()\n\n\n\n\n\niseval(grammar::Grammar)\n\nReturns true if any production rules in grammar contain the special _() eval function.\n\n\n\n\n\niseval(grammar::Grammar, rule_index::Int)\n\nReturns true if the production rule at rule_index contains the special _() eval function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.isterminal",
    "page": "Docstrings",
    "title": "ExprRules.isterminal",
    "category": "function",
    "text": "isterminal(rule::Any, types::AbstractVector{Symbol})\n\nReturns true if the rule is terminal, ie does not contain any of the types in the provided vector. For example, :(x) is terminal, and :(1+1) is terminal, but :(Real + Real) is typically not.\n\n\n\n\n\nisterminal(grammar::Grammar, rule_index::Int)\n\nReturns true if the production rule at rule_index is terminal, i.e., does not contain any nonterminal symbols.\n\n\n\n\n\nisterminal(grammar::Grammar, node::RuleNode)\n\nReturns true if the production rule used by node is terminal, i.e., does not contain any nonterminal symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.max_arity",
    "page": "Docstrings",
    "title": "ExprRules.max_arity",
    "category": "function",
    "text": "max_arity(grammar::Grammar)\n\nReturns the maximum arity (number of children) over all production rules in the grammar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.mindepth",
    "page": "Docstrings",
    "title": "ExprRules.mindepth",
    "category": "function",
    "text": "mindepth(grammar::Grammar, typ::Symbol, dmap::AbstractVector{Int})\n\nReturns the minimum depth achievable for a given nonterminal symbol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.mindepth_map",
    "page": "Docstrings",
    "title": "ExprRules.mindepth_map",
    "category": "function",
    "text": "mindepth_map(grammar::Grammar)\n\nReturns the minimum depth achievable for each production rule, dmap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.nchildren",
    "page": "Docstrings",
    "title": "ExprRules.nchildren",
    "category": "function",
    "text": "nchildren(grammar::Grammar, rule_index::Int)\n\nReturns the number of children (nonterminals) of the production rule at rule_index.\n\n\n\n\n\nnchildren(grammar::Grammar, node::RuleNode)\n\nReturns the number of children in the production rule used by node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.node_depth",
    "page": "Docstrings",
    "title": "ExprRules.node_depth",
    "category": "function",
    "text": "node_depth(root::RuleNode, node::RuleNode)\n\nReturn the depth of node for an expression tree rooted at root.  Depth is 1 when root == node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.nonterminals",
    "page": "Docstrings",
    "title": "ExprRules.nonterminals",
    "category": "function",
    "text": "nonterminals(grammar::Grammar)\n\nReturns a list of nonterminals in the grammar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.return_type",
    "page": "Docstrings",
    "title": "ExprRules.return_type",
    "category": "function",
    "text": "return_type(grammar::Grammar, rule_index::Int)\n\nReturns the type of the production rule at rule_index.\n\n\n\n\n\nreturn_types(grammar::Grammar, node::RuleNode)\n\nReturns the return type in the production rule used by node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.root_node_loc",
    "page": "Docstrings",
    "title": "ExprRules.root_node_loc",
    "category": "function",
    "text": "root_node_loc(root::RuleNode)\n\nReturns a NodeLoc pointing to the root node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.sample",
    "page": "Docstrings",
    "title": "StatsBase.sample",
    "category": "function",
    "text": "sample(root::RuleNode, typ::Symbol, grammar::Grammar, maxdepth::Int=typemax(Int))\n\nSelects a uniformly random node from the tree, limited to maxdepth.\n\n\n\n\n\nsample(root::RuleNode, typ::Symbol, grammar::Grammar,\n                      maxdepth::Int=typemax(Int))\n\nSelects a uniformly random node of the given return type, typ, limited to maxdepth.\n\n\n\n\n\nsample(::Type{NodeLoc}, root::RuleNode, maxdepth::Int=typemax(Int))\n\nSelects a uniformly random node in the tree no deeper than maxdepth using reservoir sampling. Returns a NodeLoc that specifies the location using its parent so that the subtree can be replaced.\n\n\n\n\n\nsample(::Type{NodeLoc}, root::RuleNode, typ::Symbol, grammar::Grammar)\n\nSelects a uniformly random node in the tree of a given type, specified using its parent such that the subtree can be replaced. Returns a NodeLoc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ExprRules.@grammarExprRules.ExprRulesExprRules.ExpressionIteratorExprRules.GrammarExprRules.InterpreterExprRules.NodeLocExprRules.NodeLocAndCountExprRules.NodeRecyclerExprRules.RuleNodeExprRules.RuleNodeAndCountExprRules.SymbolTableExprRules._add_to_symboltable!ExprRules._get_executableExprRules._mindepthExprRules._next_state!ExprRules._parse_rule!ExprRules._sampleExprRules.child_typesExprRules.contains_returntypeExprRules.count_expressionsExprRules.depthExprRules.evalExprRules.get_childtypesExprRules.get_executableExprRules.includeExprRules.interpretExprRules.isevalExprRules.isterminalExprRules.max_arityExprRules.mindepthExprRules.mindepth_mapExprRules.nchildrenExprRules.node_depthExprRules.nonterminalsExprRules.recycle!ExprRules.return_typeExprRules.root_node_locExprRules.sample"
},

]}
