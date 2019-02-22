var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NamedColors-1",
    "page": "Readme",
    "title": "NamedColors",
    "category": "section",
    "text": "(Image: Build Status)(Image: Build status)(Image: Coverage Status)(Image: codecov.io)Colors.jl supports about 660 colors as named colorants. NamedColors.jl supports about 4,000.  Honestly, the named colors in Colors.jl, and/or its capacity to generate good palettes, are far more useful.But don\'t you want the quiet smugness the comes from knowing that your presentation is colored with XKCD\'s booger; or to really razzle dazzle them with Crayola\'s Razzle Dazzle Rose?Perhaps you enjoy taking standardization to the next level, with the well defined colours from the NBS, ranging from oliveblack to  vividgreenishblue.(Image: A plot showing a random sample of colors from each set)Code for the above chartAll the colors:(Image: Chart showing all colors sorted by Luv luminance)Link to full size PDFCode to generate the PDF"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "For most users, the main function you are interested in is the extensions to Color.jl\'s colorant macro. This does all the normal things that the colorant string macro did before. But if it fails to find a color using the ones Color.jl has defined, then it goes and searches the big list. If it still fails to find a named color, it will give suggestions for the color you meant — this is the easiest way to search for a color name.(Image: Image showing usage)Code for the above usage exampleFurther to this, every exported function has docstrings. So if in doubt try:?named_color"
},

{
    "location": "#Over-riding-color-index-1",
    "page": "Readme",
    "title": "Over-riding color index",
    "category": "section",
    "text": "The big dictionary of colors is defined by a const global ALL_COLORS, which has every color defined by this package. This is used as the default source of colors, by most functions, and by the colorant string macro. You can change this — to use a different, perhaps smaller, color list. Though it will not change already compiled uses of a colorant string macro. It also will not remove the webcolors that Color.jl defines.julia> using NamedColors\njulia> delete!.([ALL_COLORS], collect(keys(ALL_COLORS)))\njulia> merge!(ALL_COLORS, load_xkcd())\n\nDict{String,ColorTypes.RGB24} with 949 entries:\n  \"chocolate\"                  => RGB24{U8}(0.239,0.11,0.008)\n  \"light olive green\"          => RGB24{U8}(0.643,0.745,0.361)\n  \"blue green\"                 => RGB24{U8}(0.075,0.494,0.427)\n  \"copper\"                     => RGB24{U8}(0.714,0.388,0.145)\n  \"pale\"                       => RGB24{U8}(1.0,0.976,0.816)\n  \"clay brown\"                 => RGB24{U8}(0.698,0.443,0.239)\n  ...\n  \"turquoise green\"            => RGB24{U8}(0.016,0.957,0.537)\n  \"jade\"                       => RGB24{U8}(0.122,0.655,0.455)\n  \"dark sand\"                  => RGB24{U8}(0.659,0.561,0.349)\n  \"cadet blue\"                 => RGB24{U8}(0.306,0.455,0.588)\n  \"soft purple\"                => RGB24{U8}(0.651,0.435,0.71)\n  \"kermit green\"               => RGB24{U8}(0.361,0.698,0.0)"
},

{
    "location": "#Sources-1",
    "page": "Readme",
    "title": "Sources",
    "category": "section",
    "text": "X11 Standard Colors from the X-Windows system\nCSS3 Basic 16 Colors\nXKCD – The 949 as defined by several hundred thousand participants in the xkcd color name survey.\nResene  1383 colours from Resene\nNBS National Bureau of Statistics. 275 colors\nCrayola Crayons  not the full set, but 197 colors\nWinsor Newton Water Colors 300 colors, based on the paints of Winsor Newton"
},

{
    "location": "#Futher-Reading-1",
    "page": "Readme",
    "title": "Futher Reading",
    "category": "section",
    "text": "Naming colors is actually something experts exist in. This package is one for pragmatic use, color names are more complex than many-one lookup tables can provide. A lot of these colors come from the dictionaries collected by http://people.csail.mit.edu/jaffer/Color/Dictionaries"
},

{
    "location": "#Some-of-the-licenses-on-the-data-files-are-scary-1",
    "page": "Readme",
    "title": "Some of the licenses on the data files are scary",
    "category": "section",
    "text": "The code is MIT licensed. The datafiles are each individually lisenced.One should be aware that you can not copyright a color. You can trademark it, but that is a different thing, and not a concern here. Similarly you can trademark its name, but that is still not a concern. Trademarking protects agaist someone using your branding, as a attempt to imitate you.What is a concern is that you can copyright the lists as a whole. And most of the lists (except XKCD) have been copyrighted as such, but licensed for use. The lists I am distributing are being distributed according to those licenses. The scariest license is actually the CC-SSA from wikipedia for the Crayola color names.But in it is all fine, the licenses are on the data, not on the code. The code is not derived from the data – the package as a whole is a \"Collection\" incorperating several works. roughly speaking, CC-SSA imposes it\'s viral restrictions on Derivative Works, not on Collections (the license actually goes into some detail about this)."
},

{
    "location": "autodocs/#Colors.@colorant_str",
    "page": "Docstrings",
    "title": "Colors.@colorant_str",
    "category": "macro",
    "text": "Attempts to find a color to match any name you give it. First by using the methods from Color.jl\'s @colorant_str macro, to handle things like colorant\"#cd32cd\" Then if that fails, does a lookup in the big list of named colors. If that fails, then it provides suggestions for what color name you may have meant. As an user, you basically should just use this, without worrying if a color is defined. There are almost 3500 defined colors, and if you miss one, then the suggestions will help you out. (this is easier than trying to workout the name yourself)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_all_colors",
    "page": "Docstrings",
    "title": "NamedColors.load_all_colors",
    "category": "function",
    "text": "Loads a combined collection of all colors. Name clashes are resolved byt the load order. Which is defined, as from largest collection, to smalled collection. This is the initialised for the globel const ALL_COLORS, used by \"@colorant\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_crayola",
    "page": "Docstrings",
    "title": "NamedColors.load_crayola",
    "category": "function",
    "text": "Load the set of colors from Crayola Crayons. This is not the complete list, but it is extensive. These should be good for crayons\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_css3",
    "page": "Docstrings",
    "title": "NamedColors.load_css3",
    "category": "function",
    "text": "Load the W3C defined \"Basic Colors\". In theory these are as safe as it gets. These should be good everywhere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_nbs",
    "page": "Docstrings",
    "title": "NamedColors.load_nbs",
    "category": "function",
    "text": "Loads the NBS-ISCC color dictionary from\n\nKenneth L. Kelly and Deanne B. Judd.\n\"Color: Universal Language and Dictionary of Names\",\nNational Bureau of Standards,\nSpec. Publ. 440, Dec. 1976, 189 pages\n\nFeaturing the corrections by John Foster  to the orignal computer entry of David Mundie\n\nThis is suitable for surface colors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_resene",
    "page": "Docstrings",
    "title": "NamedColors.load_resene",
    "category": "function",
    "text": "load the color list from Resene Paints Ltd These colors are best used with paint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_winsor_newton",
    "page": "Docstrings",
    "title": "NamedColors.load_winsor_newton",
    "category": "function",
    "text": "Loads the Winsor-Newton Water-colours These should be good for surface colors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_x11",
    "page": "Docstrings",
    "title": "NamedColors.load_x11",
    "category": "function",
    "text": "Loads the ``Standard\'\' X11 color-lists These colours are good for monitors. To be explict, these colours are good for Paul Raveling\'s HP Monitor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_x11_style",
    "page": "Docstrings",
    "title": "NamedColors.load_x11_style",
    "category": "function",
    "text": "Loads an x11 style color list. Lines are of the form r g b name which may have spaces the r, g and b terms are numbers between 0 and 256 in decimal Lines starting with ! are comments and are skipped\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_xcms_colordb",
    "page": "Docstrings",
    "title": "NamedColors.load_xcms_colordb",
    "category": "function",
    "text": "Load a XCMS color database See: https://www.x.org/archive/X11R7.5/doc/man/man3/XcmsColor.3.html\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.load_xkcd",
    "page": "Docstrings",
    "title": "NamedColors.load_xkcd",
    "category": "function",
    "text": "Load the color list from the XKCD color survey. These colors are suitable for use with (modern) monitors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.named_color",
    "page": "Docstrings",
    "title": "NamedColors.named_color",
    "category": "function",
    "text": "Returns a color with the given name. If not found,a list of suggestions is provided.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.parse_CieLab",
    "page": "Docstrings",
    "title": "NamedColors.parse_CieLab",
    "category": "function",
    "text": "Parses strings in CIE lab, eg \"2.03/-0.03/9.89\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.parse_decimal256",
    "page": "Docstrings",
    "title": "NamedColors.parse_decimal256",
    "category": "function",
    "text": "Parses three strings that are integers between 0-255, and converts to color\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.parse_hexcode",
    "page": "Docstrings",
    "title": "NamedColors.parse_hexcode",
    "category": "function",
    "text": "Parses as string of the form #RRGGBB eg \"#32CD32\" (limegreen) into a color\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedColors.similarly_named_colors",
    "page": "Docstrings",
    "title": "NamedColors.similarly_named_colors",
    "category": "function",
    "text": "Returns list of similarly named colors, from the color_list\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NamedColors.@colorant_strNamedColors.ALL_COLORSNamedColors.NamedColorsNamedColors.UnknownColorErrorNamedColors.datafileNamedColors.evalNamedColors.includeNamedColors.load_all_colorsNamedColors.load_crayolaNamedColors.load_css3NamedColors.load_nbsNamedColors.load_reseneNamedColors.load_winsor_newtonNamedColors.load_x11NamedColors.load_x11_styleNamedColors.load_xcms_colordbNamedColors.load_xkcdNamedColors.named_colorNamedColors.parse_CieLabNamedColors.parse_decimal256NamedColors.parse_hexcodeNamedColors.similarly_named_colors"
},

]}
