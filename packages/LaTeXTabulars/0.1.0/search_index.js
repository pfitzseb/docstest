var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LaTeXTabulars-1",
    "page": "Readme",
    "title": "LaTeXTabulars",
    "category": "section",
    "text": "(Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Write tabular data from Julia in LaTeX format.This is a very thin wrapper, basically for avoiding some loops and repeatedly used strings. It assumes that you know how the LaTeX tabular environment works, and you have formatted the cells to strings if you want anything fancy like rounding or alignment on the decimal dot.This is how it works:using LaTeXTabulars\nusing LaTeXStrings               # not a dependency, but works nicely\nlatex_tabular(\"/tmp/table.tex\",\n              Tabular(\"lcl\"),\n              [Rule(:top),\n               [L\"\\alpha\", L\"\\beta\", \"sum\"],\n               Rule(:mid),\n               [1, 2, 3],\n               Rule(),           # a nice \\hline to make it ugly\n               [4.0 \"5\" \"six\";   # a matrix\n                7 8 9],\n               CMidRule(1, 2),\n               [MultiColumn(2, :c, \"centered\")], # ragged!\n               Rule(:bottom)])will write something like\\begin{tabular}{lcl}\n\\toprule\n$\\alpha$ & $\\beta$ & sum \\\\\n\\midrule\n1 & 2 & 3 \\\\\n\\hline\n4.0 & 5 & six \\\\\n7 & 8 & 9 \\\\\n\\cmidrule{1-2}\n\\multicolumn{2}{c}{centered} \\\\\n\\bottomrule\n\\end{tabular}to /tmp/table.tex.Note that the position specifier lcl is not checked for valid syntax or consitency with the contents, just emitted as is, allowing the use of dcolumn or similar, and the number of cells in each line is not checked for consistency. This means that the usual LaTeX rules apply: fewer cells than position specifiers gives you a ragged table, more cells and LaTeX will complain about having to change & to \\\\.See ?latex_tabular for the documentation of the syntax, and the unit tests for examples.Rule types in booktabs are supported. Vertical rules of any kind are not explicitly supported and it would be difficult to convince me to add them. The documentation of booktabs should explain why. That said, if you insist, you can use a cell like \\vline text.The other tabular type currently implemented is LongTable. The code is generic, so other tabular-like types can be easily added, just open an issue."
},

{
    "location": "autodocs/#LaTeXTabulars.CMidRule",
    "page": "Docstrings",
    "title": "LaTeXTabulars.CMidRule",
    "category": "type",
    "text": "CMidRule([wd], [trim], left, right)\n\nWill be printed as \\cmidrule[wd](trim)[left-right]. When wd or trim is nothing, it is omitted. Use with the booktabs LaTeX package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXTabulars.MultiColumn",
    "page": "Docstrings",
    "title": "LaTeXTabulars.MultiColumn",
    "category": "type",
    "text": "MultiColumn(n, pos, cell)\n\nFor \\multicolumn{n}{pos}{cell}. Use the symbols :l, :c, :r for pos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXTabulars.Rule",
    "page": "Docstrings",
    "title": "LaTeXTabulars.Rule",
    "category": "type",
    "text": "Rule()\nRule(kind)\n\n\nHorizontal rule. The kind of the rule is specified by a symbol, which will generally be printed as \\KINDrule for rules in booktabs, eg Rule(:top) prints \\toprule. To obtain a \\hline, use Rule{:h}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXTabulars.Tabular",
    "page": "Docstrings",
    "title": "LaTeXTabulars.Tabular",
    "category": "type",
    "text": "Tabular(cols)\n\nFor the LaTeX environment \\begin{tabular}{cols} ... \\end{tabular}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXTabulars.latex_cell",
    "page": "Docstrings",
    "title": "LaTeXTabulars.latex_cell",
    "category": "function",
    "text": "latex_cell(io, cell)\n\n\nPrint a the contents of cell to io as LaTeX.\n\n!!! NOTE\n\nMethods are defined for some specific types, but if you want full control\n(eg rounding), use an `<: AbstractString`, eg `String` or `LaTeXString`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXTabulars.latex_tabular",
    "page": "Docstrings",
    "title": "LaTeXTabulars.latex_tabular",
    "category": "function",
    "text": "latex_tabular(io, t, lines)\n\n\nPrint lines to io as a LaTeX using the given environment.\n\nEach line in lines can be\n\na rule-like object, eg [Rule] or [CMidRule],\nan iterable (eg AbstractVector) of cells,\na Tuple, which is treated as multiple lines (“splat” in place), which is useful for functions that generate lines with associated rules, or multiple CMidRules,\na matrix, each row of which is treated as a line.\n\nSee latex_cell for the kinds of cell supported (particularly MultiColumn, but for full formatting control, use an String or LaTeXString for cells.\n\n\n\n\n\nlatex_tabular(?, t, lines)\n\n\nLaTeX output as a string.\n\n\n\n\n\nlatex_tabular(filename, t, lines)\n\n\nWrite a tabular-like LaTeX environment to filename, which is overwritten if it already exists.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LaTeXTabulars.CMidRuleLaTeXTabulars.LaTeXTabularsLaTeXTabulars.LongTableLaTeXTabulars.MultiColumnLaTeXTabulars.RuleLaTeXTabulars.TabularLaTeXTabulars.TabularLikeLaTeXTabulars.evalLaTeXTabulars.includeLaTeXTabulars.latex_cellLaTeXTabulars.latex_env_beginLaTeXTabulars.latex_env_endLaTeXTabulars.latex_lineLaTeXTabulars.latex_tabular"
},

]}
