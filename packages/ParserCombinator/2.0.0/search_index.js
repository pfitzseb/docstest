var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: ParserCombinator) (Image: ParserCombinator) (Image: ParserCombinator)"
},

{
    "location": "#ParserCombinator-1",
    "page": "Readme",
    "title": "ParserCombinator",
    "category": "section",
    "text": "Example\nInstall\nManual\nParsers\nDesign\nReleasesA parser combinator library for Julia, similar to those in other languages, like Haskell\'s Parsec or Python\'s pyparsing.  It can parse any iterable type (not just strings) (except for regexp matchers, of course).ParserCombinator\'s main advantage is its flexible design, which separates the matchers from the evaluation strategy.  This makes it easy to \"plug in\" memoization, or debug traces, or to restrict backtracking in a similar way to Parsec - all while using the same grammar.It also contains pre-built parsers for Graph Modelling Language and DOT."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using ParserCombinator\n\n\n# the AST nodes we will construct, with evaluation via calc()\n\nabstract Node\n==(n1::Node, n2::Node) = n1.val == n2.val\ncalc(n::Float64) = n\ntype Inv<:Node val end\ncalc(i::Inv) = 1.0/calc(i.val)\ntype Prd<:Node val end\ncalc(p::Prd) = Base.prod(map(calc, p.val))\ntype Neg<:Node val end\ncalc(n::Neg) = -calc(n.val)\ntype Sum<:Node val end\ncalc(s::Sum) = Base.sum(map(calc, s.val))\n\n\n# the grammar (the combinators!)\n\nsum = Delayed()\nval = E\"(\" + sum + E\")\" | PFloat64()\n\nneg = Delayed()       # allow multiple (or no) negations (eg ---3)\nneg.matcher = val | (E\"-\" + neg > Neg)\n\nmul = E\"*\" + neg\ndiv = E\"/\" + neg > Inv\nprd = neg + (mul | div)[0:end] |> Prd\n\nadd = E\"+\" + prd\nsub = E\"-\" + prd > Neg\nsum.matcher = prd + (add | sub)[0:end] |> Sum\n\nall = sum + Eos()\n\n\n# and test \n\n# this prints 2.5\ncalc(parse_one(\"1+2*3/4\", all)[1])\n\n# this prints [Sum([Prd([1.0]),Prd([2.0])])]\nparse_one(\"1+2\", all)Some explanation of the above:I used rather a lot of \"syntactic sugar\".  You can use a more verbose, \"parser combinator\" style if you prefer.  For example, Seq(...) instead of +, or App(...) instead of >.\nThe matcher E\"xyz\" matches and then discards the string \"xyz\".\nEvery matcher returns a list of matched values.  This can be an empty list if the match succeeded but matched nothing.\nThe operator + matches the expressions to either side and appends the resulting lists.  Similarly, | matches one of two alternatives.\nThe operator |> calls the function to the right, passing in the results from the matchers on the left.\n> is similar to |> but interpolates the arguments (ie uses ...).  So instead of passing a list of values, it calls the function with multiple arguments.\nDelayed() lets you define a loop in the grammar.\nThe syntax [0:end] is a greedy repeat of the matcher to the left.  An alternative would be Star(...), while [3:4] would match only 3 or 4 values.And it supports packrat parsing too (more exactly, it can memoize results to avoid repeating matches).Still, for large parsing tasks (eg parsing source code for a compiler) it would probably be better to use a wrapper around an external parser generator, like Anltr.Note: There\'s an issue   with the Compat library which means the code above (the assignment to   Delayed.matcher) doesn\'t work with 0.3.  See calc.jl for   the uglier, hopefully temporary, 0.3 version."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "julia> Pkg.add(\"ParserCombinator\")"
},

{
    "location": "#Manual-1",
    "page": "Readme",
    "title": "Manual",
    "category": "section",
    "text": "Evaluation\nBasic Matchers\nEquality\nSequences\nEmpty Values\nAlternates\nRegular Expressions\nRepetition\nFull Match\nTransforms\nLookahead And Negation\nOther\nBacktracking\nControlling Memory Use\nSpaces - Pre And Post-Fixes\nLocating Errors\nCoding Style\nAdding Matchers\nDebugging\nMore Information"
},

{
    "location": "#Evaluation-1",
    "page": "Readme",
    "title": "Evaluation",
    "category": "section",
    "text": "Once you have a grammar (see below) you can evaluate it against some input in various ways:parse_one() - a simple, recursive decent parser with backtracking, but no memoization.  Returns a single result or throws a ParserException.\nparse_all() - a packrat parser, with memoization, that returns an iterator (evaluated lazily) over all possible parses of the input.\nparse_lines() - a parser in which the source is parsed line by line.  Pre-4.0.0 Julia copies strings that are passed to regex, so this reduces memory use when using regular expressions.\nparse_try() - similar to Haskell\'s Parsec, with backtracking only inside the Try() matcher.  More info here.\nparse_dbg() - as parse_one(), but also prints a trace of evaluation for all of the matchers that are children of a Trace() matchers.  Can also be used with other matchers via the keword delegate; for example parse_dbg(...; delegate=Cache) will provide tracing of the packrat parser (parse_all() above).  More info here.These are all implemented by providing different Config subtypes. For more information see Design, types.jl and parsers.jl."
},

{
    "location": "#Basic-Matchers-1",
    "page": "Readme",
    "title": "Basic Matchers",
    "category": "section",
    "text": "In what follows, remember that the power of parser combinators comes from how you combine these.  They can all be nested, refer to each other, etc etc."
},

{
    "location": "#Equality-1",
    "page": "Readme",
    "title": "Equality",
    "category": "section",
    "text": "julia> parse_one(\"abc\", Equal(\"ab\"))\n1-element Array{Any,1}:\n \"ab\"\n\njulia> parse_one(\"abc\", Equal(\"abx\"))\nERROR: ParserCombinator.ParserException(\"cannot parse\")This is so common that there\'s a corresponding string literal (it\'s \"e\" for `Equal(), the corresponding matcher).julia> parse_one(\"abc\", e\"ab\")\n1-element Array{Any,1}:\n \"ab\""
},

{
    "location": "#Sequences-1",
    "page": "Readme",
    "title": "Sequences",
    "category": "section",
    "text": "Matchers return lists of values.  Multiple matchers can return lists of lists, or the results can be \"flattened\" a level (usually more useful):julia> parse_one(\"abc\", Series(Equal(\"a\"), Equal(\"b\")))\n2-element Array{Any,1}:\n \"a\"\n \"b\"\n\njulia> parse_one(\"abc\", Series(Equal(\"a\"), Equal(\"b\"); flatten=false))\n2-element Array{Any,1}:\n Any[\"a\"]\n Any[\"b\"]\n\njulia> parse_one(\"abc\", Seq(Equal(\"a\"), Equal(\"b\")))\n2-element Array{Any,1}:\n \"a\"\n \"b\"\n\njulia> parse_one(\"abc\", And(Equal(\"a\"), Equal(\"b\")))\n2-element Array{Any,1}:\n Any[\"a\"]\n Any[\"b\"]\n\njulia> parse_one(\"abc\", e\"a\" + e\"b\")\n2-element Array{Any,1}:\n \"a\"\n \"b\"\n\njulia> parse_one(\"abc\", e\"a\" & e\"b\")\n2-element Array{Any,1}:\n Any[\"a\"]\n Any[\"b\"]Where Series() is implemented as Seq() or And(), depending on the value of flatten (default true).Warning - The sugared syntax has to follow standard operator precedence,   where | binds more tightly that +.  This means that   matcher1 + matcher2 | matcher3is almost always an error because it means:   matcher1 + (matcher2 | matcher3)while what was intended was:   (matcher1 + matcher2) | matcher3"
},

{
    "location": "#Empty-Values-1",
    "page": "Readme",
    "title": "Empty Values",
    "category": "section",
    "text": "Often, you want to match something but then discard it.  An empty (or discarded) value is an empty list.  This may help explain why I said flattening lists was useful above.julia> parse_one(\"abc\", And(Drop(Equal(\"a\")), Equal(\"b\")))\n2-element Array{Any,1}:\n Any[]   \n Any[\"b\"]\n\njulia> parse_one(\"abc\", Seq(Drop(Equal(\"a\")), Equal(\"b\")))\n1-element Array{Any,1}:\n \"b\"\n\njulia> parse_one(\"abc\", ~e\"a\" + e\"b\")\n1-element Array{Any,1}:\n \"b\"\n\njulia> parse_one(\"abc\", E\"a\" + e\"b\")\n1-element Array{Any,1}:\n \"b\"Note the ~ (tilde / home directory) and capital E in the last two examples, respectively."
},

{
    "location": "#Alternates-1",
    "page": "Readme",
    "title": "Alternates",
    "category": "section",
    "text": "julia> parse_one(\"abc\", Alt(e\"x\", e\"a\"))\n1-element Array{Any,1}:\n \"a\"\n\njulia> parse_one(\"abc\", e\"x\" | e\"a\")\n1-element Array{Any,1}:\n \"a\"Warning - The sugared syntax has to follow standard operator precedence,   where | binds more tightly that +.  This means that   matcher1 + matcher2 | matcher3is almost always an error because it means:   matcher1 + (matcher2 | matcher3)while what was intended was:   (matcher1 + matcher2) | matcher3"
},

{
    "location": "#Regular-Expressions-1",
    "page": "Readme",
    "title": "Regular Expressions",
    "category": "section",
    "text": "julia> parse_one(\"abc\", Pattern(r\".b.\"))\n1-element Array{Any,1}:\n \"abc\"\n\njulia> parse_one(\"abc\", p\".b.\")\n1-element Array{Any,1}:\n \"abc\"\n\njulia> parse_one(\"abc\", P\".\" + p\"b.\")\n1-element Array{Any,1}:\n \"bc\"As with equality, a capital prefix to the string literal (\"p\" for \"pattern\" by the way) implies that the value is dropped.Note that regular expresions do not backtrack.  A typical, greedy, regular expression will match as much of the input as possible, every time that it is used.  Backtracking only exists within the library matchers (which can duplicate regular expression functionality, when needed)."
},

{
    "location": "#Repetition-1",
    "page": "Readme",
    "title": "Repetition",
    "category": "section",
    "text": "julia> parse_one(\"abc\", Repeat(p\".\"))\n3-element Array{Any,1}:\n \"a\"\n \"b\"\n \"c\"\n\njulia> parse_one(\"abc\", Repeat(p\".\", 2))\n2-element Array{Any,1}:\n \"a\"\n \"b\"\n\njulia> collect(parse_all(\"abc\", Repeat(p\".\", 2, 3)))\n2-element Array{Any,1}:\n Any[\"a\",\"b\",\"c\"]\n Any[\"a\",\"b\"]    \n\njulia> parse_one(\"abc\", Repeat(p\".\", 2; flatten=false))\n2-element Array{Any,1}:\n Any[\"a\"]\n Any[\"b\"]\n\njulia> collect(parse_all(\"abc\", Repeat(p\".\", 0, 3)))\n4-element Array{Any,1}:\n Any[\"a\",\"b\",\"c\"]\n Any[\"a\",\"b\"]    \n Any[\"a\"]        \n Any[]           \n\njulia> collect(parse_all(\"abc\", Repeat(p\".\", 0, 3; greedy=false)))\n4-element Array{Any,1}:\n Any[]           \n Any[\"a\"]        \n Any[\"a\",\"b\"]    \n Any[\"a\",\"b\",\"c\"]You can also use Depth() and Breadth() for greedy and non-greedy repeats directly (but Repeat() is more readable, I think).The sugared version looks like this:julia> parse_one(\"abc\", p\".\"[1:2])\n2-element Array{Any,1}:\n \"a\"\n \"b\"\n\njulia> parse_one(\"abc\", p\".\"[1:2,:?])\n1-element Array{Any,1}:\n \"a\"\n\njulia> parse_one(\"abc\", p\".\"[1:2,:&])\n2-element Array{Any,1}:\n Any[\"a\"]\n Any[\"b\"]\n\njulia> parse_one(\"abc\", p\".\"[1:2,:&,:?])\n1-element Array{Any,1}:\n Any[\"a\"]Where the :? symbol is equivalent to greedy=false and :& to flatten=false (compare with + and & above).There are also some well-known special cases:julia> collect(parse_all(\"abc\", Plus(p\".\")))\n3-element Array{Any,1}:\n Any[\"a\",\"b\",\"c\"]\n Any[\"a\",\"b\"]    \n Any[\"a\"]        \n\njulia> collect(parse_all(\"abc\", Star(p\".\")))\n4-element Array{Any,1}:\n Any[\"a\",\"b\",\"c\"]\n Any[\"a\",\"b\"]    \n Any[\"a\"]        \n Any[]           "
},

{
    "location": "#Full-Match-1",
    "page": "Readme",
    "title": "Full Match",
    "category": "section",
    "text": "To ensure that all the input is matched, add Eos() to the end of the grammar.julia> parse_one(\"abc\", Equal(\"abc\") + Eos())\n1-element Array{Any,1}:\n \"abc\"\n\njulia> parse_one(\"abc\", Equal(\"ab\") + Eos())\nERROR: ParserCombinator.ParserException(\"cannot parse\")"
},

{
    "location": "#Transforms-1",
    "page": "Readme",
    "title": "Transforms",
    "category": "section",
    "text": "Use App() or > to pass the current results to a function (or datatype constructor) as individual values.julia> parse_one(\"abc\", App(Star(p\".\"), tuple))\n1-element Array{Any,1}:\n (\"a\",\"b\",\"c\")\n\njulia> parse_one(\"abc\", Star(p\".\") > string)\n1-element Array{Any,1}:\n \"abc\"The action of Appl() and |> is similar, but everything is passed as a single argument (a list).julia> type Node children end\n\njulia> parse_one(\"abc\", Appl(Star(p\".\"), Node))\n1-element Array{Any,1}:\n Node(Any[\"a\",\"b\",\"c\"])\n\njulia> parse_one(\"abc\", Star(p\".\") |> x -> map(uppercase, x))\n3-element Array{Any,1}:\n \"A\"\n \"B\"\n \"C\""
},

{
    "location": "#Lookahead-And-Negation-1",
    "page": "Readme",
    "title": "Lookahead And Negation",
    "category": "section",
    "text": "Sometimes you can\'t write a clean grammar that just consumes data: you need to check ahead to avoid something.  Or you need to check ahead to make sure something works a certain way.julia> parse_one(\"12c\", Lookahead(p\"\\d\") + PInt() + Dot())\n2-element Array{Any,1}:\n 12   \n   \'c\'\n\njulia> parse_one(\"12c\", Not(Lookahead(p\"[a-z]\")) + PInt() + Dot())\n2-element Array{Any,1}:\n 12   \n   \'c\'More generally, Not() replaces any match with failure, and failure with an empty match (ie the empty list)."
},

{
    "location": "#Other-1",
    "page": "Readme",
    "title": "Other",
    "category": "section",
    "text": ""
},

{
    "location": "#Backtracking-1",
    "page": "Readme",
    "title": "Backtracking",
    "category": "section",
    "text": "By default, matchers will backtrack as necessary.In some (unusual) cases, it is useful to disable backtracking.  For example, see PCRE\'s \"possessive\" matching.  This can be done here on a case-by-case basis by adding backtrack=false to Repeat(), Alternatives() and Series(), or by appending ! to the matchers that those functions generate: Depth!, Breadth!, Alt!, Seq! and And!.For example,collect(parse_all(\"123abc\", Seq!(p\"\\d\"[0:end], p\"[a-z]\"[0:end])))will give just a single match, because Seq! (with trailing !) does not backtrack the Repeat() child matchers.However, since regular expressions do not backtrack, it would have been simpler, and faster, to write the above ascollect(parse_all(\"123abc\", p\"\\d+[a-z]+\"))Using backtrack=false only disables backtracking of the direct children of those matchers.  To disable all backtracking, then the change must be made to all matchers in the grammar.  For example, in theory, the following two grammars have different backtracking behaviour:Series(Repeat(e\"a\", 0, 3), e\"b\"; backtrack=false)\nSeries(Repeat(e\"a\", 0, 3; backtrack=false), e\"b\"; backtrack=false)(although, in practice, they are identical, in this contrived example, because e\"a\" doesn\'t backtrack anyway).This makes a grammar more efficient, but also more specific.  It can reduce the memory consumed by the parser, but does not guarantee that resources will be released - see the next section for a better approach to reducing memory use."
},

{
    "location": "#Controlling-Memory-Use-1",
    "page": "Readme",
    "title": "Controlling Memory Use",
    "category": "section",
    "text": "Haskell\'s Parsec, if I understand correctly, does not backtrack by default.  More exactly, it does not allow input that has been consumed (matched) to be read again.  This reduces memory consumption (at least when parsing files, since read data can be discarded), but only accepts LL(1) grammars.To allow parsing of a wider range of grammars, Parsec then introduces the Try combinator, which enables backtracking in some (generally small) portion of the grammar.The same approach can be used with this library, using parse_try.file1.txt:\nabcdefghijklmnopqrstuvwxyz\n0123456789open(\"test1.txt\", \"r\") do io\n    # this throws an execption because it requires backtracking\n    parse_try(io, p\"[a-z]\"[0:end] + e\"m\" > string)\nend\n\nopen(\"test1.txt\", \"r\") do io\n    # this (with Try(...)) works fine\n    parse_try(io, Try(p\"[a-z]\"[0:end] + e\"m\" > string))\nendWithout backtracking, error messages using the Error() matcher are much more useful (this is why Parsec can provide good error messages):julia> try\n         parse_try(\"?\", Alt!(p\"[a-z]\", p\"\\d\", Error(\"not letter or number\")))\n       catch x\n         println(x.msg)\n       end\nnot letter or number at (1,1)\n?\n^where the (1,1) is line number and column - so this failed on the first character of the first line.Finally, note that this is implemented at the source level, by restricting what text is visible to the matchers.  Matchers that could backtrack will still make the attempt.  So you should also disable backtracking in the  matchers, where you do not need it, for an efficient grammar."
},

{
    "location": "#Spaces-Pre-And-Post-Fixes-1",
    "page": "Readme",
    "title": "Spaces - Pre And Post-Fixes",
    "category": "section",
    "text": "The lack of a lexer can complicate the handling of whitespace when using parser combinators.  This library includes the ability to add arbitrary matchers before or after named matchers in the grammar - something that can be useful for matching and discarding whitespace.For example,spc = Drop(Star(Space()))\n\n@with_pre spc begin\n\n    sum = Delayed()\n    val = E\"(\" + spc + sum + spc + E\")\" | PFloat64()\n\n    neg = Delayed()             # allow multiple negations (eg ---3)\n    neg.matcher = Nullable{Matcher}(val | (E\"-\" + neg > Neg))\n\n    mul = E\"*\" + neg\n    div = E\"/\" + neg > Inv\n    prd = neg + (mul | div)[0:end] |> Prd\n\n    add = E\"+\" + prd\n    sub = E\"-\" + prd > Neg\n    sum.matcher = Nullable{Matcher}(prd + (add | sub)[0:end] |> Sum)\n\n    all = sum + spc + Eos()\n\nendextends the parser given earlier to discard whitespace between numbers and symbols.  The automatc addition of spc as a prefix to named matchers (those assigned to a variable: sum, val, neg, etc) means that it only needs to be added explicitly in a few places."
},

{
    "location": "#Locating-Errors-1",
    "page": "Readme",
    "title": "Locating Errors",
    "category": "section",
    "text": "Sometimes it is useful to report to the user where the input text is \"wrong\".  For a recursive descent parser one useful indicator is the maximum depth reached in the source.This can be retrieved using the Debug config.  Here is a simple example that delegates to NoCache (the default confg for parse_one()):grammar = p\"\\d+\" + Eos()\nsource = \"123abc\"\n             # make the parser task\ndebug, task = make(Debug, source, grammar; delegate=NoCache)\nonce(task)   # this does the parsing and throws an exception\n             # the debug config now contains max_iter\nprintln(source[debug.max_iter:end])   # show the error location \"abc\"This is a little complex because I don\'t pre-define a function for this case (cf parse_one()).  Please email me if you think I should (currently it\'s unclear what features to support directly, and what to leave for \"advanced\" users).For more information see parsers.jl and debug.jl.An alternative approach to error messages is to use parse_try() with the Error() matcher - see here."
},

{
    "location": "#Coding-Style-1",
    "page": "Readme",
    "title": "Coding Style",
    "category": "section",
    "text": "Don\'t go reinventing regexps.  The built-in regexp engine is way, way more efficient than this library could ever be.  So call out to regexps liberally. The p\"...\" syntax makes it easy.But don\'t use regular expressions if you need to backtrack what is being matched.Drop stuff you don\'t need.Transform things into containers so that your result has nice types.  Look at how the example works.Understand the format you are parsing.  What motivated the person who designed the format?  Compare the GML and DOT parsers - they return different results because the format authors cared about different things.  GML is an elegant, general data format, while DOT is a sequential description - a program, almost - that encodes graph layouts."
},

{
    "location": "#Adding-Matchers-1",
    "page": "Readme",
    "title": "Adding Matchers",
    "category": "section",
    "text": "First, are you sure you need to add a matcher?  You can do a lot with transforms.If you do, here are some places to get started:Equal() in matchers.jl is a great example for something that does a simple, single thing, and returns success or failure.\nMost matchers that call to a sub-matcher can be implemented as transforms. But if you insist, there\'s an example in case.jl.\nIf you want to write complex, stateful matchers then I\'m afraid you\'re going to have to learn from the code for Repeat() and Series().  Enjoy!"
},

{
    "location": "#Debugging-1",
    "page": "Readme",
    "title": "Debugging",
    "category": "section",
    "text": "Debugging a grammar can be a frustrating experience - there are times when it really helps to have a simple view \"inside\" what is happening.  This is supported by parse_dbg which will print a record of all messages (execute and response - see design) for matchers inside a Trace() matcher.In addition, if the grammar is defined inside a @with_names macro, the symbols used to identify various parts of the grammar (the variable names) are displayed when appropriate.Here\'s a full example (you can view less by applying Trace() to only the matchers you care about):@with_names begin\n\n    sum = Delayed()\n    val = E\"(\" + sum + E\")\" | PFloat64()\n\n    neg = Delayed()             # allow multiple negations (eg ---3)\n    neg.matcher = val | (E\"-\" + neg > Neg)\n    \n    mul = E\"*\" + neg\n    div = E\"/\" + neg > Inv\n    prd = neg + (mul | div)[0:end] |> Prd\n    \n    add = E\"+\" + prd\n    sub = E\"-\" + prd > Neg\n    sum.matcher = prd + (add | sub)[0:end] |> Sum\n    \n    all = sum + Eos()\nend\n\nparse_dbg(\"1+2*3/4\", Trace(all))which gives:  1:1+2*3/4    00 Trace->all\n  1:1+2*3/4    01  all->sum\n  1:1+2*3/4    02   Transform->Seq\n  1:1+2*3/4    03    Seq->prd\n  1:1+2*3/4    04     prd->Seq\n  1:1+2*3/4    05      Seq->neg\n  1:1+2*3/4    06       Alt->Seq\n  1:1+2*3/4    07        Seq->Drop\n  1:1+2*3/4    08         Drop->Equal\n   :           08         Drop<-!!!\n   :           07        Seq<-!!!\n   :           06       Alt<-!!!\n  1:1+2*3/4    06       Alt->Transform\n  1:1+2*3/4    07        Transform->Pattern\n  2:+2*3/4     07        Transform<-{\"1\"}\n  2:+2*3/4     06       Alt<-{1.0}\n  2:+2*3/4     05      Seq<-{1.0}\n  2:+2*3/4     05      Seq->Depth\n  2:+2*3/4     06       Depth->Alt\n  2:+2*3/4     07        Alt->mul\n  2:+2*3/4     08         mul->Drop\n  2:+2*3/4     09          Drop->Equal\n   :           09          Drop<-!!!\n   :           08         mul<-!!!\n   :           07        Alt<-!!!\n  2:+2*3/4     07        Alt->div\n  2:+2*3/4     08         div->Seq\n  2:+2*3/4     09          Seq->Drop\n  2:+2*3/4     10 Drop->Equal\n   :           10 Drop<-!!!\n   :           09          Seq<-!!!\n   :           08         div<-!!!\n   :           07        Alt<-!!!\n   :           06       Depth<-!!!\n  2:+2*3/4     05      Seq<-{}\n  2:+2*3/4     04     prd<-{1.0}\n  2:+2*3/4     03    Seq<-{Prd({1.0})}\n  2:+2*3/4     03    Seq->Depth\n  2:+2*3/4     04     Depth->Alt\n  2:+2*3/4     05      Alt->add\n  2:+2*3/4     06       add->Drop\n  2:+2*3/4     07        Drop->Equal\n  3:2*3/4      07        Drop<-{\"+\"}\n  3:2*3/4      06       add<-{}\n  3:2*3/4      06       add->prd\n  3:2*3/4      07        prd->Seq\n  3:2*3/4      08         Seq->neg\n  3:2*3/4      09          Alt->Seq\n  3:2*3/4      10 Seq->Drop\n  3:2*3/4      11  Drop->Equal\n   :           11  Drop<-!!!\n   :           10 Seq<-!!!\n   :           09          Alt<-!!!\n  3:2*3/4      09          Alt->Transform\n  3:2*3/4      10 Transform->Pattern\n  4:*3/4       10 Transform<-{\"2\"}\n  4:*3/4       09          Alt<-{2.0}\n  4:*3/4       08         Seq<-{2.0}\n  4:*3/4       08         Seq->Depth\n  4:*3/4       09          Depth->Alt\n  4:*3/4       10 Alt->mul\n  4:*3/4       11  mul->Drop\n  4:*3/4       12   Drop->Equal\n  5:3/4        12   Drop<-{\"*\"}\n  5:3/4        11  mul<-{}\n  5:3/4        11  mul->neg\n  5:3/4        12   Alt->Seq\n  5:3/4        13    Seq->Drop\n  5:3/4        14     Drop->Equal\n   :           14     Drop<-!!!\n   :           13    Seq<-!!!\n   :           12   Alt<-!!!\n  5:3/4        12   Alt->Transform\n  5:3/4        13    Transform->Pattern\n  6:/4         13    Transform<-{\"3\"}\n  6:/4         12   Alt<-{3.0}\n  6:/4         11  mul<-{3.0}\n  6:/4         10 Alt<-{3.0}\n  6:/4         09          Depth<-{3.0}\n  6:/4         09          Depth->Alt\n  6:/4         10 Alt->mul\n  6:/4         11  mul->Drop\n  6:/4         12   Drop->Equal\n   :           12   Drop<-!!!\n   :           11  mul<-!!!\n   :           10 Alt<-!!!\n  6:/4         10 Alt->div\n  6:/4         11  div->Seq\n  6:/4         12   Seq->Drop\n  6:/4         13    Drop->Equal\n  7:4          13    Drop<-{\"/\"}\n  7:4          12   Seq<-{}\n  7:4          12   Seq->neg\n  7:4          13    Alt->Seq\n  7:4          14     Seq->Drop\n  7:4          15      Drop->Equal\n   :           15      Drop<-!!!\n   :           14     Seq<-!!!\n   :           13    Alt<-!!!\n  7:4          13    Alt->Transform\n  7:4          14     Transform->Pattern\n  8:           14     Transform<-{\"4\"}\n  8:           13    Alt<-{4.0}\n  8:           12   Seq<-{4.0}\n  8:           11  div<-{4.0}\n  8:           10 Alt<-{Inv(4.0)}\n  8:           09          Depth<-{Inv(4.0)}\n  8:           09          Depth->Alt\n  8:           10 Alt->mul\n  8:           11  mul->Drop\n  8:           12   Drop->Equal\n   :           12   Drop<-!!!\n   :           11  mul<-!!!\n   :           10 Alt<-!!!\n  8:           10 Alt->div\n  8:           11  div->Seq\n  8:           12   Seq->Drop\n  8:           13    Drop->Equal\n   :           13    Drop<-!!!\n   :           12   Seq<-!!!\n   :           11  div<-!!!\n   :           10 Alt<-!!!\n   :           09          Depth<-!!!\n  8:           08         Seq<-{3.0,Inv(4.0)}\n  8:           07        prd<-{2.0,3.0,Inv(4.0)}\n  8:           06       add<-{Prd({2.0,3.0,Inv(4.0)})}\n  8:           05      Alt<-{Prd({2.0,3.0,Inv(4.0)})}\n  8:           04     Depth<-{Prd({2.0,3.0,Inv(4.0)})}\n  8:           04     Depth->Alt\n  8:           05      Alt->add\n  8:           06       add->Drop\n  8:           07        Drop->Equal\n   :           07        Drop<-!!!\n   :           06       add<-!!!\n   :           05      Alt<-!!!\n  8:           05      Alt->sub\n  8:           06       sub->Seq\n  8:           07        Seq->Drop\n  8:           08         Drop->Equal\n   :           08         Drop<-!!!\n   :           07        Seq<-!!!\n   :           06       sub<-!!!\n   :           05      Alt<-!!!\n   :           04     Depth<-!!!\n  8:           03    Seq<-{Prd({2.0,3.0,Inv(4.0)})}\n  8:           02   Transform<-{Prd({1.0}),Prd({2.0,3.0,Inv(4.0)})}\n  8:           01  all<-{Sum({Prd({1.0}),Prd({2.0,3.0,Inv(4.0)})})}\n  8:           01  all->Eos\n  8:           01  all<-{}\n  8:           00 Trace<-{Sum({Prd({1.0}),Prd({2.0,3.0,Inv(4.0)})})}Some things to note here:The number on the left is the current iterator, followed by the source at the current offset.\nThe second column of numbers is the depth (relative to Trace()).  The indentation of the messages to the right reflects this, but \"wraps\" every 10 levels.\nThe message flow shows execute as -> and response as <-.  Matcher names are replaced by variable names (eg sum) where appropriate.\nThis functionality is implemented as a separate parser Config instance, so has no performance penalty when not used.  See debug.jl for more details.Finally, printing a matcher gives a useful tree view of the grammar. Loops are elided with ...:println(all)givesall\n+-[1]:sum\n| `-TransSuccess\n|   +-Seq\n|   | +-[1]:prd\n|   | | +-Seq\n|   | | | +-[1]:neg\n|   | | | | `-Alt\n|   | | | |   +-[1]:Seq\n|   | | | |   | +-[1]:Drop\n|   | | | |   | | `-Equal\n|   | | | |   | |   `-\"(\"\n|   | | | |   | +-[2]:sum...\n|   | | | |   | `-[3]:Drop\n|   | | | |   |   `-Equal\n|   | | | |   |     `-\")\"\n|   | | | |   +-[2]:TransSuccess\n|   | | | |   | +-Pattern\n|   | | | |   | | `-r\"-?(\\d*\\.?\\d+|\\d+\\.\\d*)([eE]\\d+)?\"\n|   | | | |   | `-f\n|   | | | |   `-[3]:TransSuccess\n|   | | | |     +-Seq\n|   | | | |     | +-[1]:Drop\n|   | | | |     | | `-Equal\n|   | | | |     | |   `-\"-\"\n|   | | | |     | `-[2]:neg...\n|   | | | |     `-f\n|   | | | `-[2]:Depth\n|   | | |   +-Alt\n|   | | |   | +-[1]:mul\n|   | | |   | | +-[1]:Drop\n|   | | |   | | | `-Equal\n|   | | |   | | |   `-\"*\"\n|   | | |   | | `-[2]:neg...\n|   | | |   | `-[2]:div\n|   | | |   |   +-Seq\n|   | | |   |   | +-[1]:Drop\n|   | | |   |   | | `-Equal\n|   | | |   |   | |   `-\"/\"\n|   | | |   |   | `-[2]:neg...\n|   | | |   |   `-f\n|   | | |   +-lo=0\n|   | | |   +-hi=9223372036854775807\n|   | | |   `-flatten=true\n|   | | `-f\n|   | `-[2]:Depth\n|   |   +-Alt\n|   |   | +-[1]:add\n|   |   | | +-[1]:Drop\n|   |   | | | `-Equal\n|   |   | | |   `-\"+\"\n|   |   | | `-[2]:prd...\n|   |   | `-[2]:sub\n|   |   |   +-Seq\n|   |   |   | +-[1]:Drop\n|   |   |   | | `-Equal\n|   |   |   | |   `-\"-\"\n|   |   |   | `-[2]:prd...\n|   |   |   `-f\n|   |   +-lo=0\n|   |   +-hi=9223372036854775807\n|   |   `-flatten=true\n|   `-f\n`-[2]:EosAlso, parse_XXX(...., debug=true) will show a strack trace from within the main parse loop (which gives more information on the source of any error)."
},

{
    "location": "#More-Information-1",
    "page": "Readme",
    "title": "More Information",
    "category": "section",
    "text": "For more details, I\'m afraid your best bet is the source code:types.jl introduces the types use throughout the code\nmatchers.jl defines things like Seq and Repeat\nsugar.jl adds +, [...] etc\nextras.jl has parsers for Int, Float, etc\nparsers.jl has more info on creating the parse_one and parse_all functions\ntransforms.jl defines how results can be manipulated\ntests.jl has a pile of one-liner tests that might be useful\ndebug.jl shows how to enable debug mode\ncase.jl has an example of a user-defined combinator"
},

{
    "location": "#Parsers-1",
    "page": "Readme",
    "title": "Parsers",
    "category": "section",
    "text": ""
},

{
    "location": "#Graph-Modelling-Language-1",
    "page": "Readme",
    "title": "Graph Modelling Language",
    "category": "section",
    "text": "GML describes a graph using a general dict / list format (something like JSON).parse_raw returns lists and tuples that directly match the GML structure.\nparse_dict places the same data in nested dicts and vectors.  The keys are symbols, so you access a file using the syntax dict[:field].\nparse_dict() has two important keyword arguments: lists is a list of keys that should be stored as lists (default is :graph, :node, :edge); unsafe should be set to true if mutiple values for other keys should be discarded (default false).  The underlying issue is that it is not clear from the file format which keys are lists, so the user must specify them; by default an error is thrown if this information is incomplete, but unsafe can be set if a user doesn\'t care about those attributes.Note that the parser does not conform fully to the specifications: ISO 8859-1 entities are not decoded (the parser should accept UTF 8); integers and floats are 64bit; strings can be any length; no check is made for required fields.For example, to print node IDs and edge connections in a graphusing ParserCombinator.Parsers.GML\n\nmy_graph = \"graph [\n  node [id 1]\n  node [id 2]\n  node [id 3]\n  edge [source 1 target 2]\n  edge [source 2 target 3]\n  edge [source 3 target 1]\n]\"\n\nroot = parse_dict(my_graph)\n\nfor graph in root[:graph]  # there could be multiple graphs\n    for node in graph[:node]\n        println(\"node $(node[:id])\")\n    end\n    for edge in graph[:edge]\n        println(\"edge $(edge[:source]) - $(edge[:target])\")\n    end\nendgivingnode 1\nnode 2\nnode 3\nedge 1 - 2\nedge 2 - 3\nedge 3 - 1For further details, please read GML.jl."
},

{
    "location": "#DOT-1",
    "page": "Readme",
    "title": "DOT",
    "category": "section",
    "text": "DOT describes a graph using a complex format that resembles a program (with mutable state) more than a specification (see comments in source).parse_dot returns a list of structured AST (see the types in DOT.jl), one per graph in the file.  It has one keyword argument, debug, which takes a Bool and enables the usual debugging output.\nnodes(g::Graph) extracts a set of node names from the structured AST.\nedges(g::Graph) extracts a set of edge names (node name pairs) from the structured AST.For example, to print node IDs and edge connections in a graphusing ParserCombinator.Parsers.DOT\n\nmy_graph = \"graph {\n  1 -- 2\n  2 -- 3\n  3 -- 1\n}\"\n\nroot = parse_dot(my_graph)\n\nfor node in nodes(root)\n    println(\"node $(node)\")\nend\nfor (node1, node2) in edges(root)\n    println(\"edge $(node1) - $(node2)\")\nendgivingnode 2\nnode 3\nedge 2 - 3\nedge 1 - 3\nedge 1 - 2Nodes and edges are unordered (returned as a Set).  The graph specification is undirected (cf digraph {...}) and so the order of nodes in an edge is in canonical (sorted) form."
},

{
    "location": "#Design-1",
    "page": "Readme",
    "title": "Design",
    "category": "section",
    "text": "For a longer discussion of the design of ParserCombinator.jl, please see this blog post, also available here."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Parser combinators were first written (afaik) in functional languages where tail calls do not consume stack.  Also, packrat parsers are easiest to implement in lazy languages, since shared, cached results are \"free\".Julia has neither tail recursion optimisation nor lazy evaluation.On the other hand, tail call optimisation is not much use when you want to support backtracking or combine results from child parsers. And it is possible to implement combinators for repeated matches using iteration rather than recursion.In short, life is complicated.  Different parser features have different costs and any particular implementation choice needs to be defended with detailed analysis.  Ideally we want an approach that supports features with low overhead by default, but which can be extended to accomodate more expensive features when necessary.This library defines the grammar in a static graph, which is then \"interpreted\" using an explicit trampoline (described in more detail below).  The main advantages are:Describing the grammar in a static graph of types, rather than mutually recursive functions, gives better integration with Julia\'s method dispatch.  So, for example, we can overload operators like + to sequence matchers, or use macros to modify the grammar at compile time.  And the \"execution\" of the grammar is simple, using dispatch on the graph nodes.\nThe semantics of the parser can be modified by changing the trampoline implementation (which can also be done by method dispatch on a \"configuration\" type).  This allows, for example, the choice of whether to use memoization to be separated from the grammar itself.\nState is explicitly identified and encapsulated, simplifying both backtracking (resumption from the current state) and memoization.The main disadvantages are:Defining new combinators is more complex.  The behaviour of a matcher is defined as a group of methods that correspond to transitions in a state machine.  On the other hand, with dispatch on the grammar and state nodes, the implementation remains idiomatic and compact.\nAlthough the \"feel\" and \"end result\" of the library are similar to other parser combinator libraries (the grammar types handled are as expected, for example), one could argue that the matchers are not \"real\" combinators (what is written by the user is a graph of types, not a set of recursive functions, even if the final execution logic is equivalent)."
},

{
    "location": "#Trampoline-Protocol-1",
    "page": "Readme",
    "title": "Trampoline Protocol",
    "category": "section",
    "text": "A matcher is invoked by a call toexecute(k::Config, m::Matcher, s::State, i) :: Messagewhere k must include, at a minimum, the field k.source that follows the iterator protocol when used with i.  So, for example, next(k.source, i) returns the next value from the source, plus a new iter.The initial call (ie the first time a given value of i is used, before any backtracking) will have s equal to CLEAN.A matcher returns a Message which indicates to the trampoline how processing should continue:Failure indicates that the match has failed and probably (depending on parent matcher and configuration) triggers backtracking.  There is a single instance of the type, FAILURE.\nSuccess indicates that the match succeeded, and so contains a result (of type Value, which is a type alias for Any[]) together with the updated iter i and any state that the matcher will need to look for further matchers (this can be be DIRTY which is globally used to indicate that all further matches will fail).\nExecute which results in a \"nested\" call to a child matcher\'s execute method (as above).The FAILURE and Success messages are processed by the trampoline and (typically, although a trampoline implementation may also use cached values) result in calls tofailure(k::Config, m::Matcher, s::State) :: Message\n\nsuccess(k::Config, m::Matcher, s::State, t::State, i, r::Value) :: Messagewhere the parent matcher (m) can do any clean-up work, resulting in a new Message.Note that the child\'s state, t, is returned to the parent.  It is the responsibility of the parent to save this (in its own state) if it wants to re-call the child."
},

{
    "location": "#Source-(Input-Text)-Protocol-1",
    "page": "Readme",
    "title": "Source (Input Text) Protocol",
    "category": "section",
    "text": "The source text is read using the standard Julia iterator protocol, extended with several methods defined in sources.jl.The use of iterators means that Dot() returns characters, not strings.  But in practice that matcher is rarely used (particularly since, with strings, you can use regular expressions - p\"pattern\" for example), and you can construct a string from multiple characters using > string."
},

{
    "location": "#Releases-1",
    "page": "Readme",
    "title": "Releases",
    "category": "section",
    "text": "1.7.0 - 2015-10-13 - Added DOT parser.1.6.0 - 2015-07-26 - Changed from s\" to e\"; added support for fast regex patch.1.5.0 - 2015-07-25 - Clarified source handling; improved GML speed.1.4.0 - 2015-07-18 - Added GML parser; related parse_try fixes.1.3.0 - 2015-06-27 - Added parse_try.1.2.0 - 2015-06-28 - Trampoline side rewritten; more execution modes.1.1.0 - 2015-06-07 - Fixed calc example; debug mode; much rewriting.1.0.0 - ~2015-06-03 - More or less feature complete."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ParserCombinator.@E_strParserCombinator.@P_strParserCombinator.@e_strParserCombinator.@p_strParserCombinator.@with_namesParserCombinator.@with_postParserCombinator.@with_preParserCombinator.ALLParserCombinator.AltParserCombinator.Alt!ParserCombinator.AltStateParserCombinator.AltState!ParserCombinator.AlternativesParserCombinator.Alternatives_ParserCombinator.AndParserCombinator.And!ParserCombinator.AppParserCombinator.ApplParserCombinator.ApplicableParserCombinator.BreadthParserCombinator.Breadth!ParserCombinator.BreadthGrowParserCombinator.BreadthStateParserCombinator.BreadthState!ParserCombinator.BreadthYieldParserCombinator.CLEANParserCombinator.CacheParserCombinator.CacheExceptionParserCombinator.CleanParserCombinator.ConfigParserCombinator.DIRTYParserCombinator.DebugParserCombinator.DelayedParserCombinator.DelegateParserCombinator.DelegateStateParserCombinator.DepthParserCombinator.Depth!ParserCombinator.DepthBacktrackParserCombinator.DepthSlurpParserCombinator.DepthSlurp!ParserCombinator.DepthStateParserCombinator.DepthYieldParserCombinator.DepthYield!ParserCombinator.DirtyParserCombinator.DotParserCombinator.DropParserCombinator.DropStateParserCombinator.EMPTYParserCombinator.EmptyParserCombinator.EntryParserCombinator.EosParserCombinator.EpsilonParserCombinator.EqualParserCombinator.ErrorParserCombinator.ExecuteParserCombinator.FAILUREParserCombinator.FailParserCombinator.FailureParserCombinator.FailureExceptionParserCombinator.IAppParserCombinator.IApplParserCombinator.ITransformParserCombinator.ITransformStateParserCombinator.InsertParserCombinator.KeyParserCombinator.LineAtParserCombinator.LineExceptionParserCombinator.LineIterParserCombinator.LineSourceParserCombinator.LookaheadParserCombinator.LookaheadStateParserCombinator.MAX_INDParserCombinator.MAX_RESParserCombinator.MAX_SRCParserCombinator.MatcherParserCombinator.MessageParserCombinator.NoCacheParserCombinator.NotParserCombinator.NotStateParserCombinator.OptParserCombinator.Opt!ParserCombinator.PFloat32ParserCombinator.PFloat64ParserCombinator.PIntParserCombinator.PInt16ParserCombinator.PInt32ParserCombinator.PInt64ParserCombinator.PInt8ParserCombinator.PUIntParserCombinator.PUInt16ParserCombinator.PUInt32ParserCombinator.PUInt64ParserCombinator.PUInt8ParserCombinator.ParseParserCombinator.ParserCombinatorParserCombinator.ParserErrorParserCombinator.ParserExceptionParserCombinator.ParsersParserCombinator.PatternParserCombinator.PlusParserCombinator.Plus!ParserCombinator.PlusListParserCombinator.PlusList!ParserCombinator.RepeatParserCombinator.RepeatStateParserCombinator.Repeat_ParserCombinator.RootParserCombinator.RootStateParserCombinator.SeqParserCombinator.Seq!ParserCombinator.SeriesParserCombinator.Series!ParserCombinator.SeriesStateParserCombinator.SeriesState!ParserCombinator.Series_ParserCombinator.SpaceParserCombinator.StarParserCombinator.Star!ParserCombinator.StarListParserCombinator.StarList!ParserCombinator.StateParserCombinator.SuccessParserCombinator.TraceParserCombinator.TraceStateParserCombinator.TransformParserCombinator.TransformStateParserCombinator.TryParserCombinator.TrySourceParserCombinator.TryStateParserCombinator.ValueParserCombinator.WordParserCombinator.always_printParserCombinator.arbitraryParserCombinator.axesParserCombinator.debugParserCombinator.diagnosticParserCombinator.discardParserCombinator.dispatchParserCombinator.evalParserCombinator.executeParserCombinator.expireParserCombinator.failureParserCombinator.flattenParserCombinator.fmt_errorParserCombinator.forwardsParserCombinator.includeParserCombinator.indentParserCombinator.is_delayed_1ParserCombinator.is_equalParserCombinator.is_symbol_1ParserCombinator.lastindexParserCombinator.line_atParserCombinator.makeParserCombinator.make_allParserCombinator.make_oneParserCombinator.max_depthParserCombinator.nlParserCombinator.onceParserCombinator.padParserCombinator.parentParserCombinator.parse_allParserCombinator.parse_all_cacheParserCombinator.parse_all_cache_dbgParserCombinator.parse_all_dbgParserCombinator.parse_all_nocacheParserCombinator.parse_all_nocache_dbgParserCombinator.parse_dbgParserCombinator.parse_linesParserCombinator.parse_lines_cacheParserCombinator.parse_lines_cache_dbgParserCombinator.parse_lines_dbgParserCombinator.parse_oneParserCombinator.parse_one_cacheParserCombinator.parse_one_cache_dbgParserCombinator.parse_one_dbgParserCombinator.parse_one_nocacheParserCombinator.parse_one_nocache_dbgParserCombinator.parse_tryParserCombinator.parse_try_cacheParserCombinator.parse_try_cache_dbgParserCombinator.parse_try_dbgParserCombinator.print_fieldParserCombinator.print_matcherParserCombinator.producerParserCombinator.repeat_successParserCombinator.round_downParserCombinator.round_upParserCombinator.serial_successParserCombinator.set_fixParserCombinator.set_fixesParserCombinator.set_nameParserCombinator.set_namesParserCombinator.shortParserCombinator.shortenParserCombinator.srcParserCombinator.successParserCombinator.truncate"
},

]}
