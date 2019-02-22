var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Showoff-1",
    "page": "Readme",
    "title": "Showoff",
    "category": "section",
    "text": "(Image: Showoff) (Image: Showoff) (Image: Build Status) (Image: Coverage Status)Showoff provides an interface for consistently formatting an array of n things, e.g. numbers, dates, unitful values. It\'s used in Gadfly to label axes and keys.It defines a function called showoff that takes an AbstractArray of some type and returns an array of strings of the same length.If you want your type to look nice when plotted, just define a showoff function. Here\'s an example.using Showoff\n\nstruct Percent\n    value::Float64\nend\n\nfunction Showoff.showoff(xs::AbstractArray{Percent})\n    return [string(x, \"%\") for x in showoff([x.value for x in xs])]\nendNow we (and more importantly, Gadfly) can print percentages like:map(println, showoff([Percent(100 * rand()) for _ in 1:20]))60.505943%\n73.255897%\n97.477079%\n43.330976%\n69.023165%\n52.580184%\n13.011683%\n22.718034%\n93.843776%\n29.875979%\n64.110999%\n91.203653%\n91.534161%\n80.684188%\n81.674362%\n11.530227%\n30.498260%\n38.876922%\n35.444115%\n8.857208%Notice, that compared to show, these all have the same number of digits trailing the ., and look nice when right-aligned.When no specialized showoff is defined, it falls back on the show function.This package was originally written by Daniel C. Jones."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Showoff.@grisu_ccallShowoff.ShowoffShowoff.concrete_maximumShowoff.concrete_minimumShowoff.evalShowoff.format_fixedShowoff.format_fixed_scientificShowoff.grisuShowoff.includeShowoff.plain_precision_heuristicShowoff.scientific_precision_heuristicShowoff.showoffShowoff.superscript_numerals"
},

]}
