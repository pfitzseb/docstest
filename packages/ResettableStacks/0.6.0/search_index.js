var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ResettableStacks-1",
    "page": "Readme",
    "title": "ResettableStacks",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: ResettableStacks) (Image: ResettableStacks)A ResettableStack is a stack implementation which has a reset! function which will \"reset\" the stack, allowing it to write over its previous data. This allows you to reset the stack while avoiding garbage collection which can greatly improve performance in certain use cases. Every FULL_RESET_COUNT resets, it does a full reset, which is useful if the stack got very large for some reason and it no longer needs to be that large (while minimizing garbage control costs)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, simply use:Pkg.add(\"ResettableStacks\")\nusing ResettableStacksFor the latest version, checkout master via:Pkg.checkout(\"ResettableStacks\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ResettableStacks\nS = ResettableStack{}(Tuple{Float64,Float64,Float64})\n\npush!(S,(0.5,0.4,0.3))\npush!(S,(0.5,0.4,0.4))\nreset!(S)\npush!(S,(0.5,0.4,0.3))\ntup = pop!(S)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ResettableStacks.FULL_RESET_COUNTResettableStacks.ResettableStackResettableStacks.ResettableStacksResettableStacks.copyat_or_push!ResettableStacks.evalResettableStacks.includeResettableStacks.isinplaceResettableStacks.reset!ResettableStacks.safecopy"
},

]}
