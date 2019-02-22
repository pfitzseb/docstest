var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StaticNumbers.jl-1",
    "page": "Readme",
    "title": "StaticNumbers.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package provides Number datatypes which store their data in a type parameter. These are referred to as StaticNumbers. (The word \"static\" has lots of uses in computer science. Here, it means that the number is constant at runtime.)Data that is passed in type parameters is (usually) handled at compile-time, rather than at run-time. In certain cases this can lead to better performance. For this reason, some functions accept \"value type\" arguments, Val{X}(), where X is an argument that is passed at compile-time. [manual/performance-tips.html#Types-with-values-as-parameters-1] [manual/types.html#\"Value-types\"-1] Static is an alternative to Val which is specifically designed to handle numbers.The difference between Val and Static is that Static types promote and convert like their type parameters, so they can be used directly in arithmetic operations. (For example static(1) + 1 equals 2.) This makes it possible to use them with functions that were not specifically written to accept value arguments.Under the surface, there are three Static datatypes: StaticInteger, StaticReal, and StaticNumber, subtypes of Integer, Real and Number respectively. The Union type Static can be used to refer to them all. For brevity, all three types are displayed as static(X), and it is also recommended to create them using this syntax.Note: At the moment, the type union is names Static, while the function that creates static variables is named static.By default, any operation on a Static will result in a non-Static type. For example, static(2)+static(2) gives 4, not static(4). But Julia\'s type inference engine is quite powerful! If a and b are Static, then the type of static(a+b) will be inferred.It is of course also possible to overload methods to return Static for Static inputs. The @staticnumbers macro can be used on a small set of Static numbers to make certain operations preserve the Static type when possible.When creating Static numbers, it is important to consider whether the type system will be able to work efficiently. For example, f(static(x), y) is likely slower than f(x, y) even when called repeatedly with the same x. A specialized method of f is created for this value of x, and the function call itself will be faster. But since the type system will not know the type of static(x) in advance, a dynamic dispatch will happen at each function call.On the other hand, something like f(x==0 ? static(0) : x, y) will typically be fast. The construct x==0 ? static(0) : x will belong to Union{typeof(x), static(0)}, and Julia is able to dispatch efficiently on small type unions. A shorthand for this construct is f(x ⩢ 0, y).It is important not to make the set of Static numbers too large, as this can lead to a lot of compilation overhead. See: [manual/performance-tips.html#The-dangers-of-abusing-multiple-dispatch-(aka,-more-on-types-with-values-as-parameters)-1]There is no StaticRational datatype, but a StaticReal with a Rational type parameter will convert and promote like its parameter. For example: static(1//2) + 1 === 3//2.Static numbers are only fast when fully specified. A Vector{Static} is much slower than a Vector{Int}. (A Vector{StaticInteger{1}} is fast and requires very little memory, but on the other hand it can only store the number one.)"
},

{
    "location": "autodocs/#StaticNumbers.@staticnumbers",
    "page": "Docstrings",
    "title": "StaticNumbers.@staticnumbers",
    "category": "macro",
    "text": "@staticnumbers numbers 1argfuns 2argfuns\n\nThis macro creates methods that return Static numbers when functions are called with only Static arguments.\n\nThe inputs should be a list of literal numbers that will be tested as inputs and outputs of all functions.\n\nOptionally a fourth argument can give a list of numbers that will only be considered as results, but not as inputs.\n\nExample:\n\n@staticnumbers (0, 1) (sin, cos) (+, -)\n\nwill create all the following method definitions:\n\nsin(::StaticInteger{0}) = StaticInteger{0}()\ncos(::StaticInteger{0}) = StaticInteger{1}()\n+(::StaticInteger{0}, ::StaticInteger{0}) = StaticInteger{0}()\n+(::StaticInteger{0}, ::StaticInteger{1}) = StaticInteger{1}()\n+(::StaticInteger{1}, ::StaticInteger{0}) = StaticInteger{1}()\n-(::StaticInteger{0}, ::StaticInteger{0}) = StaticInteger{0}()\n-(::StaticInteger{1}, ::StaticInteger{0}) = StaticInteger{0}()\n-(::StaticInteger{1}, ::StaticInteger{1}) = StaticInteger{1}()\n\n(Note: The macro will run in the local scope. Functions from Base must be imported before they can be extended.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.LengthRange",
    "page": "Docstrings",
    "title": "StaticNumbers.LengthRange",
    "category": "constant",
    "text": "LengthRange(zeroth, step, length)\n\nA LengthRange is a range which allows (but does not require) its zeroth, step and/or length to be Static numbers.\n\nThe zeroth element of the range is the element before the first. Although it is not part of the range, it is frequently useful for it to remain static. For example, if the common 1:n range is multiplied by a scalar, the zeroth element can remain StaticInteger{0}\n\nThe step is the distance between successive elements of the range.\n\nThe length must be an Integer. A LengthRange is parameterized by its length, rather than its last element. This makes it possible for the length to remain Static when an offset is added to the range.\n\nLengthRange is the union of LengthStepRange and LengthUnitRange which are subtypes of OrdinalRange and AbstractUnitRange respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.LengthStepRange",
    "page": "Docstrings",
    "title": "StaticNumbers.LengthStepRange",
    "category": "type",
    "text": "A LengthStepRange is a range which is parameterized by its zeroth element, step and length (as oppsed to first, step, and last). The type of each of the parameters is part of the range type, and hence it is possible to use this type of range efficiently with Static parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.LengthUnitRange",
    "page": "Docstrings",
    "title": "StaticNumbers.LengthUnitRange",
    "category": "type",
    "text": "A LengthUnitRange is a type that is identical to LengthStepRange but where the step is fixed to 1. It is a subtype of UnitRange.\n\n(It would be much simpler to just use LengthStepRange with a Static step of 1 but then methods that expect a UnitRange would not work.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.Static",
    "page": "Docstrings",
    "title": "StaticNumbers.Static",
    "category": "constant",
    "text": "Static{X} is short-hand for the Union of StaticInteger{X}, StaticReal{X} and StaticNumber{X}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.StaticInteger",
    "page": "Docstrings",
    "title": "StaticNumbers.StaticInteger",
    "category": "type",
    "text": "A StaticInteger is an Integer whose value is stored in the type, and which contains no runtime data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.StaticNumber",
    "page": "Docstrings",
    "title": "StaticNumbers.StaticNumber",
    "category": "type",
    "text": "A StaticNumber is a Number whose value is stored in the type, and which contains no runtime data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.StaticOneTo",
    "page": "Docstrings",
    "title": "StaticNumbers.StaticOneTo",
    "category": "type",
    "text": "StaticOneTo{N} - Like Base.OneTo{Int}(N) but with the length fixed by the type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.StaticReal",
    "page": "Docstrings",
    "title": "StaticNumbers.StaticReal",
    "category": "type",
    "text": "A StaticReal is a Real whose value is stored in the type, and which contains no runtime data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.genstaticmethod1",
    "page": "Docstrings",
    "title": "StaticNumbers.genstaticmethod1",
    "category": "function",
    "text": "Create an expression a method for Static input to fun if the result is among the targets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.genstaticmethod2",
    "page": "Docstrings",
    "title": "StaticNumbers.genstaticmethod2",
    "category": "function",
    "text": "Create an expression a method for two Static inputs to fun if the result is among the targets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.genstaticmethods1",
    "page": "Docstrings",
    "title": "StaticNumbers.genstaticmethods1",
    "category": "function",
    "text": "Create an array of all the methods for Static 1-argument inputs to fun where the result is either among the possible inputs, args, or among the additional targets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.genstaticmethods2",
    "page": "Docstrings",
    "title": "StaticNumbers.genstaticmethods2",
    "category": "function",
    "text": "Create an array of all the methods for Static 2-argument inputs to fun where the result is either among the possible inputs, args, or among the additional targets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.ofstatictype",
    "page": "Docstrings",
    "title": "StaticNumbers.ofstatictype",
    "category": "function",
    "text": "ofstatictype(x,y) - like oftype(x,y), but return a Static x is a Static.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.static",
    "page": "Docstrings",
    "title": "StaticNumbers.static",
    "category": "function",
    "text": "static(X) is shorthand for StaticInteger{X}(), StaticReal{X}() or StaticNumber{X}(), depending on the type of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.staticlength",
    "page": "Docstrings",
    "title": "StaticNumbers.staticlength",
    "category": "function",
    "text": "staticlength(range) converts to a range where the length is Static.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.staticmod",
    "page": "Docstrings",
    "title": "StaticNumbers.staticmod",
    "category": "function",
    "text": "staticmod(x,y) returns static(mod(x,y)) if y is Static.\n\nIf y is not Static, then staticmod(x,y) is the same as mod(x,y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.tostatic",
    "page": "Docstrings",
    "title": "StaticNumbers.tostatic",
    "category": "function",
    "text": "tostatic(x, r) Returns a Static integer, equal to x from the range r. If no element in r is equal to x, then the behaviour of this function is undefined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticNumbers.trystatic",
    "page": "Docstrings",
    "title": "StaticNumbers.trystatic",
    "category": "function",
    "text": "trystatic(x, y1, y2, ...) x ⩢ y1 ⩢ y2 ...\n\nTest if a number x is equal to any of the numbers y1, y2, ..., and in that case return static(y). Otherwise, or if x is already a Static number, `x is returned unchanged.\n\nThe inferred return type will typically be a small Union, which Julia can handle efficiently.\n\nThis function can be used to call specialized methods for certain input values. For example, f(x, y ⩢ 0) will call f(x, y) if y is nonzero, but f(x, static(0)) if y is zero. This is useful if it enables optimizations that outweigh the cost of branching.\n\nNOTE: When the list of y-values is longer than one, y1, y2, ... must be Static numbers, or inferrence will not work. (In which case trystatic is not more efficient than static(x).)\n\n\n\n\n\ntrystatic(x, r) Tests if an integer x is in the range r, and if so, returns a Static integer from the range. (Otherwise, x is returned unchanged.)\n\nNOTE: The range must be completely static, or inferrence will not work.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StaticNumbers.@staticnumbersStaticNumbers.LengthRangeStaticNumbers.LengthRangeErrorStaticNumbers.LengthStepRangeStaticNumbers.LengthUnitRangeStaticNumbers.StaticStaticNumbers.StaticBoolStaticNumbers.StaticErrorStaticNumbers.StaticIntegerStaticNumbers.StaticNumberStaticNumbers.StaticNumbersStaticNumbers.StaticOneToStaticNumbers.StaticOrBoolStaticNumbers.StaticOrIntStaticNumbers.StaticRealStaticNumbers.evalStaticNumbers.fmaStaticNumbers.genstaticmethod1StaticNumbers.genstaticmethod2StaticNumbers.genstaticmethods1StaticNumbers.genstaticmethods2StaticNumbers.includeStaticNumbers.ofstatictypeStaticNumbers.staticStaticNumbers.staticlengthStaticNumbers.staticmodStaticNumbers.tostaticStaticNumbers.tostaticexprStaticNumbers.trystaticStaticNumbers.zerothStaticNumbers.⩢"
},

]}
