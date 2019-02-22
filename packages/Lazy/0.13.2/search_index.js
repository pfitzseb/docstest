var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Lazy.jl-1",
    "page": "Readme",
    "title": "Lazy.jl",
    "category": "section",
    "text": "(Image: Gitter chat)Pkg.add(\"Lazy\")Lazy.jl provides Julia with the cornerstones of functional programming - lazily-evaluated lists and a large library of functions for working with them. It\'s also a repository for some neat macros, which might be useful to you even if you don\'t want lazy lists (see below).Firstly, the canonical examples, in Julia:using Lazy\n\n# Note : prepends. Don\'t forget the semicolon!\n# Fibonacci sequence defined in terms of itself:\nfibs = @lazy 0:1:(fibs + drop(1, fibs));\n\ntake(20, fibs)\n#> (0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181)\n\n# isprime defined in terms of the prime numbers:\nisprime(n) =\n  @>> primes begin\n    takewhile(x -> x<=sqrt(n))\n    map(x -> n % x == 0)\n    any; !\n  end\n\n# the prime numbers defined in terms of isprime:\nprimes = filter(isprime, Lazy.range(2));\n\ntake(20, primes)\n#> (2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71)If you\'ve done any functional programming, you already know how to use Lazy.jl; just head down to the reference below to see what functions are available."
},

{
    "location": "#Intro-to-Laziness-1",
    "page": "Readme",
    "title": "Intro to Laziness",
    "category": "section",
    "text": "For the unfamiliar, laziness just means that the elements of the list aren\'t actally calculated until you use them. This allows you to perform all sorts of magic, like working with infinite lists or lists of items from the future.# Even square numbers:\n> esquares = @>> Lazy.range() map(x->x^2) filter(iseven);\n# first 5\n> take(5, esquares)\nList:\n  4\n  16\n  36\n  64\n  100\n# 99th\n> esquares[99]\n39204But lazy lists aren\'t just for mathematical tricks; you can use them very practically for things like file IO. For example, you might represent the lines of a terabyte-large file with a lazy list; you can process the lines as any other list, letting the IO happen in the background.# TODO: lineseq example\n@>> \"file.txt\" lineseq foreach(println) # Will work no matter many lines file.txt hasThe other thing that seperates lists from arrays is the huge amount of functionality that comes with most functional programming libraries, including Lazy.jl - if you know your way around them, most data manipulation becomes a simple case of chaining a few functions together. Even if you do ultimately need arrays for speed, you could do worse than to prototype with lists."
},

{
    "location": "#Macros-1",
    "page": "Readme",
    "title": "Macros",
    "category": "section",
    "text": "The threading macros will pipe values through functions, a bit like the |> operator but far more flexible. They can make code a lot cleaner by putting function calls in the order they are applied. The best way to understand them is by example:# Just like x |> f etc.\n@> x f == f(x)\n@> x g f == f(g(x))\n@> x a b c d e == e(d(c(b(a(x)))))\n\n# Unlike |>, functions can have arguments - the value\n# preceding a function will be treated as its first argument\n@> x g(y, z) f == f(g(x, y, z))\n\n@> x g f(y, z) == f(g(x), y, z)\n\n# @>> does the exact same thing, but with value treated as the *last* argument.\n\n@>> x g(y, z) f == f(g(y, z, x))\n\n@>> x g f(y, z) == f(y, z, g(x))\n\n# @as lets you name the threaded argmument\n@as _ x f(_, y) g(z, _) == g(z, f(x, y))\n\n# All threading macros work over begin blocks\n\n@as x 2 begin\n x^2\n x+2\nend == 6"
},

{
    "location": "#Function-Reference-1",
    "page": "Readme",
    "title": "Function Reference",
    "category": "section",
    "text": "List # The abstract type that represents lazy lists\n\nlist(1,2,3) == (1 2 3)\n\nprepend(1, list(2,3,4)) == 1:list(2,3,4) == (1 2 3 4)\n\n# Most list handling functions have similar names\n# to those in Clojure.\n\n# Create a seq from any iterator or array\nseq([1,2,3]) == seq(1:3) == (1 2 3)\n\n# Infinite list of an element\nconstantly(x) == (x x x ...)\nconstantly(1) == (1 1 1 ...)\n\n# Infinite list of function calls\nrepeatedly(f) == (f() f() f() ...)\nrepeatedly(rand) == (0.634 0.478 0.776 ...)\n\n# Inifnitely repeat list\ncycle(a) == (a... a... a... ...)\ncycle([1,2,3]) == (1 2 3 1 2 3 1 2 3 1 ...)\n\n# Repeatedly nest function calls\niterated(f, x) == (x f(x) f(f(x)) ...)\niterated(x->x^2, 2) == (2 4 16 256 65536 ...)\n\nrange(2) == (2 3 4 5 ...)\nrange(1, 5) == (1 2 3 4 5)\nrange(1, 5, 2) == (1 3 5)\n\nlist(1,2,3) * list(4,5,6) == (1 2 3 4 5 6)\n\nfirst(list(1,2,3)) == 1\ntail(list(1,2,3)) == (2 3)\n\nflatten(list(1,2,list(3,4))) == (1 2 3 4)\n\ntakeuntil(x -> x > 1, 0:1) == (0 1)\ntakeuntil(x -> x > 1, 0:5) == (0 1 2)\ntakeuntil(x -> x > 1, 2:5) == (2)\ntakeuntil(x -> x > 1, []) == ()\n\nriffle\ninterpose\ntake\ndrop\ntakelast\ndroplast\ntakenth\ntakewhile\ndropwhile\n# These work as for arrays, but are\n# lazy where appropriate.\nmap, reduce, filter, reverse\nlazymap\nreductions\nremove\ndorun\nforeach\ndistinct\ngroupby\npartition\npartitionby\nsplitat\nsplitby\n\n# @lazy is the secret sauce that makes infinite definitions\n# work; usually you can just wrap your list definition in it:\n@lazy [1,2,3] == (1 2 3)\n# Define a lazy recursive function\nconstantly(x) = @lazy x:constantly(x)\n\n# Make a function map itself over lists\n@listable exp\nexp(range()) == (2.71 7.38 20.08 54.59 148.41 ...)\n\n# Threading macros, see above\n@>, @>>"
},

{
    "location": "autodocs/#Lazy.@>",
    "page": "Docstrings",
    "title": "Lazy.@>",
    "category": "macro",
    "text": "The threading macro is like a more flexible version of the |> operator.\n\n@> x f = f(x)\n@> x g f == f(g(x))\n@> x a b c d e == e(d(c(b(a(x)))))\n\nUnlike |>, functions can have arguments - the value preceding a function will be treated as its first argument\n\n@> x g(y, z) f == f(g(x, y, z))\n\n@> x g f(y, z) == f(g(x), y, z)\n\nSee also @>>, @as.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@>>",
    "page": "Docstrings",
    "title": "Lazy.@>>",
    "category": "macro",
    "text": "Same as @>, but threads the last argument.\n\n@>> x g(y, z) f == f(g(y, z, x))\n\n@>> x g f(y, z) == f(y, z, g(x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@as",
    "page": "Docstrings",
    "title": "Lazy.@as",
    "category": "macro",
    "text": "@as lets you name the threaded argmument\n\n@as _ x f(_, y) g(z, _) == g(z, f(x, y))\n\nAll threading macros work over begin blocks\n\n@as x 2 begin  x^2  x+2 end == 6\n\n@_ is a version of @as which defaults to _ as the argument name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@bounce",
    "page": "Docstrings",
    "title": "Lazy.@bounce",
    "category": "macro",
    "text": "Tail recursion that doesn\'t blow the stack.\n\n@bounce even(n) = n == 0 ? true : odd(n-1)\n@bounce odd(n) = n == 0 ? false : even(n-1)\n\neven(1_000_000) # Blows up without `@bounce`.\n#> true\n\nFor simple cases you probably want the much faster @rec.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@d",
    "page": "Docstrings",
    "title": "Lazy.@d",
    "category": "macro",
    "text": "Creates a typed dictionary, e.g.\n\njulia> @d(a=>1,b=>2)    Dict{Any,Any} with 2 entries:      :a => 1      :b => 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@defonce",
    "page": "Docstrings",
    "title": "Lazy.@defonce",
    "category": "macro",
    "text": "Stop Julia from complaining about redifined consts/types –\n\n@defonce type MyType\n  ...\nend\nor\n@defonce const pi = 3.14\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@dotimes",
    "page": "Docstrings",
    "title": "Lazy.@dotimes",
    "category": "macro",
    "text": "Repeat body n times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@forward",
    "page": "Docstrings",
    "title": "Lazy.@forward",
    "category": "macro",
    "text": "@forward T.x functions...\n\nDefine methods for functions on type T, which call the relevant function on the field x.\n\nExample\n\nstruct Wrapper\n    x\nend\n\n@forward Wrapper.x  Base.sqrt                                  # now sqrt(Wrapper(4.0)) == 2.0\n@forward Wrapper.x  Base.length, Base.getindex, Base.iterate   # several forwarded functions are put in a tuple\n@forward Wrapper.x (Base.length, Base.getindex, Base.iterate)  # equivalent to above\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@oncethen",
    "page": "Docstrings",
    "title": "Lazy.@oncethen",
    "category": "macro",
    "text": "A do-while loop – executes the while loop once regardless of the condition, then tests the condition before subsequen iterations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@rec",
    "page": "Docstrings",
    "title": "Lazy.@rec",
    "category": "macro",
    "text": "Enables efficient recursive functions, e.g.\n\n@rec reduce(f::Function, v, xs::List) =\n  isempty(xs) ? v : reduce(f, f(v, first(xs)), tail(xs))\n\nWithout @rec this function would overflow the stack for lists of 80,000 or more elements.\n\nCaveats:\n\n• No support for trampolining, i.e. only calls to the     given function are optimised away.   • Ignores multiple dispatch – it is assumed that the function\'s     name always refers to the given definition.   • Don\'t rebind the function\'s name in a let (see above).   • Don\'t use this with varargs functions.\n\nUse the more flexible, but slower, @bounce to avoid these issues.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@switch",
    "page": "Docstrings",
    "title": "Lazy.@switch",
    "category": "macro",
    "text": "A switch statement of sorts:\n\n@switch x begin\n  1; \"x equals one!\"\n  2; \"x equals two!\"\n  \"x equals something else!\"\nend\n\nHowever, it\'s a bit more general than a regular switch in that you can test more than just equality:\n\n@switch isa(x, _) begin\n  Integer; \"x is an integer!\"\n  FloatingPoint; \"x is a float!\"\n  \"x is something else!\"\nend\n\n@switch _ begin\n  a > b;  \"more than!\"\n  a < b;  \"less than!\"\n  a == b; \"equal!\"       # Note that this level of enthusiasm is not mandatory.\nend\n\nWhere _ is replaced by the value for testing in each case. The final expression, if there is one, is used as the default value; if there is no default and nothing matches an error will be thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.@with",
    "page": "Docstrings",
    "title": "Lazy.@with",
    "category": "macro",
    "text": "End-less let block, e.g.\n\n@with (x = 1, y = 2),\n  x+y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.takeuntil",
    "page": "Docstrings",
    "title": "Lazy.takeuntil",
    "category": "function",
    "text": "takeuntil(pred, list)\n\nTake the elements in list until the pred function return true. Notice that the one which makes pred true is also taken. All elements will be taken if no one satisfy the pred function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.tupleassign",
    "page": "Docstrings",
    "title": "Lazy.tupleassign",
    "category": "function",
    "text": "Generate an expression like (a, b) = (c, d).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Lazy.@>Lazy.@>>Lazy.@_Lazy.@asLazy.@bounceLazy.@dLazy.@defonceLazy.@dotimesLazy.@dynamicLazy.@errsLazy.@forwardLazy.@initLazy.@iterLazy.@lazyLazy.@listableLazy.@oncethenLazy.@orLazy.@recLazy.@switchLazy.@withLazy.BindingLazy.BounceLazy.EmptyListLazy.LazyLazy.LazyListLazy.LinkedListLazy.ListLazy.SubIterLazy.bindLazy.bindingLazy.bindingsLazy.bounceLazy.cLazy.concatLazy.constantlyLazy.cycleLazy.dLazy.distinctLazy.doallLazy.dorunLazy.dropLazy.droplastLazy.dropwhileLazy.dynamic_eqLazy.dynamic_letLazy.evalLazy.fibsLazy.flattenLazy.foreachLazy.frequenciesLazy.groupbyLazy.includeLazy.initLazy.initmLazy.interposeLazy.isprimeLazy.isrootLazy.iteratedLazy.lastcallsLazy.lazymapLazy.listLazy.mapplyLazy.partitionLazy.partitionbyLazy.postwalkLazy.prependLazy.prewalkLazy.primesLazy.rangeLazy.realiseLazy.realise!Lazy.reductionsLazy.removeLazy.repeatedlyLazy.retcallsLazy.riffleLazy.rootLazy.sLazy.seqLazy.set!Lazy.showLazy.splitatLazy.splitbyLazy.splitswitchLazy.storageLazy.tailLazy.tailcallsLazy.takeLazy.takelastLazy.takenthLazy.takeuntilLazy.takewhileLazy.tcoLazy.trampdefLazy.trampnameLazy.trampolineLazy.tupleassignLazy.walk"
},

]}
