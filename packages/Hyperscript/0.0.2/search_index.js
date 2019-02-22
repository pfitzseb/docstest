var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hyperscript-1",
    "page": "Readme",
    "title": "Hyperscript",
    "category": "section",
    "text": "Hyperscript is a Julia package for representing HTML and SVG expressions using native Julia syntax.Pkg.clone(\"https://github.com/yurivish/Hyperscript.jl\")\nusing HyperscriptHyperscript introduces the m function for creating markup nodes:m(\"div\", class=\"entry\",\n    m(\"h1\", \"An Important Announcement\"))Nodes are validated as they are created. Hyperscript checks for valid tag names, and tag-attribute pairs:m(\"snoopy\") # ERROR: snoopy is not a valid HTML or SVG tag\nm(\"div\", mood=\"facetious\") # ERROR: mood is not a valid attribute nameNodes can be used as a templates:const div = m(\"div\")\nconst h1 = m(\"h1\")\ndiv(class=\"entry\", h1(\"An Important Announcement\"))Dot syntax is supported for setting class attributes:const div = m(\"div\")\nconst h1 = m(\"h1\")\ndiv.entry(h1(\"An Important Announcement\"))Chained dot calls turn into multiple classes:m(\"div\").header.entryThe convenience macro @tags can be used to quickly declare common tags:@tags div h1\nconst entry = div.entry\nentry(h1(\"An Important Announcement\"))Arrays, tuples, and generators are recursively flattened, linearizing nested structures for display:@tags div h1\nconst entry = div.entry\ndiv(entry.([\"$n Fast $n Furious\" for n in 1:10])) # this joke is © Glen ChiacchieriSome attribute names, such as those with hyphens, can\'t be written as Julia identifiers. For those you can use either camelCase or squishcase and Hyperscript will convert them for you:# These are both valid:\nm(\"meta\", httpEquiv=\"refresh\")\nm(\"meta\", httpequiv=\"refresh\")If you\'d like to turn off validation you should use m_novalidate, which is just like m except that it doesn\'t validate or perform attribute conversion:import Hyperscript # Note import, not using\nconst m = Hyperscript.m_novalidate\n\nm(\"snoopy\") # <snoopy></snoopy>\nm(\"div\", mood=\"facetious\") # <div mood=\"facetious\"></div>To validate more stringently against just HTML or just SVG, you can similarly use Hyperscript.m_html or Hyperscript.m_svg."
},

]}
