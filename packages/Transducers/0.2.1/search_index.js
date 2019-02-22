var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Transducers.jl:-Efficient-and-type-stable-transducers-for-Julia-1",
    "page": "Readme",
    "title": "Transducers.jl: Efficient and type-stable transducers for Julia",
    "category": "section",
    "text": "[![Stable documentation][docs-stable-img]][docs-stable-url] [![Latest documentation][docs-dev-img]][docs-dev-url] [![Travis Status][travis-img]][travis-url] [![codecov.io][codecov-img]][codecov-url] [![Coverage Status][coveralls-img]][coveralls-url]Transducers.jl provides composable algorithms on \"sequence\" of inputs. They are called [transducers], first introduced in Clojure language by Rich Hickey.[transducers]: https://clojure.org/reference/transducersUsing transducers is quite straightforward, especially if you already know similar concepts in iterator libraries:using Transducers\nxf = Partition(7) |> Filter(x -> prod(x) % 11 == 0) |> Cat() |> Scan(+)\nmapfoldl(xf, +, 1:40)However, the protocol used for the transducers is quite different from iterators and results in a better performance for complex compositions.  Furthermore, some transducers support parallel execution.  If a transducer is composed of such transducers, it can be automatically re-used both in sequential (mapfoldl etc.) and parallel (mapreduce) contexts.See more in the documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "]add Transducers[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://tkf.github.io/Transducers.jl/stable [docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg [docs-dev-url]: https://tkf.github.io/Transducers.jl/dev [travis-img]: https://travis-ci.com/tkf/Transducers.jl.svg?branch=master [travis-url]: https://travis-ci.com/tkf/Transducers.jl [codecov-img]: http://codecov.io/github/tkf/Transducers.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/tkf/Transducers.jl?branch=master [coveralls-img]: https://coveralls.io/repos/tkf/Transducers.jl/badge.svg?branch=master&service=github [coveralls-url]: https://coveralls.io/github/tkf/Transducers.jl?branch=master"
},

{
    "location": "autodocs/#Transducers.@return_if_reduced",
    "page": "Docstrings",
    "title": "Transducers.@return_if_reduced",
    "category": "macro",
    "text": "@return_if_reduced complete(rf, val)\n\nIt transforms the given expression to:\n\nval isa Reduced && return reduced(complete(rf, unreduced(val)))\n\nThat is to say, if val is Reduced, unpack it, call complete, re-pack into Reduced, and then finally return it.\n\nExamples\n\njulia> using Transducers: @return_if_reduced\n\njulia> @macroexpand @return_if_reduced complete(rf, val)\n:(val isa Transducers.Reduced && return (Transducers.reduced)(complete(rf, (Transducers.unreduced)(val))))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.@simd_if",
    "page": "Docstrings",
    "title": "Transducers.@simd_if",
    "category": "macro",
    "text": "@simd_if rf for ... end\n\nWrap for-loop with @simd if the outer most transducer of the reducing function rf is UseSIMD.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.@~",
    "page": "Docstrings",
    "title": "Transducers.@~",
    "category": "macro",
    "text": "(@~ broadcasting_expression) :: Broadcasted\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.AbstractFilter",
    "page": "Docstrings",
    "title": "Transducers.AbstractFilter",
    "category": "type",
    "text": "AbstractFilter <: Transducer\n\nThe abstract type for filter-like transducers.  outtype is appropriately defined for child types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Cat",
    "page": "Docstrings",
    "title": "Transducers.Cat",
    "category": "type",
    "text": "Cat()\n\nConcatenate/flatten nested iterators.\n\nThis API is modeled after cat in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Cat(), [[1, 2], [3], [4, 5]]) == 1:5\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Completing",
    "page": "Docstrings",
    "title": "Transducers.Completing",
    "category": "type",
    "text": "Completing(function)\n\nWrap a function to add a no-op complete protocol.  Use it when passing a function without 1-argument arity to transduce etc.\n\nThis API is modeled after completing in Clojure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Count",
    "page": "Docstrings",
    "title": "Transducers.Count",
    "category": "type",
    "text": "Count([start[, step]])\n\nGenerate a sequence start, start + step, start + step + step, and so on.\n\nNote that input is ignored.  To use the input in the downstream reduction steps, use Zip.\n\nstart defaults to 1 and step defaults to oneunit(start).\n\nSee also: Iterators.countfrom. Enumerate\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Zip(Map(identity), Count()), -3:-1)\n3-element Array{Tuple{Int64,Int64},1}:\n (-3, 1)\n (-2, 2)\n (-1, 3)\n\njulia> using Dates\n\njulia> collect(Zip(Map(identity), Count(Day(1))) |> Map(xs -> *(xs...)), 1:3)\n3-element Array{Day,1}:\n 1 day\n 4 days\n 9 days\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Dedupe",
    "page": "Docstrings",
    "title": "Transducers.Dedupe",
    "category": "type",
    "text": "Dedupe()\n\nDe-duplicate consecutive items.\n\nThis API is modeled after dedupe in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Dedupe(), [1, 1, 2, 1, 3, 3, 2])\n5-element Array{Int64,1}:\n 1\n 2\n 1\n 3\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Drop",
    "page": "Docstrings",
    "title": "Transducers.Drop",
    "category": "type",
    "text": "Drop(n)\n\nDrop first n items.\n\nThis API is modeled after drop in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Drop(3), 1:5)\n2-element Array{Int64,1}:\n 4\n 5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.DropLast",
    "page": "Docstrings",
    "title": "Transducers.DropLast",
    "category": "type",
    "text": "DropLast(n)\n\nDrop last n items.\n\nThis API is modeled after drop-last in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(DropLast(2), 1:5)\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\njulia> collect(DropLast(2), 1:1)\n0-element Array{Int64,1}\n\njulia> collect(DropLast(2), 1:0)\n0-element Array{Int64,1}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.DropWhile",
    "page": "Docstrings",
    "title": "Transducers.DropWhile",
    "category": "type",
    "text": "DropWhile(pred)\n\nDrop items while pred returns true consecutively.  It becomes a no-op after pred returns a false.\n\nThis API is modeled after drop-while in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(DropWhile(x -> x < 3), [1:5; 1:2])\n5-element Array{Int64,1}:\n 3\n 4\n 5\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Enumerate",
    "page": "Docstrings",
    "title": "Transducers.Enumerate",
    "category": "type",
    "text": "Enumerate([start[, step]])\n\nTransducer variant of Base.enumerate. The start and step arguments are optional and have the same meaning as in Count.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Enumerate(), [\"A\", \"B\", \"C\"])\n3-element Array{Tuple{Int64,String},1}:\n (1, \"A\")\n (2, \"B\")\n (3, \"C\")\n\njulia> start=2; step=3;\n\njulia> collect(Enumerate(start, step), [\"A\", \"B\", \"C\"])\n3-element Array{Tuple{Int64,String},1}:\n (2, \"A\")\n (5, \"B\")\n (8, \"C\")\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Filter",
    "page": "Docstrings",
    "title": "Transducers.Filter",
    "category": "type",
    "text": "Filter(pred)\n\nSkip items for which pred is evaluated to false.\n\nThis API is modeled after filter in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Filter(iseven), 1:3)\n1-element Array{Int64,1}:\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.FlagFirst",
    "page": "Docstrings",
    "title": "Transducers.FlagFirst",
    "category": "type",
    "text": "FlagFirst()\n\nOutput (isfirst, input) where isfirst::Bool is true only for the first iteration and input is the original input.\n\nSee also: IterTools.flagfirst\n\nExamples\n\njulia> using Transducers\n\njulia> collect(FlagFirst(), 1:3)\n3-element Array{Tuple{Bool,Int64},1}:\n (true, 1)\n (false, 2)\n (false, 3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.GetIndex",
    "page": "Docstrings",
    "title": "Transducers.GetIndex",
    "category": "type",
    "text": "GetIndex(array)\nGetIndex{inbounds}(array)\n\nTransform an integer input i to array[i].\n\nwarning: Warning\nThis API is experimental.  Backward incompatible change, including the removal of this API, is more likely to occur than other parts of this package.\n\nExamples\n\njulia> using Transducers\n       using Transducers: GetIndex\n\njulia> collect(GetIndex(1:10), [2, 3, 4])\n3-element Array{Int64,1}:\n 2\n 3\n 4\n\njulia> collect(GetIndex{true}(1:10), [2, 3, 4])\n3-element Array{Int64,1}:\n 2\n 3\n 4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Initializer",
    "page": "Docstrings",
    "title": "Transducers.Initializer",
    "category": "type",
    "text": "Initializer(f)\n\nWrap a factory function to create an initial value for transducible processes (e.g., mapfoldl) and \"stateful\" transducers (e.g., Scan).  Factory function f takes the input type to the transducer or the reducing function.\n\nInitializer must be used whenever using in-place reduction with mapreduce.\n\nExamples\n\njulia> using Transducers\n\njulia> xf1 = Scan(push!, [])\nScan(push!, Any[])\n\njulia> mapfoldl(xf1, right, 1:3)\n3-element Array{Any,1}:\n 1\n 2\n 3\n\njulia> xf1\nScan(push!, Any[1, 2, 3])\n\nNotice that the array is stored in xf1 and mutated in-place.  As a result, second run of mapfoldl contains the results from the first run:\n\njulia> mapfoldl(xf1, right, 10:11)\n5-element Array{Any,1}:\n  1\n  2\n  3\n 10\n 11\n\nThis may not be desired.  To avoid this behavior, create an Initializer object which takes a factory function to create a new initial value.\n\njulia> xf2 = Scan(push!, Initializer(T -> T[]))\nScan(push!, Initializer(##9#10()))\n\njulia> mapfoldl(xf2, right, 1:3)\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\njulia> mapfoldl(xf2, right, [10.0, 11.0])\n2-element Array{Float64,1}:\n 10.0\n 11.0\n\nKeyword argument init for transducible processes also accept an Initializer:\n\njulia> mapfoldl(Map(identity), push!, \"abc\"; init=Initializer(T -> T[]))\n3-element Array{Char,1}:\n \'a\'\n \'b\'\n \'c\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Inject",
    "page": "Docstrings",
    "title": "Transducers.Inject",
    "category": "type",
    "text": "Inject(iterator)\n\nInject the output from iterator to the stream processed by the inner reduction step.\n\nwarning: Warning\nThis API is experimental.  Backward incompatible change, including the removal of this API, is more likely to occur than other parts of this package.\n\nExamples\n\njulia> using Transducers\n       using Transducers: Inject\n\njulia> collect(Inject(Iterators.cycle(\"hello\")), 1:8)\n8-element Array{Tuple{Int64,Char},1}:\n (1, \'h\')\n (2, \'e\')\n (3, \'l\')\n (4, \'l\')\n (5, \'o\')\n (6, \'h\')\n (7, \'e\')\n (8, \'l\')\n\njulia> collect(Inject(Iterators.repeated([1 2])), 1:4)\n4-element Array{Tuple{Int64,Array{Int64,2}},1}:\n (1, [1 2])\n (2, [1 2])\n (3, [1 2])\n (4, [1 2])\n\njulia> collect(Inject(Iterators.product(1:2, 3:5)), 1:100)\n6-element Array{Tuple{Int64,Tuple{Int64,Int64}},1}:\n (1, (1, 3))\n (2, (2, 3))\n (3, (1, 4))\n (4, (2, 4))\n (5, (1, 5))\n (6, (2, 5))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Interpose",
    "page": "Docstrings",
    "title": "Transducers.Interpose",
    "category": "type",
    "text": "Interpose(sep)\n\nInterleave input items with a sep.\n\nThis API is modeled after interpose in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Interpose(missing), 1:3)\n5-element Array{Union{Missing, Int64},1}:\n 1\n  missing\n 2\n  missing\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Iterated",
    "page": "Docstrings",
    "title": "Transducers.Iterated",
    "category": "type",
    "text": "Iterated(f, init[, T::Type])\n\nGenerate a sequence init, f(init), f(f(init)), f(f(f(init))), and so on.\n\nNote that input is ignored.  To use the input in the downstream reduction steps, use Zip.\n\nUse the third argument T to specify the output type of f.\n\nAn Initializer object can be passed to init for creating a dedicated (possibly mutable) state for each fold.\n\nSee also: Scan, ScanEmit.\n\nThe idea is taken from IterTools.iterated\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Iterated(x -> 2x, 1), 1:5)\n5-element Array{Int64,1}:\n  1\n  2\n  4\n  8\n 16\n\njulia> collect(Zip(Map(identity), Iterated(x -> 2x, 1)), 1:5)\n5-element Array{Tuple{Int64,Int64},1}:\n (1, 1)\n (2, 2)\n (3, 4)\n (4, 8)\n (5, 16)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Keep",
    "page": "Docstrings",
    "title": "Transducers.Keep",
    "category": "type",
    "text": "Keep(f)\n\nPass non-nothing output of f to the inner reducing step.\n\nThis API is modeled after keep in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> xf = Keep() do x\n           if x < 3\n               x + 1\n           end\n       end;\n\njulia> collect(xf, 1:5)\n2-element Array{Int64,1}:\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Map",
    "page": "Docstrings",
    "title": "Transducers.Map",
    "category": "type",
    "text": "Map(f)\n\nApply unary function f to each input and pass the result to the inner reducing step.\n\nThis API is modeled after map in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Map(x -> 2x), 1:3)\n3-element Array{Int64,1}:\n 2\n 4\n 6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.MapCat",
    "page": "Docstrings",
    "title": "Transducers.MapCat",
    "category": "type",
    "text": "MapCat(f)\n\nConcatenate output of f which is expected to return an iterable.\n\nThis API is modeled after mapcat in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(MapCat(x -> 1:x), 1:3)\n6-element Array{Int64,1}:\n 1\n 1\n 2\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.MapSplat",
    "page": "Docstrings",
    "title": "Transducers.MapSplat",
    "category": "type",
    "text": "MapSplat(f)\n\nLike Map(f) but calls f(input...) for each input and then pass the result to the inner reducing step.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(MapSplat(*), zip(1:3, 10:10:30))\n3-element Array{Int64,1}:\n 10\n 40\n 90\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.NotA",
    "page": "Docstrings",
    "title": "Transducers.NotA",
    "category": "type",
    "text": "NotA(T)\n\nSkip items of type T.  Unlike Filter(!ismissing), downstream transducers can have a correct type information for NotA(Missing).\n\nSee also: OfType\n\nExamples\n\njulia> using Transducers\n\njulia> collect(NotA(Missing), [1, missing, 2])\n2-element Array{Int64,1}:\n 1\n 2\n\njulia> collect(Filter(!ismissing), [1, missing, 2])  # see the eltype below\n2-element Array{Union{Missing, Int64},1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.OfType",
    "page": "Docstrings",
    "title": "Transducers.OfType",
    "category": "type",
    "text": "OfType(T)\n\nInclude only items of type T.\n\nSee also: NotA\n\nExamples\n\njulia> using Transducers\n\njulia> collect(OfType(Int), [1, missing, 2])\n2-element Array{Int64,1}:\n 1\n 2\n\njulia> collect(Filter(!ismissing), [1, missing, 2])  # see the eltype below\n2-element Array{Union{Missing, Int64},1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Partition",
    "page": "Docstrings",
    "title": "Transducers.Partition",
    "category": "type",
    "text": "Partition(size, step = size, flush = false)\nPartition(size; step = size, flush = false)\n\nSliding window of width size and interval step.\n\nwarning: Warning\nThe vector passed to the inner reducing function is valid only during its immediate reduction step.  It must be reduced immediately or copied.\n\nThis API is modeled after partition-all in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Partition(3) |> Map(copy), 1:8)\n2-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n [4, 5, 6]\n\njulia> collect(Partition(3; flush=true) |> Map(copy), 1:8)\n3-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n [4, 5, 6]\n [7, 8]\n\njulia> collect(Partition(3; step=1) |> Map(copy), 1:8)\n6-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n [2, 3, 4]\n [3, 4, 5]\n [4, 5, 6]\n [5, 6, 7]\n [6, 7, 8]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.PartitionBy",
    "page": "Docstrings",
    "title": "Transducers.PartitionBy",
    "category": "type",
    "text": "PartitionBy(f)\n\nGroup input sequence into chunks in which f returns a same value consecutively.\n\nwarning: Warning\nThe vector passed to the inner reducing function is valid only during its immediate reduction step.  It must be reduced immediately or copied.\n\nThis API is modeled after partition-by in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(PartitionBy(x -> (x + 1) ÷ 3) |> Map(copy), 1:9)\n4-element Array{Array{Int64,1},1}:\n [1]\n [2, 3, 4]\n [5, 6, 7]\n [8, 9]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.R_",
    "page": "Docstrings",
    "title": "Transducers.R_",
    "category": "type",
    "text": "Transducers.R_{X}\n\nWhen defining a transducer type X, it is often required to dispatch on type rf::R_{X} (Reducing Function) which bundles the current transducer xform(rf)::X and the inner reducing function inner(rf)::R_.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Reduced",
    "page": "Docstrings",
    "title": "Transducers.Reduced",
    "category": "type",
    "text": "Reduced\n\nThe type signaling transducible processes to abort.\n\nnote: Note\nCall reduced function for aborting the transducible process since reduced makes sure x is not doubly wrapped.  Reduced is meant to be used as x isa Reduced for checking if the result from transduce is due to early termination.\n\nSee reduced, unreduced.\n\nExamples\n\njulia> using Transducers\n\njulia> function step_demo(y, x)\n           if x > 5\n               return reduced(y)\n           else\n               return y + x\n           end\n       end;\n\njulia> result = transduce(Map(identity), Completing(step_demo), 0, 1:10)\nReduced{Int64}(15)\n\njulia> result isa Reduced\ntrue\n\njulia> unreduced(result)\n15\n\njulia> result = transduce(Map(identity), Completing(step_demo), 0, 1:4)\n10\n\njulia> result isa Reduced\nfalse\n\njulia> unreduced(result)\n10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Replace",
    "page": "Docstrings",
    "title": "Transducers.Replace",
    "category": "type",
    "text": "Replace(assoc)\n\nReplace each input with the value in the associative container assoc (e.g., a dictionary, array, string) if it matches with a key/index. Otherwise output the input as-is.\n\nThis API is modeled after replace in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Replace(Dict(\'a\' => \'A\')), \"abc\")\n3-element Array{Char,1}:\n \'A\'\n \'b\'\n \'c\'\n\njulia> collect(Replace([:a, :b, :c]), 0:4)\n5-element Array{Union{Int64, Symbol},1}:\n 0\n  :a\n  :b\n  :c\n 4\n\njulia> collect(Replace(\"abc\"), 0:4)\n5-element Array{Union{Char, Int64},1}:\n 0\n  \'a\'\n  \'b\'\n  \'c\'\n 4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Scan",
    "page": "Docstrings",
    "title": "Transducers.Scan",
    "category": "type",
    "text": "Scan(f, [init])\n\nAccumulate input with binary function f and pass the accumulated result so far to the inner reduction step.\n\nThe inner reducing step receives the sequence y₁, y₂, y₃, ..., yₙ, ... when the sequence x₁, x₂, x₃, ..., xₙ, ... is fed to Scan(f).\n\ny₁ = f(init, x₁)\ny₂ = f(y₁, x₂)\ny₃ = f(y₂, x₃)\n...\nyₙ = f(yₙ₋₁, xₙ)\n\nThis is a generalized version of the prefix sum also known as cumulative sum, inclusive scan, or scan.\n\nNote that the associativity of f is not required when the transducer is used in a process that gurantee an order, such as mapfoldl.\n\nUnless f is a function with known identity element such as +, *, min, max, and append!, the initial state init must be provided.\n\nAn Initializer object can be passed to init for creating a dedicated (possibly mutable) state for each fold.\n\nSee also: ScanEmit, Iterated.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Scan(*), 1:3)\n3-element Array{Int64,1}:\n 1\n 2\n 6\n\njulia> collect(Map(x -> x + im) |> Scan(*), 1:3)\n3-element Array{Complex{Int64},1}:\n 1 + 1im\n 1 + 3im\n 0 + 10im\n\njulia> collect(Scan(*, 10), 1:3)\n3-element Array{Int64,1}:\n 10\n 20\n 60\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.ScanEmit",
    "page": "Docstrings",
    "title": "Transducers.ScanEmit",
    "category": "type",
    "text": "ScanEmit(f, init[, onlast])\n\nAccumulate input x with a function f with the call signature (u, x) -> (y, u) and pass the result y to the inner reduction step.\n\nThe inner reducing step receives the sequence y₁, y₂, y₃, ..., yₙ, ... computed as follows\n\nu₀ = init\ny₁, u₁ = f(u₀, x₁)\ny₂, u₂ = f(u₁, x₂)\ny₃, u₃ = f(u₂, x₃)\n...\nyₙ, uₙ = f(uₙ₋₁, xₙ)\n...\nyₒₒ = onlast(uₒₒ)\n\nwhen the sequence x₁, x₂, x₃, ..., xₙ, ... is fed to ScanEmit(f).\n\nAn Initializer object can be passed to init for creating a dedicated (possibly mutable) state for each fold.\n\nSee also: ScanEmit, Iterated.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(ScanEmit(tuple, 0), 1:3)\n3-element Array{Int64,1}:\n 0\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.SetIndex",
    "page": "Docstrings",
    "title": "Transducers.SetIndex",
    "category": "type",
    "text": "SetIndex(array)\nSetIndex{inbounds}(array)\n\nPerform array[i] = v for each input pair (i, v).\n\nwarning: Warning\nThis API is experimental.  Backward incompatible change, including the removal of this API, is more likely to occur than other parts of this package.\n\nExamples\n\njulia> using Transducers\n       using Transducers: SetIndex\n\njulia> ys = zeros(3);\n\njulia> mapfoldl(SetIndex(ys), first ∘ tuple, [(1, 11.1), (3, 33.3)], init=nothing)\n\njulia> ys\n3-element Array{Float64,1}:\n 11.1\n  0.0\n 33.3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Take",
    "page": "Docstrings",
    "title": "Transducers.Take",
    "category": "type",
    "text": "Take(n)\n\nTake n items from the input sequence.\n\nThis API is modeled after take in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Take(2), 1:10)\n2-element Array{Int64,1}:\n 1\n 2\n\njulia> collect(Take(5), 1:2)\n2-element Array{Int64,1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.TakeLast",
    "page": "Docstrings",
    "title": "Transducers.TakeLast",
    "category": "type",
    "text": "TakeLast(n)\n\nTake last n items from the input sequence.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(TakeLast(2), 1:10)\n2-element Array{Int64,1}:\n  9\n 10\n\njulia> collect(TakeLast(5), 1:2)\n2-element Array{Int64,1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.TakeNth",
    "page": "Docstrings",
    "title": "Transducers.TakeNth",
    "category": "type",
    "text": "TakeNth(n)\n\nOutput every n item to the inner reducing step.\n\nThis API is modeled after take-nth in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(TakeNth(3), 1:9)\n3-element Array{Int64,1}:\n 1\n 4\n 7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.TakeWhile",
    "page": "Docstrings",
    "title": "Transducers.TakeWhile",
    "category": "type",
    "text": "TakeWhile(pred)\n\nTake items while pred returns true.  Abort the reduction when pred returns false for the first time.\n\nThis API is modeled after take-while in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(TakeWhile(x -> x < 3), [1, 2, 3, 1, 2])\n2-element Array{Int64,1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.TeeZip",
    "page": "Docstrings",
    "title": "Transducers.TeeZip",
    "category": "type",
    "text": "TeeZip(xform::Transducer)\n\nBranch input into two \"flows\", inject one into xform and then merge the output of xform with the original input.\n\nwarning: Warning\nThis API is experimental.  Backward incompatible change, including the removal of this API, is more likely to occur than other parts of this package.\n\nTo illustrate how it works, consider the following usage\n\nxf0 |> TeeZip(xf1) |> xf2\n\nwhere xf0, xf1, and xf2 are some transducers.  Schematically, the output yn from xfn flows as follows:\n\nxf0      xf1                       xf2\n---- y0 ------ y1 ---.-- (y0, y1) ----->\n      |              |\n       `-------------\'\n    \"Tee\"          \"Zip\"\n\nExamples\n\njulia> using Transducers\n       using Transducers: TeeZip\n\njulia> collect(TeeZip(Filter(isodd) |> Map(x -> x + 1)), 1:5)\n3-element Array{Tuple{Int64,Int64},1}:\n (1, 2)\n (3, 4)\n (5, 6)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Transducer",
    "page": "Docstrings",
    "title": "Transducers.Transducer",
    "category": "type",
    "text": "Transducer\n\nThe abstract type for transducers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Unique",
    "page": "Docstrings",
    "title": "Transducers.Unique",
    "category": "type",
    "text": "Unique()\n\nPass only unseen item to the inner reducing step.\n\nThis API is modeled after distinct in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Unique(), [1, 1, 2, 1, 3, 3, 2])\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.UseSIMD",
    "page": "Docstrings",
    "title": "Transducers.UseSIMD",
    "category": "type",
    "text": "UseSIMD{ivdep}()\n\nTell the reducible to run the inner reducing function using @simd. The reducible can support it using @simd_if.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.Zip",
    "page": "Docstrings",
    "title": "Transducers.Zip",
    "category": "function",
    "text": "Zip(xforms...)\n\nZip outputs of transducers xforms in a tuple and pass it to the inner reduction step.\n\nwarning: Warning\nHead transducers drive tail transducers.  Be careful when using it with transducers other than Map, especially the contractive ones like PartitionBy and the expansive ones like MapCat.\n\nExamples\n\njulia> using Transducers\n\njulia> collect(Zip(Map(identity), Map(x -> 10x), Map(x -> 100x)), 1:3)\n3-element Array{Tuple{Int64,Int64,Int64},1}:\n (1, 10, 100)\n (2, 20, 200)\n (3, 30, 300)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.__foldl__",
    "page": "Docstrings",
    "title": "Transducers.__foldl__",
    "category": "function",
    "text": "__foldl__(rf, init, reducible::T)\n\nLeft fold a reducible with reducing function rf and initial value init.  This is primary an API for overloading when the reducible \"container\" or \"context\" (e.g., I/O stream) of type T can provide a better reduction mechanism than the default iterator-based one.\n\nFor a simple iterable type MyType, a valid implementation is:\n\nfunction __foldl__(rf, val, itr::MyType)\n    for x in itr\n        val = next(rf, val, x)\n        @return_if_reduced complete(rf, val)\n    end\n    return complete(rf, val)\nend\n\nalthough in this case default __foldl__ can handle MyType and thus there is no need for defining it.  In general, defining __foldl__ is useful only when there is a better way to go over items in reducible than Base.iterate.\n\nSee also: @return_if_reduced.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers._teezip_lens",
    "page": "Docstrings",
    "title": "Transducers._teezip_lens",
    "category": "function",
    "text": "_teezip_lens(rf) :: Lens\n\nReturn a lens to the .value field of the first \"unbalanced\" Joiner.  A Joiner matched with preceding Splitter would be treated as a regular reducing function node.  Thus, reducing function rf must have one more Joiner than Splitter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.air",
    "page": "Docstrings",
    "title": "Transducers.air",
    "category": "function",
    "text": "air.(broadcasting_expression) :: Broadcasted\n\nBroadcast without materialization.\n\nThe idea is taken from @dawbarton\'s _lazy function: https://discourse.julialang.org/t/19641/20.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.complete",
    "page": "Docstrings",
    "title": "Transducers.complete",
    "category": "function",
    "text": "Transducers.complete(rf::R_{X}, state)\n\nThis is an optional interface for a transducer.  If transducer X has some internal state, this is the last chance to \"flush\" the result.\n\nSee PartitionBy, etc. for real-world examples.\n\nIf both complete(rf::R_{X}, state) and start(rf::R_{X}, state) are defined, complete must unwarp state before returning state to the outer reducing function.  If complete is not defined for R_{X}, this happens automatically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.eduction",
    "page": "Docstrings",
    "title": "Transducers.eduction",
    "category": "function",
    "text": "eduction(xf::Transducer, coll)\n\nCreate a iterable and reducible object.\n\nIterable.\nReducible; i.e., it can be handled by transduce efficiently.\n\nThis API is modeled after eduction in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> for x in eduction(Filter(isodd) |> Take(3), 1:1000)\n           @show x\n       end\nx = 1\nx = 3\nx = 5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.foldl_nocomplete",
    "page": "Docstrings",
    "title": "Transducers.foldl_nocomplete",
    "category": "function",
    "text": "foldl_nocomplete(rf, init, coll)\n\nCall __foldl__ without calling complete.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.inner",
    "page": "Docstrings",
    "title": "Transducers.inner",
    "category": "function",
    "text": "Transducers.inner(rf::R_)\n\nReturn the inner reducing function of rf.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.maybe_usesimd",
    "page": "Docstrings",
    "title": "Transducers.maybe_usesimd",
    "category": "function",
    "text": "maybe_usesimd(xform, simd)\n\nInsert UseSIMD to xform if appropriate.\n\nArguments\n\nxform::Transducer\nsimd: false, true, or :ivdep.\n\nExamples\n\njulia> using Transducers\n       using Transducers: maybe_usesimd\n\njulia> maybe_usesimd(eduction(Map(identity), 1:1).rf, false)\nReduction{▶ Int64}(\n    Map(identity),\n    BottomRF{▶ Int64}(\n        Completing{typeof(push!)}(push!)))\n\njulia> maybe_usesimd(eduction(Map(identity), 1:1).rf, true)\nReduction{▶ Int64}(\n    Transducers.UseSIMD{false}(),\n    Reduction{▶ Int64}(\n        Map(identity),\n        BottomRF{▶ Int64}(\n            Completing{typeof(push!)}(push!))))\n\njulia> maybe_usesimd(eduction(Cat(), 1:1).rf, true)\nReduction{▶ Int64}(\n    Cat(),\n    Reduction{▶ Int64}(\n        Transducers.UseSIMD{false}(),\n        BottomRF{▶ Int64}(\n            Completing{typeof(push!)}(push!))))\n\njulia> maybe_usesimd(eduction(Map(sin) |> Cat() |> Map(cos), 1:1).rf, :ivdep)\nReduction{▶ Int64}(\n    Map(sin),\n    Reduction{▶ Float64}(\n        Cat(),\n        Reduction{▶ Float64}(\n            Transducers.UseSIMD{true}(),\n            Reduction{▶ Float64}(\n                Map(cos),\n                BottomRF{▶ Float64}(\n                    Completing{typeof(push!)}(push!))))))\n\njulia> maybe_usesimd(eduction(Map(sin) |> Cat() |> Map(cos) |> Cat() |> Map(tan), 1:1).rf, true)\nReduction{▶ Int64}(\n    Map(sin),\n    Reduction{▶ Float64}(\n        Cat(),\n        Reduction{▶ Float64}(\n            Map(cos),\n            Reduction{▶ Float64}(\n                Cat(),\n                Reduction{▶ Float64}(\n                    Transducers.UseSIMD{false}(),\n                    Reduction{▶ Float64}(\n                        Map(tan),\n                        BottomRF{▶ Float64}(\n                            Completing{typeof(push!)}(push!))))))))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.next",
    "page": "Docstrings",
    "title": "Transducers.next",
    "category": "function",
    "text": "Transducers.next(rf::R_{X}, state, input)\n\nThis is the only required interface.  It takes the following form (if start is not defined):\n\nnext(rf::R_{X}, result, input) =\n    # code calling next(inner(rf), result, possibly_modified_input)\n\nSee Map, Filter, Cat, etc. for real-world examples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.outtype",
    "page": "Docstrings",
    "title": "Transducers.outtype",
    "category": "function",
    "text": "outtype(xf::Transducer, intype)\n\nOutput item type for the transducer xf when the input type is intype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.reduced",
    "page": "Docstrings",
    "title": "Transducers.reduced",
    "category": "function",
    "text": "reduced([x = nothing])\n\nStop transducible process with the final value x (default: nothing).  Return x as-is if it\'s already is a reduced value.\n\nSee Reduced, unreduced.\n\nThis API is modeled after ensure-reduced in Clojure.\n\nExamples\n\njulia> using Transducers\n\njulia> foldl(Enumerate(), \"abcdef\"; init=0) do y, (i, x)\n           if x == \'d\'\n               return reduced(y)\n           end\n           return y + i\n       end\n6\n\njulia> foreach(Enumerate(), \"abc\") do (i, x)\n           println(i, \' \', x)\n           if x == \'b\'\n               return reduced()\n           end\n       end\n1 a\n2 b\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.reform",
    "page": "Docstrings",
    "title": "Transducers.reform",
    "category": "function",
    "text": "reform(rf, f)\n\nReset \"bottom\" reducing function of rf to f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.right",
    "page": "Docstrings",
    "title": "Transducers.right",
    "category": "function",
    "text": "right([l, ]r) -> r\n\nIt is simply defined as\n\nright(l, r) = r\nright(r) = r\n\nThis function is meant to be used as step argument for mapfoldl etc. for extracting the last output of the transducers.  Note that init for right is set to nothing if not provided.\n\nExamples\n\njulia> using Transducers\n\njulia> mapfoldl(Take(5), right, 1:10)\n5\n\njulia> mapfoldl(Drop(5), right, 1:3) === nothing\ntrue\n\njulia> mapfoldl(Drop(5), right, 1:3; init=0)  # using `init` as the default value\n0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.setinput",
    "page": "Docstrings",
    "title": "Transducers.setinput",
    "category": "function",
    "text": "setinput(ed::Eduction, coll)\n\nSet input collection of eduction ed to coll.  This is efficient than re-creating an Eduction with a new coll if eltype of old and new input collections are the same.\n\nExamples\n\njulia> using Transducers\n\njulia> ed = eduction(Map(x -> 2x), Float64[]);\n\nHere, we created an Eduction with input container whose eltype is Float64.  It can be used later with different container.\n\njulia> using Test\n\njulia> xs = ones(2, 3);\n\njulia> foldl(+, @inferred setinput(ed, xs))\n12.0\n\nNote that we changed the container type from Vector to Matrix while using the same eltype.  In this case, setinput is inferrable and thus can be compiled away.  It is also possible to set container with different eltype although not inferrable in this case:\n\njulia> xs = ones(Int, 2, 3);\n\njulia> foldl(+, setinput(ed, xs))\n12\n\njulia> foldl(+, @inferred setinput(ed, xs))\nERROR: return type Transducers.Eduction{...} does not match inferred return type ...\n[...]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.simple_transduce",
    "page": "Docstrings",
    "title": "Transducers.simple_transduce",
    "category": "function",
    "text": "simple_transduce(xform, step, init, coll)\n\nSimplified version of transduce.  For simple transducers Julia may be able to emit a good code.  This function exists only for performance tuning.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.start",
    "page": "Docstrings",
    "title": "Transducers.start",
    "category": "function",
    "text": "Transducers.start(rf::R_{X}, state)\n\nThis is an optional interface for a transducer.  Default implementation just calls start of the inner reducing function; i.e.,\n\nstart(rf::Reduction, result) = start(inner(rf), result)\n\nIf the transducer X is stateful, it can \"bundle\" its private state with wrap:\n\nstart(rf::R_{X}, result) = wrap(rf, PRIVATE_STATE, start(inner(rf), result))\n\nwhere PRIVATE_STATE is an initial value for the private state that can be used inside next via wrapping.\n\nSee Take, PartitionBy, etc. for real-world examples.\n\nSide notes: There is no related API in Clojure\'s Transducers. Transducers.jl uses it to implement stateful transducers using \"pure\" functions.  The idea is based on a slightly different approach taken in C++ Transducer library atria.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.transduce",
    "page": "Docstrings",
    "title": "Transducers.transduce",
    "category": "function",
    "text": "transduce(xf, step, init, reducible) :: Union{T, Reduced{T}}\n\nSee mapfoldl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.unreduced",
    "page": "Docstrings",
    "title": "Transducers.unreduced",
    "category": "function",
    "text": "unreduced(x)\n\nUnwrap x if it is a Reduced; do nothing otherwise.\n\nSee Reduced, reduced.\n\nThis API is modeled after unreduced in Clojure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.unwrap",
    "page": "Docstrings",
    "title": "Transducers.unwrap",
    "category": "function",
    "text": "unwrap(rf, result)\n\nUnwrap wraped result to a private state and inner result. Following identity holds:\n\nunwrap(rf, wrap(rf, state, iresult)) == (state, iresult)\n\nThis is intended to be used only in complete.  Inside next, use wrapping.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.usesimd",
    "page": "Docstrings",
    "title": "Transducers.usesimd",
    "category": "function",
    "text": "usesimd(rf::Reduction, xfsimd::UseSIMD)\n\nWrap the inner-most loop of reducing function rf with xfsimd. xfsimd is inserted after the inner-most Cat if rf includes Cat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.wrap",
    "page": "Docstrings",
    "title": "Transducers.wrap",
    "category": "function",
    "text": "wrap(rf::R_{X}, state, iresult)\n\nPack private state for reducing function rf (or rather the transducer X) with the result iresult returned from the inner reducing function inner(rf).  This packed result is typically passed to the outer reducing function.\n\nThis is intended to be used only in start.  Inside next, use wrapping.\n\nConsider a reducing step constructed as\n\nrf = Reduction(xf₁ |> xf₂ |> xf₃, f, intype)\n\nwhere each xfₙ is a stateful transducer and hence needs a private state stateₙ.  Then, calling start(rf, result)) is equivalent to\n\nwrap(rf,\n     state₁,                     # private state for xf₁\n     wrap(inner(rf),\n          state₂,                # private state for xf₂\n          wrap(inner(rf).inner,\n               state₃,           # private state for xf₃\n               result)))\n\nor equivalently\n\nresult₃ = result\nresult₂ = wrap(inner(inner(rf)), state₃, result₃)\nresult₁ = wrap(inner(rf),        state₂, result₂)\nresult₀ = wrap(rf,               state₁, result₁)\n\nThe inner most step function receives the original result as the first argument while transducible processes such as mapfoldl only sees the outer-most \"tree\" result₀ during the reduction.  The whole tree is unwraped during the complete phase.\n\nSee wrapping, unwrap, and start.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.wrapping",
    "page": "Docstrings",
    "title": "Transducers.wrapping",
    "category": "function",
    "text": "wrapping(f, rf, result)\n\nFunction f must take two argument state and iresult, and return a tuple (state, iresult).  This is intended to be used only in next, possibly with a do block.\n\nnext(rf::R_{MyTransducer}, result, input) =\n    wrapping(rf, result) do my_state, iresult\n        # code calling `next(inner(rf), iresult, possibly_modified_input)`\n        return my_state, iresult  # possibly modified\n    end\n\nSee wrap, unwrap, and next.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Transducers.xform",
    "page": "Docstrings",
    "title": "Transducers.xform",
    "category": "function",
    "text": "Transducers.xform(rf::R_{X}) -> xf :: X\n\nReturn the transducer xf associated with rf.  Returned transducer xf is \"atomic\"; i.e., it is not a Composition transducer type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Transducers.@return_if_reducedTransducers.@simd_ifTransducers.@~Transducers.AbstractFilterTransducers.AbstractReductionTransducers.AiredTransducers.BottomRFTransducers.CatTransducers.CompletingTransducers.CompositionTransducers.CountTransducers.DedupeTransducers.DenseSubVectorTransducers.DistinctTransducers.DropTransducers.DropLastTransducers.DropWhileTransducers.EductionTransducers.EnumerateTransducers.FilterTransducers.FinalTypeTransducers.FlagFirstTransducers.GetIndexTransducers.IdentityTransducerTransducers.InTypeTransducers.InitializerTransducers.InjectTransducers.InnerTypeTransducers.InterposeTransducers.IteratedTransducers.JoinerTransducers.KeepTransducers.MapTransducers.MapCatTransducers.MapSplatTransducers.MissingInitTransducers.NoCompleteTransducers.NotATransducers.OfTypeTransducers.PartitionTransducers.PartitionByTransducers.PrivateStateTransducers.R_Transducers.ReducedTransducers.ReductionTransducers.ReplaceTransducers.ScanTransducers.ScanEmitTransducers.SetIndexTransducers.SideEffectTransducers.SplitterTransducers.TakeTransducers.TakeLastTransducers.TakeNthTransducers.TakeWhileTransducers.TeeZipTransducers.TransducerTransducers.TransducerFolderTransducers.TransducerListerTransducers.TransducersTransducers.UniqueTransducers.UnseenTransducers.UseSIMDTransducers.ZipTransducers._ZipTransducers.__foldl__Transducers.__reduce__Transducers.__simple_foldl__Transducers._chan_ctypeTransducers._cljapiurlTransducers._cljrefTransducers._experimental_warningTransducers._false_strTransducers._foldl_productTransducers._getvaluesTransducers._initvalueTransducers._joiner_errorTransducers._joiner_lensTransducers._lefttypeTransducers._map!Transducers._name_of_transducer_typeTransducers._next_oftypeTransducers._next_oftype_tTransducers._non_executable_transducer_msgTransducers._normalizeTransducers._poptailTransducers._poptail_implTransducers._prepare_mapTransducers._rf_to_teezipTransducers._setinputTransducers._shared_notes_unfoldTransducers._shared_vector_warningTransducers._showTransducers._show_fieldTransducers._show_implTransducers._show_intypeTransducers._show_multiline_argsTransducers._show_noindentTransducers._show_typeTransducers._start_initTransducers._teezip_lensTransducers._teezip_rfTransducers._thx_cljTransducers._true_strTransducers._type_fixedpointTransducers._type_scan_fixedpointTransducers._unexported_public_apiTransducers._use_initializerTransducers._usesimdTransducers._window_nextTransducers._zip_betweenTransducers._zip_initTransducers.airTransducers.asTransducers.avaltypeTransducers.combineTransducers.completeTransducers.darkritualTransducers.eductionTransducers.ensurerfTransducers.evalTransducers.first_paragraphTransducers.foldl_nocompleteTransducers.hasTransducers.hasdocTransducers.header_codeTransducers.identityofTransducers.ieltypeTransducers.includeTransducers.inittypeofTransducers.initvalueTransducers.innerTransducers.is_anonymousTransducers.is_internalTransducers.is_transducer_typeTransducers.isexpansiveTransducers.isivdepTransducers.isreducedTransducers.maybe_usesimdTransducers.nextTransducers.nthtypeTransducers.outtypeTransducers.ownsstateTransducers.prefixed_type_nameTransducers.prependxfTransducers.print_arrowTransducers.print_spaced_arrowTransducers.provide_initTransducers.reducedTransducers.reducingfunctionTransducers.reformTransducers.ridentityofTransducers.rightTransducers.setinnerTransducers.setinputTransducers.show_argsTransducers.show_transducerTransducers.simple_transduceTransducers.skipcompleteTransducers.startTransducers.transduceTransducers.unreducedTransducers.unwrapTransducers.unwrap_allTransducers.usesimdTransducers.valueofTransducers.wrapTransducers.wrappingTransducers.xform"
},

]}
