var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReusePatterns.jl-1",
    "page": "Readme",
    "title": "ReusePatterns.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-tools-to-implement-*composition*-and-*concrete-subtyping*-patterns-in-Julia.-1",
    "page": "Readme",
    "title": "Simple tools to implement composition and concrete subtyping patterns in Julia.",
    "category": "section",
    "text": "(Image: Build Status)Assume an author A (say, Alice) wrote a very powerful Julia code, extensively used by user C (say, Charlie).  The best code reusing practice in this \"two actors\" scenario is the package deployment, thoroughly discussed in the Julia manual.  Now assume a third person B (say, Bob) slip between Alice and Charlie: he wish to reuse Alice\'s code to provide more complex/extended functionalities to Charlie.  Most likely Bob will need a more sophisticated reuse pattern...This package provides a few tools to facilitate Bob\'s work in reusing Alice\'s code, by mean of two of the most common reuse patterns: composition and subtyping (implementation inheritance is not supported in Julia), and check which one provides the best solution.  Also, it aims to relieve Charlie from dealing with the underlying details, and seamlessly use the new functionalities introduced by Bob.The motivation to develop this package stems from the following posts on the Discourse:https://discourse.julialang.org/t/how-to-add-metadata-info-to-a-dataframe/11168\nhttps://discourse.julialang.org/t/composition-and-inheritance-the-julian-way/11231but several other topics apply as well (see list in the Links section below)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The ReusePatterns.jl package is currently under testing, hence you may download the development version with:] add ReusePatterns"
},

{
    "location": "#Composition-1",
    "page": "Readme",
    "title": "Composition",
    "category": "section",
    "text": "With composition we wrap an Alice\'s object into a structure implemented by Bob, and let Charlie use the latter without even knowing if it actually is the original Alice\'s object or the wrapped one by Bob.We pursue this goal by automatically forwarding all methods calls from Bob\'s structure to the appropriate Alice\'s object."
},

{
    "location": "#Example:-1",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "Alice implemented a code to keep track of all her books, but forgot to add room for the number of pages and the issue year of each book.  Bob wishes to add these informations, and to provide the final functionalities to Charlie:# #####  Alice\'s code  #####\njulia> struct Book\n      title::String\n      author::String\n  end\njulia> Base.show(io::IO, b::Book) = println(io, \"$(b.title) (by $(b.author))\")\njulia> Base.print(b::Book) = println(\"In a hole in the ground there lived a hobbit...\")\njulia> author(b::Book) = b.author\n\n# #####  Bob\'s code  #####\njulia> struct PaperBook\n    b::Book\n    number_of_pages::Int\nend\njulia> @forward((PaperBook, :b), Book)\njulia> pages(book::PaperBook) = book.number_of_pages\n\njulia> struct Edition\n    b::PaperBook\n    year::Int\nend\njulia> @forward((Edition, :b), PaperBook)\njulia> year(book::Edition) = book.year\n\n# #####  Charlie\'s code  #####\njulia> book = Edition(PaperBook(Book(\"The Hobbit\", \"J.R.R. Tolkien\"), 374), 2013)\n\njulia> print(author(book), \", \", pages(book), \" pages, Ed. \", year(book))\nJ.R.R. Tolkien, 374 pages, Ed. 2013\n\njulia> print(book)\nIn a hole in the ground there lived a hobbit...The key lines here are:@forward((PaperBook, :b), Book)\n@forward((Edition, :b), PaperBook)The @forward macro identifies all methods accepting a Book object, and defines new methods with the same name and arguments, but accepting PaperBook arguments in place of the Book  ones.  The purpose of each newly defined method is simply to forward the call to the original method, passing the Book object stored in the :p field.  The second line does the same job, forwarding calls from Edition objects to PaperBook ones.The ReusePatterns.jl package exports the following functions and macros aimed at supporting composition in Julia:@forward: forward method calls from an object to a field structure;\nforward: returns a Vector{String} with the Julia code to properly forward method calls.To preview the forwarding code without actually evaluating it you can use the forward function, which has the same syntax as the @forward macro.  Continuing from previous example:julia> forward((Edition, :b), PaperBook)\n4-element Array{String,1}:\n \"@eval Main Base.:(print)(p1::Main.Edition; kw...) = Main.:(print)(getfield(p1, :b); kw...)\"\n \"@eval Main Base.:(show)(p1::IO, p2::Main.Edition; kw...) = Main.:(show)(p1, getfield(p2, :b); kw...)\"\n \"@eval Main Main.:(author)(p1::Main.Edition; kw...) = Main.:(author)(getfield(p1, :b); kw...)\"\n \"@eval Main Main.:(pages)(p1::Main.Edition; kw...) = Main.:(pages)(getfield(p1, :b); kw...)\"Each function and macro has its own online documentation accessible by prepending ? to the name.The composition approach has the following advantages:It is applicable even if Alice and Bob do not agree on a particular type architecture;\nit is the recommended Julian way to pursue code reusing;...and disadvantages:It may be cumbersome to apply if the number of involved methods is very high, or if the method definitions are spread across many modules;\ncomposition is not recursive, i.e. if further users (Dan, Emily, etc.) build composite layers on top of Bob\'s one they\'ll need to implement new forwarding methods;\nIt introduces a small overhead for each composition layer, resulting in performance loss."
},

{
    "location": "#Concrete-subtyping-1",
    "page": "Readme",
    "title": "Concrete subtyping",
    "category": "section",
    "text": "Julia supports subtyping of abstract types, allowing to build type hierarchies where each node provides the same behavior as all its descendants, i.e. each abstract type can be substituted with any of its subtypes.  This is one of the most powerful feature in Julia: in a function argument you may require an AbstractArray and seamlessly work with any of its concrete implementations (e.g. dense, strided or sparse arrays, ranges, etc.). This mechanism actually stem from a rigid separation of the desired behavior for a type (represented by the abstract type and the interface definition) and the actual machine implementation (represented by the concrete type and the interface implementations).However, in Julia you can only subtype abstract types, hence this powerful substitutability mechanism can not be pushed beyond a concrete type. Citing the manual: this [limitation] might at first seem unduly restrictive, [but] it has many beneficial consequences with surprisingly few drawbacks.The most striking drawback pops out in case Alice defines an abstract type with only one subtype, namely a concrete one.  Clearly, in all methods requiring access to the actual data representation, the argument types will be annotated with the concrete type, not the abstract one.  This is an important protection against Alice\'s package misuse: those methods require exactly that concrete type, not something else, even if it is a subtype of the same parent abstract type.  However, this is a serious problem for Bob, since he can not reuse those methods even if he defines concrete structures with the same contents as Alice\'s one (plus something else).The ReusePatterns.jl package allows to overtake this limitation by introducing the concept of quasi abstract type, i.e. a type without a rigid separation between a type behaviour and its concrete implementation.  Operatively, a quasi abstract type is an abstract type satisfying the following constraints:1 - it can have as many abstract or quasi abstract subtypes as desired, but it can have only one concrete subtype (the so called associated concrete type);2 - if a quasi abstract type has another quasi abstract type among its ancestors, its associated concrete type must have (at least) the same field names and types of the ancestor associated data structure.Note that for the example discussed above constraint 1 is not an actual limitation, since Alice already defined only one concrete type.  Also note that constraint 2 implies concrete structure subtyping.The @quasiabstract macro provided by the ReusePatterns.jl package, ensure the above constraints are properly satisfied.The guidelines to exploit quasi abstract types are straightforward:define the quasi abstract type as a simple structure, possibly with a parent type;\nuse the quasi abstract type name for object creation, method argument annotations, etc.Finally note that although two types are actually defined under the hood (an abstract and a concrete one), you may simply forget about the concrete one, and safely use the abstract one everywhere in the code."
},

{
    "location": "#Example:-2",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "As for the composition case discussed above, assume alice implemented a code to keep track of all her books, but forgot to add room for the number of pages and the issue year of each book.  Bob wishes to add these informations, and to provide the final functionalities to Charlie.# #####  Alice\'s code  #####\njulia> @quasiabstract struct Book\n      title::String\n      author::String\n  end\njulia> Base.show(io::IO, b::Book) = println(io, \"$(b.title) (by $(b.author))\")\njulia> Base.print(b::Book) = println(\"In a hole in the ground there lived a hobbit...\")\njulia> author(b::Book) = b.author\n\n# #####  Bob\'s code  #####\njulia> @quasiabstract struct PaperBook <: Book\n    number_of_pages::Int\nend\njulia> pages(book::PaperBook) = book.number_of_pages\n\njulia> @quasiabstract struct Edition <: PaperBook\n    year::Int\nend\njulia> year(book::Edition) = book.year\n\njulia> println(fieldnames(concretetype(Edition)))\n(:title, :author, :number_of_pages, :year)\n\n# #####  Charlie\'s code  #####\njulia> book = Edition(\"The Hobbit\", \"J.R.R. Tolkien\", 374, 2013)\n\njulia> print(author(book), \", \", pages(book), \" pages, Ed. \", year(book))\nJ.R.R. Tolkien, 374 pages, Ed. 2013\n\njulia> print(book)\nIn a hole in the ground there lived a hobbit...The ReusePatterns.jl package exports the following functions and macros aimed at supporting concrete subtyping in Julia:@quasiabstract: define a new quasi abstract type, i.e. a pair of an abstract and a (exclusively associated) concrete types;\nconcretetype: return the concrete type associated to a quasi abstract type;\nisquasiabstract: test whether a type is quasi abstract;\nisquasiconcrete: test whether a type is the concrete type associated to a quasi abstract type.Continuing the previous example:julia> isquasiconcrete(typeof(book))\ntrue\n\njulia> isquasiabstract(supertype(typeof(book)))\ntrue\n\njulia> concretetype(typeof(book)) === supertype(typeof(book))\ntrueEach function and macro has its own online documentation accessible by prepending ? to the name.This concrete subtyping approach has the following advantages:It is a recursive approach, i.e. if further users (Dan, Emily, etc.) subtype Bob\'s structure they will have all the inherited behavior for free;\nThere is no overhead or performance loss....and disadvantages:it is applicable only if both Alice and Bob agree to use quasi abstract types.\nCharlie may break Alice\'s or Bob\'s code by using a concrete type with the quasi abstract type as ancestor, but without the required fields.  However, this problem can be easily fixed by adding the following check to the methods accepting a quasi abstract type, e.g. in the pages method shown above:function pages(book::PaperBook)\n    @assert isquasiconcrete(typeof(book))\n    book.number_of_pages\nendNote also that isquasiconcrete is a pure function, hence it can be used as a trait."
},

{
    "location": "#Complete-examples-1",
    "page": "Readme",
    "title": "Complete examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Adding-metadata-to-a-DataFrame-object-1",
    "page": "Readme",
    "title": "Adding metadata to a DataFrame object",
    "category": "section",
    "text": "This topic raised a long discussion about the possibility to extend the functionalities provided by the DataFrames package by adding a simple metadata dictionary, and the approaches to follow.  With the composition tools provided by ReusePatterns.jl this problem can now be solved with just 8 lines of code:struct DataFrameMeta <: AbstractDataFrame\n    p::DataFrame\n    meta::Dict{String, Any}\n    DataFrameMeta(args...; kw...) = new(DataFrame(args...; kw...), Dict{Symbol, Any}())\n    DataFrameMeta(df::DataFrame) = new(df, Dict{Symbol, Any}())\nend\nmeta(d::DataFrameMeta) = getfield(d,:meta)  # <-- new functionality added to DataFrameMeta\n@forward((DataFrameMeta, :p), DataFrame)    # <-- reuse all existing functionalities(see the complete example here)."
},

{
    "location": "#Polygon-drawings-(a-comparison-of-the-*composition*-and-*concrete-subtyping*-approaches)-1",
    "page": "Readme",
    "title": "Polygon drawings (a comparison of the composition and concrete subtyping approaches)",
    "category": "section",
    "text": "We will consider the problem of implementing the code to draw several polygons on a plot.The objects and methods implemented by Alice are:Polygon: a structure to store the 2D cartesian coordinates of a generic polygon;\nvertices, coords_x and coords_y: methods to retrieve the number of vertices and the X and Y coordinates;\nmove!, scale! and rotate!: methods to move, scale and rotate a polygon.The objects and methods implemented by Bob are:RegularPolygon: a structure including (in the composition case) or subtyping (in the concrete subtyping case) a Polygon object, and represeting a regular polygon;\nside, area: methods to caluclate the length of a side and the area of a regular polygon;\nNamed: a generic wrapper for an object (either a Polygon, or RegularPolygon), providing the possibility to attach a label for plotting purposes.Finally, Charlie\'s code will:Instantiate several regular polygons;\nMove, scale and rotate them...\nand produce the final plot.The same problem has been implemented following both the composition and the concrete subtype approaches in order to highlight the differences.  Also, each approach has been implemented both with and without ReusePatterns.jl facilities, in order to clearly show the code being generated by the macros.The four complete examples are available here:composition  (without using ReusePatterns.jl facilities);\ncomposition  (with ReusePatterns.jl facilities);\nconcrete subtyping  (without using ReusePatterns.jl facilities);\nconcrete subtyping (with ReusePatterns.jl facilities);Note that in all files the common statements appears on the same line, in order to make clear how much code is being saved by the considered approaches.  Finally, Charlie\'s code is identical for all of the above cases, and can be used to produce the final plot:(Image: polygons)"
},

{
    "location": "#Links-1",
    "page": "Readme",
    "title": "Links",
    "category": "section",
    "text": "The above discussion reflects my personal view of how I understood code reusing patterns in Julia, and ReusePatterns.jl is just the framework I use to implement those patterns.  But there is a lot of ongoing discussion on these topics, hence I encourage the reader to give a look around to see whether there are better solutions.  Below, you will find a (non-exhaustive) list of the links I found very useful to develoip this package."
},

{
    "location": "#Related-topics-on-Discourse-and-other-websites:-1",
    "page": "Readme",
    "title": "Related topics on Discourse and other websites:",
    "category": "section",
    "text": "The topics mentioned here, or related ones, have been thorougly discussed in many places, e.g.:https://discourse.julialang.org/t/how-to-add-metadata-info-to-a-dataframe/11168\nhttps://discourse.julialang.org/t/composition-and-inheritance-the-julian-way/11231\nhttps://discourse.julialang.org/t/workaround-for-traditional-inheritance-features-in-object-oriented-languages/1195\nhttps://github.com/mauro3/SimpleTraits.jl\nhttp://www.stochasticlifestyle.com/type-dispatch-design-post-object-oriented-programming-julia/\nhttps://discourse.julialang.org/t/why-doesnt-julia-allow-multiple-inheritance/14342/4\nhttps://discourse.julialang.org/t/oop-in-julia-inherit-from-parametric-composite-type/1841/\nhttps://discourse.julialang.org/t/wrap-and-inherit-number/4799\nhttps://discourse.julialang.org/t/guidelines-to-distinguish-concrete-from-abstract-types/19162"
},

{
    "location": "#Pacakges-providing-similar-functionalities:-1",
    "page": "Readme",
    "title": "Pacakges providing similar functionalities:",
    "category": "section",
    "text": "Also, there are several packages related to the code reuse topic, or which provide similar functionalities as ReusePatterns.jl (in no particolar order):https://github.com/WschW/StructuralInheritance.jl\nhttps://github.com/JuliaArbTypes/TypedDelegation.jl\nhttps://github.com/AleMorales/ModularTypes.jl\nhttps://github.com/JuliaCollections/DataStructures.jl/blob/master/src/delegate.jl\nhttps://github.com/Jeffrey-Sarnoff/Delegate.jl\nhttps://github.com/rjplevin/Classes.jl\nhttps://github.com/jasonmorton/Typeclass.jl\nhttps://github.com/KlausC/TypeEmulator.jl\nhttps://github.com/MikeInnes/Lazy.jl (@forward macro)\nhttps://github.com/tbreloff/ConcreteAbstractions.jl"
},

{
    "location": "autodocs/#ReusePatterns.@copy_fields",
    "page": "Docstrings",
    "title": "ReusePatterns.@copy_fields",
    "category": "macro",
    "text": "@copy_fields T\n\nCopy all field definitions from a structure into another.\n\nExample\n\n\njulia> struct First\n    field1\n    field2::Int\nend\njulia> struct Second\n    @copy_fields(First)\n    field3::String\nend\n\njulia> println(fieldnames(Second))\n(:field1, :filed2, :field3)\n\njulia> println(fieldtype.(Second, fieldnames(Second)))\n(Any, Int64, String)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.@forward",
    "page": "Docstrings",
    "title": "ReusePatterns.@forward",
    "category": "macro",
    "text": "@forward(sender, receiver, ekws...)\n\nEvaluate the Julia code to forward methods.  The syntax is exactly the same as the forward function.\n\nExample:\n\njulia> struct Book\n    title::String\n    author::String\nend\njulia> Base.show(io::IO, b::Book) = println(io, \"$(b.title) (by $(b.author))\")\njulia> Base.print(b::Book) = println(\"In a hole in the ground there lived a hobbit...\")\njulia> author(b::Book) = b.author\n\njulia> struct PaperBook\n    b::Book\n    number_of_pages::Int\nend\njulia> @forward((PaperBook, :b), Book)\njulia> pages(book::PaperBook) = book.number_of_pages\n\njulia> struct Edition\n    b::PaperBook\n    year::Int\nend\njulia> @forward((Edition, :b), PaperBook)\njulia> year(book::Edition) = book.year\n\njulia> book = Edition(PaperBook(Book(\"The Hobbit\", \"J.R.R. Tolkien\"), 374), 2013)\n\njulia> print(author(book), \", \", pages(book), \" pages, Ed. \", year(book))\nJ.R.R. Tolkien, 374 pages, Ed. 2013\n\njulia> print(book)\nIn a hole in the ground there lived a hobbit...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.@quasiabstract",
    "page": "Docstrings",
    "title": "ReusePatterns.@quasiabstract",
    "category": "macro",
    "text": "@quasiabstract expression\n\nCreate a quasi abstract type.\n\nThis macro accepts an expression defining a (mutable or immutable) structure, and outputs the code for two new type definitions:\n\nan abstract type with the same name and (if given) supertype of the input structure;\na concrete structure definition with name prefix Concrete_, subtyping the abstract type defined above.\n\nThe relation between the types ensure there will be a single concrete type associated to the abstract one, hence you can use the abstract type to annotate method arguments, and be sure to receive the associated concrete type, or one of its subtypes (which shares all field names and types of the ancestors).\n\nThe concrete type associated to an quasi abstract type can be retrieved with the concretetype function.  The Concrete_ prefix can be customized passing a second symbol argument to the macro.\n\nThese newly defined types allows to easily implement concrete subtyping: simply use the quasi abstract type name for both object construction and to annotate method arguments.\n\nExample:\n\njulia> @quasiabstract struct Book\n    title::String\n    author::String\nend\njulia> Base.show(io::IO, b::Book) = println(io, \"$(b.title) (by $(b.author))\")\njulia> Base.print(b::Book) = println(\"In a hole in the ground there lived a hobbit...\")\njulia> author(b::Book) = b.author\n\njulia> @quasiabstract struct PaperBook <: Book\n    number_of_pages::Int\nend\njulia> pages(book::PaperBook) = book.number_of_pages\n\njulia> @quasiabstract struct Edition <: PaperBook\n    year::Int\nend\njulia> year(book::Edition) = book.year\n\njulia> println(fieldnames(concretetype(Edition)))\n(:title, :author, :number_of_pages, :year)\n\njulia> book = Edition(\"The Hobbit\", \"J.R.R. Tolkien\", 374, 2013)\n\njulia> print(author(book), \", \", pages(book), \" pages, Ed. \", year(book))\nJ.R.R. Tolkien, 374 pages, Ed. 2013\n\njulia> print(book)\nIn a hole in the ground there lived a hobbit...\n\njulia> isquasiconcrete(typeof(book))\ntrue\n\njulia> isquasiabstract(supertype(typeof(book)))\ntrue\n\njulia> concretetype(typeof(book)) === supertype(typeof(book))\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.concretetype",
    "page": "Docstrings",
    "title": "ReusePatterns.concretetype",
    "category": "function",
    "text": "concretetype(T::Type)\n\nReturn the concrete type associated with the quasi abstract type T. If T is not quasi abstract returns nothing.\n\nSee also: @quasiabstract\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.forward",
    "page": "Docstrings",
    "title": "ReusePatterns.forward",
    "category": "function",
    "text": "forward(sender::Tuple{Type,Symbol}, receiver::Type, method::Method; withtypes=true, allargs=true)\n\nReturn a Vector{String} containing the Julia code to properly forward method calls to from a sender type to a receiver type.\n\nThe sender tuple must contain a structure type, and a symbol with the name of one of its fields.\n\nThe withtypes keyword controls whether the forwarding method has type annotated arguments.  The allargs keyword controls wether all arguments should be used, or just the first ones up to the last containing the receiver type.\n\nBoth keywords are true by defult, but they can be set to false to decrease the number of forwarding methods.\n\nExample:\n\nImplement a wrapper for an Int object, and forward the + method accepting Int:\n\nstruct Wrapper{T}\n    wrappee::T\n    extra\n    Wrapper{T}(args...; kw...) where T = new(T(args...; kw...), nothing)\nend\n\n# Prepare and evaluate forwarding methods:\nm = forward((Wrapper, :wrappee), Int, which(+, (Int, Int)))\neval.(Meta.parse.(m))\n\n# Instantiate two wrapped `Int`\ni1 = Wrapper{Int}(1)\ni2 = Wrapper{Int}(2)\n\n# And add them seamlessly\nprintln(i1 +  2)\nprintln( 1 + i2)\nprintln(i1 + i2)\n\n\n\n\n\nforward(sender::Tuple{Type,Symbol}, receiver::Type, methods::Vector{Method}; kw...)\n\n\n\n\n\nforward(sender::Tuple{Type,Symbol}, receivers::Vector{T}, methods; kw...)\n\n\n\n\n\nforward(sender::Tuple{Type,Symbol}, receiver::Type; super=true, kw...)\n\nWrapper for forward(send, receiver, supertypes(receiver, super=super); kw...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.isquasiabstract",
    "page": "Docstrings",
    "title": "ReusePatterns.isquasiabstract",
    "category": "function",
    "text": "isquasiabstract(T::Type)\n\nReturn true if T is quasi abstract, false otherwise.\n\nSee also: @quasiabstract\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.isquasiconcrete",
    "page": "Docstrings",
    "title": "ReusePatterns.isquasiconcrete",
    "category": "function",
    "text": "isquasiconcrete(T::Type)\n\nReturn true if T is a concrete type associated to a quasi abstract type, false otherwise.\n\nSee also: @quasiabstract\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReusePatterns.supertypes",
    "page": "Docstrings",
    "title": "ReusePatterns.supertypes",
    "category": "function",
    "text": "supertypes(T::Type)\n\nReturns a vector with all supertypes of type T (excluding Any).\n\nExample\n\njulia> println(supertypes(Int))\nType[Signed, Integer, Real, Number]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReusePatterns.@copy_fieldsReusePatterns.@forwardReusePatterns.@quasiabstractReusePatterns.ReusePatternsReusePatterns.concretetypeReusePatterns.evalReusePatterns.forwardReusePatterns.includeReusePatterns.isquasiabstractReusePatterns.isquasiconcreteReusePatterns.supertypes"
},

]}
