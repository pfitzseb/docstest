var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Setfield-1",
    "page": "Readme",
    "title": "Setfield",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: ) (Image: )Update deeply nested immutable structs."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Updating deeply nested immutable structs was never easier:using Setfield\n@set obj.a.b.c = dFor more information, see the documentation."
},

{
    "location": "autodocs/#Setfield.@lens",
    "page": "Docstrings",
    "title": "Setfield.@lens",
    "category": "macro",
    "text": "@lens\n\nConstruct a lens from a field access.\n\nExample\n\njulia> using Setfield\n\njulia> struct T;a;b;end\n\njulia> t = T(\"A1\", T(T(\"A3\", \"B3\"), \"B2\"))\nT(\"A1\", T(T(\"A3\", \"B3\"), \"B2\"))\n\njulia> l = @lens _.b.a.b\n(@lens _.b.a.b)\n\njulia> get(t, l)\n\"B3\"\n\njulia> set(t, l, 100)\nT(\"A1\", T(T(\"A3\", 100), \"B2\"))\n\njulia> t = (\"one\", \"two\")\n(\"one\", \"two\")\n\njulia> set(t, (@lens _[1]), \"1\")\n(\"1\", \"two\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Setfield.@set",
    "page": "Docstrings",
    "title": "Setfield.@set",
    "category": "macro",
    "text": "@set assignment\n\nReturn a modified copy of deeply nested objects.\n\nExample\n\njulia> using Setfield\n\njulia> struct T;a;b end\n\njulia> t = T(1,2)\nT(1, 2)\n\njulia> @set t.a = 5\nT(5, 2)\n\njulia> t\nT(1, 2)\n\njulia> t = @set t.a = T(2,2)\nT(T(2, 2), 2)\n\njulia> @set t.a.b = 3\nT(T(2, 3), 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Setfield.@set!",
    "page": "Docstrings",
    "title": "Setfield.@set!",
    "category": "macro",
    "text": "@set! assignment\n\nShortcut for obj = @set obj....\n\njulia> t = (a=1,) (a = 1,)\n\njulia> @set! t.a=2 (a = 2,)\n\njulia> t (a = 2,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Setfield.ConstIndexLens",
    "page": "Docstrings",
    "title": "Setfield.ConstIndexLens",
    "category": "type",
    "text": "ConstIndexLens{I}\n\nLens with index stored in type parameter.  This is useful for type-stable get and set operations on tuples and named tuples.\n\nThis lens can be constructed by, e.g., @lens _[$1].  Complex expression must be wrapped with $(...) like @lens _[$(length(xs))].\n\nExamples\n\njulia> using Setfield\n\njulia> get((1, 2.0), @lens _[$1])\n1\n\njulia> Base.promote_op(get, typeof.(((1, 2.0), @lens _[$1]))...)\nInt64\n\njulia> Base.promote_op(get, typeof.(((1, 2.0), @lens _[1]))...) !== Int\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Setfield.Lens",
    "page": "Docstrings",
    "title": "Setfield.Lens",
    "category": "type",
    "text": "Lens\n\nA Lens allows to access or replace deeply nested parts of complicated objects.\n\nExample\n\njulia> using Setfield\n\njulia> struct T;a;b; end\n\njulia> obj = T(\"AA\", \"BB\")\nT(\"AA\", \"BB\")\n\njulia> lens = @lens _.a\n(@lens _.a)\n\njulia> get(obj, lens)\n\"AA\"\n\njulia> set(obj, lens, 2)\nT(2, \"BB\")\n\njulia> obj\nT(\"AA\", \"BB\")\n\njulia> modify(lowercase, obj, lens)\nT(\"aa\", \"BB\")\n\nInterface\n\nConcrete subtypes of Lens have to implement\n\nset(obj, lens, val)\nget(obj, lens)\n\nThese must be pure functions, that satisfy the three lens laws:\n\n@assert get(set(obj, lens, val), lens) == val\n        # You get what you set.\n@assert set(obj, lens, get(obj, lens)) == obj\n        # Setting what was already there changes nothing.\n@assert set(set(obj, lens, val1), lens, val2) == set(obj, lens, val2)\n        # The last set wins.\n\nSee also @lens, set, get, modify.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.get",
    "page": "Docstrings",
    "title": "Base.get",
    "category": "function",
    "text": "get(obj, l::Lens)\n\nAccess a deeply nested part of obj. See also Lens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Setfield.modify",
    "page": "Docstrings",
    "title": "Setfield.modify",
    "category": "function",
    "text": "modify(f, obj, l::Lens)\n\nReplace a deeply nested part x of obj by f(x). See also Lens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Setfield.set",
    "page": "Docstrings",
    "title": "Setfield.set",
    "category": "function",
    "text": "set(obj, l::Lens, val)\n\nReplace a deeply nested part of obj by val. See also Lens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Setfield.@lensSetfield.@setSetfield.@set!Setfield.@settableSetfield.ComposedLensSetfield.ConstIndexLensSetfield.ExperimentalSetfield.IdentityLensSetfield.IndexLensSetfield.LensSetfield.PropertyLensSetfield.SetfieldSetfield._UpdateOpSetfield.add_posonly_constructorSetfield.arg_typeSetfield.argsymbolSetfield.argsymbol_typedSetfield.assert_hasfieldsSetfield.atset_implSetfield.best_constructor_templateSetfield.composeSetfield.constructor_has_desired_fieldsSetfield.constructor_ofSetfield.evalSetfield.getSetfield.get_update_opSetfield.has_atlens_supportSetfield.has_posonly_constructorSetfield.includeSetfield.is_interpolationSetfield.modifySetfield.parse_obj_lensSetfield.parse_obj_lensesSetfield.posonly_constructorSetfield.posonly_constructor_dictSetfield.print_applicationSetfield.print_in_atlensSetfield.setSetfield.setpropertiesSetfield.settableSetfield.show_generic"
},

]}
