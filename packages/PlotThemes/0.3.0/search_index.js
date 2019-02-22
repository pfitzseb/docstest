var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PlotThemes-1",
    "page": "Readme",
    "title": "PlotThemes",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Primary-author:-Patrick-Kofod-Mogensen-(@pkofod)-1",
    "page": "Readme",
    "title": "Primary author: Patrick Kofod Mogensen (@pkofod)",
    "category": "section",
    "text": "PlotThemes is a package to spice up the plots made with Plots.jl. To install:Pkg.add(\"PlotThemes\")"
},

{
    "location": "#Using-PlotThemes-1",
    "page": "Readme",
    "title": "Using PlotThemes",
    "category": "section",
    "text": "Currently the following themes are available::default\n:dark\n:ggplot2\n:juno\n:lime\n:orange\n:sand\n:solarized\n:solarized_light\n:wong\n:wong2When using Plots, a theme can be set using the theme function:using Plots\ntheme(thm::Symbol; kwargs...)theme accepts any Plots attribute as keyword argument and sets its value as default for subsequent plots.Themes can be previewed using Plots.showtheme(thm::Symbol):"
},

{
    "location": "#:default-1",
    "page": "Readme",
    "title": ":default",
    "category": "section",
    "text": "(Image: theme_default)"
},

{
    "location": "#:dark-1",
    "page": "Readme",
    "title": ":dark",
    "category": "section",
    "text": "(Image: theme_dark)"
},

{
    "location": "#:ggplot2-1",
    "page": "Readme",
    "title": ":ggplot2",
    "category": "section",
    "text": "(Image: theme_ggplot2)"
},

{
    "location": "#:juno-1",
    "page": "Readme",
    "title": ":juno",
    "category": "section",
    "text": "(Image: theme_juno)"
},

{
    "location": "#:lime-1",
    "page": "Readme",
    "title": ":lime",
    "category": "section",
    "text": "(Image: theme_lime)"
},

{
    "location": "#:orange-1",
    "page": "Readme",
    "title": ":orange",
    "category": "section",
    "text": "(Image: theme_orange)"
},

{
    "location": "#:sand-1",
    "page": "Readme",
    "title": ":sand",
    "category": "section",
    "text": "(Image: theme_sand)"
},

{
    "location": "#:solarized-1",
    "page": "Readme",
    "title": ":solarized",
    "category": "section",
    "text": "(Image: theme_solarized)"
},

{
    "location": "#:solarized_light-1",
    "page": "Readme",
    "title": ":solarized_light",
    "category": "section",
    "text": "(Image: theme_solarized_light)"
},

{
    "location": "#:wong-1",
    "page": "Readme",
    "title": ":wong",
    "category": "section",
    "text": "(Image: theme_wong)"
},

{
    "location": "#:wong2-1",
    "page": "Readme",
    "title": ":wong2",
    "category": "section",
    "text": "(Image: theme_wong2)"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "A theme specifies default values for different Plots attributes. At the moment these are typically colors, palettes and gradients, but any Plots attribute can be controlled by a theme in general. PRs for new themes very welcome! Adding a new theme (e.g. mytheme) is as easy as adding a new file (mytheme.jl) that contains at least the following line:_themes[:mytheme] = PlotTheme(; kwargs...)The keyword arguments can be any collection of Plots attributes."
},

{
    "location": "autodocs/#PlotThemes.palette",
    "page": "Docstrings",
    "title": "PlotThemes.palette",
    "category": "function",
    "text": "Get the palette of a PlotTheme\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PlotThemes.KWPlotThemes.PlotThemePlotThemes.PlotThemesPlotThemes.RGB255PlotThemes._255_to_1PlotThemes.__init__PlotThemes.__inits__PlotThemes._solarized_colorsPlotThemes._solarized_palettePlotThemes._themesPlotThemes.add_themePlotThemes.blackPlotThemes.dark_bgPlotThemes.dark_palettePlotThemes.evalPlotThemes.expand_palettePlotThemes.gradient_namePlotThemes.includePlotThemes.juno_bgPlotThemes.juno_palettePlotThemes.lime_palettePlotThemes.orange_palettePlotThemes.palettePlotThemes.sand_bgPlotThemes.sand_palettePlotThemes.wong_palette"
},

]}
