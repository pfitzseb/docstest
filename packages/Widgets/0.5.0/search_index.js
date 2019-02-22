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
    "text": "(Image: Build Status) (Image: ) (Image: codecov.io)This package allows to create custom widgets using the JuliaGizmos packages and should be used in combination with the Interact package. Documentation is available here as part of the Interact docs."
},

{
    "location": "autodocs/#Widgets.@auto",
    "page": "Docstrings",
    "title": "Widgets.@auto",
    "category": "macro",
    "text": "@auto(expr)\n\nMacro to automatize widget creation. Transforms x = rhs into x = widget(rhs, label = \"x\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.@layout",
    "page": "Docstrings",
    "title": "Widgets.@layout",
    "category": "macro",
    "text": "@layout(d, x)\n\nApply the expression x to the widget d, replacing e.g. symbol :s with the corresponding subwidget d[:s] In this context, _ refers to the whole widget. To use actual symbols, escape them with ^, as in ^(:a). @layout can be combined with @map to have the layout update interactively as function of some widget.\n\nExamples\n\njulia> using Interact\n\njulia> cpt = OrderedDict(:vertical => Observable(true), :b => slider(1:100), :c => button());\n\njulia> t = Widget{:test}(cpt, output = observe(cpt[:b]));\n\njulia> Widgets.@layout t vbox(:b, CSSUtil.vskip(1em), :c);\n\njulia> Widgets.@layout t Widgets.@map &(:vertical) ? vbox(:b, CSSUtil.vskip(1em), :c) : hbox(:b, CSSUtil.hskip(1em), :c);\n\nUse @layout! to set the widget layout in place:\n\njulia> @layout! t Widgets.@map &(:vertical) ? vbox(:b, CSSUtil.vskip(1em), :c) : hbox(:b, CSSUtil.hskip(1em), :c);\n\n@layout(x)\n\nCurried version of @layout(d, x): anonymous function mapping d to @layout(d, x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.@layout!",
    "page": "Docstrings",
    "title": "Widgets.@layout!",
    "category": "macro",
    "text": "@layout!(d, x)\n\nSet d.layout to match the result of Widgets.@layout(x). See Widgets.@layout for more information.\n\nExamples\n\njulia> using Interact\n\njulia> t = Widget{:test}(OrderedDict(:b => slider(1:100), :c => button()));\n\njulia> @layout! t hbox(:b, CSSUtil.hskip(1em), :c);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.@manipulate",
    "page": "Docstrings",
    "title": "Widgets.@manipulate",
    "category": "macro",
    "text": "@manipulate expr\n\nThe @manipulate macro lets you play with any expression using widgets. expr needs to be a for loop. The for loop variable are converted to widgets using the widget function (ranges become slider, lists of options become togglebuttons, etc...). The for loop body is displayed beneath the widgets and automatically updated as soon as the widgets change value.\n\nUse throttle = df to only update the output after a small time interval dt (useful if the update is costly as it prevents multiple updates when moving for example a slider).\n\nExamples\n\nusing Colors\n\n@manipulate for r = 0:.05:1, g = 0:.05:1, b = 0:.05:1\n    HTML(string(\"<div style=\'color:#\", hex(RGB(r,g,b)), \"\'>Color me</div>\"))\nend\n\n@manipulate throttle = 0.1 for r = 0:.05:1, g = 0:.05:1, b = 0:.05:1\n    HTML(string(\"<div style=\'color:#\", hex(RGB(r,g,b)), \"\'>Color me</div>\"))\nend\n\n@layout! can be used to adjust the layout of a manipulate block:\n\nusing Interact\n\nui = @manipulate throttle = 0.1 for r = 0:.05:1, g = 0:.05:1, b = 0:.05:1\n    HTML(string(\"<div style=\'color:#\", hex(RGB(r,g,b)), \"\'>Color me</div>\"))\nend\n@layout! ui dom\"div\"(observe(_), vskip(2em), :r, :g, :b)\nui\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.@nodeps",
    "page": "Docstrings",
    "title": "Widgets.@nodeps",
    "category": "macro",
    "text": "@nodeps(expr)\n\nMacro to remove need to depend on package X that defines a recipe to use it in one\'s own recipe. For example, InteractBase defines dropwdown recipe. To use dropdown in a recipe in a package, without depending on InteractBase, wrap the dropdown call in the @nodeps macro:\n\nfunction myrecipe(i)\n    label = \"My recipe\"\n    wdg = Widgets.@nodeps dropdown(i)\n    Widget([\"label\" => label, \"dropdown\" => wdg])\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.layout",
    "page": "Docstrings",
    "title": "Widgets.layout",
    "category": "function",
    "text": "layout(f, w::Widget)\n\nCreate a new Widget that is a copy of w and whose layout is the layout of w composed with the function f.\n\nExamples\n\nusing InteractBase, CSSUtil, Widgets\nw = button(\"OK\")\nWidgets.layout(w) do t\n    hbox(\"Click here\", t)\nend\n\n\n\n\n\nlayout(w::Widget)\n\nReturn the function that will be used to determine the layout of widget w.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.node",
    "page": "Docstrings",
    "title": "Widgets.node",
    "category": "function",
    "text": "node(w::Widget)\n\nReturn primary node for widget w\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.onchange",
    "page": "Docstrings",
    "title": "Widgets.onchange",
    "category": "function",
    "text": "onchange(w::AbstractWidget, change = w[:changes])\n\nReturn a widget that\'s identical to w but only updates on change. For a slider it corresponds to releasing it and for a textbox it corresponds to losing focus.\n\nExamples\n\nsld = slider(1:100) |> onchange # update on release\ntxt = textbox(\"Write here\") |> onchange # update on losing focuse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.scope",
    "page": "Docstrings",
    "title": "Widgets.scope",
    "category": "function",
    "text": "scope(w::Widget)\n\nReturn primary scope for widget w if it exists, nothing otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.scope!",
    "page": "Docstrings",
    "title": "Widgets.scope!",
    "category": "function",
    "text": "scope!(w::Widget, sc)\n\nsets up a primary scope sc for widget w\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Widgets.widget",
    "page": "Docstrings",
    "title": "Widgets.widget",
    "category": "function",
    "text": "widget(args...; kwargs...)\n\nAutomatically convert Julia types into appropriate widgets. kwargs are passed to the more specific widget function.\n\nExamples\n\nmap(display, [\n    widget(1:10),                 # Slider\n    widget(false),                # Checkbox\n    widget(\"text\"),               # Textbox\n    widget(1.1),                  # Spinbox\n    widget([:on, :off]),          # Toggle Buttons\n    widget(Dict(\"π\" => float(π), \"τ\" => 2π)),\n    widget(colorant\"red\"),        # Color picker\n    widget(Dates.today()),        # Date picker\n    widget(Dates.Time()),         # Time picker\n    ]);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Widgets.@autoWidgets.@layoutWidgets.@layout!Widgets.@manipulateWidgets.@nodepsWidgets.AbstractBackendWidgets.AbstractWidgetWidgets.DummyBackendWidgets.WidgetWidgets.WidgetsWidgets._getindexWidgets.accordionWidgets.alertWidgets.auto_helper!Widgets.autocompleteWidgets.backendsWidgets.buttonWidgets.checkboxWidgets.checkboxesWidgets.colorpickerWidgets.componentWidgets.componentsWidgets.confirmWidgets.datepickerWidgets.defaultlayoutWidgets.divWidgets.dropdownWidgets.entryWidgets.evalWidgets.extract_nameWidgets.filepickerWidgets.get_backendWidgets.highlightWidgets.includeWidgets.inputWidgets.isijuliaWidgets.isparametersWidgets.isquotenodeWidgets.iswidgettupleWidgets.latexWidgets.layoutWidgets.layout!Widgets.layout!_helperWidgets.layout_helperWidgets.make_widgetWidgets.manipulatelayoutWidgets.map_blockWidgets.maskWidgets.name2stringWidgets.nodeWidgets.notificationsWidgets.onchangeWidgets.parse_layout_callWidgets.parse_layout_call!Widgets.quotenodeWidgets.radiobuttonsWidgets.rangepickerWidgets.rangesliderWidgets.replace_wdgWidgets.reset_backend!Widgets.scopeWidgets.scope!Widgets.set_backend!Widgets.slap_design!Widgets.sliderWidgets.spinboxWidgets.symbolsWidgets.tabsWidgets.tabulatorWidgets.textareaWidgets.textboxWidgets.timepickerWidgets.toggleWidgets.togglebuttonsWidgets.togglecontentWidgets.togglesWidgets.tooltip!Widgets.triggeredbyWidgets.triggeredby!Widgets.wdglabelWidgets.widgetWidgets.widgettype"
},

]}
