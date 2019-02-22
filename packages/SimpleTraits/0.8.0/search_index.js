var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleTraits-1",
    "page": "Readme",
    "title": "SimpleTraits",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) NEWS(Image: SimpleTraits) (Image: SimpleTraits)This package provides a macro-based implementation of traits, using Tim Holy\'s trait trick. The main idea behind traits is to group types outside the type-hierarchy and to make dispatch work with that grouping.  The difference to Union-types is that types can be added to a trait after the creation of the trait, whereas Union types are fixed after creation.  The cool thing about Tim\'s trick is that there is no performance impact compared to using ordinary dispatch.  For a bit of background and a quick introduction to traits watch my 10min JuliaCon 2015 talk.One good example of the use of traits is the abstract array interface in Julia-Base.  An abstract array either belongs to the Base.IndexLinear or Base.IndexCartesian trait, depending on how its internal indexing works.  The advantage to use a trait there is that one is free to create a type hierarchy independent of this particular \"trait\" of the array(s).Tim Holy endorses SimpleTraits, a bit: \"I\'d say that compared to manually writing out the trait-dispatch, the \"win\" is not enormous, but it is a little nicer.\"  I suspect that — if you don\'t write Holy-traits before breakfast — your \"win\" should be greater ;-)"
},

{
    "location": "#Manual-1",
    "page": "Readme",
    "title": "Manual",
    "category": "section",
    "text": "Note for Julia-0.6:  Below examples for @traitfn (using where-function   syntax) only work on Julia-0.7, for Julia-0.6 this syntax cannot be   not supported.   For Julia-0.6, see the README of the   SimpleTraits version   v0.6.0 instead.Traits are defined with @traitdef:using SimpleTraits\n@traitdef IsNice{X}\n@traitdef BelongTogether{X,Y} # traits can have several parametersAll traits have one or more (type-)parameters to specify the type to which the trait is applied.  For instance IsNice{Int} signifies that Int is a member of IsNice (although whether that is true needs to be checked with the istrait function).  Most traits will be one-parameter traits, however, several parameters are useful when there is a \"contract\" between several types.As a style convention, I suggest to use trait names which start with a verb, as above two traits.  This makes distinguishing between traits and types easier as type names are usually nouns.Add types to a trait-group with @traitimpl:@traitimpl IsNice{Int}\n@traitimpl BelongTogether{Int,String}If there is a function which tests whether a trait is fulfilled then it can be used like so:@traitimpl IsNice{X} <- isnice(X)\nisnice(X) = false # set defaulti.e. any type X for which isnice(X)==true belongs to IsNice. Notes:overhead-less  (static) dispatch is only possible if isnice is pure: \"[A pure method] promises that the result will always be the same constant regardless of when the method is called [for the same input arguments].\" (ref).\nLast note that in above example the @traitimpl IsNice{Int} \"wins\" over the @traitimpl IsNice{X} <- isnice(X), thus this can be used to define exceptions to a rule.It can be checked whether a type belongs to a trait with istrait:using Test\n@test istrait(IsNice{Int})\n@test !istrait(BelongTogether{Int,Int}) # only BelongTogether{Int,String} was added aboveFunctions which dispatch on traits are constructed like:@traitfn f(x::X) where {X; IsNice{X}} = \"Very nice!\"\n@traitfn f(x::X) where {X; !IsNice{X}} = \"Not so nice!\"This means that a type X which is part of the trait IsNice will dispatch to the method returning \"Very nice!\", otherwise to the one returning \"Not so nice!\":@test f(5)==\"Very nice!\"\n@test f(5.)==\"Not so nice!\"Note that calling a trait-function is just like calling any other function.  Thus there is no extra mental gymnastics required for a \"user\" of a trait-based package.Similarly for BelongTogether which has two parameters:@traitfn f(x::X,y::Y) where {X,Y; BelongTogether{X,Y}} = \"$x and $y forever!\"\n@test f(5, \"b\")==\"5 and b forever!\"\n@test_throws MethodError f(5, 5)\n\n@traitfn f(x::X,y::Y) where {X,Y; !BelongTogether{X,Y}} = \"$x and $y cannot stand each other!\"\n@test f(5, 5)==\"5 and 5 cannot stand each other!\""
},

{
    "location": "#[Traitor.jl](https://github.com/andyferris/Traitor.jl)-like-syntax-1",
    "page": "Readme",
    "title": "Traitor.jl-like syntax",
    "category": "section",
    "text": "At JuliaCon 2016 folks suggested an alternate, more compact syntax for trait-functions.  However, it only works for single parameter traits. SimpleTraits now supports this.  Above function f can be written as:@traitfn ft(x::::IsNice) = \"Very nice!\"\n@traitfn ft(x::::(!IsNice)) = \"Not so nice!\"Note that the parenthesis are needed with negated traits, otherwise a parser error is thrown."
},

{
    "location": "#Vararg,-default-argument-and-keyword-argument-trait-functions-1",
    "page": "Readme",
    "title": "Vararg, default argument and keyword argument trait functions",
    "category": "section",
    "text": "Vararg, default argument and keyword argument trait functions work. However, with keyword arguments the trait function and negated trait function need both have the same keywords (however different values are allowed). Example:@traitfn kwfn(x::::Tr1, y...; kw=1) = x+y[1]+kw\n@traitfn kwfn(x::::(!Tr1), y...; kw=2) = x+y[1]+kwFor default arguments the rule is slightly different: with default arguments the trait function and negated trait function need both have the same default-argument with the same values.@traitfn deff(x::::Tr1, y=1) = x+y\n@traitfn deff(x::::(!Tr1), y=1) = x+y"
},

{
    "location": "#Method-overwritten-warnings-1",
    "page": "Readme",
    "title": "Method overwritten warnings",
    "category": "section",
    "text": "Warnings are issued when methods are overwritten.  Due to Tim\'s trick the @traitfn needs to create two functions the first time it is used for a particular method (see next section for an explanation).  But when defining the opposite trait, then better only one method is created or else the warning appears.  Some heuristics to avoid the warnings are in-place to check whether a method is defined yet or not but they fail at times (see issue #7).  Long story short: define the two methods of a trait and its negation using the same argument names and no warning should be issued.  Although note that the warnings are harmless."
},

{
    "location": "#Details-of-method-dispatch-1",
    "page": "Readme",
    "title": "Details of method dispatch",
    "category": "section",
    "text": "Defining a trait function adds: one new method (or overwrites one) to the generic function, which contains the logic; and one helper method to do the dispatch (Tim\'s trick), if it has not been defined before.When calling a generic function which has some trait-methods, dispatch will first work on the types as normal.  If the selected method is a trait-method then trait dispatch will kick in too. Example:@traitdef Tr{X}\n\nfn(x::Integer) = 1 # a normal method\n@traitfn fn(x::X) where {X<:AbstractFloat;  Tr{X}} = 2\n@traitfn fn(x::X) where {X<:AbstractFloat; !Tr{X}} = 3\n\n@traitimpl Tr{Float32}\n@traitimpl Tr{Int} # this does not impact dispatch of `fn`\n\nfn(5) # -> 1; dispatch only happens on the type\nfn(Float32(5)) # -> 2; dispatch through traits\nfn(Float64(5)) # -> 3; dispatch through traitsFurther note that for a particular trait-method dispatch only works on one trait.  Continuing above example, this does not work as one may expect:@traitdef Tr2{X}\n@traitfn fn(x::X) where {X<:AbstractFloat; Tr2{X}} = 4\n\n@traitimpl Tr2{Float16}\nfn(Float16(5)) # -> 4; dispatch through traits\nfn(Float32(5)) # -> MethodError; method defined in previous example\n               #    was overwritten aboveThis last definition of fn just overwrites the definition @traitfn f(x::X) where {X; Tr{X}} = 2 from above.If you need to dispatch on several traits in a single trait-method, then you\'re out of luck.  But please voice your grievance over in pull request #2."
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "There is no performance impact compared to normal functions thanks to Julia\'s clever design. Continuing the example from above and looking at the native codejulia> @code_native fn(5)\n        .text\nFilename: REPL[3]\n        pushq   %rbp\n        movq    %rsp, %rbp\nSource line: 1\n        movl    $1, %eax\n        popq    %rbp\n        retq\n        nopl    (%rax,%rax)\n\njulia> @code_native fn(Float16(5))\n        .text\nFilename: SimpleTraits.jl\n        pushq   %rbp\n        movq    %rsp, %rbp\nSource line: 185\n        movl    $4, %eax\n        popq    %rbp\n        retq\n        nopl    (%rax,%rax)shows that the normal method and the trait-method compile down to the same machine instructions.However, if the trait-grouping function is not constant or a generated function then dispatch may be dynamic.  This can be checked with @check_fast_traitdispatch, which checks whether the number of lines of LLVM code is the same for a trait function than a normal one:# julia 0.6\ncheckfn(x) = rand()>0.5 ? true : false # a bit crazy!\n@traitdef TestTr{X}\n@traitimpl TestTr{X} <- checkfn(X)\n# this tests a trait-function with TestTr{Int}:\n@check_fast_traitdispatch TestTr\n# this tests a trait-function with TestTr{String} and will\n# also prints number of LLCM-IR lines of trait vs normal function:\n@check_fast_traitdispatch TestTr String true\n\n# Now this is fast:\n@traitimpl TestTr{String}\n@check_fast_traitdispatch TestTr String true"
},

{
    "location": "#Advanced-features-1",
    "page": "Readme",
    "title": "Advanced features",
    "category": "section",
    "text": "The macros of the previous section are the official API of the package and should be reasonably stable.  What follows in this section is \"under the hood\" and may well be updated (but still signalled with minor version changes).Instead of using @traitimpl to add types to traits, it can be programmed.  Running @traitimpl IsNice{Int} essentially expands toSimpleTraits.trait{X1 <: Int}(::Type{IsNice{X1}}) = IsNice{X1}I.e. trait is the identity function for a fulfilled trait and returns Not{TraitInQuestion{...}} otherwise (this is the fall-back for <:Any).  So instead of using @traitimpl this can be coded directly.  Note that anything but a constant function will probably not be inlined away by the JIT and will lead to slower dynamic dispatch (see @check_fast_traitdispatch for a helper to check).Example leading to static dispatch (since Julia 0.6):@traitdef IsBits{X}\nSimpleTraits.trait{X1}(::Type{IsBits{X1}}) = isbits(X1) ? IsBits{X1} : Not{IsBits{X1}}\nistrait(IsBits{Int}) # true\nistrait(IsBits{Array{Int,1}}) # false\nstruct A\n    a::Int\nend\nistrait(IsBits{A}) # trueDynamic dispatch can be avoided using a generated function or pure functions (sometimes they need to be annotated with Base.@pure):@traitdef IsBits{X}\n@generated function SimpleTraits.trait{X1}(::Type{IsBits{X1}})\n    isbits(X1) ? :(IsBits{X1}) : :(Not{IsBits{X1}})\nendWhat is allowed in generated functions is heavily restricted, see Julia manual. In particular (in Julia 0.6), no methods which are defined after the generated function are allowed to be called inside the generated function, otherwise this issue is encountered.  Generally, try pure functions first and only in a pinch generated functions.Note that these programmed-traits can be combined with @traitimpl IsBits{XYZ}, i.e. program the general case and add exceptions with @traitimpl IsBits{XYZ}.Trait-inheritance can also be hand-coded with above trick.  For instance, the trait given by (in pseudo syntax) BeautyAndBeast{X,Y} <: IsNice{X}, !IsNice{Y}, BelongTogether{X,Y}:@traitdef BeautyAndBeast{X,Y}\nfunction SimpleTraits.trait{X,Y}(::Type{BeautyAndBeast{X,Y}})\n    if istrait(IsNice{X}) && !istrait(IsNice{Y}) && BelongTogether{X,Y}\n        BeautyAndBeast{X,Y}\n    else\n        Not{BeautyAndBeast{X,Y}}\n    end\nendNote that this will lead to slower, dynamic dispatch, as the function is not pure (it depends on the global state of which types belong to the traits IsNice and BelongTogether).  (In Julia 0.5 one could use a generated function but not anymore in Julia 0.6.)Note also that trait functions can be generated functions:@traitfn @generated fg(x::X) where {X; IsNice{X}} = (println(x); :x)"
},

{
    "location": "#Innards-1",
    "page": "Readme",
    "title": "Innards",
    "category": "section",
    "text": "The function macroexpand shows the syntax transformations a macro does. Here the edited output of running it for the macros of this package:julia> macroexpand(:(@traitdef Tr{X}))\n\nstruct Tr{X} <: SimpleTraits.Trait\nend\n\njulia> macroexpand(:(@traitimpl Tr{Int}))\n\n# this function does the grouping of types into traits:\nSimpleTraits.trait{X1 <: Int}(::Type{Tr{X1}}) = Tr{X1}\nSimpleTraits.istrait{X1 <: Int}(::Type{Tr{X1}}) = true # for convenience, really\n\njulia> macroexpand(:(@traitfn g(x::X) where {X; Tr{X}}= x+1))\n\n@inline g(x::X) where {X} = g(trait(Tr{X}), x) # this is Tim\'s trick, using above grouping-function\ng(::Type{Tr{X}},x::X) where {X} = x + 1 # this is the logic\n\njulia> macroexpand(:(@traitfn g(x::X) where {X; !Tr{X}}= x+1000))\n\n# the trait dispatch helper function needn\'t be defined twice,\n# only the logic:\ng(::Type{ Not{Tr{X}} }, x::X) where {X} = x + 1000For a detailed explanation of how Tim\'s trick works, see Traits.jl: Dispatch on traits. The difference here is I make the methods containing the logic part of the same generic function (there it\'s in _f)."
},

{
    "location": "#Base-Traits-1",
    "page": "Readme",
    "title": "Base Traits",
    "category": "section",
    "text": "I started putting some Julia-Base traits together which can be loaded with using SimpleTraits.BaseTraits, see the source for all definitions.Example, dispatch on whether an argument is immutable or not:@traitfn f(x::X) where {X; IsImmutable{X}} = X(x.fld+1) # make a new instance\n@traitfn f(x::X) where {X; !IsImmutable{X}} = (x.fld += 1; x) # update in-place\n\n# use\nmutable struct A; fld end\nstruct B; fld end\na=A(1)\nf(a) # in-place\n@assert a.fld == A(2).fld\n\nb=B(1) # out of place\nb2 = f(b)\n@assert b==B(1)\n@assert b2==B(2)"
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "This package grew out of an attempt to reduce the complexity of Traits.jl, but at the same time staying compatible (but which it isn\'t).  Compared to Traits.jl, it drops support for:Trait definition in terms of methods and constraints.  Instead the user needs to assign types to traits manually.  This removes the most complex part of Traits.jl: the checking whether a type satisfies a trait definition.\ntrait functions which dispatch on more than one trait.  This allows to remove the need for generated functions, as well as removing the rules for trait-dispatch.The reason for splitting this away from Traits.jl are:creating a more reliable and easier to maintain package than Traits.jl\nexploring inclusion in Base (see #13222).My JuliaCon 2015 talk gives a 10 minute introduction to Traits.jl and SimpleTraits.jl."
},

{
    "location": "#The-Future-1",
    "page": "Readme",
    "title": "The Future",
    "category": "section",
    "text": "The future of traits in Julia-Base: According to Stefan Karpinski\'s JuliaCon 2016 talk, Julia 1.0, traits are scheduled to land after Julia 1.0.  Although, if someone gets cracking, they may well happen pre-1.0.  My crystal ball tells me that all or most of the functionality of this package will be supported in the future trait system (multiparameter-traits may not be). Thus I expect the transition will be mostly a matter of a syntax update and less of a semantic update.  Also, an advantage to using this package versus hand-coding Holy-traits will be that all occurrences of trait usage are clearly marked and thus easier to update.The future of this package: I see it as light-weight package focusing on letting functions use dispatch based on traits.  This dispatch is currently fairly limited, see section \"Gotcha\" above, but may be expanded in the future: either through something like in PR m3/multitraits or through a more general generated-function approach (definitely not valid anymore in Julia 0.6).In the unlikely event that I find myself with too much time on my hands, I may try to develop a companion package to allow the specification of a trait in terms of interfaces.  The combination of the two packages would then have similar functionality to my experimental package Traits.jl. If anyone fancies a go at writing this companion package, I would be very happy to help and contribute.  After the type-system overhaul lands, this should be much less hackish than what\'s in Traits.jl."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Traits.jl and its references. In particular here is an in-depth discussion on limitations of Holy-Traits, which this package implements."
},

{
    "location": "#To-ponder-1",
    "page": "Readme",
    "title": "To ponder",
    "category": "section",
    "text": "There is a big update sitting in the branch m3/multitraits; but I never quite finished it.  It would also address the next point:\nCould type inheritance be used for sub-traits (Jutho\'s idea)? In particular could it be used in such a way that it is compatible with the multiple inheritance used in Traits.jl?"
},

{
    "location": "autodocs/#SimpleTraits.@check_fast_traitdispatch",
    "page": "Docstrings",
    "title": "SimpleTraits.@check_fast_traitdispatch",
    "category": "macro",
    "text": "check_fast_traitdispatch(Tr, Args=(Int,), nlines=6, verbose=false)\n\nMacro to check whether a trait-dispatch is fast (i.e. as fast as an ordinary function call) or whether dispatch is slow (dynamic).  Only works with single parameters traits (so far).\n\nOptional arguments are:\n\nType parameter to the trait (default Int)\nVerbosity (default false)\n\nExample:\n\n@check_fast_traitdispatch IsBits\n@check_fast_traitdispatch IsBits String true\n\nNOTE: This only works when code-coverage is disabled!  Thus, do not use this macro in tests (or disable coverage=true in your .travis.yml script), or it will error.\n\nNOTE: This does not seem to work all the time.  At least in Julia 0.7 this test is negative for IsIndexLinear, however, it\'s fast.\n\nTODO: This is rather ugly.  Ideally this would be a function but I ran into problems, see source code.  Also the macro is ugly.  PRs welcome...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.@traitdef",
    "page": "Docstrings",
    "title": "SimpleTraits.@traitdef",
    "category": "macro",
    "text": "Used to define a trait.  Traits, like types, are camel cased.  I suggest to start them with a verb, e.g. IsImmutable, to distinguish them from actual types, which are usually nouns.\n\nTraits need to have one or more (type-)parameters to specify the type to which the trait is applied.  For instance IsImmutable{Int} signifies that Int is part of IsImmutable (although whether that is true needs to be checked with the istrait function).  Most traits will be one-parameter traits, however, several parameters are useful when there is a \"contract\" between several types.\n\nExamples:\n\n@traitdef IsFast{X}\n@traitdef IsSlow{X,Y}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.@traitfn",
    "page": "Docstrings",
    "title": "SimpleTraits.@traitfn",
    "category": "macro",
    "text": "Defines a function dispatching on a trait. Examples:\n\n@traitfn f(x::X,y) where {X;  Tr1{X}} = ...\n@traitfn f(x::X,y) where {X; !Tr1{X}} = ...\n\n@traitfn f(x::X,y::Y) where {X,Y;  Tr2{X,Y}} = ...\n@traitfn f(x::X,y::Y) where {X,Y; !Tr2{X,Y}} = ...\n\nNote that the second example is just syntax sugar for @traitfn f(x::X,y::Y) where {X,Y; Not{Tr1{X,Y}}} = ....\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.@traitimpl",
    "page": "Docstrings",
    "title": "SimpleTraits.@traitimpl",
    "category": "macro",
    "text": "Used to add a type or type-tuple to a trait.  By default a type does not belong to a trait.\n\nExample:\n\n@traitdef IsFast{X}\n@traitimpl IsFast{Array{Int,1}}\n\nOften a trait is dependent on some check-function returning true or false.  This can be done with:\n\n@traitimpl IsFast{T} <- isfast(T)\n\nwhere isfast is that check-function.\n\nNote that traits implemented with the former of above methods will override an implementation with the latter method.  Thus it can be used to define exceptions to the rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.Not",
    "page": "Docstrings",
    "title": "SimpleTraits.Not",
    "category": "type",
    "text": "The set of all types not belonging to a trait is encoded by wrapping it with Not{}, e.g.  Not{Tr1{X,Y}}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.Trait",
    "page": "Docstrings",
    "title": "SimpleTraits.Trait",
    "category": "type",
    "text": "All Traits are subtypes of abstract type Trait.\n\nA concrete Trait will look like:\n\nstruct Tr1{X,Y} <: Trait end\n\nwhere X and Y are the types involved in the trait.\n\n(SUPER is not used here but in Traits.jl, thus retained for possible future compatibility.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.istrait",
    "page": "Docstrings",
    "title": "SimpleTraits.istrait",
    "category": "function",
    "text": "This function checks whether a trait is fulfilled by a specific set of types.\n\nistrait(Tr1{Int,Float64}) => return true or false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.llvm_lines",
    "page": "Docstrings",
    "title": "SimpleTraits.llvm_lines",
    "category": "function",
    "text": "Returns number of llvm-IR lines for a call of function fn with argument types args\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTraits.trait",
    "page": "Docstrings",
    "title": "SimpleTraits.trait",
    "category": "function",
    "text": "A trait is defined as full-filled if this function is the identity function for that trait.  Otherwise it returns the trait wrapped in Not.\n\nExample:\n\ntrait(IsBits{Int}) # returns IsBits{Int}\ntrait(IsBits{Array}) # returns Not{IsBits{Array}}\n\nUsually this function is defined when using the @traitimpl macro.\n\nHowever, instead of using @traitimpl one can define a method for trait to implement a trait, see the README.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleTraits.@check_fast_traitdispatchSimpleTraits.@traitdefSimpleTraits.@traitfnSimpleTraits.@traitimplSimpleTraits.BaseTraitsSimpleTraits.GenerateTypeVarsSimpleTraits.NotSimpleTraits.SimpleTraitsSimpleTraits.TraitSimpleTraits.curmodSimpleTraits.dispatch_cacheSimpleTraits.evalSimpleTraits.findlineSimpleTraits.includeSimpleTraits.insertdummySimpleTraits.isnegatedSimpleTraits.istraitSimpleTraits.llvm_linesSimpleTraits.stripNotSimpleTraits.strip_kwSimpleTraits.strip_tparaSimpleTraits.traitSimpleTraits.traitfn"
},

]}
