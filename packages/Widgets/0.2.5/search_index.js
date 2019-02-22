var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Widgets-1",
    "page": "Readme",
    "title": "Widgets",
    "category": "section",
    "text": "(Image: Build Status) (Image: ) (Image: codecov.io)This package allows to create custom widgets using the JuliaGizmos packages and should be used in combination with the Interact package. Documentation is available here as part of the Interact docs.To create a custom widget use statement of the type :a = ... to add a child. You can refer to the child value elsewhere in the recipe using :a. :a will represent an Observable, you can either access it\'s value with :a[] orusing Widgets\nusing InteractBase, Observables, CSSUtil\n\n@widget wdg function myui(s::Int)\n    :a = slider(1:s) # :a will be a slider from 1 to the input of s\n    :b = slider(1:$(:a)) # :b will be a slider from 1 to the value chosen in :a\n    :c = toggle(false)\n    :d = $(:c) ? :a[]+:b[] : :a[] - :b[] # The $ means: output updates as soon as :c changes, whereas the changing :a or :b won\'t update the widget\n    @output!  wdg $(:c) ? $(:a) + $(:b) : $(:a) - $(:b)\n    @display! wdg \"The \" * ($(:c) ? \"sum\" : \"difference\") * \" is \" * string($(_.output))\n    @layout!  wdg vbox(hbox(:a, :b, :d), :c, _.display)\nendThe new widget can then be created with:myui(150)"
},

]}
