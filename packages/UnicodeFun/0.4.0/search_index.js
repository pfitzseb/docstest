var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnicodeFun-1",
    "page": "Readme",
    "title": "UnicodeFun",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: Coverage Status) (Image: codecov)unicode transformation library offering e.g. latex –> unicode:latexstring = \"\\\\alpha^2 \\\\cdot \\\\alpha^{2+3} \\\\equiv \\\\alpha^7\"\nto_latex(latexstring) == \"α² ⋅ α²⁺³ ≡ α⁷\"\nlatexstring = \"\\\\itA \\\\in \\\\bbR^{nxn}, \\\\bfv \\\\in \\\\bbR^n, \\\\lambda_i \\\\in \\\\bbR: \\\\itA\\\\bfv = \\\\lambda_i\\\\bfv\"\n==> \"𝐴 ∈ ℝⁿˣⁿ, 𝐯 ∈ ℝⁿ, λᵢ ∈ ℝ: 𝐴𝐯 = λᵢ𝐯\"\nlatexstring = \"\\\\bf{boldface} \\\\it{italic} \\\\bb{blackboard} \\\\cal{calligraphic} \\\\frak{fraktur} \\\\mono{monospace}\"\n==> \"𝐛𝐨𝐥𝐝𝐟𝐚𝐜𝐞 𝑖𝑡𝑎𝑙𝑖𝑐 𝕓𝕝𝕒𝕔𝕜𝕓𝕠𝕒𝕣𝕕 𝓬𝓪𝓵𝓵𝓲𝓰𝓻𝓪𝓹𝓱𝓲𝓬 𝔣𝔯𝔞𝔨𝔱𝔲𝔯 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎\"\nto_fraction_nl(\"α² ⋅ α²⁺³ ≡ α⁷\", \"ℝ: 𝐴𝐯 = λᵢ𝐯\")\n==>\"\nα̲²̲ ̲⋅̲ ̲α̲²̲⁺̲³̲ ̲≡̲ ̲α̲⁷̲\nℝ: 𝐴𝐯 = λᵢ𝐯\"Currently offered functions:to_superscript\nto_subscript\nto_fraction\nto_fraction_nl\nto_blackboardbold\nto_boldface\nto_italic\nto_caligraphic\nto_frakture\nto_latexLookup tables taken from: https://github.com/ypsu/latex-to-unicode/tree/master/data"
},

{
    "location": "autodocs/#UnicodeFun.to_fraction",
    "page": "Docstrings",
    "title": "UnicodeFun.to_fraction",
    "category": "function",
    "text": "Turns given numerator and denominator into a fraction: to_fraction(\"a-123\", 392) --> ᵃ⁻¹²³⁄₃₉₂  Restricted to characters that can be turned into superscript and subscript.  For a more general translation, see tofractionnl (newline)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeFun.to_fraction_nl",
    "page": "Docstrings",
    "title": "UnicodeFun.to_fraction_nl",
    "category": "function",
    "text": "Turns given numerator and denominator into a fraction with a newline: ``` to_fraction(\"α² ⋅ α²⁺³ ≡ α⁷\", \" ℝ: 𝐴𝐯 = λᵢ𝐯\") –>\n\nα̲²̲ ̲⋅̲ ̲α̲²̲⁺̲³̲ ̲≡̲ ̲α̲⁷̲  ℝ: 𝐴𝐯 = λᵢ𝐯  ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeFun.to_overline",
    "page": "Docstrings",
    "title": "UnicodeFun.to_overline",
    "category": "function",
    "text": "Overlines a text\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeFun.to_underline",
    "page": "Docstrings",
    "title": "UnicodeFun.to_underline",
    "category": "function",
    "text": "Underlines a text\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeFun.utf8_findnext",
    "page": "Docstrings",
    "title": "UnicodeFun.utf8_findnext",
    "category": "function",
    "text": "Base findnext doesn\'t handle utf8 strings correctly\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnicodeFun.UnicodeFunUnicodeFun.evalUnicodeFun.includeUnicodeFun.latex_symbol_mapUnicodeFun.print_modifierUnicodeFun.text_bb_mapUnicodeFun.text_bf_mapUnicodeFun.text_cal_mapUnicodeFun.text_frak_mapUnicodeFun.text_it_mapUnicodeFun.text_mono_mapUnicodeFun.to_blackboardboldUnicodeFun.to_boldfaceUnicodeFun.to_caligraphicUnicodeFun.to_fractionUnicodeFun.to_fraction_nlUnicodeFun.to_fraktureUnicodeFun.to_italicUnicodeFun.to_latexUnicodeFun.to_monoUnicodeFun.to_overlineUnicodeFun.to_rootUnicodeFun.to_subscriptUnicodeFun.to_superscriptUnicodeFun.to_underlineUnicodeFun.utf8_findnext"
},

]}
