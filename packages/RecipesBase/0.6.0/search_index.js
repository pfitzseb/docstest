var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RecipesBase-1",
    "page": "Readme",
    "title": "RecipesBase",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Author:-Thomas-Breloff-(@tbreloff)-1",
    "page": "Readme",
    "title": "Author: Thomas Breloff (@tbreloff)",
    "category": "section",
    "text": "This package implements handy macros @recipe and @series which will define a custom transformation and attach attributes for user types.  Its design is an attempt to simplify and generalize the summary and display of types and data from external packages.  With no extra dependencies and minimal code, package authors can describe visualization routines that can be used as components in more complex visualizations.This functionality is primarily geared to turning user types and settings into the data and attributes that describe a Plots visualization, though it could be used for other purposes as well. Plots has extensive machinery to uniquely take advantage of the simplified recipe description you define.  See the Plots documentation on recipes for more information.The @recipe macro will process a function definition, use --> commands to define attributes, and pass the return value through for further processing (likely by Plots.jl)."
},

{
    "location": "#Why-should-I-care-about-this-package?-1",
    "page": "Readme",
    "title": "Why should I care about this package?",
    "category": "section",
    "text": "Many packages have custom types and custom data.  There is usually specialized structure, and useful methods of visualizing that structure and data.  This package solves the difficult problem of how to build generic visualizations of user-defined data types, without adding bulky dependencies on complex graphics packages.This package is as lightweight as possible.  It exports two macros, and defines only a few internal methods. It has zero dependencies.However, although it is lightweight, it enables a lot.  The entirety of the Plots framework becomes available to any package implementing a recipe.  This means that complex plots and subplots can be built with uber-flexibility using custom combinations of data types.  Some examples of applications:Distributions: overlayed density plots for non-normal fitted distributions.\nDataFrames: \"Grammar of Graphics\"-style inputs using symbols.\nDeep Learning: frameworks for visualization of neural network states and tracking of internal calculations.\nGraphs: flexible, interactive graphs with easily customizable colors, etc.\nSymbolic frameworks: sample from complex symbolic distributions.Really there\'s very little that couldn\'t be mapped to a useful visualization. I challenge you to create the pictures that are worth a thousand words.For more information about Plots, see the docs, and be sure to reference the supported keywords. For additional examples of recipes in the wild, see PlotRecipes. Ask questions on gitter or in the issues."
},

{
    "location": "#Hello-world-1",
    "page": "Readme",
    "title": "Hello world",
    "category": "section",
    "text": "This will build a spiky surface:using Plots; gr()\nstruct T end\n@recipe f(::T) = rand(100,100)\nsurface(T())(Image: )"
},

{
    "location": "#A-real-example-1",
    "page": "Readme",
    "title": "A real example",
    "category": "section",
    "text": "using RecipesBase\n\n# Our user-defined data type\nstruct T end\n\n# This is all we define.  It uses a familiar signature, but strips it apart\n# in order to add a custom definition to the internal method `RecipesBase.apply_recipe`\n@recipe function plot(::T, n = 1; customcolor = :green)\n    markershape --> :auto        # if markershape is unset, make it :auto\n    markercolor :=  customcolor  # force markercolor to be customcolor\n    xrotation   --> 45           # if xrotation is unset, make it 45\n    zrotation   --> 90           # if zrotation is unset, make it 90\n    rand(10,n)                   # return the arguments (input data) for the next recipe\nend\n\n# ----------------------------\n\n# Plots will be the ultimate consumer of our recipe in this example\nusing Plots\ngr()\n\n# This call will implicitly call `RecipesBase.apply_recipe` as part of the Plots\n# processing pipeline (see the Pipeline section of the Plots documentation).\n#   It will plot 5 line plots (a 5-column matrix is returned from the recipe).\n#   All will have black circles:\n#       - user override for markershape: :c == :circle\n#       - customcolor overridden to :black, and markercolor is forced to be customcolor\n#   If markershape is an unsupported keyword, the call will error.\n#   By default, a warning will be shown for an unsupported keyword.\n#   This will be suppressed for zrotation (:quiet flag).\nplot(T(), 5; customcolor = :black, shape=:c)(Image: )In this example, we see a lot of the machinery in action.  We create a new type T, which we will use for dispatch, and an optional argument n, which will be used to determine the number of series to display.  User-defined keyword arguments are passed through, and the --> command can be trailed by flags:quiet:   Suppress unsupported keyword warnings\nrequire: Error if keyword is unsupported\nforce:   Don\'t allow user override for this keyword"
},

{
    "location": "#Series-1",
    "page": "Readme",
    "title": "Series",
    "category": "section",
    "text": "For complex visualizations, it can be beneficial to create many series inside a single recipe.  The @series macro will make a copy of the attribute dictionary d, and add a new RecipeData object to the returned list.  See the case studies for more details."
},

{
    "location": "#Generated-code-1",
    "page": "Readme",
    "title": "Generated code",
    "category": "section",
    "text": "For the example above, the following code is generated.  In it, you can see the managing of the scope of the keyword args, creation of a definition for RecipesBase.apply_recipe, setting attributes, and creating the list of RecipeData objects:function RecipesBase.apply_recipe(d::Dict{Symbol,Any},::T,n=1)\n    if RecipesBase._debug_recipes[1]\n        println(\"apply_recipe args: \",Any[:(::T),:(n=1)])\n    end\n    begin\n        customcolor = get!(d,:customcolor,:green)\n    end\n    series_list = RecipesBase.RecipeData[]\n    func_return = begin\n            get!(d,:markershape,:auto)\n            d[:markercolor] = customcolor\n            get!(d,:xrotation,45)\n            get!(d,:zrotation,90)\n            rand(10,n)\n        end\n    if func_return != nothing\n        push!(series_list,RecipesBase.RecipeData(d,RecipesBase.wrap_tuple(func_return)))\n    end\n    begin\n        RecipesBase.is_key_supported(:customcolor) || delete!(d,:customcolor)\n    end\n    series_list\nend"
},

{
    "location": "#A-humble-request-1",
    "page": "Readme",
    "title": "A humble request",
    "category": "section",
    "text": "If you build a recipe for your package, please let me know!  I\'d love to compile both a gallery and a listing of user-defined recipes, as well as the packages that are available for Plots visualizations."
},

{
    "location": "autodocs/#RecipesBase.@recipe",
    "page": "Docstrings",
    "title": "RecipesBase.@recipe",
    "category": "macro",
    "text": "This handy macro will process a function definition, replace --> commands, and then add a new version of RecipesBase.apply_recipe for dispatching on the arguments.\n\nThis functionality is primarily geared to turning user types and settings into the data and attributes that describe a Plots.jl visualization.\n\nSet attributes using the --> command, and return a comma separated list of arguments that should replace the current arguments.\n\nAn example:\n\nusing RecipesBase\n\n# Our custom type that we want to display\ntype T end\n\n@recipe function plot{N<:Integer}(t::T, n::N = 1; customcolor = :green)\n    markershape --> :auto, :require\n    markercolor --> customcolor, :force\n    xrotation --> 5\n    zrotation --> 6, :quiet\n    rand(10,n)\nend\n\n# ---------------------\n\n# Plots will be the ultimate consumer of our recipe in this example\nusing Plots; gr()\n\n# This call will implicitly call `RecipesBase.apply_recipe` as part of the Plots\n# processing pipeline (see the Pipeline section of the Plots documentation).\n# It will plot 5 line plots, all with black circles for markers.\n# The markershape argument must be supported, and the zrotation argument\'s warning\n# will be suppressed.  The user can override all arguments except markercolor.\nplot(T(), 5; customcolor = :black, shape=:c)\n\nIn this example, we see lots of the machinery in action.  We create a new type T which we will use for dispatch, and an optional argument n, which will be used to determine the number of series to display.  User-defined keyword arguments are passed through, and the --> command can be trailed by flags:\n\nquiet:   Suppress unsupported keyword warnings\nrequire: Error if keyword is unsupported\nforce:   Don\'t allow user override for this keyword\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecipesBase.@series",
    "page": "Docstrings",
    "title": "RecipesBase.@series",
    "category": "macro",
    "text": "Meant to be used inside a recipe to add additional RecipeData objects to the list:\n\n@recipe function f(::T)\n    # everything get this setting\n    linecolor --> :red\n\n    @series begin\n        # this setting is only for this series\n        fillcolor := :green\n\n        # return the args, just like in recipes\n        rand(10)\n    end\n\n    # this is the main series... though it can be skipped by returning nothing.\n    # note: a @series block returns nothing\n    rand(100)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecipesBase.@userplot",
    "page": "Docstrings",
    "title": "RecipesBase.@userplot",
    "category": "macro",
    "text": "You can easily define your own plotting recipes with convenience methods:\n\n@userplot GroupHist\n\n@recipe function f(gh::GroupHist)\n    # set some attributes, add some series, using gh.args as input\nend\n# now you can plot like:\ngrouphist(rand(1000,4))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecipesBase.recipetype",
    "page": "Docstrings",
    "title": "RecipesBase.recipetype",
    "category": "function",
    "text": "recipetype(s, args...)\n\nUse this function to refer to type recipes by their symbol, without taking a dependency.\n\nExample\n\nimport RecipesBase: recipetype\nrecipetype(:groupedbar, 1:10, rand(10, 2))\n\ninstead of\n\nimport StatPlots: GroupedBar\nGroupedBar((1:10, rand(10, 2)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RecipesBase.@recipeRecipesBase.@seriesRecipesBase.@shorthandsRecipesBase.@userplotRecipesBase.AbstractBackendRecipesBase.AbstractLayoutRecipesBase.AbstractPlotRecipesBase.RecipeDataRecipesBase.RecipesBaseRecipesBase._debug_recipesRecipesBase._equals_symbolRecipesBase._is_arrow_tupleRecipesBase._userplotRecipesBase.animateRecipesBase.apply_recipeRecipesBase.create_kw_bodyRecipesBase.debugRecipesBase.evalRecipesBase.get_function_defRecipesBase.group_as_matrixRecipesBase.includeRecipesBase.is_key_supportedRecipesBase.plotRecipesBase.plot!RecipesBase.process_recipe_body!RecipesBase.recipetypeRecipesBase.to_symbolRecipesBase.wrap_tuple"
},

]}
