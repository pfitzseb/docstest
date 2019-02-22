var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: License: MIT) (Image: Build Status) (Image: codecov.io) (Image: GitHub contributors) (Image: GitHub issues) (Image: GitHub version)(Image: ForTheBadge built-with-science)"
},

{
    "location": "#PeriodicTable.jl-1",
    "page": "Readme",
    "title": "PeriodicTable.jl",
    "category": "section",
    "text": "A very simple package for accessing elements in the Periodic Table! :fire:"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Since PeriodicTable is registered in METADATA.jl, you can directly install it like,julia> Pkg.add(\"PeriodicTable\")"
},

{
    "location": "#Update-1",
    "page": "Readme",
    "title": "Update",
    "category": "section",
    "text": "julia> Pkg.update(\"PeriodicTable\")"
},

{
    "location": "#How-it-works?-1",
    "page": "Readme",
    "title": "How it works?",
    "category": "section",
    "text": "PeriodicTable.jl provides a Julia interface to a small database of element properties for all of the elements in the periodic table.    In particularusing PeriodicTableexports a global variable called elements, which is a collection of Element data structures.  You can look up elements by name (case-insensitive) via elements[\"oxygen\"], by symbol via elements[:O], or by number via elements[8], for example.Each element has fields name, appearance, atomic_mass, boil, category, color, density, discovered_by, melt, molar_heat, named_by, number, period, phase, source, spectral_img, summary, symbol, xpos, ypos, shells.All physical quantities are unitful.The data is pretty-printed when you look up an element in the Julia REPL. For example:julia> elements[\"oxygen\"]\nOxygen (O), number 8:\n        category: diatomic nonmetal\n     atomic mass: 15.999 u\n         density: 1.429 g/cm³\n   melting point: 54.36 K\n   boiling point: 90.188 K\n           phase: Gas\n          shells: [2, 6]\ne⁻-configuration: 1s² 2s² 2p⁴\n         summary: Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.\n   discovered by: Carl Wilhelm Scheele\n        named by: Antoine Lavoisier\n          source: https://en.wikipedia.org/wiki/Oxygen\n  spectral image: https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg\n Alternatively, you may want to get a list of elements,julia> elements[1:4]\n4-element Array{PeriodicTable.Element,1}:\n Element(Hydrogen) \n Element(Helium)   \n Element(Lithium)  \n Element(Beryllium)\n ```\n\n### View the Periodic Table!julia julia> elements Elements(…119 elements…): H                                                  He Li Be                               B  C  N  O  F  Ne Na Mg                               Al Si P  S  Cl Ar K  Ca Sc Ti V  Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y  Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I  Xe Cs Ba    Hf Ta W  Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra    Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og Uue                                                          La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu           Ac Th Pa U  Np Pu Am Cm Bk Cf Es Fm Md No Lr ```"
},

{
    "location": "#Data-by-1",
    "page": "Readme",
    "title": "Data by",
    "category": "section",
    "text": "Periodic-Table-JSON"
},

{
    "location": "#Developed-together-with-1",
    "page": "Readme",
    "title": "Developed together with",
    "category": "section",
    "text": "Steven G. Johnson\nJacob Wikmark\nCarsten Bauer"
},

{
    "location": "#Facing-issues?-:scream:-1",
    "page": "Readme",
    "title": "Facing issues? :scream:",
    "category": "section",
    "text": "Open a PR with the detailed expaination of the issue\nReach me out here"
},

{
    "location": "autodocs/#PeriodicTable.Element",
    "page": "Docstrings",
    "title": "PeriodicTable.Element",
    "category": "type",
    "text": "Element composite type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PeriodicTable.Elements",
    "page": "Docstrings",
    "title": "PeriodicTable.Elements",
    "category": "type",
    "text": "Elements composite type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PeriodicTable.PeriodicTable",
    "page": "Docstrings",
    "title": "PeriodicTable.PeriodicTable",
    "category": "module",
    "text": "The PeriodicTable module exports an elements variable that stores data (of type Element) on every element in the periodic table.\n\nThe data can be looked up by atomic number via elements[n], by name (case-insensitive) via e.g. elements[\"oxygen\"], or by symbol via e.g. elements[:O].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PeriodicTable.ElementPeriodicTable.ElementsPeriodicTable.PeriodicTablePeriodicTable._elements_dataPeriodicTable.elementsPeriodicTable.evalPeriodicTable.includePeriodicTable.ispresentPeriodicTable.printpresentPeriodicTable.printpresenthtml"
},

]}
