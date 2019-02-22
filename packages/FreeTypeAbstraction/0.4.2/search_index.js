var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FreeTypeAbstraction-1",
    "page": "Readme",
    "title": "FreeTypeAbstraction",
    "category": "section",
    "text": "Draw text into a Matrix.\nusing FreeTypeAbstraction\n\n# load a font\nface = newface(\"hack_regular.ttf\")\n\n# render a character\nimg, metric = renderface(face, \'C\')\n\n# render a string into an existing matrix\nmyarray = zeros(UInt8,100,100)\nrenderstring!(myarray, \"hello\", face, (10,10), 90, 10, halign=:hright)credits to @aaalexandrov from whom most of the code stems."
},

{
    "location": "autodocs/#FreeTypeAbstraction.renderstring!",
    "page": "Docstrings",
    "title": "FreeTypeAbstraction.renderstring!",
    "category": "function",
    "text": "renderstring!(img::AbstractMatrix, str::String, face, pixelsize, y0, x0;\nfcolor=one_or_typemax(T), bcolor=zero(T), halign=:hleft, valign=:vbaseline) -> Matrix\n\nRender str into img using the font face of size pixelsize at coordinates y0,x0.\n\nArguments\n\ny0,x0: origin is in upper left with positive y going down\nfcolor: foreground color; typemax(T) for T<:Integer, otherwise one(T)\nbcolor: background color; set to nothing for transparent\nhalign: :hleft, :hcenter, or :hright\nvalign: :vtop, :vcenter, :vbaseline, or :vbottom\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FreeTypeAbstraction.FREE_FONT_LIBRARYFreeTypeAbstraction.FTFontFreeTypeAbstraction.FontExtentFreeTypeAbstraction.FreeTypeAbstractionFreeTypeAbstraction.VecFreeTypeAbstraction.__init__FreeTypeAbstraction._font_pathsFreeTypeAbstraction.add_recursiveFreeTypeAbstraction.evalFreeTypeAbstraction.family_nameFreeTypeAbstraction.findfontFreeTypeAbstraction.fontpathsFreeTypeAbstraction.freetype_can_readFreeTypeAbstraction.freetype_extensionsFreeTypeAbstraction.ft_doneFreeTypeAbstraction.ft_initFreeTypeAbstraction.getextentFreeTypeAbstraction.glyphbitmapFreeTypeAbstraction.includeFreeTypeAbstraction.kerningFreeTypeAbstraction.loadcharFreeTypeAbstraction.loaded_facesFreeTypeAbstraction.match_fontFreeTypeAbstraction.newfaceFreeTypeAbstraction.one_or_typemaxFreeTypeAbstraction.renderfaceFreeTypeAbstraction.renderstring!FreeTypeAbstraction.setpixelsizeFreeTypeAbstraction.style_nameFreeTypeAbstraction.try_loadFreeTypeAbstraction.valid_fontpaths"
},

]}
