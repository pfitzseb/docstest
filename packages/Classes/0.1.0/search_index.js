var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Classes.jl-1",
    "page": "Home",
    "title": "Classes.jl",
    "category": "section",
    "text": "The key feature of the package is the management of an abstract type hierarchy that defines the subclass and superclass relationships desired of the the concrete types representing the classes. The concrete types defined for each class include all the fields defined in any declared superclass, plus the fields defined within the class declaration. The abstract type hierarchy allows methods defined for a class to be called on its subclasses, whose fields are a superset of those of its superclass.The Classes.jl package comprises two macros (@class and @method) and several  exported functions, described below."
},

{
    "location": "#The-@class-macro-1",
    "page": "Home",
    "title": "The @class macro",
    "category": "section",
    "text": "The @class macro does all the real work for this package. For each class (say, MyClass) created  via @class, the following code is emitted:An abstract type created by prepending Abstract on the given class name (e.g., AbstractMyClass),  which is a subtype of the abstract type associated with a named superclass, if given, or Classes.AbstractClass if not specified.\nA concrete type MyClass <: AbstractMyClass with the fields of its superclass plus any locally defined fields.\nSeveral methods, including constructors, initializers, and introspection methods."
},

{
    "location": "#The-\'mutable\'-keyword-1",
    "page": "Home",
    "title": "The \'mutable\' keyword",
    "category": "section",
    "text": "Class mutability is specified  by including mutable before the class name, e.g., @class mutable MyClass ... Note that mutability is not inherited; it must be stated in each subclass if mutability is required."
},

{
    "location": "#Functions-emitted-by-the-@class-macro-1",
    "page": "Home",
    "title": "Functions emitted by the @class macro",
    "category": "section",
    "text": "The @class macro emits "
},

{
    "location": "#Constructors-1",
    "page": "Home",
    "title": "Constructors",
    "category": "section",
    "text": "\"All fields\" constructor\nThis constructor takes as arguments all the fields accumulated through superclasses, in the order defined, and calls new() on the args. This simply duplicates the default constructor, which is necessary since we define other \"inner\" constructors and initializers."
},

{
    "location": "#Initializers-1",
    "page": "Home",
    "title": "Initializers",
    "category": "section",
    "text": "Initializers are functions that set values on an existing class instance. These come in several forms:\"All fields\" initializer\nSimilar to the \"all fields\" constructor except that it takes an object that must be a class or subclass of the defined class.\n\"Local fields\" initializer\nTakes an instance of the class (or subclass thereof) and initializes only the fields newly defined by the current class. This is provided to support custom initializers that can chain from subclasses to superclasses.\n\"Superclass copy\" initializer\nProvided primarily to support immutable classes (but available to mutable classes as well), this initializer takes as arguments all locally-defined fields plus an instance of the  immediate superclass of the present class, from which values are copied into a call to new on the present class."
},

{
    "location": "#Reflection-methods-1",
    "page": "Home",
    "title": "Reflection methods",
    "category": "section",
    "text": "isclass(T)\nReturn true if T is a concrete subclass of AbstractClass, or is Class, which is abstract.  Returns false otherwise.\nissubclass(class, superclass)\nFor all superclasses of the newly defined class, a method of issubclass is emitted that  returns true for the new class and its superclasses.\nsuperclass(class)\nReturns the superclass of the newly defined class.\nsuperclasses(::Type{T}) where {T <: AbstractClass}\nReturns a Vector of superclasses from the superclass of class T to Class, in order.\nsubclasses(::Type{T}) where {T <: AbstractClass}\nReturns a Vector of the subclasses for a given class T.\nclassof(::Type{T}) where {T <: AbstractClass}\nComputes the concrete class associated with abstract type T, which must  be a subclass of AbstractClass.\nabsclass(::Type{T}) where {T <: AbstractClass}\nReturns the abstract type associated with the concrete class T."
},

{
    "location": "#The-@method-macro-1",
    "page": "Home",
    "title": "The @method macro",
    "category": "section",
    "text": "As defined in this package, a \"class method\" is simply a function whose first argument is a type defined by @class. The @method macro uses the shadow abstract type hierarchy to  redefine the given function so that it applies to the given class as well as its subclasses.Thus the following @method invocation:@method my_method(obj::Bar, other, stuff) = do_something(obj, other, stuff)emits the following code:my_method(obj::AbstractBar, other, stuff) = do_something(obj, other, args)The only change is that the type of first argument is changed to the abstract supertype associated with the concrete type Bar, allowing subclasses of Bar – whose abstract supertype would by a subtype of AbstractBar – to use the method as well. Since  the subclass contains a superset of the fields in the superclass, this works out fine.Subclasses can override a superclass method by redefining the method on the more specific class.Say we define the following method on class Foo:@method get_foo(obj::Foo) = obj.fooThis is equivalent to writing:get_foo(obj::AbstractFoo) = obj.fooSince Bar <: AbstractBar <: AbstractFoo,  the method also applies to instances of Bar.julia> f = Foo(1)\nFoo(1)\n\njulia> b = Bar(10, 11)\nBar(10, 11)\n\njulia> get_foo(f)\n1\n\njulia> get_foo(b)\n10We can redefine get_foo for class Bar to override its inherited superclass definition:julia> @method get_foo(obj::Bar) = obj.foo * 2\nget_foo (generic function with 2 methods)\n\njulia> get_foo(b)\n20Subclasses of Bar now inherit this new definition, rather than the one inherited from Foo, since the prior class is more specialized (further down in the shadow abstract type hierarchy).julia> @class Baz <: Bar begin\n          baz::Int\n       end\n\njulia> z = Baz(100, 101, 102)\nBaz(100, 101, 102)\n\njulia> dump(z)\nBaz\n  foo: Int64 100\n  bar: Int64 101\n  baz: Int64 102\n  \njulia> get_foo(z)\n200The user deals primarily with the concrete types; the abstract types are created and used mainly by  the @class and @method macros. However, methods can be defined directly using classes\' abstract  types, allowing the use of classes and inheritance in arguments besides the first one, which is the  only one handled by this macro."
},

{
    "location": "#Example-1",
    "page": "Home",
    "title": "Example",
    "category": "section",
    "text": "using Classes\n\n@class Foo <: Class begin\n   foo::Int\n\n   Foo() = Foo(0)\n\n   # Although Foo is immutable, subclasses might not be,\n   # so it\'s still useful to define this method.\n   function Foo(self::AbstractFoo)\n        self.foo = 0\n    end\nend\n\n@class mutable Bar <: Foo begin\n    bar::Int\n\n    # Mutable classes can use this pattern\n    function Bar(self::Union{Nothing, AbstractBar}=nothing)\n        self = (self === nothing ? new() : self)\n        superclass(Bar)(self)\n        Bar(self, 0)\n    end\nendProduces the following methods:# Custom constructors defined inside the @class above\nFoo()\nFoo(self::AbstractFoo)\n\n#\n# Methods emitted by @class macro for Foo\n#\n\n# all-fields constructor\nFoo(foo::Int64)\n\n# local-field initializer\nFoo(self::T, foo::Int64) where T<:AbstractFoo\n\n# Custom constructor defined inside the @class above\nBar()\n\n# Custom initializer defined inside the @class above\nBar(self::Union{Nothing, AbstractBar})\n\n#\n# Methods emitted by @class macro for Bar\n#\n\n# all-fields constructor\nBar(foo::Int64, bar::Int64)\n\n# local-fields initializer\nBar(self::T, bar::Int64) where T<:AbstractBar\n\n# all fields initializer\nBar(self::T, foo::Int64, bar::Int64) where T<:AbstractBar \n\n#  Superclass-copy initializer \nBar(bar::Int64, s::Foo)"
},

{
    "location": "#Example-from-Mimi-1",
    "page": "Home",
    "title": "Example from Mimi",
    "category": "section",
    "text": "The following diagram shows the relationship between the concrete structs and abstract types create by  the @class macro. Solid lines indicate subtype relationships; dotted lines indicate subclass  relationships, which exist outside the julia type system.(Image: Mimi component structure)Each class as a corresponding \"shadow\" abstract supertype (of the same name surrounded by underscores) which  is a parent to all abstract supertypes of its subclasses. The subclasses of, say, ComponentDef are all  subtypes of AbstractComponentDef, thus methods defined as:@method function foo(obj::ComponentDef)\n    ...\nendare emitted as:function foo(obj::T) where {T <: AbstractComponentDef}\n    ...\nendThis allows the foo method to be called on any subclass of ComponentDef."
},

]}
